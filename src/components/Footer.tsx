import React from 'react';
import { Phone, MessageSquare, Mail, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { TvisaLogo } from './TvisaLogo';

interface FooterProps {
  onNavigateToTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToTab }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <TvisaLogo size="md" textColor="text-white" />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm pt-2">
              Tviṣā Dental Care is dedicated to clinical excellence in Crown, Bridge,
              Dental Implantology, and Emergency Trauma Care. Directed by Dr. Trailokya Dhir
              (Sr. Lecturer K.I.D.S & Consultant Ashwini Trauma Center, Cuttack).
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-teal-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Dental Council Regd No. 3414 - A</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToTab('home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToTab('treatments')}
                  className="hover:text-white transition-colors"
                >
                  Treatments & Specialties
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToTab('about')}
                  className="hover:text-white transition-colors"
                >
                  About Dr. Trailokya Dhir
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToTab('guide')}
                  className="hover:text-white transition-colors"
                >
                  Patient Care & FAQ
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToTab('contact')}
                  className="hover:text-white transition-colors"
                >
                  Consultation Hours
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Consultation Timings (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Consultation Hours
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div>
                <strong className="text-slate-200 block">Monday to Saturday</strong>
                <span>9:30 AM to 1:00 PM</span>
                <span className="block">4:00 PM to 8:30 PM</span>
              </div>
              <div className="pt-1">
                <strong className="text-slate-200 block">Sunday</strong>
                <span>10:00 AM to 2:00 PM</span>
              </div>
              <div className="pt-1 text-[11px] text-teal-400">
                Ashwini Trauma Center, Cuttack On-Call Support
              </div>
            </div>
          </div>

          {/* Col 4: Contact Us (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact Us
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-teal-400" />
                <span>{CLINIC_INFO.phone}</span>
              </a>
              <a
                href={`https://wa.me/91${CLINIC_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{CLINIC_INFO.whatsapp}</span>
              </a>
              <a
                href={`mailto:${CLINIC_INFO.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors truncate"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span className="truncate">Email Clinic</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & accessibility */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>
            © {new Date().getFullYear()} Tviṣā Dental Care by Dr. Dhir. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Cuttack, Odisha, India</span>
            <span>·</span>
            <span>WCAG AA Accessible</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
