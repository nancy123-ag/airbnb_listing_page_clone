import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, Share2, Heart } from 'lucide-react';
import { ListingData } from '../../types';

interface PhotoTourModalProps {
  listing: ListingData;
  onClose: () => void;
  onOpenLightbox: (index: number) => void;
  onOpenShareModal: () => void;
  onOpenSaveModal: () => void;
  isSaved: boolean;
}

export const PhotoTourModal: React.FC<PhotoTourModalProps> = ({
  listing,
  onClose,
  onOpenLightbox,
  onOpenShareModal,
  onOpenSaveModal,
  isSaved
}) => {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [showHint, setShowHint] = useState(() => {
    try {
      return localStorage.getItem('photo-tour-hint-seen') !== '1';
    } catch {
      return true;
    }
  });

  const sections = useMemo(() => {
    return listing.roomSections
      .map((room) => {
        const photos = listing.photos
          .map((photo, index) => ({ photo, index }))
          .filter(({ photo }) => photo.category === room.category);
        return { ...room, photos };
      })
      .filter((section) => section.photos.length > 0);
  }, [listing]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === '?' || (e.shiftKey && e.key === '/')) {
        setShowHint(true);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const dismissHint = () => {
    setShowHint(false);
    try {
      localStorage.setItem('photo-tour-hint-seen', '1');
    } catch {
      /* ignore */
    }
  };

  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-white overflow-y-auto animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
    >
      {showHint && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 bg-[#222222] text-white text-xs sm:text-sm px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 max-w-[90vw] animate-fade-in">
          <span>
            Tip: room thumbnails jump sections · click a photo for lightbox ·{' '}
            <kbd className="px-1.5 py-0.5 bg-white/15 rounded font-mono">Esc</kbd> closes ·{' '}
            <kbd className="px-1.5 py-0.5 bg-white/15 rounded font-mono">?</kbd> shows tip
          </span>
          <button
            type="button"
            onClick={dismissHint}
            className="font-bold underline whitespace-nowrap cursor-pointer"
          >
            Got it
          </button>
        </div>
      )}

      <div className="sticky top-0 bg-white z-20 border-b border-gray-200 shadow-xs">
        <div className="px-6 py-4 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="p-2.5 hover:bg-gray-100 rounded-full transition cursor-pointer"
            aria-label="Back to listing"
          >
            <ChevronLeft size={22} className="text-gray-900" />
          </button>

          <span className="font-bold text-base text-gray-900">Photo tour</span>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenShareModal}
              className="p-2.5 hover:bg-gray-100 rounded-full transition cursor-pointer text-gray-800"
              aria-label="Share listing"
            >
              <Share2 size={18} />
            </button>

            <button
              type="button"
              onClick={onOpenSaveModal}
              className="p-2.5 hover:bg-gray-100 rounded-full transition cursor-pointer text-gray-800"
              aria-label="Save to wishlist"
            >
              <Heart size={18} className={isSaved ? 'fill-[#FF385C] text-[#FF385C]' : ''} />
            </button>
          </div>
        </div>

        <div className="px-6 pb-4 flex gap-3 overflow-x-auto no-scrollbar">
          {sections.map((section) => {
            const thumb = section.photos[0]?.photo;
            if (!thumb) return null;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className="flex-shrink-0 w-[120px] text-left group cursor-pointer"
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 mb-2 border border-transparent group-hover:border-gray-900 transition">
                  <img src={thumb.url} alt={section.title} className="w-full h-full object-cover" />
                </div>
                <p className="text-xs font-semibold text-gray-900 truncate">{section.title}</p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10 space-y-16">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            ref={(el) => {
              sectionRefs.current[section.id] = el;
            }}
            className="scroll-mt-40"
          >
            <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 items-start">
              <div className="md:sticky md:top-44">
                <h2 className="text-2xl font-semibold text-[#222222] mb-2">{section.title}</h2>
                <p className="text-sm text-[#717171] leading-relaxed">{section.amenities}</p>
              </div>

              <div className="space-y-6">
                {section.photos.map(({ photo, index }) => (
                  <button
                    key={photo.id}
                    type="button"
                    onClick={() => onOpenLightbox(index)}
                    className="block w-full text-left cursor-pointer group"
                    aria-label={`Open photo: ${photo.caption}`}
                  >
                    <div className="overflow-hidden rounded-xl bg-gray-100 aspect-[4/3]">
                      <img
                        src={photo.url}
                        alt={photo.caption}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                    <p className="mt-3 text-sm text-[#222222]">{photo.caption}</p>
                  </button>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
