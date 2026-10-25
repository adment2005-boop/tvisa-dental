import React from 'react';
import { Phone, MessageSquare, Mail, Clock, MapPin, ShieldCheck, AlertCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { TvisaLogo } from './TvisaLogo';

export const ContactHoursSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
            <span>Direct Clinic Access</span>
            <span aria-hidden="true">·</span>
            <span>Cuttack, Odisha</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Consultation Hours & Contact Details
          </h2>
          <p className="mt-2 text-base text-slate-600 leading-relaxed">
            Reach Dr. Trailokya Dhir directly via phone, WhatsApp, or email, or visit during scheduled consultation hours in Cuttack.
          </p>
        </div>

        {/* 2-Column Layout: Consultation Schedule & Direct Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Consultation Schedule (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="p-2.5 bg-teal-50 text-teal-800 rounded-xl">
                  <Clock className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Official Consultation Schedule
                  </h3>
                  <p className="text-xs text-slate-500">
                    As displayed on the clinic sign board
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-xs">
                {/* Weekdays */}
                <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-100">
                  <span className="font-bold text-teal-950 text-sm block mb-2">
                    Monday to Saturday
                  </span>
                  <div className="space-y-1.5 text-slate-700">
                    <div className="flex justify-between items-center py-1 border-b border-teal-100/50">
                      <span className="text-slate-600">Morning Consultation:</span>
                      <span className="font-bold text-teal-900 text-sm">9:30 AM to 1:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-slate-600">Evening Consultation:</span>
                      <span className="font-bold text-teal-900 text-sm">4:00 PM to 8:30 PM</span>
                    </div>
                  </div>
                </div>

                {/* Sunday */}
                <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-100">
                  <span className="font-bold text-amber-950 text-sm block mb-1">
                    Sunday Consultation
                  </span>
                  <div className="flex justify-between items-center text-slate-700 py-1">
                    <span className="text-slate-600">Morning Session:</span>
                    <span className="font-bold text-amber-900 text-sm">10:00 AM to 2:00 PM</span>
                  </div>
                </div>

                {/* Emergency Trauma Coverage */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">
                    Emergency Maxillofacial & Dental Trauma Coverage
                  </span>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Consultant emergency coverage linked with Ashwini Trauma Center, Cuttack. For acute trauma, severe bleeding, or knocked-out permanent teeth, contact directly via phone.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact Channels & Practitioner Badges (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="pb-4 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-900">
                  Direct Communication Channels
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Connect with Dr. Trailokya Dhir and the clinical desk
                </p>
              </div>

              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 border border-slate-200 transition-colors group"
                >
                  <div className="p-3 bg-teal-50 text-teal-800 rounded-xl shrink-0 group-hover:bg-teal-100 transition-colors">
                    <Phone className="w-5 h-5 text-teal-700" />
                  </div>
                  <div>
                    <span className="text-slate-500 block text-xs">Primary Contact (Call)</span>
                    <span className="font-bold text-slate-900 text-base">
                      {CLINIC_INFO.formattedPhone}
                    </span>
                    <span className="text-[11px] text-teal-700 block mt-0.5">
                      Available during consultation hours
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/91${CLINIC_INFO.whatsapp}?text=${encodeURIComponent('Hello Dr. Dhir, I would like to inquire about dental care at Tviṣā Dental Care, Cuttack.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-emerald-50/70 border border-emerald-200 bg-emerald-50/30 transition-colors group"
                >
                  <div className="p-3 bg-emerald-100 text-emerald-800 rounded-xl shrink-0 group-hover:bg-emerald-200 transition-colors">
                    <MessageSquare className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <span className="text-emerald-700 font-medium block text-xs">Instant WhatsApp Message</span>
                    <span className="font-bold text-emerald-900 text-base">
                      {CLINIC_INFO.formattedWhatsapp}
                    </span>
                    <span className="text-[11px] text-emerald-800 block mt-0.5">
                      Send messages, treatment queries, or reports
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 border border-slate-200 transition-colors group"
                >
                  <div className="p-3 bg-slate-100 text-slate-700 rounded-xl shrink-0 group-hover:bg-slate-200 transition-colors">
                    <Mail className="w-5 h-5 text-slate-700" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-slate-500 block text-xs">Official Email</span>
                    <span className="font-bold text-slate-900 text-sm truncate block">
                      {CLINIC_INFO.email}
                    </span>
                  </div>
                </a>
              </div>

              {/* Location & Credentials Badge */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                <div className="flex items-center gap-2 text-slate-800 font-semibold">
                  <MapPin className="w-4 h-4 text-teal-700" />
                  <span>Location: Cuttack, Odisha, India</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-teal-700" />
                  <span>Registration No.: 3414 - A (Dr. Trailokya Dhir)</span>
                </div>
                <div className="text-slate-500 text-[11px]">
                  Affiliated with K.I.D.S & Ashwini Trauma Center, Cuttack.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
