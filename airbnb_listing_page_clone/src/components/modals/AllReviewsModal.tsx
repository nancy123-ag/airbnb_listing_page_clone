import React, { useState, useMemo } from 'react';
import { X, Star, Search } from 'lucide-react';
import { ListingData } from '../../types';

interface AllReviewsModalProps {
  listing: ListingData;
  onClose: () => void;
}

export const AllReviewsModal: React.FC<AllReviewsModalProps> = ({
  listing,
  onClose
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

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl animate-fade-in">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-white sticky top-0">
          <div className="flex items-center gap-2">
            <Star size={20} className="fill-current text-[#222222]" />
            <h3 className="font-extrabold text-xl text-gray-900">
              {listing.rating.toFixed(2)} · {listing.reviewCount} reviews
            </h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition">
            <X size={18} />
          </button>
        </div>

        {/* Search & Filters Bar */}
        <div className="p-6 border-b border-gray-100 bg-gray-50/50 space-y-3">
          <div className="relative">
            <Search size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search all reviews..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-black font-medium"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {['All', 'Cleanliness', 'Location', 'Check-in', 'Accuracy', 'Communication', 'Value'].map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                  selectedTag === tag 
                    ? 'bg-black text-white' 
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews List */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((rev) => (
              <div key={rev.id} className="pb-6 border-b border-gray-100 space-y-3">
                <div className="flex items-center gap-3">
                  <img src={rev.avatar} alt={rev.author} className="w-10 h-10 rounded-full object-cover border border-gray-200" />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">{rev.author}</h4>
                    <p className="text-xs text-gray-500 font-medium">{rev.location || 'India'} · {rev.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs font-semibold text-black">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={i < Math.round(rev.rating) ? 'fill-current' : 'text-gray-300'}
                    />
                  ))}
                  <span className="text-gray-400 font-normal ml-1">({rev.tag})</span>
                </div>

                <p className="text-sm text-gray-800 leading-relaxed font-normal">
                  {rev.text}
                </p>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500 italic py-8 text-center">No reviews found matching your filter criteria.</p>
          )}
        </div>

      </div>
    </div>
  );
};
