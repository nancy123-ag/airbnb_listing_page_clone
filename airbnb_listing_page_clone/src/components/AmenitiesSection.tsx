import React from 'react';
import {
  Utensils,
  Car,
  Waves,
  Wifi,
  Briefcase,
  Tv,
  Wind,
  Sun,
  ShieldCheck,
  Shirt
} from 'lucide-react';
import { ListingData } from '../types';

interface AmenitiesSectionProps {
  listing: ListingData;
  onOpenAmenitiesModal: () => void;
}

const AMENITY_ICONS: Record<string, React.ReactNode> = {
  Kitchen: <Utensils size={22} className="text-gray-800" />,
  'Free parking on premises': <Car size={22} className="text-gray-800" />,
  Pool: <Waves size={22} className="text-gray-800" />,
  'Wifi (100 Mbps)': <Wifi size={22} className="text-gray-800" />,
  'Dedicated workspace': <Briefcase size={22} className="text-gray-800" />,
  'TV with standard cable': <Tv size={22} className="text-gray-800" />,
  'Air conditioning': <Wind size={22} className="text-gray-800" />,
  'Patio or balcony': <Sun size={22} className="text-gray-800" />,
  'Security cameras on property': <ShieldCheck size={22} className="text-gray-800" />,
  'Washing machine': <Shirt size={22} className="text-gray-800" />
};

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({
  listing,
  onOpenAmenitiesModal
}) => {
  const popularAmenities = listing.amenityCategories[0].items;
  const totalAmenities = listing.amenityCategories.reduce(
    (sum, cat) => sum + cat.items.length,
    0
  );

  return (
    <div className="pb-8 border-b border-gray-200 space-y-5">
      <h3 className="font-bold text-xl text-[#222222]">What this place offers</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
        {popularAmenities.map((item) => (
          <div key={item} className="flex items-center gap-4 text-gray-800 font-medium text-base">
            <div className="w-8 flex justify-center">
              {AMENITY_ICONS[item] || <Utensils size={22} className="text-gray-800" />}
            </div>
            <span>{item}</span>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onOpenAmenitiesModal}
        className="mt-2 py-3 px-6 border border-gray-900 rounded-xl text-sm font-bold text-[#222222] hover:bg-gray-100 transition active:scale-95 cursor-pointer"
      >
        Show all {totalAmenities} amenities
      </button>
    </div>
  );
};
