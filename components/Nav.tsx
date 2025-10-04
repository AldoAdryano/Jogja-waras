"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Logo } from './Logo';

const links = [
  { href: '/', label: 'Beranda' },
  { href: '/booking', label: 'Booking' },
  { href: '/telekonsultasi', label: 'Telekonsultasi' },
  { href: '/rekam-medis', label: 'Rekam Medis' },
  { href: '/pengingat', label: 'Pengingat' },
  { href: '/edukasi', label: 'Edukasi' },
  { href: '/admin', label: 'Admin' }
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'; else document.body.style.overflow = '';
  }, [open]);

  return (
    <header className={`nav ${open ? 'open' : ''}`}>
      <div className="brand"><Logo size={28} /> Jogja Waras</div>
      <button aria-label="Menu" className="nav-toggle" onClick={() => setOpen(o => !o)}>
        <span></span>
      </button>
      <nav className={`nav-menu ${open ? 'mobile' : ''}`} onClick={() => open && setOpen(false)}>
        {links.map(l => (
          <Link key={l.href} href={l.href}>{l.label}</Link>
        ))}
      </nav>
    </header>
  );
}
