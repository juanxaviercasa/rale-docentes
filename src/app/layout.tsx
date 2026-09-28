import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://raledocentes.sistemazenit.com'),
  title: 'Semillero Docente 2026 · Docentes Fundadores | RALE Pre-Militar',
  description: 'Convocatoria de Docentes Fundadores y Pasantía Pre-Profesional Ad Honorem. Acredita tus prácticas universitarias (2-4 hrs/sem) y prepárate con cadetes de las FF.AA. y PNP.',
  openGraph: {
    title: 'Semillero Docente 2026 · Docentes Fundadores | RALE Pre-Militar',
    description: 'Acredita tus Prácticas Pre-Profesionales (2-4 hrs/sem) y sé Docente Fundador de la Academia Pre-Militar RALE.',
    url: 'https://raledocentes.sistemazenit.com',
    siteName: 'RALE Pre-Militar',
    locale: 'es_PE',
    type: 'website',
    images: [
      {
        url: '/images/hero-edtech.jpg',
        width: 1200,
        height: 630,
        alt: 'Semillero Docente Academia Pre-Militar RALE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Semillero Docente 2026 · Docentes Fundadores | RALE Pre-Militar',
    description: 'Acredita tus Prácticas Pre-Profesionales (2-4 hrs/sem) y sé Docente Fundador de la Academia Pre-Militar RALE.',
    images: ['/images/hero-edtech.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
