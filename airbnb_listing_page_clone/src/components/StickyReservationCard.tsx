import React, { useState } from 'react';
import { Star, ChevronDown, Flag } from 'lucide-react';
import { ListingData } from '../types';

interface StickyReservationCardProps {
  listing: ListingData;
  checkIn: string;
  checkOut: string;
  guests: number;
  nights: number;
  baseSubtotal: number;
  weeklyDiscount: number;
  totalPrice: number;
  onCheckInChange: (val: string) => void;
  onCheckOutChange: (val: string) => void;
  onGuestsChange: (val: number) => void;
  onReserve: () => void;
  onToast?: (msg: string) => void;
}

export const StickyReservationCard: React.FC<StickyReservationCardProps> = ({
  listing,
  checkIn,
  checkOut,
  guests,
  nights,
  baseSubtotal,
  weeklyDiscount,
  totalPrice,
  onCheckInChange,
  onCheckOutChange,
  onGuestsChange,
  onReserve,
  onToast
}) => {
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);

  return (
    <div className="hidden lg:block lg:col-span-1">
      <div className="sticky top-28 bg-white border border-gray-200 rounded-2xl p-6 shadow-xl space-y-6">
        
        {/* Header Price & Rating */}
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-2xl font-extrabold text-[#222222]">
              {listing.currencySymbol}{listing.pricePerNight.toLocaleString('en-IN')}
            </span>
            <span className="text-gray-500 text-sm font-normal"> / night</span>
          </div>

          <div className="flex items-center gap-1 text-xs font-semibold text-gray-800">
            <Star size={13} className="fill-current text-[#222222]" />
            <span>{listing.rating.toFixed(2)}</span>
            <span className="text-gray-400">·</span>
            <a href="#reviews" className="underline text-gray-500 hover:text-black">
              {listing.reviewCount} reviews
            </a>
          </div>
        </div>

        {/* Date & Guest Input Box */}
        <div className="border border-gray-400 rounded-xl overflow-hidden bg-white">
          <div className="grid grid-cols-2 border-b border-gray-400">
            <div className="p-2.5 border-r border-gray-400">
              <label className="block text-[9px] font-extrabold tracking-wider uppercase text-gray-800">CHECK-IN</label>
              <input 
                type="date" 
                value={checkIn}
                onChange={(e) => onCheckInChange(e.target.value)}
                className="w-full text-xs font-medium focus:outline-none bg-transparent cursor-pointer"
              />
            </div>
            <div className="p-2.5">
              <label className="block text-[9px] font-extrabold tracking-wider uppercase text-gray-800">CHECKOUT</label>
              <input 
                type="date" 
                value={checkOut}
                onChange={(e) => onCheckOutChange(e.target.value)}
                className="w-full text-xs font-medium focus:outline-none bg-transparent cursor-pointer"
              />
            </div>
          </div>

          {/* Guest Selector Trigger */}
          <div 
            className="p-3 relative cursor-pointer flex items-center justify-between hover:bg-gray-50 transition"
            onClick={() => setShowGuestDropdown(!showGuestDropdown)}
          >
            <div>
              <label className="block text-[9px] font-extrabold tracking-wider uppercase text-gray-800">GUESTS</label>
              <span className="text-xs font-semibold text-gray-800">
                {guests} {guests === 1 ? 'guest' : 'guests'}
              </span>
            </div>
            <ChevronDown size={18} className={`text-gray-700 transition-transform ${showGuestDropdown ? 'rotate-180' : ''}`} />
          </div>

          {/* Guest Dropdown Modal */}
          {showGuestDropdown && (
            <div className="p-4 border-t border-gray-200 bg-white space-y-3">
              <div className="flex items-center justify-between text-sm">
                <div>
                  <div className="font-bold text-gray-900">Guests</div>
                  <div className="text-xs text-gray-500">
                    Maximum {listing.guestCapacity.maxGuests} guests
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    disabled={guests <= 1}
                    onClick={(e) => {
                      e.stopPropagation();
                      onGuestsChange(guests - 1);
                    }}
                    className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed hover:border-black font-bold transition"
                  >
                    -
                  </button>
                  <span className="font-bold text-sm text-gray-900">{guests}</span>
                  <button 
                    disabled={guests >= listing.guestCapacity.maxGuests}
                    onClick={(e) => {
                      e.stopPropagation();
                      onGuestsChange(guests + 1);
                    }}
                    className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed hover:border-black font-bold transition"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Reserve CTA Button */}
        <button 
          onClick={onReserve}
          className="w-full py-3.5 px-4 bg-gradient-to-r from-[#FF385C] via-[#E61E4D] to-[#D70466] text-white font-bold rounded-xl text-center text-base shadow-md hover:opacity-95 active:scale-[0.98] transition duration-200 cursor-pointer"
        >
          Reserve
        </button>

        <p className="text-center text-xs text-gray-500 font-medium">You won't be charged yet</p>

        {/* Itemized Price Breakdown */}
        <div className="space-y-3 text-sm text-gray-700 pt-2 border-t border-gray-200">
          <div className="flex justify-between">
            <span className="underline">
              {listing.currencySymbol}{listing.pricePerNight.toLocaleString('en-IN')} x {nights} nights
            </span>
            <span>{listing.currencySymbol}{baseSubtotal.toLocaleString('en-IN')}</span>
          </div>

          {weeklyDiscount > 0 && (
            <div className="flex justify-between text-emerald-700">
              <span className="underline">Weekly discount</span>
              <span>
                -{listing.currencySymbol}{weeklyDiscount.toLocaleString('en-IN')}
              </span>
            </div>
          )}

          <div className="flex justify-between">
            <span className="underline">Cleaning fee</span>
            <span>{listing.currencySymbol}{listing.cleaningFee.toLocaleString('en-IN')}</span>
          </div>

          <div className="flex justify-between">
            <span className="underline">Airbnb service fee</span>
            <span>{listing.currencySymbol}{listing.serviceFee.toLocaleString('en-IN')}</span>
          </div>
        </div>

        {/* Total Price */}
        <div className="pt-4 border-t border-gray-200 flex justify-between font-extrabold text-base text-gray-900">
          <span>Total before taxes</span>
          <span>{listing.currencySymbol}{totalPrice.toLocaleString('en-IN')}</span>
        </div>

        {/* Report Link */}
        <div className="flex justify-center pt-2">
          <button
            type="button"
            onClick={() =>
              onToast
                ? onToast('Thanks — we received your report (demo)')
                : undefined
            }
            className="flex items-center gap-2 text-xs font-semibold text-gray-500 underline hover:text-black cursor-pointer"
          >
            <Flag size={13} />
            <span>Report this listing</span>
          </button>
        </div>

      </div>
    </div>
  );
};
