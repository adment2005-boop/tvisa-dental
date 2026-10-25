import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { DoctorBioSection } from './components/DoctorBioSection';
import { PatientGuideSection } from './components/PatientGuideSection';
import { ContactHoursSection } from './components/ContactHoursSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { CLINIC_INFO } from './data/clinicData';
import { Phone, MessageSquare, ChevronRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');

  // Handle page navigation
  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-teal-700 selection:text-white">
      {/* Skip to Main Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-teal-800 focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>

      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleNavigate}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {activeTab === 'home' && (
          <>
            {/* Hero Section */}
            <HeroSection
              onNavigateToTab={handleNavigate}
            />

            {/* Credential & Specialty Bar */}
            <section className="bg-teal-900 text-white py-8 border-y border-teal-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div className="p-2">
                    <span className="text-2xl sm:text-3xl font-extrabold text-teal-200 block font-heading">
                      Regd 3414-A
                    </span>
                    <span className="text-xs text-teal-100 font-medium mt-1 block">
                      Dental Council Registration
                    </span>
                  </div>

                  <div className="p-2">
                    <span className="text-2xl sm:text-3xl font-extrabold text-teal-200 block font-heading">
                      K.I.D.S
                    </span>
                    <span className="text-xs text-teal-100 font-medium mt-1 block">
                      Sr. Lecturer, Crown & Bridge
                    </span>
                  </div>

                  <div className="p-2">
                    <span className="text-2xl sm:text-3xl font-extrabold text-teal-200 block font-heading">
                      Ashwini Trauma
                    </span>
                    <span className="text-xs text-teal-100 font-medium mt-1 block">
                      Hospital Consultant, Cuttack
                    </span>
                  </div>

                  <div className="p-2">
                    <span className="text-2xl sm:text-3xl font-extrabold text-teal-200 block font-heading">
                      7 Days
                    </span>
                    <span className="text-xs text-teal-100 font-medium mt-1 block">
                      Morning & Evening Consultations
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Core Specialties Preview Section on Home */}
            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                  <div>
                    <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block mb-1">
                      Department of Crown, Bridge & Implantology
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                      Core Specializations
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleNavigate('treatments')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 hover:text-teal-900"
                  >
                    <span>View All 6 Clinical Specialties</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Card 1 */}
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div>
                      <span className="text-[11px] font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded border border-teal-100">
                        Prosthodontics
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 mt-4 mb-2">
                        Dental Implants & Bone Preservation
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Permanent titanium and zirconia root replacement restoring chewing function and facial contours without altering adjacent teeth.
                      </p>
                    </div>
                    <a
                      href={`https://wa.me/91${CLINIC_INFO.whatsapp}?text=${encodeURIComponent('Hello Dr. Dhir, I would like to inquire about Dental Implants at Tviṣā Dental Care, Cuttack.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 text-xs font-semibold text-teal-800 hover:text-teal-900 inline-flex items-center gap-1"
                    >
                      <span>Inquire via WhatsApp →</span>
                    </a>
                  </div>

                  {/* Card 2 */}
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div>
                      <span className="text-[11px] font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded border border-teal-100">
                        Aesthetic Restorations
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 mt-4 mb-2">
                        CAD/CAM Ceramic Crowns & Bridges
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Precision-milled zirconia crowns reinforcing post-RCT and fractured teeth with seamless natural shade matching.
                      </p>
                    </div>
                    <a
                      href={`https://wa.me/91${CLINIC_INFO.whatsapp}?text=${encodeURIComponent('Hello Dr. Dhir, I would like to inquire about Crowns & Bridges at Tviṣā Dental Care, Cuttack.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 text-xs font-semibold text-teal-800 hover:text-teal-900 inline-flex items-center gap-1"
                    >
                      <span>Inquire via WhatsApp →</span>
                    </a>
                  </div>

                  {/* Card 3 */}
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div>
                      <span className="text-[11px] font-bold text-rose-800 bg-rose-50 px-2.5 py-1 rounded border border-rose-100">
                        Trauma Center
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 mt-4 mb-2">
                        Emergency Dental Trauma & Replantation
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Immediate surgical splinting, tooth re-implantation, and trauma reconstruction backed by Ashwini Trauma Center affiliation.
                      </p>
                    </div>
                    <a
                      href={`tel:${CLINIC_INFO.phone}`}
                      className="mt-6 text-xs font-semibold text-rose-800 hover:text-rose-900 inline-flex items-center gap-1"
                    >
                      <span>Call for Trauma Support →</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Consultation Timings Callout Strip */}
            <section className="bg-slate-100 py-12 border-t border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
                      Visit Tviṣā Dental Care
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      Need a Dental Consultation in Cuttack?
                    </h3>
                    <p className="text-xs text-slate-600 max-w-xl">
                      Monday to Saturday: 9:30 AM–1:00 PM & 4:00 PM–8:30 PM · Sunday: 10:00 AM–2:00 PM.
                      Direct consultations with Dr. Trailokya Dhir.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 shrink-0">
                    <a
                      href={`tel:${CLINIC_INFO.phone}`}
                      className="px-5 py-3 bg-teal-800 hover:bg-teal-900 text-white text-xs font-semibold rounded-xl transition-all shadow-sm flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call {CLINIC_INFO.phone}</span>
                    </a>
                    <a
                      href={`https://wa.me/91${CLINIC_INFO.whatsapp}?text=${encodeURIComponent('Hello Dr. Dhir, I would like to inquire about consultation timings at Tviṣā Dental Care, Cuttack.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl transition-all shadow-sm flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp {CLINIC_INFO.whatsapp}</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Page 2: Treatments & Specialties */}
        {activeTab === 'treatments' && <TreatmentsSection />}

        {/* Page 3: About Dr. Trailokya Dhir */}
        {activeTab === 'about' && <DoctorBioSection />}

        {/* Page 4: Patient Guide & FAQ */}
        {activeTab === 'guide' && <PatientGuideSection />}

        {/* Page 5: Consultation Hours & Contact */}
        {activeTab === 'contact' && <ContactHoursSection />}
      </main>

      {/* Footer */}
      <Footer onNavigateToTab={handleNavigate} />

      {/* Persistent Mobile Bottom Action Bar */}
      <MobileBottomBar />
    </div>
  );
}
