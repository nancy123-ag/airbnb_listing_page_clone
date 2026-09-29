import React, { useEffect } from 'react';
import { X, Copy, Mail, MessageCircle } from 'lucide-react';
import { ListingData } from '../../types';

interface ShareModalProps {
  listing: ListingData;
  onClose: () => void;
  onCopySuccess: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  listing,
  onClose,
  onCopySuccess
}) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = encodeURIComponent(`Check out this stay: ${listing.title}`);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      onCopySuccess();
    } catch {
      onCopySuccess();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Share listing"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-md w-full p-6 space-y-5 shadow-2xl relative animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b border-gray-200 pb-4">
          <h3 className="font-extrabold text-lg text-gray-900">Share this place</h3>
          <button
            type="button"
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex items-center gap-4 bg-gray-50 p-3.5 rounded-2xl border border-gray-200">
          <img
            src={listing.photos[0].url}
            alt={listing.title}
            className="w-16 h-16 rounded-xl object-cover"
          />
          <div>
            <h4 className="font-bold text-sm text-gray-900 line-clamp-1">{listing.title}</h4>
            <p className="text-xs text-gray-500">{listing.location}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-3 w-full p-3.5 rounded-xl border border-gray-200 hover:bg-gray-50 transition cursor-pointer text-left"
          >
            <Copy size={18} />
            <span className="text-sm font-semibold">Copy link</span>
          </button>

          <a
            href={`mailto:?subject=${encodeURIComponent(listing.title)}&body=${shareText}%0A${encodeURIComponent(currentUrl)}`}
            className="flex items-center gap-3 w-full p-3.5 rounded-xl border border-gray-200 hover:bg-gray-50 transition text-left text-[#222222]"
          >
            <Mail size={18} />
            <span className="text-sm font-semibold">Email</span>
          </a>

          <a
            href={`https://wa.me/?text=${shareText}%20${encodeURIComponent(currentUrl)}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 w-full p-3.5 rounded-xl border border-gray-200 hover:bg-gray-50 transition text-left text-[#222222]"
          >
            <MessageCircle size={18} />
            <span className="text-sm font-semibold">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
