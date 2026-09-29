import React, { useState } from 'react';
import { Globe } from 'lucide-react';

interface FooterProps {
  onToast: (msg: string) => void;
  onOpenLanguage?: () => void;
}

const FOOTER_LINKS: Record<string, string[]> = {
  Support: [
    'Help Centre',
    'AirCover',
    'Anti-discrimination',
    'Disability support',
    'Cancellation options',
    'Report neighbourhood concern'
  ],
  Hosting: [
    'Airbnb your home',
    'AirCover for Hosts',
    'Hosting resources',
    'Community forum',
    'Hosting responsibly',
    'Join a free Hosting class'
  ],
  Airbnb: [
    'Newsroom',
    'New features',
    'Careers',
    'Investors',
    'Airbnb.org emergency stays'
  ],
  'Legal & Safety': [
    'Privacy Policy',
    'Terms of Service',
    'Sitemap',
    'Company details'
  ]
};

export const Footer: React.FC<FooterProps> = ({ onToast }) => {
  const [lang, setLang] = useState('English (IN)');
  const [currency, setCurrency] = useState('INR');

  const handleLink = (label: string) => {
    onToast(`${label} (demo page)`);
  };

  return (
    <footer className="bg-[#F7F7F7] border-t border-gray-200 mt-12 text-sm text-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-300">
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading} className="space-y-3">
              <h4 className="font-bold text-gray-900 text-sm">{heading}</h4>
              <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
                {links.map((label) => (
                  <li key={label}>
                    <button
                      type="button"
                      onClick={() => handleLink(label)}
                      className="hover:underline cursor-pointer text-left"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-gray-700">
          <div className="flex flex-wrap items-center gap-2">
            <span>© 2026 Airbnb, Inc.</span>
            <span>·</span>
            {['Privacy', 'Terms', 'Sitemap', 'Company details'].map((label, i) => (
              <React.Fragment key={label}>
                {i > 0 && <span>·</span>}
                <button
                  type="button"
                  onClick={() => handleLink(label)}
                  className="hover:underline font-normal cursor-pointer"
                >
                  {label}
                </button>
              </React.Fragment>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => {
                const next = lang === 'English (IN)' ? 'English (US)' : 'English (IN)';
                setLang(next);
                onToast(`Language set to ${next}`);
              }}
              className="flex items-center gap-2 hover:underline cursor-pointer"
            >
              <Globe size={16} />
              <span>{lang}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                const next = currency === 'INR' ? 'USD' : 'INR';
                setCurrency(next);
                onToast(`Currency set to ${next}`);
              }}
              className="flex items-center gap-1 hover:underline cursor-pointer"
            >
              <span>{currency === 'INR' ? '₹' : '$'}</span>
              <span>{currency}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
