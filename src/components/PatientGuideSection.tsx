import React, { useState } from 'react';
import { FAQS } from '../data/clinicData';
import { ChevronDown, AlertTriangle, FileText, CheckCircle2, HeartPulse, Sparkles } from 'lucide-react';

export const PatientGuideSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeGuideTab, setActiveGuideTab] = useState<'first-visit' | 'emergency' | 'post-op'>('first-visit');

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="guide" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
            <span>Patient Resources & FAQ</span>
            <span aria-hidden="true">·</span>
            <span>Educational Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Patient Care Guide & Emergency Protocols
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Clear, actionable instructions to help you prepare for your consultation,
            manage urgent dental conditions safely, and care for restorations post-treatment.
          </p>
        </div>

        {/* Guide Segmented Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-xl max-w-xl mb-8">
          <button
            type="button"
            onClick={() => setActiveGuideTab('first-visit')}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-all ${
              activeGuideTab === 'first-visit'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            First Visit Roadmap
          </button>
          <button
            type="button"
            onClick={() => setActiveGuideTab('emergency')}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-all ${
              activeGuideTab === 'emergency'
                ? 'bg-rose-700 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Emergency Trauma Guide
          </button>
          <button
            type="button"
            onClick={() => setActiveGuideTab('post-op')}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-all ${
              activeGuideTab === 'post-op'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Post-Op Recovery Tips
          </button>
        </div>

        {/* Tab 1: First Visit Roadmap */}
        {activeGuideTab === 'first-visit' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block mb-2">
                Step 01
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Digital Examination & History
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Comprehensive inspection of your teeth, gums, and bite. We review past medical records,
                allergies, and capture high-resolution digital radiographs if needed.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block mb-2">
                Step 02
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Transparent Diagnosis & Treatment Plan
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dr. Trailokya Dhir presents clear restorative options (implants, crowns, or conservative care)
                with exact timelines, material options, and transparent cost breakdown.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block mb-2">
                Step 03
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Gentle Execution & Ongoing Follow-up
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Procedures are scheduled at your convenience during morning or evening slots.
                We provide round-the-clock WhatsApp support for any post-treatment questions.
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Emergency Trauma Guide */}
        {activeGuideTab === 'emergency' && (
          <div className="bg-rose-50/60 border border-rose-200 rounded-2xl p-6 sm:p-8 mb-16 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-rose-100 text-rose-800 rounded-xl">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-rose-950">
                  Immediate Dental Emergency Protocols
                </h3>
                <p className="text-xs text-rose-800">
                  In association with Ashwini Trauma Center, Cuttack
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700">
              <div className="bg-white p-5 rounded-xl border border-rose-200/70">
                <h4 className="font-bold text-slate-900 text-sm mb-2 text-rose-950">
                  Knocked-Out (Avulsed) Tooth
                </h4>
                <ul className="space-y-1.5 list-disc list-inside text-slate-600">
                  <li>Hold ONLY the crown; do not touch root fibers.</li>
                  <li>Do NOT scrub or dry the tooth with tissue.</li>
                  <li>Store in cold fresh milk, saliva, or sterile saline.</li>
                  <li>Reach clinic within 30–60 minutes for reimplantation.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl border border-rose-200/70">
                <h4 className="font-bold text-slate-900 text-sm mb-2 text-rose-950">
                  Severe Fractured Tooth / Bleeding
                </h4>
                <ul className="space-y-1.5 list-disc list-inside text-slate-600">
                  <li>Rinse mouth gently with lukewarm salt water.</li>
                  <li>Apply clean sterile gauze with gentle pressure.</li>
                  <li>Apply cold compress to outer cheek to minimize swelling.</li>
                  <li>Call Dr. Dhir immediately at 8249805730.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl border border-rose-200/70">
                <h4 className="font-bold text-slate-900 text-sm mb-2 text-rose-950">
                  Acute Throbbing Toothache
                </h4>
                <ul className="space-y-1.5 list-disc list-inside text-slate-600">
                  <li>Gently floss to remove trapped food debris.</li>
                  <li>Do NOT place aspirin tablets directly on gum tissue.</li>
                  <li>Take prescribed paracetamol or call for prescription.</li>
                  <li>Schedule emergency single-sitting endodontic RCT.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Post-Op Care */}
        {activeGuideTab === 'post-op' && (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 mb-16">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              Post-Procedure Home Care Instructions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600">
              <div className="bg-white p-5 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700" />
                  <span>After Dental Implant Placement</span>
                </h4>
                <ul className="space-y-2 leading-relaxed">
                  <li>• Maintain gentle bite pressure on gauze pack for 45 minutes.</li>
                  <li>• Avoid drinking through a straw or vigorous spitting for 48 hours.</li>
                  <li>• Consume soft, cool foods (yogurt, khichdi, smoothies) for 2–3 days.</li>
                  <li>• Begin gentle warm salt water rinses 24 hours after surgery.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700" />
                  <span>After Crown or Bridge Cementation</span>
                </h4>
                <ul className="space-y-2 leading-relaxed">
                  <li>• Avoid sticky or extremely hard foods for the first 24 hours.</li>
                  <li>• Mild temperature sensitivity is normal and diminishes over 48 hours.</li>
                  <li>• Clean under bridge pontics using specialized super-floss or interdental brush.</li>
                  <li>• If bite feels high or uneven, visit for a 2-minute minor adjustment.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* FAQs Accordion */}
        <div className="mt-12 max-w-4xl">
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-6">
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:bg-slate-50"
                  >
                    <span className="text-sm font-bold text-slate-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-teal-800' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
