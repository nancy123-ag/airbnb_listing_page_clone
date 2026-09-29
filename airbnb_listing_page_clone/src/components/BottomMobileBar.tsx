import React from 'react';
import { ListingData } from '../types';

interface BottomMobileBarProps {
  listing: ListingData;
  checkIn: string;
  checkOut: string;
  nights: number;
  totalPrice: number;
  onReserve: () => void;
  onScrollToCalendar: () => void;
}

export const BottomMobileBar: React.FC<BottomMobileBarProps> = ({
  listing,
  checkIn,
  checkOut,
  nights,
  onReserve,
  onScrollToCalendar
}) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 py-3 px-5 flex items-center justify-between shadow-2xl">
      <div>
        <div className="flex items-baseline gap-1">
          <span className="text-lg font-bold text-[#222222]">
            {listing.currencySymbol}
            {listing.pricePerNight.toLocaleString('en-IN')}
          </span>
          <span className="text-xs text-gray-500 font-normal"> / night</span>
        </div>
        <button
          type="button"
          onClick={onScrollToCalendar}
          className="text-xs font-semibold underline text-gray-700 cursor-pointer hover:text-black"
        >
          {nights} nights · {checkIn || 'Add dates'}
          {checkOut ? ` – ${checkOut}` : ''}
        </button>
      </div>

      <button
        type="button"
        onClick={onReserve}
        className="py-3 px-6 bg-gradient-to-r from-[#FF385C] to-[#E61E4D] text-white font-bold rounded-xl text-sm shadow-md active:scale-95 transition cursor-pointer"
      >
        Reserve
      </button>
    </div>
  );
};
