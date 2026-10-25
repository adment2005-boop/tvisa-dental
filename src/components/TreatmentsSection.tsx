import React, { useState } from 'react';
import { TREATMENTS } from '../data/clinicData';
import { CLINIC_INFO } from '../data/clinicData';
import { Sparkles, Shield, Smile, Cross, Activity, Sun, CheckCircle2, ChevronRight, HelpCircle, MessageSquare } from 'lucide-react';

export const TreatmentsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>('dental-implants');

  // Self-checker state
  const [concern, setConcern] = useState<string>('');

  const filterTabs = [
    { id: 'all', label: 'All Services' },
    { id: 'implant-crown', label: 'Crowns & Implants' },
    { id: 'orthodontics', label: 'Orthodontics & Braces' },
    { id: 'trauma', label: 'Trauma & Emergency' },
    { id: 'general', label: 'RCT & Conservative' },
    { id: 'cosmetic', label: 'Aesthetics & Whitening' },
  ];

  const filteredTreatments = selectedFilter === 'all'
    ? TREATMENTS
    : TREATMENTS.filter((t) => t.category === selectedFilter);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-teal-700" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-teal-700" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-teal-700" />;
      case 'Cross':
        return <Cross className="w-5 h-5 text-rose-700" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-teal-700" />;
      case 'Sun':
        return <Sun className="w-5 h-5 text-amber-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-teal-700" />;
    }
  };

  return (
    <section id="treatments" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
            <span>Specialized Dental Practice</span>
            <span aria-hidden="true">·</span>
            <span>Dept. of Crown, Bridge & Implantology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Comprehensive Dental Services & Advanced Procedures
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Every procedure at Tviṣā Dental Care adheres to academic prosthodontic protocols,
            gentle painless anesthesia, and biocompatible materials designed for lifelong oral function.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-slate-100 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedFilter === tab.id
                  ? 'bg-teal-800 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTreatments.map((treatment) => {
            const isExpanded = expandedId === treatment.id;

            return (
              <div
                key={treatment.id}
                className="bg-slate-50/60 rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-teal-700/40 hover:bg-white hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-xs">
                      {getIcon(treatment.iconName)}
                    </div>
                    <span className="text-[11px] font-medium text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-100/60">
                      {treatment.categoryLabel}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {treatment.title}
                  </h3>
                  <p className="text-xs text-teal-800 font-medium mt-0.5 mb-3">
                    {treatment.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {treatment.description}
                  </p>

                  {/* Key Clinical Benefits */}
                  <div className="space-y-1.5 mb-5">
                    {treatment.keyBenefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Extended details toggle */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-slate-200 text-xs space-y-2 bg-white/70 p-3 rounded-xl">
                      <div>
                        <strong className="text-slate-800">Duration: </strong>
                        <span className="text-slate-600">{treatment.duration}</span>
                      </div>
                      <div>
                        <strong className="text-slate-800">Recovery: </strong>
                        <span className="text-slate-600">{treatment.recovery}</span>
                      </div>
                      <div>
                        <strong className="text-slate-800">Ideal For: </strong>
                        <span className="text-slate-600">{treatment.candidates}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-5 mt-4 border-t border-slate-200/60 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setExpandedId(isExpanded ? null : treatment.id)}
                    className="text-xs font-semibold text-slate-600 hover:text-teal-800 transition-colors"
                  >
                    {isExpanded ? 'Less Details' : 'Clinical Details'}
                  </button>

                  <a
                    href={`https://wa.me/91${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(`Hello Dr. Dhir, I would like to inquire about ${treatment.title} at Tviṣā Dental Care, Cuttack.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-teal-800 hover:bg-teal-900 text-white rounded-lg text-xs font-semibold transition-colors active:scale-95"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Dental Assessment Guide */}
        <div className="mt-16 bg-gradient-to-r from-teal-900 to-teal-950 text-white rounded-2xl p-6 sm:p-10 shadow-lg">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-wider text-teal-300 font-bold flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4" />
              <span>Not Sure Which Dental Procedure You Need?</span>
            </span>
            <h3 className="text-2xl font-bold mt-2 text-white">
              Quick Patient Symptom Navigator
            </h3>
            <p className="text-sm text-teal-100 mt-2 leading-relaxed">
              Select what describes your situation best to see Dr. Dhir&apos;s recommended clinical pathway:
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                id: 'missing',
                title: 'Missing One or More Teeth',
                rec: 'Dental Implants or Fixed Zirconia Bridge',
                action: 'Dental Implants',
              },
              {
                id: 'crooked',
                title: 'Crowded or Crooked Teeth',
                rec: 'Orthodontic Braces or Invisible Aligners',
                action: 'Orthodontics & Teeth Alignment',
              },
              {
                id: 'pain',
                title: 'Throbbing Tooth Pain or Abscess',
                rec: 'Painless Single-Sitting RCT + Reinforcing Crown',
                action: 'Root Canal Treatment (RCT)',
              },
              {
                id: 'trauma',
                title: 'Sports / Road Accident Injury',
                rec: 'Immediate Maxillofacial Trauma & Re-implantation',
                action: 'Emergency Dental Trauma / Accidental Injury',
              },
            ].map((item) => (
              <div
                key={item.id}
                onClick={() => setConcern(item.id)}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  concern === item.id
                    ? 'bg-teal-800/90 border-teal-300 text-white'
                    : 'bg-white/10 hover:bg-white/15 border-white/10 text-teal-50'
                }`}
              >
                <h4 className="text-sm font-bold">{item.title}</h4>
                <p className="text-xs text-teal-200 mt-2">{item.rec}</p>
                <a
                  href={`https://wa.me/91${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(`Hello Dr. Dhir, I would like to consult about ${item.title} (${item.rec}) at Tviṣā Dental Care, Cuttack.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="mt-3 text-xs font-semibold text-white underline hover:text-teal-200 inline-flex items-center gap-1"
                >
                  WhatsApp Inquiry →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
