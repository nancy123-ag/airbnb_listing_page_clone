import React from 'react';
import { Grid } from 'lucide-react';
import { Photo } from '../types';
import { ImageWithShimmer } from './ImageWithShimmer';

interface HeroPhotoGridProps {
  photos: Photo[];
  onOpenPhotoTour: () => void;
}

export const HeroPhotoGrid: React.FC<HeroPhotoGridProps> = ({
  photos,
  onOpenPhotoTour
}) => {
  return (
    <section className="relative mb-10 rounded-2xl overflow-hidden group">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 h-[300px] sm:h-[400px] md:h-[460px]">
        <div
          className="md:col-span-2 relative h-full cursor-pointer overflow-hidden bg-gray-200"
          onClick={onOpenPhotoTour}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onOpenPhotoTour();
            }
          }}
          aria-label="Open photo tour"
        >
          <ImageWithShimmer
            src={photos[0].url}
            alt={photos[0].caption}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 brightness-95 hover:brightness-100"
          />
        </div>

        <div className="hidden md:grid md:col-span-2 grid-cols-2 gap-2 h-full">
          {photos.slice(1, 5).map((photo) => (
            <div
              key={photo.id}
              className="relative h-full cursor-pointer overflow-hidden bg-gray-200"
              onClick={onOpenPhotoTour}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onOpenPhotoTour();
                }
              }}
              aria-label={`Open photo tour — ${photo.caption}`}
            >
              <ImageWithShimmer
                src={photo.url}
                alt={photo.caption}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 brightness-95 hover:brightness-100"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={onOpenPhotoTour}
        className="absolute bottom-5 right-5 bg-white/95 hover:bg-white text-gray-900 border border-gray-900 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-md hover:shadow-lg transition cursor-pointer active:scale-95 z-10"
      >
        <Grid size={16} />
        <span>Show all photos</span>
      </button>
    </section>
  );
};
