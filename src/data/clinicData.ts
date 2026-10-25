export interface TreatmentItem {
  id: string;
  category: 'implant-crown' | 'orthodontics' | 'trauma' | 'general' | 'cosmetic';
  categoryLabel: string;
  title: string;
  subtitle: string;
  description: string;
  keyBenefits: string[];
  duration: string;
  recovery: string;
  candidates: string;
  altText: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'implant' | 'emergency' | 'timing';
}

export const CLINIC_INFO = {
  brandName: 'tviṣā',
  brandSuffix: 'by Dr. Dhir',
  odiaName: 'ତ୍ୱିଷା',
  tagline: 'Centre for Advanced Crown, Bridge, Implantology & Trauma Dental Care',
  doctorName: 'Dr. Trailokya Dhir',
  academicTitle: 'Sr. Lecturer K.I.D.S (Kalinga Institute of Dental Sciences)',
  department: 'Dept. of Crown, Bridge & Implantology',
  hospitalRole: 'Consultant Ashwini Trauma Center, Cuttack',
  registrationNumber: '3414 - A',
  phone: '8249805730',
  formattedPhone: '+91 8249805730',
  whatsapp: '7204478451',
  formattedWhatsapp: '+91 7204478451',
  email: 'samanttrailokyadhir@gmail.com',
  city: 'Cuttack',
  state: 'Odisha',
  country: 'India',
  hours: {
    weekdays: {
      days: 'Monday to Saturday',
      morning: '9:30 AM to 1:00 PM',
      evening: '4:00 PM to 8:30 PM',
    },
    sunday: {
      days: 'Sunday',
      timing: '10:00 AM to 2:00 PM',
    },
    emergency: 'Emergency trauma coordination with Ashwini Trauma Center, Cuttack',
  },
  signboardImage: '/assets/aistudio/image_ef756f3d.png',
};

export const TREATMENTS: TreatmentItem[] = [
  {
    id: 'dental-implants',
    category: 'implant-crown',
    categoryLabel: 'Crown & Implantology',
    title: 'Precision Dental Implants',
    subtitle: 'Permanent, lifelike tooth replacement anchored in bone',
    description:
      'State-of-the-art titanium and zirconia dental implants offering lifelong stability for single, multiple, or full-arch tooth loss. Implants preserve jawbone structure and restore 100% natural chewing force.',
    keyBenefits: [
      'Preserves facial structure & prevents bone atrophy',
      'Looks, feels, and functions identical to natural teeth',
      'No need to file down adjacent healthy teeth',
      'Computer-guided implant placement for minimal invasiveness',
    ],
    duration: '45–60 minutes per implant',
    recovery: 'Normal routine within 24–48 hours; osseointegration over 8–12 weeks',
    candidates: 'Patients with missing teeth or loose dentures who have adequate jawbone density.',
    altText: 'Dental implant restoration diagram showing titanium fixture and porcelain crown',
    iconName: 'Sparkles',
  },
  {
    id: 'crowns-bridges',
    category: 'implant-crown',
    categoryLabel: 'Crown & Implantology',
    title: 'Custom Ceramic Crowns & Fixed Bridges',
    subtitle: 'High-strength monolithic zirconia & aesthetic ceramic restorations',
    description:
      'Crafted by Dr. Dhir utilizing advanced prosthodontic principles. We reinforce severely decayed or fractured teeth and bridge gaps seamlessly using biocompatible CAD/CAM zirconia and E-max ceramic materials.',
    keyBenefits: [
      'High fracture resistance with lifelike translucency',
      'Precise marginal seal protecting tooth from secondary decay',
      'Custom shade matching to your existing enamel',
      'Fixed non-removable solution for missing tooth gaps',
    ],
    duration: '2 visits (preparation & final cementation)',
    recovery: 'Immediate function; mild sensitivity settles in 2 days',
    candidates: 'Teeth following root canal treatment, large fractures, or missing single teeth.',
    altText: 'Zirconia dental crown fitting smoothly on prepared molar tooth',
    iconName: 'Shield',
  },
  {
    id: 'orthodontics-braces',
    category: 'orthodontics',
    categoryLabel: 'Orthodontics & Alignment',
    title: 'Orthodontics, Braces & Aligners',
    subtitle: 'Correction of crooked, crowded teeth, overbites & spacing',
    description:
      'Symbolized on the clinic mark by precision bracket architecture. We provide metallic braces, clear aesthetic ceramic brackets, and invisible aligners to achieve an aligned bite and harmonious facial aesthetics.',
    keyBenefits: [
      'Corrects crowding, crossbites, and deep bites',
      'Greatly improves oral hygiene access and gum longevity',
      'Aesthetic ceramic options for adults and working professionals',
      'Custom orthodontic force mechanics tailored for gentle movement',
    ],
    duration: '12–18 months average treatment duration',
    recovery: 'Mild pressure adjustment for 2–3 days following monthly activations',
    candidates: 'Teens and adults with crowded, protruding, or misaligned teeth.',
    altText: 'Modern dental orthodontic brackets with archwire straightening smile',
    iconName: 'Smile',
  },
  {
    id: 'trauma-maxillofacial',
    category: 'trauma',
    categoryLabel: 'Trauma & Emergency Care',
    title: 'Dental Trauma & Maxillofacial Care',
    subtitle: 'Consultant trauma management linked with Ashwini Trauma Center, Cuttack',
    description:
      'Immediate diagnostic and reconstructive intervention for sports injuries, road accidents, facial trauma, avulsed (knocked-out) teeth, and alveolar jaw bone fractures handled with hospital-grade trauma protocols.',
    keyBenefits: [
      'Immediate stabilization of loose or luxated teeth',
      'Re-implantation of knocked-out permanent teeth if brought promptly',
      'Splinting and surgical management of alveolar bone fractures',
      'Affiliated with Ashwini Trauma Center for complex multi-disciplinary trauma',
    ],
    duration: 'Emergency immediate triage & subsequent restorative follow-up',
    recovery: 'Varies based on injury complexity; close weekly monitoring',
    candidates: 'Individuals experiencing sudden dental trauma, fractured teeth, or blow to the jaw.',
    altText: 'Clinical trauma care instrumentation for emergency dental reconstruction',
    iconName: 'Cross',
  },
  {
    id: 'root-canal',
    category: 'general',
    categoryLabel: 'Conservative Dentistry',
    title: 'Painless Single-Sitting Root Canal (RCT)',
    subtitle: 'Preserving infected or severely aching teeth from extraction',
    description:
      'Advanced rotary endodontics with electronic apex locators and digital imaging. We thoroughly disinfect the internal pulp canals and hermetically seal the tooth, relieving acute pain while saving your natural tooth.',
    keyBenefits: [
      'Completely painless under effective local anesthesia',
      'Saves the natural tooth and prevents bone infection spread',
      'Completed in a single or two gentle appointments',
      'Prepared for long-lasting protection with a custom crown',
    ],
    duration: '45–60 minutes',
    recovery: 'Instant relief from pulpitis pain; mild chew tenderness for 1–2 days',
    candidates: 'Severe toothaches, sensitivity to hot/cold, deep cavities, or abscessed gums.',
    altText: 'Micro-endodontic root canal therapy cleaning inflamed dental pulp',
    iconName: 'Activity',
  },
  {
    id: 'cosmetic-whitening',
    category: 'cosmetic',
    categoryLabel: 'Aesthetic Dentistry',
    title: 'Smile Design & In-Clinic Whitening',
    subtitle: 'Radiant smile rejuvenation with composite veneers & professional bleaching',
    description:
      'Enhance your natural smile symmetry with non-invasive aesthetic treatments. Includes professional in-office enamel bleaching for bright smiles and artistic composite veneers to mask chips, gaps, and intrinsic staining.',
    keyBenefits: [
      'Lightens stubborn coffee, tea, and tobacco stains by multiple shades',
      'Minimally invasive composite bonding for chipped edges',
      'Safe on enamel with desensitizing protocols',
      'Visible dramatic results in a single 60-minute session',
    ],
    duration: '45–60 minutes',
    recovery: 'Immediate glow; avoid colored beverages for 48 hours',
    candidates: 'Discolored teeth, fluorosis stains, minor cosmetic gaps or asymmetrical edges.',
    altText: 'Aesthetic tooth whitening shade guide comparison',
    iconName: 'Sun',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'What are the consultation hours at Tviṣā Dental Care?',
    answer:
      'We are open Monday to Saturday with two convenient sessions: Morning from 9:30 AM to 1:00 PM, and Evening from 4:00 PM to 8:30 PM. On Sundays, our clinic is open from 10:00 AM to 2:00 PM. Emergency trauma inquiries can also be coordinated directly via phone.',
    category: 'timing',
  },
  {
    question: 'How do I book an appointment with Dr. Trailokya Dhir?',
    answer:
      'You can book online directly through this website using the "Book Consultation" form, call us directly at 8249805730, or send an instant message on WhatsApp at 7204478451 with your preferred date and time slot.',
    category: 'general',
  },
  {
    question: 'What should I do if a tooth gets knocked out during an injury?',
    answer:
      'Hold the tooth only by the crown (do NOT touch the root). Gently rinse with clean water if dirty without scrubbing. If possible, place the tooth back in the socket, or store it in cold milk or saline, and reach our clinic or Ashwini Trauma Center within 30–60 minutes for the highest re-implantation success.',
    category: 'emergency',
  },
  {
    question: 'How long do dental implants last and is the procedure painful?',
    answer:
      'Dental implants boast a 95%+ success rate and can last a lifetime with proper oral hygiene. The procedure is performed under gentle local anesthesia and is virtually painless. Most patients report feeling significantly less discomfort than a standard tooth extraction.',
    category: 'implant',
  },
  {
    question: 'Why does a tooth require a crown after a Root Canal Treatment (RCT)?',
    answer:
      'After root canal therapy, the tooth loses its blood supply and becomes brittle over time. A precision zirconia or ceramic crown provides 360-degree structural reinforcement, preventing the tooth from cracking under high chewing forces.',
    category: 'general',
  },
  {
    question: 'Where is Dr. Trailokya Dhir currently affiliated?',
    answer:
      'Dr. Trailokya Dhir is a Senior Lecturer at Kalinga Institute of Dental Sciences (K.I.D.S) in the Department of Crown, Bridge & Implantology, and also serves as a Consultant at Ashwini Trauma Center, Cuttack. He holds Registration No. 3414 - A.',
    category: 'general',
  },
];

export const DOCTOR_CREDENTIALS = [
  {
    role: 'Senior Lecturer',
    institution: 'K.I.D.S (Kalinga Institute of Dental Sciences)',
    highlight: 'Department of Crown, Bridge & Implantology',
  },
  {
    role: 'Consultant Prosthodontist & Implantologist',
    institution: 'Ashwini Trauma Center, Cuttack',
    highlight: 'Specialized emergency trauma & reconstructive dental care',
  },
  {
    role: 'Certified Dental Practitioner',
    institution: 'State Dental Council',
    highlight: 'Registration No. 3414 - A',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Pradeep K. Mohapatra',
    location: 'Cuttack, Odisha',
    text: 'Dr. Trailokya Dhir performed two dental implants for my lower jaw. Being a lecturer at K.I.D.S, his clinical precision is exemplary. The process was completely painless and the crowns match my natural teeth flawlessly.',
    treatment: 'Dental Implants & Zirconia Crowns',
  },
  {
    name: 'Sunita Dash',
    location: 'Bhubaneswar / Cuttack',
    text: 'I visited Tviṣā Dental Care for acute tooth pain. Dr. Dhir performed a gentle single-sitting root canal followed by an aesthetic crown. Extremely clean clinic and punctual consultation timings.',
    treatment: 'Painless RCT & Ceramic Crown',
  },
  {
    name: 'Debashis Rout',
    location: 'Cuttack, Odisha',
    text: 'After a bike accident resulting in a chipped front tooth, I was referred to Dr. Dhir due to his trauma background at Ashwini Trauma Center. He restored my smile within a single visit. Highly recommended!',
    treatment: 'Emergency Dental Trauma Restoration',
  },
];
