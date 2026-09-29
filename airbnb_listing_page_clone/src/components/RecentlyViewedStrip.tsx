import React, { useEffect, useState } from 'react';
import { ListingData } from '../types';

const STORAGE_KEY = 'airbnb-clone-recently-viewed';

interface RecentItem {
  id: string;
  title: string;
  location: string;
  image: string;
  price: number;
  currencySymbol: string;
  viewedAt: number;
}

/** Persist current listing and show a small recently-viewed strip. */
export const RecentlyViewedStrip: React.FC<{ listing: ListingData }> = ({ listing }) => {
  const [items, setItems] = useState<RecentItem[]>([]);

  useEffect(() => {
    const entry: RecentItem = {
      id: listing.id,
      title: listing.title,
      location: listing.location,
      image: listing.photos[0]?.url ?? '',
      price: listing.pricePerNight,
      currencySymbol: listing.currencySymbol,
      viewedAt: Date.now()
    };

    let prev: RecentItem[] = [];
    try {
      prev = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') as RecentItem[];
    } catch {
      prev = [];
    }

    const next = [entry, ...prev.filter((p) => p.id !== entry.id)].slice(0, 4);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setItems(next);
  }, [listing]);

  if (items.length <= 1) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 border-t border-gray-200">
      <h3 className="font-bold text-xl text-[#222222] mb-5">Recently viewed</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <article
            key={item.id}
            className="group cursor-default"
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 mb-2">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-sm font-semibold text-[#222222] line-clamp-1">{item.title}</p>
            <p className="text-xs text-gray-500">{item.location}</p>
            <p className="text-sm font-semibold mt-1">
              {item.currencySymbol}{item.price.toLocaleString('en-IN')}
              <span className="font-normal text-gray-500"> / night</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
