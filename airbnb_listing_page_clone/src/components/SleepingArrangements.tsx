import React from 'react';
import { ListingData } from '../types';

interface SleepingArrangementsProps {
  listing: ListingData;
}

export const SleepingArrangements: React.FC<SleepingArrangementsProps> = ({ listing }) => {
  const bedroomPhoto = listing.photos.find((p) => p.category === 'Bedroom 1');
  const livingPhoto = listing.photos.find((p) => p.category === 'Living room');

  const cards = [
    {
      title: 'Bedroom 1',
      subtitle: `${listing.guestCapacity.beds} queen bed`,
      image: bedroomPhoto?.url
    },
    {
      title: 'Living room',
      subtitle: '1 sofa',
      image: livingPhoto?.url
    }
  ];

  return (
    <div className="pb-8 border-b border-gray-200">
      <h3 className="font-bold text-xl text-[#222222] mb-5">Where you&apos;ll sleep</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
        {cards.map((card) => (
          <div
            key={card.title}
            className="border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-400 transition bg-white shadow-xs"
          >
            {card.image ? (
              <div className="aspect-[16/10] bg-gray-100 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ) : null}
            <div className="p-5 space-y-1">
              <h4 className="font-bold text-base text-[#222222]">{card.title}</h4>
              <p className="text-sm text-gray-500">{card.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
