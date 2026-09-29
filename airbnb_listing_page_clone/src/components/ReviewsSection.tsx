import React, { useState, useMemo } from 'react';
import { Star, Search, Sparkles, CheckCircle, Key, MessageSquare, MapPin, Tag } from 'lucide-react';
import { ListingData } from '../types';

interface ReviewsSectionProps {
  listing: ListingData;
  onOpenAllReviewsModal: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  listing,
  onOpenAllReviewsModal
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const filteredReviews = useMemo(() => {
    return listing.reviews.filter(rev => {
      const matchesTag = selectedTag === 'All' || rev.tag === selectedTag;
      const matchesSearch = 
        rev.text.toLowerCase().includes(searchTerm.toLowerCase()) || 
        rev.author.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesTag && matchesSearch;
    });
  }, [listing.reviews, selectedTag, searchTerm]);

  const categories = [
    { label: "Cleanliness", score: listing.categoryRatings.cleanliness, icon: <Sparkles size={18} /> },
    { label: "Accuracy", score: listing.categoryRatings.accuracy, icon: <CheckCircle size={18} /> },
    { label: "Check-in", score: listing.categoryRatings.checkIn, icon: <Key size={18} /> },
    { label: "Communication", score: listing.categoryRatings.communication, icon: <MessageSquare size={18} /> },
    { label: "Location", score: listing.categoryRatings.location, icon: <MapPin size={18} /> },
    { label: "Value", score: listing.categoryRatings.value, icon: <Tag size={18} /> }
  ];

  return (
    <div id="reviews" className="pb-10 border-b border-gray-200 space-y-8">
      
      {/* Big Guest Favorite Rating Header */}
      <div className="flex flex-col items-center justify-center text-center space-y-2 py-4">
        <div className="text-4xl font-extrabold text-[#222222] flex items-center gap-2">
          <Star size={28} className="fill-current" /> {listing.rating.toFixed(2)}
        </div>
        <h3 className="font-extrabold text-xl text-[#222222]">Guest favorite</h3>
        <p className="text-sm text-gray-600 max-w-md">
          This home is in the top 10% of eligible listings based on ratings, reviews, and reliability
        </p>
      </div>

      {/* 6 Category Progress Bars Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 pt-2">
        {categories.map((cat, idx) => (
          <div key={idx} className="space-y-2 p-3 bg-gray-50 border border-gray-200 rounded-2xl">
            <div className="flex items-center justify-between text-xs text-gray-600 font-semibold">
              <span className="flex items-center gap-1">{cat.icon} {cat.label}</span>
            </div>
            <div className="text-base font-extrabold text-[#222222]">{cat.score.toFixed(1)}</div>
            <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-black h-full rounded-full" 
                style={{ width: `${(cat.score / 5.0) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Filter Pills & Search Input */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {['All', 'Cleanliness', 'Location', 'Check-in', 'Accuracy'].map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                selectedTag === tag 
                  ? 'bg-black text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="relative max-w-md">
          <Search size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search reviews..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-black transition"
          />
        </div>
      </div>

      {/* Review Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((rev) => (
            <div key={rev.id} className="space-y-3 p-5 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 transition">
              <div className="flex items-center gap-3">
                <img src={rev.avatar} alt={rev.author} className="w-11 h-11 rounded-full object-cover border border-gray-200" />
                <div>
                  <h4 className="font-bold text-sm text-[#222222]">{rev.author}</h4>
                  <p className="text-xs text-gray-500 font-medium">
                    {rev.location || 'India'} · {rev.yearsOnAirbnb || '2 years on Airbnb'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold">
                <div className="flex text-black">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      className={i < Math.round(rev.rating) ? 'fill-current' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-gray-400">·</span>
                <span className="text-gray-600 font-medium">{rev.date}</span>
              </div>

              <p className="text-sm text-gray-800 leading-relaxed font-normal">
                {rev.text}
              </p>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500 italic col-span-2 py-4">
            No reviews found matching "{searchTerm}".
          </p>
        )}
      </div>

      <button 
        onClick={onOpenAllReviewsModal}
        className="py-3 px-6 border border-gray-900 rounded-xl text-sm font-bold text-[#222222] hover:bg-gray-100 transition active:scale-95 cursor-pointer"
      >
        Show all {listing.reviewCount} reviews
      </button>

    </div>
  );
};
