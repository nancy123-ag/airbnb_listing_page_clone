import React, { useEffect, useRef, useState } from 'react';
import { Search, Globe, Menu, User, Cpu, X, Check } from 'lucide-react';

interface HeaderProps {
  onOpenArchModal: () => void;
  guestCount: number;
  onToast: (msg: string) => void;
  onFocusSearch: () => void;
}

const LANGUAGES = [
  { code: 'en-IN', label: 'English (IN)' },
  { code: 'en-US', label: 'English (US)' },
  { code: 'hi-IN', label: 'Hindi' },
  { code: 'pt-PT', label: 'Portuguese' }
];

const CURRENCIES = [
  { code: 'INR', symbol: '₹', label: 'Indian Rupee' },
  { code: 'USD', symbol: '$', label: 'US Dollar' },
  { code: 'EUR', symbol: '€', label: 'Euro' },
  { code: 'GBP', symbol: '£', label: 'Pound Sterling' }
];

export const Header: React.FC<HeaderProps> = ({
  onOpenArchModal,
  guestCount,
  onToast,
  onFocusSearch
}) => {
  const [showLangModal, setShowLangModal] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [language, setLanguage] = useState('en-IN');
  const [currency, setCurrency] = useState('INR');
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  useEffect(() => {
    if (!showLangModal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowLangModal(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showLangModal]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-30 bg-white border-b border-gray-200 px-4 sm:px-6 md:px-10 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={scrollTop}
            className="flex items-center gap-2 cursor-pointer group"
            aria-label="Airbnb home"
          >
            <svg
              className="w-8 h-8 text-[#FF385C] group-hover:scale-105 transition-transform"
              viewBox="0 0 32 32"
              fill="currentColor"
            >
              <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.011.315c0 4.908-3.784 8.806-8.5 8.806-3.21 0-6.046-1.802-7.5-4.493-1.454 2.691-4.29 4.493-7.5 4.493-4.716 0-8.5-3.898-8.5-8.806 0-.825.197-1.742.825-3.232l.291-.632c.986-2.297 5.146-11.007 7.1-14.837l.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.27.653-3.297 2.498l-.454.872c-1.895 3.714-5.98 12.28-6.924 14.494l-.156.345c-.522 1.246-.72 1.94-.761 2.616l-.008.275c0 3.738 2.822 6.806 6.5 6.806 2.835 0 5.275-1.761 6.208-4.301l.148-.432.244.025c.164.015.33.023.498.023.168 0 .334-.008.498-.023l.244-.025.148.432c.933 2.54 3.373 4.301 6.208 4.301 3.678 0 6.5-3.068 6.5-6.806 0-.665-.164-1.352-.633-2.478l-.136-.313c-.945-2.214-5.029-10.78-6.924-14.494l-.454-.872C18.27 3.653 17.239 3 16 3zm0 10c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
            </svg>
            <span className="text-xl font-extrabold tracking-tight text-[#FF385C] hidden sm:inline">
              airbnb
            </span>
          </button>

          <button
            type="button"
            onClick={onFocusSearch}
            className="hidden md:flex items-center border border-gray-300 rounded-full py-2 px-4 shadow-sm hover:shadow-md transition cursor-pointer text-sm font-medium gap-3 bg-white"
            aria-label="Open search / dates"
          >
            <span className="font-semibold text-gray-900 px-1">Anywhere</span>
            <span className="border-r border-gray-300 h-4" />
            <span className="font-semibold text-gray-900 px-1">Any week</span>
            <span className="border-r border-gray-300 h-4" />
            <span className="text-gray-500 font-normal px-1">
              {guestCount} {guestCount === 1 ? 'guest' : 'guests'}
            </span>
            <div className="bg-[#FF385C] text-white p-2 rounded-full">
              <Search size={13} strokeWidth={3} />
            </div>
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={onOpenArchModal}
              className="flex items-center gap-1.5 text-xs font-bold py-2 px-3.5 bg-slate-900 text-white border border-slate-700 rounded-full hover:bg-slate-800 shadow-sm transition active:scale-95 cursor-pointer"
              title="View Marketplace Architecture"
            >
              <Cpu size={14} className="text-[#FF385C]" />
              <span className="hidden sm:inline">Architecture Spec</span>
            </button>

            <button
              type="button"
              onClick={() =>
                onToast('Hosting demo: start by listing your home (not wired to a real flow)')
              }
              className="hidden sm:block text-sm font-semibold text-gray-800 py-2 px-3 hover:bg-gray-100 rounded-full transition cursor-pointer"
            >
              Airbnb your home
            </button>

            <button
              type="button"
              onClick={() => setShowLangModal(true)}
              className="p-2.5 hover:bg-gray-100 rounded-full text-gray-700 transition cursor-pointer"
              aria-label="Choose language and currency"
            >
              <Globe size={18} />
            </button>

            <div className="relative" ref={profileRef}>
              <button
                type="button"
                onClick={() => setShowProfileMenu((v) => !v)}
                className="flex items-center gap-3 border border-gray-300 rounded-full py-1.5 px-3 hover:shadow-md transition cursor-pointer bg-white"
                aria-expanded={showProfileMenu}
                aria-haspopup="menu"
                aria-label="Main menu"
              >
                <Menu size={18} className="text-gray-700" />
                <div className="bg-gray-500 text-white rounded-full p-1">
                  <User size={14} />
                </div>
              </button>

              {showProfileMenu && (
                <div
                  role="menu"
                  className="absolute right-0 mt-2 w-60 bg-white rounded-2xl shadow-xl border border-gray-200 py-2 z-50 animate-fade-in"
                >
                  {[
                    { label: 'Sign up', msg: 'Sign up (demo)' },
                    { label: 'Log in', msg: 'Log in (demo)' },
                    { label: 'divider' },
                    { label: 'Airbnb your home', msg: 'Hosting demo opened' },
                    { label: 'Help Centre', msg: 'Help Centre (demo)' },
                    { label: 'Architecture Spec', action: 'arch' as const }
                  ].map((item, idx) =>
                    item.label === 'divider' ? (
                      <div key={`d-${idx}`} className="border-t border-gray-200 my-2" />
                    ) : (
                      <button
                        key={item.label}
                        type="button"
                        role="menuitem"
                        className="w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 cursor-pointer font-medium text-gray-800"
                        onClick={() => {
                          setShowProfileMenu(false);
                          if ('action' in item && item.action === 'arch') {
                            onOpenArchModal();
                          } else if ('msg' in item && item.msg) {
                            onToast(item.msg);
                          }
                        }}
                      >
                        {item.label}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {showLangModal && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Language and currency"
          onClick={() => setShowLangModal(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl animate-fade-in space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg text-[#222222]">Language and region</h3>
              <button
                type="button"
                onClick={() => setShowLangModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => setLanguage(lang.code)}
                  className={`text-left p-3 rounded-xl border text-sm cursor-pointer ${
                    language === lang.code
                      ? 'border-black bg-gray-50 font-semibold'
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <span className="flex items-center justify-between">
                    {lang.label}
                    {language === lang.code && <Check size={16} />}
                  </span>
                </button>
              ))}
            </div>

            <h4 className="font-bold text-base text-[#222222] pt-2">Currency</h4>
            <div className="grid grid-cols-2 gap-2">
              {CURRENCIES.map((cur) => (
                <button
                  key={cur.code}
                  type="button"
                  onClick={() => setCurrency(cur.code)}
                  className={`text-left p-3 rounded-xl border text-sm cursor-pointer ${
                    currency === cur.code
                      ? 'border-black bg-gray-50 font-semibold'
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <span className="flex items-center justify-between">
                    <span>
                      {cur.symbol} {cur.code}
                      <span className="block text-xs text-gray-500 font-normal">{cur.label}</span>
                    </span>
                    {currency === cur.code && <Check size={16} />}
                  </span>
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                setShowLangModal(false);
                const langLabel = LANGUAGES.find((l) => l.code === language)?.label;
                onToast(`Preferences saved: ${langLabel} · ${currency}`);
              }}
              className="w-full py-3 bg-[#222222] text-white font-bold rounded-xl text-sm cursor-pointer hover:bg-black"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
};
