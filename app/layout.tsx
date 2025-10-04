import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: 'Jogja Waras Platform',
  description: 'Platform layanan kesehatan terpadu Yogyakarta',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>
        <Nav />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
