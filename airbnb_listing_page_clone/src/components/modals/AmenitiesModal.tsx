import React from 'react';
import { X, Check } from 'lucide-react';
import { ListingData } from '../../types';

interface AmenitiesModalProps {
  listing: ListingData;
  onClose: () => void;
}

export const AmenitiesModal: React.FC<AmenitiesModalProps> = ({
  listing,
  onClose
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col shadow-2xl animate-fade-in">
        
        {/* Modal Sticky Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-white">
          <h3 className="font-extrabold text-lg text-gray-900">What this place offers</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition">
            <X size={18} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-8">
          {listing.amenityCategories.map((cat, idx) => (
            <div key={idx} className="space-y-3">
              <h4 className="font-extrabold text-base text-gray-900 border-b border-gray-100 pb-2">{cat.category}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {cat.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                    <Check size={16} className="text-emerald-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
