import React, { useState, useMemo, useEffect } from 'react';
import { Check } from 'lucide-react';
import { LISTING_DATA } from './data/listingData';
import { Wishlist } from './types';

import { Header } from './components/Header';
import { ListingHeader } from './components/ListingHeader';
import { HeroPhotoGrid } from './components/HeroPhotoGrid';
import { ListingMainInfo } from './components/ListingMainInfo';
import { SleepingArrangements } from './components/SleepingArrangements';
import { AmenitiesSection } from './components/AmenitiesSection';
import { CalendarBookingSection } from './components/CalendarBookingSection';
import { StickyReservationCard } from './components/StickyReservationCard';
import { BottomMobileBar } from './components/BottomMobileBar';
import { ReviewsSection } from './components/ReviewsSection';
import { MapSection } from './components/MapSection';
import { HostSection } from './components/HostSection';
import { SimilarListings } from './components/SimilarListings';
import { Footer } from './components/Footer';
import { RecentlyViewedStrip } from './components/RecentlyViewedStrip';

import { PhotoTourModal } from './components/modals/PhotoTourModal';
import { LightboxModal } from './components/modals/LightboxModal';
import { ShareModal } from './components/modals/ShareModal';
import { SaveWishlistModal } from './components/modals/SaveWishlistModal';
import { AmenitiesModal } from './components/modals/AmenitiesModal';
import { HostContactModal } from './components/modals/HostContactModal';
import { ArchitectureModal } from './components/modals/ArchitectureModal';
import { AllReviewsModal } from './components/modals/AllReviewsModal';
import { ReserveConfirmModal } from './components/modals/ReserveConfirmModal';

export default function App() {
  const [showPhotoTour, setShowPhotoTour] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showAmenitiesModal, setShowAmenitiesModal] = useState(false);
  const [showHostModal, setShowHostModal] = useState(false);
  const [showArchModal, setShowArchModal] = useState(false);
  const [showAllReviewsModal, setShowAllReviewsModal] = useState(false);
  const [showReserveConfirm, setShowReserveConfirm] = useState(false);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [checkIn, setCheckIn] = useState('2025-09-10');
  const [checkOut, setCheckOut] = useState('2025-09-15');
  const [guests, setGuests] = useState(1);

  const [wishlists, setWishlists] = useState<Wishlist[]>([
    { id: 'w1', name: 'Goa Coastal Trips', count: 3, saved: true },
    { id: 'w2', name: 'Monsoon Getaways', count: 1, saved: false },
    { id: 'w3', name: 'Romantic Stays', count: 4, saved: false }
  ]);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 1;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffDays = Math.ceil(Math.abs(end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return Number.isNaN(diffDays) || diffDays <= 0 ? 1 : diffDays;
  }, [checkIn, checkOut]);

  const baseSubtotal = LISTING_DATA.pricePerNight * nights;
  const weeklyDiscount =
    nights >= 7
      ? Math.round(baseSubtotal * (LISTING_DATA.weeklyDiscountPct / 100))
      : 0;
  const totalPrice =
    baseSubtotal - weeklyDiscount + LISTING_DATA.cleaningFee + LISTING_DATA.serviceFee;

  const isAnyWishlistSaved = wishlists.some((w) => w.saved);

  const anyOverlayOpen =
    showPhotoTour ||
    lightboxIndex !== null ||
    showShareModal ||
    showSaveModal ||
    showAmenitiesModal ||
    showHostModal ||
    showArchModal ||
    showAllReviewsModal ||
    showReserveConfirm;

  useEffect(() => {
    document.body.style.overflow = anyOverlayOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [anyOverlayOpen]);

  useEffect(() => {
    if (!anyOverlayOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (lightboxIndex !== null) {
        setLightboxIndex(null);
        return;
      }
      if (showPhotoTour) {
        setShowPhotoTour(false);
        return;
      }
      if (showReserveConfirm) setShowReserveConfirm(false);
      else if (showShareModal) setShowShareModal(false);
      else if (showSaveModal) setShowSaveModal(false);
      else if (showAmenitiesModal) setShowAmenitiesModal(false);
      else if (showHostModal) setShowHostModal(false);
      else if (showArchModal) setShowArchModal(false);
      else if (showAllReviewsModal) setShowAllReviewsModal(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [
    anyOverlayOpen,
    lightboxIndex,
    showPhotoTour,
    showReserveConfirm,
    showShareModal,
    showSaveModal,
    showAmenitiesModal,
    showHostModal,
    showArchModal,
    showAllReviewsModal
  ]);

  const toggleWishlist = (id: string) => {
    setWishlists((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        const nextSaved = !item.saved;
        triggerToast(nextSaved ? `Saved to "${item.name}"` : `Removed from "${item.name}"`);
        return {
          ...item,
          saved: nextSaved,
          count: nextSaved ? item.count + 1 : Math.max(0, item.count - 1)
        };
      })
    );
  };

  const createWishlist = (name: string) => {
    setWishlists((prev) => [
      ...prev,
      { id: `w-${Date.now()}`, name, count: 1, saved: true }
    ]);
    triggerToast(`Saved to new wishlist "${name}"`);
  };

  const scrollToCalendar = () => {
    document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleReserveClick = () => {
    if (!checkIn || !checkOut) {
      triggerToast('Please select check-in and checkout dates');
      scrollToCalendar();
      return;
    }
    setShowReserveConfirm(true);
  };

  const confirmReservation = () => {
    setShowReserveConfirm(false);
    triggerToast(
      `Reservation held for ${nights} nights · ${LISTING_DATA.currencySymbol}${totalPrice.toLocaleString('en-IN')} before taxes`
    );
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans antialiased pb-24 lg:pb-0 selection:bg-[#FF385C] selection:text-white">
      {toastMessage && (
        <div className="fixed bottom-24 lg:bottom-8 right-6 z-50 bg-[#222222] text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-fade-in border border-gray-700">
          <Check size={18} className="text-emerald-400 flex-shrink-0" />
          <span className="text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      <Header
        onOpenArchModal={() => setShowArchModal(true)}
        guestCount={guests}
        onToast={triggerToast}
        onFocusSearch={scrollToCalendar}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6">
        <ListingHeader
          listing={LISTING_DATA}
          onOpenShareModal={() => setShowShareModal(true)}
          onOpenSaveModal={() => setShowSaveModal(true)}
          isSaved={isAnyWishlistSaved}
        />

        <HeroPhotoGrid
          photos={LISTING_DATA.photos}
          onOpenPhotoTour={() => setShowPhotoTour(true)}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          <div className="lg:col-span-2 space-y-10">
            <ListingMainInfo
              listing={LISTING_DATA}
              onOpenHostModal={() => setShowHostModal(true)}
            />

            <SleepingArrangements listing={LISTING_DATA} />

            <AmenitiesSection
              listing={LISTING_DATA}
              onOpenAmenitiesModal={() => setShowAmenitiesModal(true)}
            />

            <CalendarBookingSection
              checkIn={checkIn}
              checkOut={checkOut}
              nights={nights}
              onDateChange={(start, end) => {
                setCheckIn(start);
                setCheckOut(end);
              }}
              onClearDates={() => {
                setCheckIn('');
                setCheckOut('');
              }}
            />

            <ReviewsSection
              listing={LISTING_DATA}
              onOpenAllReviewsModal={() => setShowAllReviewsModal(true)}
            />

            <MapSection listing={LISTING_DATA} />

            <HostSection
              listing={LISTING_DATA}
              onOpenHostModal={() => setShowHostModal(true)}
            />

            <SimilarListings onToast={triggerToast} />
          </div>

          <StickyReservationCard
            listing={LISTING_DATA}
            checkIn={checkIn}
            checkOut={checkOut}
            guests={guests}
            nights={nights}
            baseSubtotal={baseSubtotal}
            weeklyDiscount={weeklyDiscount}
            totalPrice={totalPrice}
            onCheckInChange={setCheckIn}
            onCheckOutChange={setCheckOut}
            onGuestsChange={setGuests}
            onReserve={handleReserveClick}
            onToast={triggerToast}
          />
        </div>
      </main>

      <RecentlyViewedStrip listing={LISTING_DATA} />

      <BottomMobileBar
        listing={LISTING_DATA}
        checkIn={checkIn}
        checkOut={checkOut}
        nights={nights}
        totalPrice={totalPrice}
        onReserve={handleReserveClick}
        onScrollToCalendar={scrollToCalendar}
      />

      <Footer onToast={triggerToast} />

      {showPhotoTour && (
        <PhotoTourModal
          listing={LISTING_DATA}
          onClose={() => setShowPhotoTour(false)}
          onOpenLightbox={(idx) => setLightboxIndex(idx)}
          onOpenShareModal={() => setShowShareModal(true)}
          onOpenSaveModal={() => setShowSaveModal(true)}
          isSaved={isAnyWishlistSaved}
        />
      )}

      {lightboxIndex !== null && (
        <LightboxModal
          photos={LISTING_DATA.photos}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onSelectIndex={setLightboxIndex}
        />
      )}

      {showShareModal && (
        <ShareModal
          listing={LISTING_DATA}
          onClose={() => setShowShareModal(false)}
          onCopySuccess={() => {
            setShowShareModal(false);
            triggerToast('Link copied to clipboard');
          }}
        />
      )}

      {showSaveModal && (
        <SaveWishlistModal
          wishlists={wishlists}
          onClose={() => setShowSaveModal(false)}
          onToggleWishlist={toggleWishlist}
          onCreateWishlist={createWishlist}
        />
      )}

      {showAmenitiesModal && (
        <AmenitiesModal
          listing={LISTING_DATA}
          onClose={() => setShowAmenitiesModal(false)}
        />
      )}

      {showHostModal && (
        <HostContactModal
          listing={LISTING_DATA}
          onClose={() => setShowHostModal(false)}
          onSendMessage={(msg) =>
            triggerToast(`Message sent to Himalaya Stays: "${msg}"`)
          }
        />
      )}

      {showArchModal && <ArchitectureModal onClose={() => setShowArchModal(false)} />}

      {showAllReviewsModal && (
        <AllReviewsModal
          listing={LISTING_DATA}
          onClose={() => setShowAllReviewsModal(false)}
        />
      )}

      {showReserveConfirm && (
        <ReserveConfirmModal
          listing={LISTING_DATA}
          checkIn={checkIn}
          checkOut={checkOut}
          guests={guests}
          nights={nights}
          totalPrice={totalPrice}
          onClose={() => setShowReserveConfirm(false)}
          onConfirm={confirmReservation}
        />
      )}
    </div>
  );
}
