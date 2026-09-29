import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { ListingData } from '../../types';

interface HostContactModalProps {
  listing: ListingData;
  onClose: () => void;
  onSendMessage: (msg: string) => void;
}

export const HostContactModal: React.FC<HostContactModalProps> = ({
  listing,
  onClose,
  onSendMessage
}) => {
  const [message, setMessage] = useState(
    "Hi Himalaya Stays! I'm interested in booking your Romantic 1BHK CondoStay in Candolim."
  );

  const templates = [
    "Is early check-in available?",
    "Are pets allowed on the property?",
    "Is airport transfer pickup available?",
    "What is the pool timing?"
  ];

  const handleSend = () => {
    onSendMessage(message);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-5 shadow-2xl relative animate-fade-in">
        
        <div className="flex justify-between items-center border-b border-gray-200 pb-4">
          <h3 className="font-extrabold text-lg text-gray-900">Contact Host</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition">
            <X size={18} />
          </button>
        </div>

        {/* Host Avatar & Response Header */}
        <div className="flex items-center gap-4 bg-gray-50 p-3.5 rounded-2xl border border-gray-200">
          <img src={listing.host.avatar} alt={listing.host.name} className="w-14 h-14 rounded-full object-cover" />
          <div>
            <h4 className="font-bold text-base text-gray-900">{listing.host.name}</h4>
            <p className="text-xs text-gray-500 font-medium">Response rate: {listing.host.responseRate} · {listing.host.responseTime}</p>
          </div>
        </div>

        {/* Quick Inquiry Templates */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-700">Quick Inquiry Prompts:</label>
          <div className="flex flex-wrap gap-2">
            {templates.map((tpl, idx) => (
              <button 
                key={idx}
                onClick={() => setMessage(tpl)}
                className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-3 py-1.5 rounded-full transition cursor-pointer"
              >
                {tpl}
              </button>
            ))}
          </div>
        </div>

        {/* Message Input Box */}
        <textarea 
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3.5 border border-gray-300 rounded-2xl text-sm focus:outline-none focus:border-black font-medium text-gray-900"
          placeholder="Type your question for the host..."
        ></textarea>

        <button 
          onClick={handleSend}
          className="w-full py-3.5 bg-[#FF385C] hover:bg-[#E61E4D] text-white font-bold rounded-2xl text-sm transition flex items-center justify-center gap-2 shadow-md cursor-pointer active:scale-95"
        >
          <Send size={16} /> Send Message
        </button>

      </div>
    </div>
  );
};
