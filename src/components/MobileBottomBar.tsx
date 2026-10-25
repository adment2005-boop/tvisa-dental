import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const MobileBottomBar: React.FC = () => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Hello Dr. Dhir, I would like to inquire about dental care at Tviṣā Dental Care, Cuttack.'
    );
    window.open(`https://wa.me/917204478451?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      aria-label="Quick Contact Actions"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg px-3 py-2 lg:hidden"
      style={{ height: '56px' }}
    >
      <div className="flex items-center justify-around h-full gap-2">
        {/* Call Link */}
        <a
          href={`tel:${CLINIC_INFO.phone}`}
          className="flex-1 flex items-center justify-center gap-2 h-10 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors active:scale-95"
          aria-label="Call clinic directly"
        >
          <Phone className="w-4 h-4 text-teal-800" />
          <span>Call {CLINIC_INFO.phone}</span>
        </a>

        {/* WhatsApp Link */}
        <button
          type="button"
          onClick={handleWhatsApp}
          className="flex-1 flex items-center justify-center gap-2 h-10 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors active:scale-95 shadow-xs"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp Clinic</span>
        </button>
      </div>
    </div>
  );
};
