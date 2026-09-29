import React from 'react';
import { Award, Star, Shield, MessageSquare } from 'lucide-react';
import { ListingData } from '../types';

interface HostSectionProps {
  listing: ListingData;
  onOpenHostModal: () => void;
}

export const HostSection: React.FC<HostSectionProps> = ({
  listing,
  onOpenHostModal
}) => {
  const { host } = listing;

  return (
    <div className="pb-10 border-b border-gray-200 space-y-6">
      <h3 className="font-bold text-2xl text-[#222222]">Meet your Host</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Host Profile Card */}
        <div className="md:col-span-1 bg-white border border-gray-200 rounded-3xl p-6 shadow-md text-center space-y-4">
          <div className="relative inline-block">
            <img 
              src={host.avatar} 
              alt={host.name} 
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-200 shadow-sm mx-auto"
            />
            {host.isSuperhost && (
              <div className="absolute bottom-0 right-0 bg-[#FF385C] text-white p-1.5 rounded-full shadow-md">
                <Award size={16} />
              </div>
            )}
          </div>

          <div>
            <h4 className="font-extrabold text-xl text-[#222222]">{host.name}</h4>
            <p className="text-xs font-semibold text-gray-500 mt-0.5">{host.joinedDate}</p>
          </div>

          <div className="grid grid-cols-3 gap-2 border-t border-b border-gray-200 py-3 text-center">
            <div>
              <div className="font-extrabold text-base text-[#222222]">{listing.reviewCount}</div>
              <div className="text-[10px] text-gray-500 font-bold uppercase">Reviews</div>
            </div>
            <div className="border-x border-gray-200">
              <div className="font-extrabold text-base text-[#222222] flex items-center justify-center gap-0.5">
                <span>{listing.rating.toFixed(2)}</span>
                <Star size={12} className="fill-current text-[#222222]" />
              </div>
              <div className="text-[10px] text-gray-500 font-bold uppercase">Rating</div>
            </div>
            <div>
              <div className="font-extrabold text-base text-[#222222]">4</div>
              <div className="text-[10px] text-gray-500 font-bold uppercase">Years hosting</div>
            </div>
          </div>
        </div>

        {/* Host Details & Contact Actions */}
        <div className="md:col-span-2 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            
            {/* Co-hosts */}
            <div>
              <h5 className="font-bold text-sm text-gray-800 mb-2">Co-hosts</h5>
              <div className="flex items-center gap-4">
                {host.cohosts.map((ch, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <img src={ch.avatar} alt={ch.name} className="w-8 h-8 rounded-full object-cover border border-gray-200" />
                    <span className="text-xs font-semibold text-gray-700">{ch.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Host Details & Response Time */}
            <div className="space-y-1 text-sm text-gray-700 font-medium">
              <p><strong>Response rate:</strong> {host.responseRate}</p>
              <p><strong>Responds:</strong> {host.responseTime}</p>
              <p className="text-gray-600 pt-2 leading-relaxed">{host.about}</p>
            </div>

            <button 
              onClick={onOpenHostModal}
              className="py-3 px-6 bg-black text-white rounded-xl text-sm font-bold hover:bg-gray-800 transition active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <MessageSquare size={16} />
              <span>Message Host</span>
            </button>
          </div>

          {/* Payment protection notice */}
          <div className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-200 rounded-2xl text-xs text-gray-600">
            <Shield size={20} className="text-[#FF385C] flex-shrink-0 mt-0.5" />
            <p>
              To protect your payment, never transfer money or communicate outside of the Airbnb website or app.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
