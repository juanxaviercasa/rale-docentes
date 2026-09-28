import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Semillero Docente 2026 · Docentes Fundadores | RALE Pre-Militar',
  description: 'Convocatoria de Docentes Fundadores y Pasantía Pre-Profesional Ad Honorem. Acredita tus prácticas universitarias y prepárate con cadetes de las FF.AA. y PNP.',
  openGraph: {
    title: 'Semillero Docente 2026 · Docentes Fundadores | RALE Pre-Militar',
    description: 'Acredita tus Prácticas Pre-Profesionales (2-4 hrs/sem) y sé Docente Fundador de la Academia Pre-Militar RALE.',
    url: 'https://raledocentes.sistemazenit.com',
    siteName: 'RALE Pre-Militar',
    locale: 'es_PE',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
