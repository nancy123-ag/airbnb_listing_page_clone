import React from 'react';
import { Star, Share2, Heart, Award } from 'lucide-react';
import { ListingData } from '../types';

interface ListingHeaderProps {
  listing: ListingData;
  onOpenShareModal: () => void;
  onOpenSaveModal: () => void;
  isSaved: boolean;
}

export const ListingHeader: React.FC<ListingHeaderProps> = ({
  listing,
  onOpenShareModal,
  onOpenSaveModal,
  isSaved
}) => {
  return (
    <section className="mb-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-[#222222] mb-2.5 leading-snug">
        {listing.title}
      </h1>

      <div className="flex flex-wrap items-center justify-between text-sm font-medium gap-3">
        
        {/* Rating, Reviews, Superhost, Location */}
        <div className="flex items-center gap-2 flex-wrap text-gray-800">
          <span className="flex items-center gap-1 font-semibold">
            <Star size={16} className="fill-current text-[#222222]" />
            <span>{listing.rating.toFixed(2)}</span>
          </span>
          <span>·</span>
          <a href="#reviews" className="underline cursor-pointer font-semibold hover:text-black">
            {listing.reviewCount} reviews
          </a>
          <span>·</span>
          {listing.isSuperhost && (
            <>
              <span className="flex items-center gap-1 font-medium">
                <Award size={15} className="text-[#222222]" /> Superhost
              </span>
              <span>·</span>
            </>
          )}
          <a href="#map" className="underline cursor-pointer font-semibold text-gray-800 hover:text-black">
            {listing.location}
          </a>
        </div>

        {/* Action Buttons: Share & Save */}
        <div className="flex items-center gap-2 text-sm font-semibold">
          <button 
            onClick={onOpenShareModal}
            className="flex items-center gap-2 py-2 px-3 hover:bg-gray-100 rounded-lg underline transition cursor-pointer"
          >
            <Share2 size={16} />
            <span>Share</span>
          </button>

          <button 
            onClick={onOpenSaveModal}
            className="flex items-center gap-2 py-2 px-3 hover:bg-gray-100 rounded-lg underline transition cursor-pointer"
          >
            <Heart size={16} className={isSaved ? "fill-[#FF385C] text-[#FF385C]" : ""} />
            <span>{isSaved ? "Saved" : "Save"}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
