import React, { useState } from 'react';
import { Star, Heart } from 'lucide-react';

const SIMILAR_LISTINGS = [
  {
    id: 'sim-1',
    title: 'CondoStay with Private Pool',
    rating: 4.92,
    location: 'Candolim, Goa',
    price: 4200,
    photo:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sim-2',
    title: '1BHK Pool View Apartment',
    rating: 4.88,
    location: 'Candolim, Goa',
    price: 3400,
    photo:
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sim-3',
    title: 'Luxury Villa in Candolim',
    rating: 4.97,
    location: 'Candolim Beach Road',
    price: 5900,
    photo:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sim-4',
    title: 'Modern Studio near Beach',
    rating: 4.85,
    location: 'Calangute-Candolim',
    price: 2950,
    photo:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sim-5',
    title: 'Cozy Beachside Retreat',
    rating: 4.91,
    location: 'Candolim, Goa',
    price: 3800,
    photo:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80'
  }
];

export const SimilarListings: React.FC<{ onToast?: (msg: string) => void }> = ({
  onToast
}) => {
  const [savedIds, setSavedIds] = useState<Record<string, boolean>>({});

  const toggleSave = (id: string) => {
    setSavedIds((prev) => {
      const next = !prev[id];
      onToast?.(next ? 'Saved to wishlist' : 'Removed from wishlist');
      return { ...prev, [id]: next };
    });
  };

  return (
    <div className="pb-10 border-b border-gray-200 space-y-6">
      <h3 className="font-bold text-2xl text-[#222222]">Explore other options in Candolim</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {SIMILAR_LISTINGS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onToast?.(`Opening "${item.title}" (demo listing)`)}
            className="group cursor-pointer space-y-2 text-left"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-200">
              <img
                src={item.photo}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span
                role="button"
                tabIndex={0}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSave(item.id);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleSave(item.id);
                  }
                }}
                className="absolute top-3 right-3 text-white drop-shadow-md hover:scale-110 transition p-1 cursor-pointer"
                aria-label="Save listing"
              >
                <Heart
                  size={20}
                  className={
                    savedIds[item.id]
                      ? 'fill-[#FF385C] text-[#FF385C]'
                      : 'fill-black/30 text-white'
                  }
                />
              </span>
            </div>

            <div className="flex items-center justify-between text-sm font-bold text-[#222222]">
              <span className="truncate pr-2">{item.title}</span>
              <span className="flex items-center gap-1 font-semibold">
                <Star size={13} className="fill-current text-[#222222]" />
                {item.rating.toFixed(2)}
              </span>
            </div>

            <p className="text-xs text-gray-500 font-medium">{item.location}</p>

            <div className="text-sm font-extrabold text-[#222222]">
              ₹{item.price.toLocaleString('en-IN')}{' '}
              <span className="text-xs font-normal text-gray-500">night</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
