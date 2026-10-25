import React from 'react';
import { Award, BookOpen, HeartHandshake, Phone, MessageSquare, Mail, ShieldCheck, CheckCircle } from 'lucide-react';
import { CLINIC_INFO, TESTIMONIALS } from '../data/clinicData';
import { TvisaLogo } from './TvisaLogo';

export const DoctorBioSection: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-slate-50 border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
            <span>Clinical Leadership</span>
            <span aria-hidden="true">·</span>
            <span>Regd No. 3414 - A</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Meet Dr. Trailokya Dhir
          </h2>
          <p className="mt-2 text-base text-teal-900 font-semibold font-heading">
            Sr. Lecturer K.I.D.S · Consultant Ashwini Trauma Center, Cuttack
          </p>
        </div>

        {/* 2-Column Doctor Profile Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Visual Card with credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center gap-4 pb-6 border-b border-slate-100">
                <TvisaLogo size="md" variant="icon" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Dr. Trailokya Dhir</h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Prosthodontist, Implantologist & Trauma Specialist
                  </p>
                  <p className="text-[11px] font-mono text-teal-800 font-bold mt-1">
                    State Council Regd No. 3414 - A
                  </p>
                </div>
              </div>

              {/* Verified Roles */}
              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-teal-50 text-teal-800 rounded-lg shrink-0 mt-0.5">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Senior Lecturer</h4>
                    <p className="text-xs text-slate-600">
                      Kalinga Institute of Dental Sciences (K.I.D.S)
                    </p>
                    <p className="text-xs text-teal-800 font-medium">
                      Department of Crown, Bridge & Implantology
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-rose-50 text-rose-800 rounded-lg shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Consultant Practitioner</h4>
                    <p className="text-xs text-slate-600">
                      Ashwini Trauma Center, Cuttack
                    </p>
                    <p className="text-xs text-rose-800 font-medium">
                      Dentoalveolar trauma, emergency replantation & facial reconstruction
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-amber-50 text-amber-800 rounded-lg shrink-0 mt-0.5">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Founder & Chief Clinician</h4>
                    <p className="text-xs text-slate-600">
                      Tviṣā Dental Care (ତ୍ୱିଷା by Dr. Dhir)
                    </p>
                    <p className="text-xs text-amber-800 font-medium">
                      Advanced private operatory in Cuttack
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Doctor Contact Block */}
              <div className="mt-6 pt-5 border-t border-slate-100 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Call Directly:</span>
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="font-bold text-teal-900 hover:underline flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3" />
                    <span>{CLINIC_INFO.formattedPhone}</span>
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">WhatsApp:</span>
                  <a
                    href={`https://wa.me/91${CLINIC_INFO.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-700 hover:underline flex items-center gap-1"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>{CLINIC_INFO.formattedWhatsapp}</span>
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Email:</span>
                  <a
                    href={`mailto:${CLINIC_INFO.email}`}
                    className="font-medium text-slate-700 hover:underline truncate max-w-[200px]"
                  >
                    {CLINIC_INFO.email}
                  </a>
                </div>
              </div>

              <div className="mt-5">
                <a
                  href={`https://wa.me/91${CLINIC_INFO.whatsapp}?text=${encodeURIComponent('Hello Dr. Dhir, I would like to consult with you at Tviṣā Dental Care, Cuttack.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-teal-800 hover:bg-teal-900 text-white rounded-xl text-xs font-semibold transition-colors text-center flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Connect with Dr. Dhir on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative and Principles (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-5 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Academic Rigour Meets Gentle Chairside Care
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                As a Senior Lecturer in the Department of Crown, Bridge & Implantology at K.I.D.S
                (Kalinga Institute of Dental Sciences), Dr. Trailokya Dhir combines active teaching,
                peer-reviewed prosthodontic methodology, and cutting-edge restorative dental technology.
                His clinical work centers on providing patients with enduring dental restorations that
                match natural tooth acoustics, biting force, and gingival margins.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                In his parallel appointment as Consultant at Ashwini Trauma Center, Cuttack, Dr. Dhir
                regularly manages high-urgency maxillofacial and dentoalveolar injuries, including
                fractured incisors, avulsed teeth requiring immediate replantation, and stabilization
                of displaced alveolar bone. This trauma background equips Tviṣā Dental Care with rapid
                crisis triage protocols seldom available in routine private dental practices.
              </p>

              {/* 4 Pillars of Practice */}
              <div className="pt-2">
                <h4 className="text-xs uppercase tracking-wider font-bold text-teal-800 mb-3">
                  Core Clinical Principles
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-semibold">Hospital-Grade Sterilization</strong>
                      <span className="text-slate-500">Class-B vacuum autoclave disinfection for every individual patient tray.</span>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-semibold">Minimally Invasive Philosophy</strong>
                      <span className="text-slate-500">Preserving as much natural tooth enamel and biological bone as possible.</span>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-semibold">Painless Anesthesia</strong>
                      <span className="text-slate-500">Computerized cartridge warming and topical numbing prior to all procedures.</span>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-semibold">Biocompatible Materials</strong>
                      <span className="text-slate-500">Certified medical-grade titanium and high-translucency multilayer zirconia.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Patient Testimonials */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900">
                Patient Feedback from Cuttack & Odisha
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TESTIMONIALS.slice(0, 2).map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs flex flex-col justify-between"
                  >
                    <p className="text-xs text-slate-600 italic leading-relaxed mb-3">
                      &ldquo;{item.text}&rdquo;
                    </p>
                    <div className="pt-2 border-t border-slate-100 text-xs">
                      <span className="font-bold text-slate-900 block">{item.name}</span>
                      <span className="text-slate-400 text-[11px]">{item.location} · {item.treatment}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
