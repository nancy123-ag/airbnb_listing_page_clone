import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Photo } from '../../types';

interface LightboxModalProps {
  photos: Photo[];
  currentIndex: number;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photos,
  currentIndex,
  onClose,
  onSelectIndex
}) => {
  const currentPhoto = photos[currentIndex];
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const handleNext = () => {
    onSelectIndex((currentIndex + 1) % photos.length);
  };

  const handlePrev = () => {
    onSelectIndex((currentIndex - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    closeBtnRef.current?.focus();

    return () => {
      previouslyFocused.current?.focus?.();
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        onSelectIndex((currentIndex + 1) % photos.length);
        return;
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        onSelectIndex((currentIndex - 1 + photos.length) % photos.length);
        return;
      }
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, photos.length, onClose, onSelectIndex]);

  return (
    <div
      ref={dialogRef}
      className="fixed inset-0 z-[60] bg-black/95 flex flex-col justify-between p-4 md:p-8 animate-fade-in select-none"
      role="dialog"
      aria-modal="true"
      aria-label="Photo lightbox"
    >
      <div className="flex justify-between items-center text-white text-sm z-20 max-w-7xl w-full mx-auto">
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          className="p-2.5 hover:bg-white/15 rounded-full text-white transition cursor-pointer flex items-center gap-2"
          aria-label="Close Lightbox"
        >
          <X size={24} />
          <span className="hidden sm:inline font-semibold text-xs uppercase tracking-wider">Close</span>
        </button>

        <div className="font-bold text-sm tracking-wider text-gray-300 bg-white/10 px-3.5 py-1 rounded-full">
          {currentIndex + 1} / {photos.length}
        </div>

        <div className="w-16" aria-hidden="true" />
      </div>

      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-2 md:left-8 z-30 bg-black/50 hover:bg-black/80 border border-white/20 text-white p-3.5 rounded-full transition cursor-pointer active:scale-95 shadow-xl"
          aria-label="Previous image"
        >
          <ChevronLeft size={26} />
        </button>

        <div className="max-w-5xl max-h-[78vh] flex flex-col items-center justify-center px-4">
          <img
            key={currentPhoto.id}
            src={currentPhoto.url}
            alt={currentPhoto.caption}
            className="max-h-[72vh] max-w-full object-contain rounded-lg shadow-2xl transition duration-300 animate-fade-in"
          />
          <p className="text-white/90 text-sm mt-4 text-center font-normal px-4 max-w-2xl leading-relaxed">
            {currentPhoto.caption}
          </p>
        </div>

        <button
          type="button"
          onClick={handleNext}
          className="absolute right-2 md:right-8 z-30 bg-black/50 hover:bg-black/80 border border-white/20 text-white p-3.5 rounded-full transition cursor-pointer active:scale-95 shadow-xl"
          aria-label="Next image"
        >
          <ChevronRight size={26} />
        </button>
      </div>

      <div className="text-center text-xs text-gray-400 pb-2">
        Use <kbd className="px-2 py-0.5 bg-white/15 rounded text-gray-200 font-mono text-[11px]">←</kbd> and <kbd className="px-2 py-0.5 bg-white/15 rounded text-gray-200 font-mono text-[11px]">→</kbd> to navigate, <kbd className="px-2 py-0.5 bg-white/15 rounded text-gray-200 font-mono text-[11px]">Esc</kbd> to close
      </div>
    </div>
  );
};
