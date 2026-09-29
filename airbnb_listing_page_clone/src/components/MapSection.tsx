import React, { useState } from 'react';
import { Home, Compass, MapPin } from 'lucide-react';
import { ListingData } from '../types';

interface MapSectionProps {
  listing: ListingData;
}

export const MapSection: React.FC<MapSectionProps> = ({ listing }) => {
  const [mapMode, setMapMode] = useState<'map' | 'street'>('map');

  return (
    <div id="map" className="pb-10 border-b border-gray-200 space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-bold text-xl text-[#222222]">Where you'll be</h3>
          <p className="text-sm text-gray-600 mt-0.5 font-medium">{listing.location}</p>
        </div>

        <div className="flex items-center gap-1 text-xs font-semibold bg-gray-100 p-1 rounded-xl border border-gray-200">
          <button 
            onClick={() => setMapMode('map')}
            className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${mapMode === 'map' ? 'bg-white shadow-xs text-black font-bold' : 'text-gray-600'}`}
          >
            Map View
          </button>
          <button 
            onClick={() => setMapMode('street')}
            className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${mapMode === 'street' ? 'bg-white shadow-xs text-black font-bold' : 'text-gray-600'}`}
          >
            Street View
          </button>
        </div>
      </div>

      {/* Interactive Map Visual Frame */}
      <div className="relative w-full h-80 rounded-2xl overflow-hidden border border-gray-300 shadow-inner bg-slate-100">
        {mapMode === 'map' ? (
          <div className="relative w-full h-full bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:20px_20px] flex flex-col items-center justify-center">
            
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-gray-200 text-xs font-bold text-gray-800 shadow-md flex items-center gap-2">
              <MapPin size={14} className="text-[#FF385C]" />
              <span>Candolim Beach Zone, North Goa</span>
            </div>

            {/* Glowing Marker */}
            <div className="relative flex items-center justify-center">
              <div className="w-20 h-20 bg-[#FF385C]/25 rounded-full animate-ping absolute"></div>
              <div className="w-14 h-14 bg-[#FF385C] text-white rounded-full flex items-center justify-center shadow-xl border-3 border-white z-10 cursor-pointer hover:scale-110 transition">
                <Home size={22} />
              </div>
            </div>

            <span className="mt-4 text-xs font-bold text-gray-800 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full border border-gray-200 shadow-sm">
              Exact location provided after booking
            </span>

          </div>
        ) : (
          <div className="w-full h-full relative">
            <img 
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80" 
              alt="Street View" 
              className="w-full h-full object-cover brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-5 text-white">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-amber-300 flex items-center gap-1">
                  <Compass size={14} /> Candolim Coastal Drive
                </span>
                <p className="text-sm font-semibold">Quiet gated community drive near Candolim beach</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Nearby Attractions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
        {listing.nearbyAttractions.map((item, idx) => (
          <div key={idx} className="p-3.5 border border-gray-200 rounded-xl text-xs space-y-1 bg-white hover:border-gray-400 transition">
            <p className="font-bold text-gray-900 text-sm">{item.name}</p>
            <p className="text-gray-500 font-medium">{item.type}</p>
            <div className="flex items-center justify-between text-gray-700 pt-1 border-t border-gray-100 mt-2 font-semibold">
              <span>{item.distance}</span>
              <span className="text-gray-500 font-normal">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
