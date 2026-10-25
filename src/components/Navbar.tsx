import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, Clock } from 'lucide-react';
import { TvisaLogo } from './TvisaLogo';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'treatments', label: 'Treatments' },
    { id: 'about', label: 'About Dr. Dhir' },
    { id: 'guide', label: 'Patient Guide' },
    { id: 'contact', label: 'Contact & Hours' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      {/* Top micro-bar for emergency consultation phone & hours */}
      <div className="bg-teal-950 text-teal-100 text-[11px] py-1 px-4 sm:px-8 border-b border-teal-900/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-medium text-teal-200">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              <span>Mon–Sat: 9:30 AM–1:00 PM & 4:00 PM–8:30 PM · Sun: 10:00 AM–2:00 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-teal-300">
              Cuttack, Odisha · Regd No. 3414 - A
            </span>
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="flex items-center gap-1 text-white hover:text-teal-200 transition-colors font-semibold"
            >
              <Phone className="w-3 h-3 text-teal-300" />
              <span>Call: {CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar following 3-Zone Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark & Icon */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 rounded-lg shrink-0"
          aria-label="Tviṣā Dental Care home"
        >
          <TvisaLogo size="md" />
        </button>

        {/* Zone 2: 4-5 Clean Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600"
        >
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                  isActive
                    ? 'text-teal-900 border-teal-700 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 border-transparent hover:border-slate-300'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`https://wa.me/91${CLINIC_INFO.whatsapp}?text=${encodeURIComponent('Hello Dr. Dhir, I would like to inquire about dental consultation at Tviṣā Dental Care, Cuttack.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-xl shadow-sm transition-all whitespace-nowrap shrink-0 active:scale-95"
          >
            <span>WhatsApp Clinic</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 pb-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                  activeTab === link.id
                    ? 'bg-teal-50 text-teal-900 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`https://wa.me/91${CLINIC_INFO.whatsapp}?text=${encodeURIComponent('Hello Dr. Dhir, I would like to inquire about dental consultation at Tviṣā Dental Care, Cuttack.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold text-sm shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp: {CLINIC_INFO.whatsapp}</span>
            </a>
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-medium text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-teal-800" />
              <span>Call Clinic: {CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
