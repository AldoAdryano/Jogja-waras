import Image from 'next/image';
import { useState } from 'react';

interface LogoProps { size?: number; stacked?: boolean; showText?: boolean; }
export function Logo({ size = 40, stacked=false, showText=false }: LogoProps) {
  const [imgErr, setImgErr] = useState(false);
  const content = imgErr ? (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="Jogja Waras Logo">
      <circle cx="32" cy="32" r="30" fill="#fff" stroke="#6CD664" strokeWidth="4" />
      <path d="M20 36c0-8 5-14 12-14s12 6 12 14c0 6-4 10-12 10-5 0-8-2-10-5" fill="none" stroke="#6CD664" strokeWidth="5" strokeLinecap="round" />
      <path d="M24 18h16l-2.5 6h-11z" fill="#FF7A00" />
    </svg>
  ) : (
    <Image
      src="/assets/brand/logo-full.png"
      alt="Jogja Waras Logo"
      width={size}
      height={size}
      onError={() => setImgErr(true)}
      style={{width:size, height:size, objectFit:'contain'}}
      priority
    />
  );
  return (
    <div style={{display:'flex', flexDirection: stacked? 'column':'row', alignItems: stacked? 'center':'center', gap: stacked? 4:8}}>
      {content}
      {showText && (
        <span style={{fontSize: size*0.42, fontWeight:700, letterSpacing:'.5px', color:'var(--color-primary)'}}>JOGJA WARAS</span>
      )}
    </div>
  );
}