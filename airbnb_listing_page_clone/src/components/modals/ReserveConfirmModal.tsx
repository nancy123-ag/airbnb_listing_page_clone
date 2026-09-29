import React from 'react';
import { Check } from 'lucide-react';
import { ListingData } from '../../types';

interface ReserveConfirmModalProps {
  listing: ListingData;
  checkIn: string;
  checkOut: string;
  guests: number;
  nights: number;
  totalPrice: number;
  onClose: () => void;
  onConfirm: () => void;
}

export const ReserveConfirmModal: React.FC<ReserveConfirmModalProps> = ({
  listing,
  checkIn,
  checkOut,
  guests,
  nights,
  totalPrice,
  onClose,
  onConfirm
}) => {
  const formatDate = (iso: string) => {
    if (!iso) return 'Add date';
    return new Date(iso + 'T12:00:00').toLocaleDateString('en-IN', {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Confirm reservation"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl animate-fade-in space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FF385C]/10 flex items-center justify-center">
            <Check size={20} className="text-[#FF385C]" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-[#222222]">Confirm reservation</h3>
            <p className="text-sm text-gray-500">You will not be charged yet</p>
          </div>
        </div>

        <div className="flex gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-200">
          <img
            src={listing.photos[0].url}
            alt=""
            className="w-16 h-16 rounded-xl object-cover"
          />
          <div className="min-w-0">
            <p className="font-semibold text-sm text-[#222222] line-clamp-2">{listing.title}</p>
            <p className="text-xs text-gray-500 mt-1">{listing.location}</p>
          </div>
        </div>

        <dl className="space-y-2 text-sm">
          <div className="flex justify-between">
            <dt className="text-gray-500">Check-in</dt>
            <dd className="font-semibold text-[#222222]">{formatDate(checkIn)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-500">Checkout</dt>
            <dd className="font-semibold text-[#222222]">{formatDate(checkOut)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-500">Guests</dt>
            <dd className="font-semibold text-[#222222]">{guests}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-500">Nights</dt>
            <dd className="font-semibold text-[#222222]">{nights}</dd>
          </div>
          <div className="flex justify-between pt-2 border-t border-gray-200 text-base">
            <dt className="font-bold text-[#222222]">Total before taxes</dt>
            <dd className="font-bold text-[#222222]">
              {listing.currencySymbol}
              {totalPrice.toLocaleString('en-IN')}
            </dd>
          </div>
        </dl>

        <div className="flex gap-3 pt-1">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-3 rounded-xl border border-gray-900 font-semibold text-sm hover:bg-gray-50 cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#FF385C] to-[#E61E4D] text-white font-bold text-sm hover:opacity-95 cursor-pointer"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
