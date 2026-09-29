import React, { useState } from 'react';

interface ImageWithShimmerProps {
  src: string;
  alt: string;
  className?: string;
}

/** Lightweight image with gray shimmer until loaded. */
export const ImageWithShimmer: React.FC<ImageWithShimmerProps> = ({
  src,
  alt,
  className = ''
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 animate-shimmer z-0" aria-hidden="true" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`${className} relative z-[1] ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      />
    </>
  );
};
