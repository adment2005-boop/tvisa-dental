import React, { useState } from 'react';
import { Calendar, Phone, MessageSquare, Clock, ShieldCheck, Award, MapPin, Eye, X } from 'lucide-react';
import { CLINIC_INFO, DOCTOR_CREDENTIALS } from '../data/clinicData';
import { TvisaLogo } from './TvisaLogo';

interface HeroSectionProps {
  onNavigateToTab: (tab: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigateToTab,
}) => {
  const [showPhotoModal, setShowPhotoModal] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/70 via-white to-slate-50 pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/60">
      {/* Light decorative subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #134e48 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
        {/* Editorial kicker */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium mb-4">
          <span className="text-teal-900 font-semibold">Tviṣā Dental Care</span>
          <span aria-hidden="true">·</span>
          <span>Cuttack, Odisha</span>
          <span aria-hidden="true">·</span>
          <span className="text-slate-700">Regd No. 3414 - A</span>
        </div>

        {/* 2-Column Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Column 1: Copy and Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]"
                style={{ textWrap: 'balance' }}
              >
                Precision Crown, Bridge & Dental Implantology in Cuttack
              </h1>
              <p className="text-lg sm:text-xl text-teal-900 font-medium font-heading">
                Led by Dr. Trailokya Dhir
              </p>
            </div>

            <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
              Specialized prosthodontic restoration, dental implants, and trauma dental care.
              Affiliated as Senior Lecturer at K.I.D.S (Dept. of Crown, Bridge & Implantology)
              and Consultant at Ashwini Trauma Center, Cuttack. We restore functional chewing,
              structural jaw harmony, and aesthetic natural smiles with gentle, evidence-based dentistry.
            </p>

            {/* Quick Consultation Timing Card */}
            <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800">
                <Clock className="w-4 h-4 text-teal-700" />
                <span>Clinic Consultation Timings</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 pt-1">
                <div className="flex flex-col border-l-2 border-teal-600 pl-2.5">
                  <span className="font-semibold text-slate-900">Monday to Saturday</span>
                  <span className="text-slate-600">9:30 AM – 1:00 PM</span>
                  <span className="text-slate-600">4:00 PM – 8:30 PM</span>
                </div>
                <div className="flex flex-col border-l-2 border-amber-600 pl-2.5">
                  <span className="font-semibold text-slate-900">Sunday Consultation</span>
                  <span className="text-slate-600">10:00 AM – 2:00 PM</span>
                  <span className="text-teal-700 font-medium">Ashwini Trauma Center On-Call</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Actions Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-teal-800 hover:bg-teal-900 text-white rounded-xl font-semibold text-sm shadow-sm hover:shadow transition-all whitespace-nowrap active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Call {CLINIC_INFO.phone}</span>
              </a>

              <a
                href={`https://wa.me/91${CLINIC_INFO.whatsapp}?text=${encodeURIComponent('Hello Dr. Dhir, I would like to inquire about dental care at Tviṣā Dental Care, Cuttack.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold text-sm transition-all whitespace-nowrap active:scale-95 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp {CLINIC_INFO.whatsapp}</span>
              </a>

              <a
                href={`mailto:${CLINIC_INFO.email}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-xl font-semibold text-sm transition-all whitespace-nowrap active:scale-95"
              >
                <span>Email Clinic</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-700" />
                <span>Verified Regd No. 3414 - A</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-teal-700" />
                <span>Sr. Lecturer K.I.D.S</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-teal-700" />
                <span>Consultant Ashwini Trauma Center</span>
              </span>
            </div>
          </div>

          {/* Column 2: Visual Card with Authentic Signboard Asset (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-lg p-5 sm:p-6 space-y-5">
              {/* Card Header with recreated emblem & Odia brand name */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <TvisaLogo size="sm" />
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                    Clinic Credentials
                  </span>
                </div>
              </div>

              {/* Clinic Signboard Image Preview */}
              <div className="relative group rounded-xl overflow-hidden border border-slate-200 bg-slate-900 aspect-[4/3]">
                <img
                  src={CLINIC_INFO.signboardImage}
                  alt="Official clinic signboard for Tviṣā by Dr. Dhir showing contact numbers 8249805730, 7204478451, email, and consultation hours"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-4">
                  <div className="flex items-center justify-between w-full text-white">
                    <div>
                      <p className="text-xs font-semibold text-teal-200">
                        Official Clinic Signboard
                      </p>
                      <p className="text-xs text-slate-300">
                        Dr. Trailokya Dhir · Regd No. 3414-A
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowPhotoModal(true)}
                      className="px-2.5 py-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors"
                      aria-label="Enlarge clinic signboard photograph"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Direct Doctor & Clinic Credentials List */}
              <div className="space-y-2.5 text-xs">
                {DOCTOR_CREDENTIALS.map((cred, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-50/80 border border-slate-100 flex items-start gap-2.5"
                  >
                    <div className="w-2 h-2 rounded-full bg-teal-700 mt-1.5 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-900">{cred.role}</span>
                      <span className="text-slate-600 block">{cred.institution}</span>
                      <span className="text-teal-800 text-[11px] font-medium">{cred.highlight}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action buttons inside card */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => onNavigateToTab('treatments')}
                  className="py-2 px-3 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg text-center transition-colors"
                >
                  Explore Treatments
                </button>
                <button
                  type="button"
                  onClick={() => onNavigateToTab('about')}
                  className="py-2 px-3 text-xs font-medium text-teal-800 bg-teal-50 hover:bg-teal-100 rounded-lg text-center transition-colors"
                >
                  Doctor Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Clinic Signboard Photo */}
      {showPhotoModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
          onClick={() => setShowPhotoModal(false)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Tviṣā by Dr. Dhir — Official Clinic Board
                </h3>
                <p className="text-xs text-slate-500">
                  Verified Contact: 8249805730 | WhatsApp: 7204478451 | Regd No. 3414 - A
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowPhotoModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden bg-slate-100 border border-slate-200 max-h-[75vh] flex items-center justify-center">
              <img
                src={CLINIC_INFO.signboardImage}
                alt="Clinic signage board for Tviṣā by Dr. Trailokya Dhir with consultation hours and contact numbers"
                className="max-h-[70vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
