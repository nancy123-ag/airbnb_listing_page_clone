import React, { useState } from 'react';
import { Key, Award, Calendar, ChevronRight, ShieldCheck, type LucideIcon } from 'lucide-react';
import { ListingData } from '../types';

interface ListingMainInfoProps {
  listing: ListingData;
  onOpenHostModal: () => void;
}

const HIGHLIGHT_ICONS: Record<string, LucideIcon> = {
  Key,
  Award,
  Calendar,
  ShieldCheck
};

export const ListingMainInfo: React.FC<ListingMainInfoProps> = ({
  listing,
  onOpenHostModal
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAirCover, setShowAirCover] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between pb-6 border-b border-gray-200">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#222222]">
            Entire condo in {listing.city}, {listing.country}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-1 font-normal">
            {listing.guestCapacity.maxGuests} guests · {listing.guestCapacity.bedrooms} bedroom ·{' '}
            {listing.guestCapacity.beds} bed · {listing.guestCapacity.baths} bath
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenHostModal}
          className="relative cursor-pointer group flex-shrink-0"
          aria-label={`Contact host ${listing.host.name}`}
        >
          <img
            src={listing.host.avatar}
            alt={listing.host.name}
            className="w-14 h-14 rounded-full object-cover border border-gray-200 group-hover:scale-105 transition-transform"
          />
          {listing.host.isSuperhost && (
            <div className="absolute -bottom-1 -right-1 bg-[#FF385C] text-white p-1 rounded-full shadow-md">
              <Award size={12} />
            </div>
          )}
        </button>
      </div>

      <div className="p-5 border border-gray-200 rounded-2xl bg-gradient-to-r from-gray-50 via-white to-gray-50 flex items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="text-center font-bold text-[#222222]">
            <div className="text-2xl font-extrabold">{listing.rating.toFixed(2)}</div>
            <div className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">
              {listing.reviewCount} reviews
            </div>
          </div>
          <div className="border-r border-gray-300 h-10" />
          <div>
            <h3 className="font-bold text-base text-[#222222]">Guest favorite</h3>
            <p className="text-xs sm:text-sm text-gray-600">
              One of the most loved homes on Airbnb based on ratings, reviews, and reliability.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6 pb-6 border-b border-gray-200">
        {listing.highlights.map((item) => {
          const Icon = HIGHLIGHT_ICONS[item.icon] || Award;
          return (
            <div key={item.title} className="flex gap-4 items-start">
              <Icon size={26} className="mt-0.5 text-gray-800 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-base text-[#222222]">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pb-6 border-b border-gray-200 space-y-2">
        <div className="text-2xl font-black text-[#FF385C] tracking-wider flex items-center gap-1">
          air<span className="text-black">cover</span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          Every booking includes free protection from Host cancellations, listing inaccuracies, and
          other issues like trouble checking in.
        </p>
        <button
          type="button"
          onClick={() => setShowAirCover((v) => !v)}
          className="font-semibold underline text-sm pt-1 hover:text-black cursor-pointer"
        >
          {showAirCover ? 'Show less' : 'Learn more'}
        </button>
        {showAirCover && (
          <p className="text-sm text-gray-600 leading-relaxed pt-1 animate-fade-in">
            AirCover for Guests includes booking protection, check-in guarantee, Get-What-You-Booked
            guarantee, and 24-hour safety line support for qualifying stays.
          </p>
        )}
      </div>

      <div className="pb-6 border-b border-gray-200 space-y-3">
        <h3 className="font-bold text-lg text-[#222222]">About this space</h3>
        <p
          className={`text-gray-800 whitespace-pre-line leading-relaxed text-base ${
            !isExpanded ? 'line-clamp-4' : ''
          }`}
        >
          {listing.description}
        </p>
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="font-semibold underline text-sm flex items-center gap-1 hover:text-black cursor-pointer pt-1"
        >
          <span>{isExpanded ? 'Show less' : 'Show more'}</span>
          <ChevronRight
            size={16}
            className={`transition-transform ${isExpanded ? '-rotate-90' : ''}`}
          />
        </button>
      </div>
    </div>
  );
};
