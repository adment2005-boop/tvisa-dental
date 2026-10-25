import React from 'react';

interface TvisaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: string;
  variant?: 'full' | 'icon' | 'badge';
}

export const TvisaLogo: React.FC<TvisaLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  textColor = 'text-slate-800',
  variant = 'full',
}) => {
  const iconDimensions = {
    sm: 'w-7 h-8',
    md: 'w-9 h-11',
    lg: 'w-14 h-16',
    xl: 'w-20 h-24',
  }[size];

  const textStyles = {
    sm: {
      brand: 'text-lg leading-tight tracking-tight',
      subtitle: 'text-[9px] tracking-wide',
      odia: 'text-[10px]',
    },
    md: {
      brand: 'text-2xl leading-none tracking-tight font-semibold',
      subtitle: 'text-xs tracking-normal font-medium',
      odia: 'text-xs font-normal',
    },
    lg: {
      brand: 'text-3xl leading-none tracking-tight font-bold',
      subtitle: 'text-sm tracking-wide font-medium',
      odia: 'text-sm font-normal',
    },
    xl: {
      brand: 'text-4xl md:text-5xl leading-none tracking-tight font-bold',
      subtitle: 'text-base md:text-lg tracking-wide font-medium',
      odia: 'text-base font-normal',
    },
  }[size];

  // SVG representation matching the signage in /public/assets/aistudio/image_ef756f3d.png
  // Features:
  // 1. Deep teal/sage tooth outline (#24665C)
  // 2. Orthodontic archwire with twin brackets on the upper crown
  // 3. Bronze/terracotta curved implant ridges (#C38865) on the bottom left root
  // 4. Graceful right root contour
  const LogoIcon = (
    <svg
      viewBox="0 0 100 120"
      className={`${iconDimensions} flex-shrink-0 transition-transform duration-200`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Tviṣā Dental Care emblem featuring tooth with orthodontic brackets and implant ridges"
    >
      <title>Tviṣā Dental Care Logo</title>

      {/* Main Tooth Outer Outline in Deep Surgical Teal */}
      <path
        d="M26 38 C 24 20, 42 16, 50 20 C 58 16, 76 20, 74 38 C 72 56, 75 80, 52 105 C 47 101, 46 88, 47 78 C 47 67, 43 62, 38 62 C 34 62, 28 65, 27 75"
        stroke="#23655A"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Left upper crown contour */}
      <path
        d="M27 38 C 27 50, 29 60, 30 65"
        stroke="#23655A"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Orthodontic Archwire across upper teeth */}
      <path
        d="M30 46 C 42 54, 58 54, 70 46"
        stroke="#1E5249"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Left Orthodontic Bracket */}
      <rect
        x="36"
        y="42"
        width="7.5"
        height="7.5"
        rx="1"
        fill="#23655A"
      />

      {/* Right Orthodontic Bracket */}
      <rect
        x="56.5"
        y="42"
        width="7.5"
        height="7.5"
        rx="1"
        fill="#23655A"
      />

      {/* Dental Implant Grooves / Ridges on the left root in warm bronze / copper (#C38865) */}
      <g stroke="#C38865" strokeWidth="3.2" strokeLinecap="round">
        {/* Ridge 1 */}
        <path d="M28 73 C 33 76, 39 76, 44 72" />
        {/* Ridge 2 */}
        <path d="M29 82 C 33 85, 38 85, 43 81" />
        {/* Ridge 3 */}
        <path d="M29 90 C 33 93, 37 93, 41 89" />
        {/* Ridge 4 */}
        <path d="M30 98 C 33 100, 36 100, 39 97" />
      </g>
    </svg>
  );

  if (variant === 'icon') {
    return <div className={`inline-flex items-center ${className}`}>{LogoIcon}</div>;
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {LogoIcon}
      {showText && (
        <div className="flex flex-col justify-center">
          <div className="flex items-baseline gap-2">
            <span
              className={`font-semibold tracking-tight ${textColor} ${textStyles.brand} font-heading`}
              style={{ letterSpacing: '-0.02em' }}
            >
              tviṣā
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <span className={`text-slate-600 font-medium ${textStyles.odia}`}>
              ତ୍ୱିଷା
            </span>
            <span className="text-slate-300">·</span>
            <span
              className={`italic text-slate-500 font-medium ${textStyles.subtitle}`}
              style={{ fontFamily: 'Georgia, serif' }}
            >
              by Dr. Dhir
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
