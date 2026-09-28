'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { 
  Shield, Laptop, Award, Clock, Zap, FileCheck, CheckCircle2, 
  ChevronRight, ExternalLink, Menu, X, Sparkles, Users, 
  GraduationCap, TrendingUp, Check, ChevronDown, MessageCircle, Star,
  Calculator, ArrowDown, Gift, ShieldCheck, Scale
} from 'lucide-react';

import SpotlightCard from './SpotlightCard';
import HoursCalculator from './HoursCalculator';
import ProfileEvaluator from './ProfileEvaluator';
import EdTechStackTabs from './EdTechStackTabs';
import InstitutionsMarquee from './InstitutionsMarquee';
import DynamicIslandBar from './DynamicIslandBar';

const WA_LINK = 'https://chat.whatsapp.com/DOpudOHiXs7DKsmAo1KeM5?s=cl&p=a&mlu=4&ilr=4'; 

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

function useScrollReveal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const controls = useAnimation();
  useEffect(() => { 
    if (isInView) controls.start('visible'); 
  }, [isInView, controls]);
  return { ref, controls };
}

function CTAButton({ 
  size = 'md', 
  text = '👉 Unirse al Semillero en WhatsApp', 
  className = '',
  href = WA_LINK,
  external = true
}: { 
  size?: 'sm' | 'md' | 'lg'; 
  text?: string; 
  className?: string;
  href?: string;
  external?: boolean;
}) {
  const sizes = { 
    sm: 'px-5 py-2.5 text-xs sm:text-sm',
    md: 'px-6 py-3.5 text-sm sm:text-base', 
    lg: 'px-8 py-4 text-base sm:text-lg' 
  };
  
  return (
    <motion.a 
      href={href} 
      target={external ? "_blank" : undefined} 
      rel={external ? "noopener noreferrer" : undefined}
      className={`relative inline-flex items-center justify-center gap-2.5 font-bold rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-600/25 border border-white/15 transition-all text-center group overflow-hidden ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.02, filter: 'brightness(1.1)' }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="absolute inset-0 w-full h-full bg-white/15 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-300 flex-shrink-0" />
      <span className="relative z-10">{text}</span>
    </motion.a>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const desktopNavLinks = [
    { label: 'Beneficios', href: '#beneficios' }, 
    { label: 'Cadetes', href: '#alumnos' },
    { label: 'Comparativa', href: '#comparativa' },
    { label: 'Calculador PPP', href: '#simulador' },
    { label: 'Preguntas', href: '#faq' }
  ];

  const allNavLinks = [
    { label: 'Beneficios del Semillero', href: '#beneficios' }, 
    { label: 'Cadetes Pre-Militares', href: '#alumnos' },
    { label: 'Comparativa de Oportunidades', href: '#comparativa' },
    { label: 'Tecnología & IA Pedagógica', href: '#tecnologia' },
    { label: 'Calculador de Horas PPP', href: '#simulador' },
    { label: 'Evaluador de Perfil', href: '#evaluador' },
    { label: 'Certificación Oficial', href: '#certificacion' }, 
    { label: 'Requisitos de Selección', href: '#requisitos' }, 
    { label: 'Preguntas Frecuentes', href: '#faq' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-obsidian-950/95 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/60' 
        : 'bg-obsidian-950/90 backdrop-blur-md border-b border-white/[0.06]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group flex-shrink-0">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden bg-obsidian-850 border border-white/10 flex items-center justify-center p-1 group-hover:border-indigo-400/50 transition-colors flex-shrink-0">
            <img 
              src="/images/rale_logo.jpg" 
              alt="Logo Academia RALE Pre-Militar" 
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <Shield className="w-5 h-5 text-indigo-400 group-hover:scale-105 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-white tracking-tight text-base sm:text-lg leading-tight">
              RALE <span className="text-cyan-400">DOCENTES</span>
            </span>
            <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
              Semillero Fundadores 2026
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links (Only xl: to ensure zero overflow) */}
        <nav aria-label="Navegación principal" className="hidden xl:flex items-center gap-7">
          {desktopNavLinks.map((l) => (
            <a 
              key={l.href} 
              href={l.href} 
              className="text-slate-300 hover:text-white text-sm font-semibold transition-colors whitespace-nowrap hover:text-cyan-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Header Action CTA */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <CTAButton 
            size="sm" 
            text="Unirse al Semillero" 
            className="hidden sm:inline-flex whitespace-nowrap"
          />
          <button 
            className="xl:hidden text-slate-300 hover:text-white p-2 rounded-xl bg-obsidian-850 border border-white/10 transition-colors" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          >
            {menuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-obsidian-950/98 backdrop-blur-2xl border-t border-white/[0.08] px-5 py-6 flex flex-col gap-3 shadow-2xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {allNavLinks.map((l) => (
                <a 
                  key={l.href} 
                  href={l.href} 
                  onClick={() => setMenuOpen(false)} 
                  className="text-slate-300 hover:text-cyan-300 text-sm font-medium py-2.5 px-3 rounded-xl hover:bg-white/[0.05] transition-colors flex items-center justify-between"
                >
                  <span>{l.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-white/[0.08]">
              <CTAButton 
                size="md" 
                text="👉 Unirse al Semillero en WhatsApp" 
                className="w-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-24 sm:pt-28 pb-16 overflow-hidden">
      {/* Background Calibrated Gradients */}
      <div 
        className="absolute inset-0 -z-10" 
        style={{ 
          background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79, 70, 229, 0.22) 0%, rgba(11, 17, 32, 0.95) 65%, #070a11 100%)' 
        }} 
      />
      <div 
        className="absolute inset-0 -z-10 opacity-10" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />
      
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-cyan-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition */}
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={stagger} 
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Eyebrow Status Badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-bold tracking-wide uppercase backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Semillero Docente 2026 · Docentes Fundadores
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Pasantía Ad Honorem Certificada · 2 a 4 hrs/sem
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl xl:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Acredita tus Prácticas Pre-Profesionales.{' '}
              <span className="bg-gradient-to-r from-indigo-300 via-cyan-300 to-white bg-clip-text text-transparent">
                Sé Docente Fundador de la Academia Pre-Militar RALE.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p variants={fadeUp} className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-normal">
              Dicta micro-bloques de <strong className="text-white font-semibold">2 a 4 horas por semana</strong> con Inteligencia Artificial. Convalida tus horas curriculares para la universidad y asegura tu pase preferente a la nómina remunerada en la fase oficial.
            </motion.p>

            {/* CTAs Container */}
            <motion.div variants={fadeUp} className="flex flex-col gap-3 pt-2">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <CTAButton size="lg" text="👉 Unirse al Semillero en WhatsApp" />
                <a
                  href="#simulador"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 text-slate-200 hover:text-white font-bold text-sm sm:text-base border border-white/10 transition-colors"
                >
                  <Calculator className="w-4 h-4 text-cyan-400" />
                  <span>Calcular Horas PPP</span>
                </a>
              </div>
              <div className="flex items-center gap-2 text-indigo-200/90 text-xs sm:text-sm font-medium bg-indigo-950/40 border border-indigo-800/40 rounded-xl px-4 py-2.5 max-w-xl">
                <span className="text-base flex-shrink-0">📢</span>
                <span>
                  <strong>Fase de Validación & Lanzamiento:</strong> Pasantía formativa modular de baja carga (2-4 hrs/sem) con constancia oficial de prácticas universitarias, bonos por alumnos referidos y prioridad #1 para contrato remunerado.
                </span>
              </div>
            </motion.div>

            {/* Trust Markers */}
            <motion.div variants={fadeUp} className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-400 border-t border-white/[0.08]">
              <div className="flex items-center gap-1.5 font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Acreditación de Prácticas PPP</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-slate-300">
                <Shield className="w-4 h-4 text-indigo-400" />
                <span>Aspirantes a: EMCH · EOFAP · PNP</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-slate-300">
                <Laptop className="w-4 h-4 text-cyan-400" />
                <span>Capacitación Gratuita en IA</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Visual Artwork with SpotlightCard */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <SpotlightCard
              className="p-2 border-indigo-500/30 bg-gradient-to-b from-indigo-500/20 via-transparent to-obsidian-950 shadow-2xl shadow-indigo-950/70"
              spotlightColor="rgba(6, 182, 212, 0.25)"
              enableTilt={true}
            >
              <div className="relative rounded-2xl overflow-hidden bg-obsidian-950 border border-white/10 aspect-[4/3] sm:aspect-[16/11]">
                <img 
                  src="/images/hero-edtech.jpg" 
                  alt="Docente Fundador RALE dictando clase virtual con analítica de IA a cadetes premilitares" 
                  className="w-full h-full object-cover brightness-95 contrast-105"
                />
                
                {/* Visual Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-black/30 pointer-events-none" />

                {/* Floating Badge 1 - Top Left */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-obsidian-950/80 backdrop-blur-md border border-white/15 text-white text-xs font-semibold shadow-lg">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  Aula Inteligente RALE
                </div>

                {/* Floating Badge 2 - Bottom Right */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2.5 p-3 rounded-2xl bg-obsidian-950/90 backdrop-blur-md border border-indigo-500/40 text-white shadow-xl max-w-[240px]">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-cyan-300 font-medium">Estatus Fundador</span>
                    <span className="text-xs font-bold text-white">Prioridad en Nómina Pagada</span>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function StatMetrics() {
  const { ref, controls } = useScrollReveal();
  const metrics = [
    { value: '2 - 4 hrs', label: 'Carga Semanal Flexible', sub: 'Micro-bloques adaptados a tus estudios' },
    { value: '100%', label: 'Válido para Prácticas', sub: 'Constancia de Horas Pedagógicas PPP' },
    { value: 'Fase Alfa', label: 'Docente Fundador', sub: 'Prioridad #1 al abrir aulas pagadas' },
    { value: 'S/. 40', label: 'Bono por Referido', sub: 'Por cada cadete matriculado' },
  ];

  return (
    <section className="py-12 border-y border-white/[0.06] bg-obsidian-900/80 backdrop-blur-md relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          ref={ref} 
          initial="hidden" 
          animate={controls} 
          variants={stagger} 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
        >
          {metrics.map((m, i) => (
            <motion.div key={i} variants={fadeUp} className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-indigo-300 via-cyan-300 to-white bg-clip-text text-transparent font-mono tabular-nums">
                {m.value}
              </span>
              <span className="text-white font-bold text-sm sm:text-base mt-1">{m.label}</span>
              <span className="text-slate-400 text-xs">{m.sub}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Authority() {
  const { ref, controls } = useScrollReveal();
  const pillars = [
    { 
      icon: <Shield className="w-6 h-6 text-indigo-400" />, 
      title: 'Cadetes Altamente Disciplinados', 
      desc: 'Postulantes decididos a ingresar a la EMCH, EOFAP y PNP. Cero problemas de indisciplina; máxima atención, respeto y compromiso en cada sesión.' 
    },
    { 
      icon: <Laptop className="w-6 h-6 text-cyan-400" />, 
      title: 'Capacitación en IA Pedagógica', 
      desc: 'Aprenderás a crear balotarios con prompts avanzados, solucionar reactivos en segundos y analizar métricas de aprendizaje sin costo alguno.' 
    },
    { 
      icon: <Award className="w-6 h-6 text-emerald-400" />, 
      title: 'Pase Preferente a Contrato Remunerado', 
      desc: 'Sé parte del equipo fundador. Al completar la validación y consolidar las primeras aulas de pago, tienes preferencia absoluta para la nómina remunerada de la academia.' 
    },
  ];

  return (
    <section id="alumnos" className="py-24 relative overflow-hidden bg-obsidian-950">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(6,182,212,0.08)_0%,transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title Header */}
        <motion.div ref={ref} initial="hidden" animate={controls} variants={stagger} className="text-center max-w-3xl mx-auto mb-16">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-700/50 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-3">
            🎖️ Prestigio Institucional
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-5xl font-black text-white leading-tight">
            No es un voluntariado sin rumbo.{' '}
            <span className="bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              Es un Semillero de Docentes Fundadores de Élite.
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 text-base sm:text-lg mt-4">
            Enseñarás a los jóvenes más enfocados del país, guiándolos en su meta de vestir los uniformes de las Fuerzas Armadas y Policía Nacional mientras construyes un portafolio pedagógico de alto impacto.
          </motion.p>
        </motion.div>

        {/* Feature Grid with Cadets Image Showcase */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Cadets Image Artwork in SpotlightCard */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <SpotlightCard
              className="p-2 border-indigo-500/30 bg-obsidian-900 shadow-2xl"
              spotlightColor="rgba(99, 102, 241, 0.25)"
              enableTilt={true}
            >
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] sm:aspect-auto sm:h-[420px]">
                <img 
                  src="/images/cadets-military.jpg" 
                  alt="Cadetes de la EMCH, EOFAP y aspirantes de la PNP en formación" 
                  className="w-full h-full object-cover brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-obsidian-950/85 backdrop-blur-md border border-white/10 text-white">
                  <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-widest block mb-0.5">
                    Semillero Pre-Militar RALE
                  </span>
                  <p className="text-xs text-slate-300 font-medium">
                    Aspirantes a la EMCH, Escuela de Oficiales FAP y Policía Nacional del Perú formándose con excelencia académica.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Pillars List */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={stagger} 
            className="lg:col-span-7 flex flex-col gap-4"
          >
            {pillars.map((p, i) => (
              <SpotlightCard 
                key={i} 
                className="p-6 border-white/[0.08] hover:border-indigo-500/40"
                spotlightColor="rgba(99, 102, 241, 0.18)"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-obsidian-850 border border-white/10 flex items-center justify-center flex-shrink-0">
                    {p.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-base sm:text-lg mb-1">
                      {p.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}

function Benefits() {
  const { ref, controls } = useScrollReveal();
  const benefits = [
    { 
      icon: <Clock className="w-6 h-6 text-indigo-400" />, 
      title: 'Micro-Dedicación Modular (2-4 hrs/sem)', 
      subtitle: 'Cero interferencia con la U', 
      desc: 'Dicta turnos cortos adaptados a tus clases universitarias y exámenes parciales. Crece sin descuidar tu avance académico.' 
    },
    { 
      icon: <FileCheck className="w-6 h-6 text-emerald-400" />, 
      title: 'Acreditación Oficial de Prácticas PPP', 
      subtitle: 'Constancia con Valor Curricular', 
      desc: 'Horas pedagógicas certificadas por la academia válidas para convalidar tus prácticas pre-profesionales y requisitos de titulación.' 
    },
    { 
      icon: <Zap className="w-6 h-6 text-cyan-400" />, 
      title: 'Capacitación en IA Pedagógica & EdTech', 
      subtitle: 'Entrenamiento Gratuito VIP', 
      desc: 'Domina prompts docentes, plataformas LMS y simulacros automatizados que multiplicarán tu cotización en el mercado laboral.' 
    },
  ];

  return (
    <section id="beneficios" className="py-24 relative bg-obsidian-900 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={stagger} className="text-center max-w-3xl mx-auto mb-16">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-700/50 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
            💎 Beneficios del Semillero
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-5xl font-black text-white">
            Una pasantía diseñada para impulsar tu carrera
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 text-base sm:text-lg mt-4">
            Acredita tus horas obligatorias de prácticas, domina tecnología educativa y asegúrate como docente fundador antes de graduarte.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" animate={controls} variants={stagger} className="grid sm:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <SpotlightCard 
              key={i} 
              className="p-7 border-white/[0.08] hover:border-indigo-500/50"
              spotlightColor="rgba(6, 182, 212, 0.2)"
              enableTilt={true}
            >
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-obsidian-850 border border-white/10 flex items-center justify-center">
                  {b.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{b.title}</h3>
                  <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">{b.subtitle}</p>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{b.desc}</p>
              </div>
            </SpotlightCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  const { ref, controls } = useScrollReveal();

  const comparisonItems = [
    {
      feature: 'Dedicación y Horarios',
      traditional: '20 a 30 horas semanales agotadoras que chocan con tus clases universitarias.',
      rale: '2 a 4 horas semanales en micro-bloques modulados y 100% coordinados con tu universidad.',
    },
    {
      feature: 'Tipo de Actividad y Rol',
      traditional: 'Labores administrativas rutinarias, sacar copias, revisar asistencia en papel.',
      rale: 'Dictado pedagógico real frente a cadetes disciplinados con estatus de Docente Fundador.',
    },
    {
      feature: 'Tecnología y Preparación',
      traditional: 'Pizarrón tradicional, diapositivas pesadas preparadas desde cero durante horas.',
      rale: 'Prompts con IA que generan balotarios y solucionarios militares en segundos.',
    },
    {
      feature: 'Acreditación Universitaria',
      traditional: 'Trámites burocráticos lentos o cartas genéricas de asistencia sin peso curricular.',
      rale: 'Constancia oficial de Prácticas Pre-Profesionales (PPP) con horas pedagógicas detalladas.',
    },
    {
      feature: 'Oportunidad Económica & Futura',
      traditional: 'Cero posibilidad de contrato rápido tras culminar las prácticas.',
      rale: 'Bono directo de S/. 40 por cadete matriculado y Pase Preferencial #1 a Nómina Remunerada (a partir de S/. 20/hora en adelante según desempeño y nivel de logro).',
    },
  ];

  return (
    <section id="comparativa" className="py-24 relative overflow-hidden bg-obsidian-950 border-t border-white/[0.06]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/[0.07] blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={stagger} className="text-center max-w-3xl mx-auto mb-16">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-700/50 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Scale className="w-3.5 h-3.5 text-cyan-400" />
            <span>Comparativa de Oportunidades</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-5xl font-black text-white">
            ¿Por qué este Semillero es Diferente?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 text-base sm:text-lg mt-4">
            Compara una práctica convencional rutinaria frente a la libertad, valor curricular y proyección de ser Docente Fundador en RALE.
          </motion.p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: Práctica Tradicional */}
          <div className="p-6 sm:p-8 rounded-2xl bg-obsidian-900/60 border border-white/[0.06] flex flex-col justify-between opacity-85">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
                <div>
                  <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">El Modelo Antiguo</span>
                  <h3 className="text-lg font-bold text-slate-300">Pasantía / Práctica Tradicional</h3>
                </div>
                <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold">
                  ✕
                </div>
              </div>

              <div className="space-y-5">
                {comparisonItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                    <span className="text-red-400 font-bold flex-shrink-0 mt-0.5">✕</span>
                    <div>
                      <strong className="text-slate-300 block mb-0.5">{item.feature}:</strong>
                      <span className="text-slate-400 leading-relaxed">{item.traditional}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs text-slate-500 text-center font-medium">
              Mucho tiempo invertido sin aprendizaje tecnológico ni pase directo a nómina.
            </div>
          </div>

          {/* Card 2: Semillero RALE */}
          <SpotlightCard 
            className="p-6 sm:p-8 border-indigo-500/40 bg-gradient-to-b from-indigo-950/20 via-obsidian-900 to-obsidian-950 flex flex-col justify-between relative shadow-2xl shadow-indigo-950/80"
            spotlightColor="rgba(6, 182, 212, 0.25)"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
                <div>
                  <span className="text-xs uppercase font-extrabold text-cyan-400 tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Propuesta de Vanguardia
                  </span>
                  <h3 className="text-xl font-black text-white">Semillero Docente RALE</h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                  Recomendado
                </span>
              </div>

              <div className="space-y-5">
                {comparisonItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">{item.feature}:</strong>
                      <span className="text-slate-300 leading-relaxed">{item.rale}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-cyan-300 font-semibold text-center sm:text-left">
                Micro-dedicación · Acreditación PPP Oficial
              </span>
              <CTAButton size="sm" text="Postular al Semillero" />
            </div>
          </SpotlightCard>

        </div>
      </div>
    </section>
  );
}

function CertificationShowcase() {
  return (
    <section id="certificacion" className="py-24 relative overflow-hidden bg-obsidian-950 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SpotlightCard
          className="p-8 sm:p-12 lg:p-14 border-indigo-500/30 bg-gradient-to-br from-indigo-950/30 via-obsidian-900 to-obsidian-950"
          spotlightColor="rgba(99, 102, 241, 0.25)"
        >
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/40 bg-indigo-500/10 text-indigo-300 text-xs font-bold tracking-widest uppercase w-max">
                🏅 Acreditación Oficial RALE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Certifica tus Prácticas y obtén tu Diploma de Docente Fundador.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                Al culminar tu participación en el semillero recibirás la constancia oficial de prácticas pre-profesionales con horas pedagógicas detalladas, además del reconocimiento como Docente Fundador y carta de recomendación de la dirección académica.
              </p>

              <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  'Constancia oficial de Prácticas Pre-Profesionales (PPP)',
                  'Horas pedagógicas acreditadas para tu universidad',
                  'Certificado de Especialización en IA Pedagógica',
                  'Carta de recomendación institucional firmada',
                  'Prioridad #1 para plazas remuneradas (a partir de S/. 20/hora en adelante)',
                  'Bono directo de S/. 40 por cada cadete referido que se matricule'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-slate-200 text-xs sm:text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <CTAButton size="md" text="👉 Unirse al Semillero para Postular" />
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <SpotlightCard
                className="p-2 border-indigo-400/30 bg-obsidian-950 shadow-2xl"
                spotlightColor="rgba(99, 102, 241, 0.3)"
                enableTilt={true}
              >
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/edtech-certificate.jpg" 
                    alt="Constancia Oficial de Prácticas Pre-Profesionales y Docente Fundador RALE" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </SpotlightCard>
            </div>

          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}

function Requirements() {
  const { ref, controls } = useScrollReveal();
  const reqs = [
    {
      title: 'Estudiantes Universitarios (5° al 10° Ciclo o Egresados)',
      desc: 'De las carreras de Educación, Ciencias (Matemáticas, Física, Química), Ingeniería o Humanidades con necesidad de convalidar prácticas o ganar experiencia docente comprobada.'
    },
    {
      title: 'Disponibilidad Ligera (2 a 4 Horas Semanales)',
      desc: 'Compromiso de dictar micro-sesiones virtuales o talleres los fines de semana o turnos noche, totalmente coordinados con tu horario universitario.'
    },
    {
      title: 'Equipo & Conexión Básica',
      desc: 'PC o Laptop propia con cámara y conexión a internet para impartir tus sesiones en vivo y participar en los talleres de capacitación en IA.'
    }
  ];

  return (
    <section id="requisitos" className="py-24 relative bg-obsidian-900 border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SpotlightCard className="p-8 sm:p-12 border-white/[0.08]" spotlightColor="rgba(99, 102, 241, 0.2)">
          <p className="text-cyan-400 font-bold tracking-widest uppercase text-xs mb-2">
            Perfil de Selección
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-8">
            ¿Cumples con el perfil del semillero docente?
          </h2>

          <div className="flex flex-col gap-4">
            {reqs.map((r, i) => (
              <div key={i} className="flex items-start gap-3.5 p-4 rounded-xl bg-obsidian-850 border border-white/[0.06]">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-bold text-sm sm:text-base mb-0.5">{r.title}</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col gap-3">
            <div>
              <CTAButton size="md" text="👉 Unirse al Grupo de WhatsApp" />
            </div>
            <p className="text-slate-400 text-xs flex items-center gap-1.5">
              <span>🔒</span> El ingreso al grupo es el paso obligatorio para recibir la fecha del lanzamiento oficial y la ficha de selección.
            </p>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}

function Timeline() {
  const { ref, controls } = useScrollReveal();
  const steps = [
    { 
      num: '01', 
      title: 'Únete al grupo oficial de WhatsApp', 
      desc: 'Accede al grupo privado del semillero docente donde coordinaremos la fecha de inducción y acceso a la presentación en vivo.' 
    },
    { 
      num: '02', 
      title: 'Asiste a la sesión de bienvenida & taller de IA', 
      desc: 'Sesión oficial donde revelaremos el ecosistema pedagógico, el plan de horas acreditadas, el manejo de prompts y la asignación modular.' 
    },
    { 
      num: '03', 
      title: 'Inicia tu pasantía modular (2 a 4 hrs/sem)', 
      desc: 'Comienza a dictar con cadetes pre-militares de alto rendimiento, acumulando horas pedagógicas oficiales para tu universidad.' 
    },
    { 
      num: '04', 
      title: 'Certificación y traspaso a nómina remunerada', 
      desc: 'Recibe tu constancia oficial de prácticas pre-profesionales y accede con prioridad absoluta a las plazas remuneradas de la academia.' 
    },
  ];

  return (
    <section id="camino" className="py-24 relative overflow-hidden bg-obsidian-950 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <motion.div ref={ref} initial="hidden" animate={controls} variants={stagger} className="text-center mb-16">
          <motion.p variants={fadeUp} className="text-indigo-400 font-bold tracking-widest uppercase text-xs mb-3">
            Ruta del Docente Fundador
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-5xl font-black text-white">
            4 pasos para empezar tu carrera docente de élite
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 text-base sm:text-lg mt-3">
            Un proceso ágil, transparente y directo para acreditar tus prácticas y ser docente pionero en RALE.
          </motion.p>
        </motion.div>

        <div className="relative flex flex-col gap-4">
          {steps.map((s, i) => (
            <SpotlightCard 
              key={i} 
              className="p-6 sm:p-7 border-white/[0.08] hover:border-indigo-500/40"
              spotlightColor="rgba(99, 102, 241, 0.18)"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-600 flex items-center justify-center text-white font-mono font-black text-lg sm:text-xl shadow-md shadow-indigo-500/20">
                  {s.num}
                </div>
                <div className="pt-0.5 flex-1">
                  <h3 className="text-white font-bold text-base sm:text-lg mb-1">
                    {s.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-500 flex-shrink-0 mt-3 hidden sm:block" />
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Cómo funciona la modalidad de Pasantía Ad Honorem en esta etapa?',
      a: 'Nos encontramos en la fase de validación e incubación de la Academia Pre-Militar RALE. Para esta primera etapa convocamos a estudiantes universitarios bajo la modalidad de Pasantía Formativa Ad Honorem con una carga muy ligera (de 2 a 4 horas semanales). A cambio, la academia te otorga Acreditación Oficial de Horas de Prácticas Pre-Profesionales (PPP), formación gratuita en Inteligencia Artificial y herramientas EdTech, carta de recomendación de la dirección y prioridad absoluta para acceder a la nómina remunerada en cuanto comiencen las aulas oficiales de pago.'
    },
    {
      q: '¿Puedo convalidar estas horas como Prácticas Pre-Profesionales en mi universidad?',
      a: '¡Sí! Al término del periodo o según los requerimientos de tu facultad, la academia emite una constancia oficial con el desglose de horas pedagógicas dictadas, el plan de curso y la evaluación de desempeño para que puedas presentarlo y convalidar tus prácticas curriculares sin problemas.'
    },
    {
      q: '¿Puedo generar ingresos económicos durante esta fase de validación?',
      a: 'Sí. Contamos con un programa de bonificación directa por postulantes referidos: recibes un bono en efectivo de S/. 40 por cada cadete que recomiendes y se matricule en la academia premilitar, además de acumular méritos para la jefatura del curso.'
    },
    {
      q: '¿Cuándo se pasa a la modalidad remunerada por hora?',
      a: 'Una vez finalizada la fase piloto y abiertos los grupos regulares de cadetes de pago, los Docentes Fundadores que hayan participado activamente en esta etapa pasan directamente a la nómina remunerada (con pagos a partir de S/. 20 en adelante por hora de clase, según el desempeño, nivel de logro y experiencia) sin tener que postular a concursos públicos externos.'
    },
    {
      q: '¿Interferirá con mis clases o exámenes en la universidad?',
      a: 'No. La carga es de solo 2 a 4 horas a la semana (por ejemplo, una sesión de 2 horas en fin de semana o turno noche). Los horarios se coordinan directamente según la disponibilidad de tu ciclo universitario para que no interfiera con tus estudios.'
    },
    {
      q: '¿Qué pasará una vez que me una al grupo de WhatsApp?',
      a: 'En el grupo privado anunciaremos la fecha y hora de la sesión oficial de inducción en vivo. Te mostraremos la plataforma, cómo usar la IA para preparar balotarios en minutos y resolveremos todas tus consultas antes de asignar los micro-turnos.'
    }
  ];

  return (
    <section id="faq" className="py-20 relative bg-obsidian-900 border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs">Resuelve tus dudas</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">Preguntas Frecuentes</h2>
        </div>

        <div className="flex flex-col gap-3.5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className="rounded-xl bg-obsidian-850/80 border border-white/[0.08] overflow-hidden transition-colors"
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full px-6 py-4 sm:py-5 flex items-center justify-between text-left font-bold text-white text-sm sm:text-base hover:text-indigo-300 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-cyan-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-6 pb-5 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/[0.04] pt-3"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { ref, controls } = useScrollReveal();
  return (
    <footer className="relative pt-20 pb-16 border-t border-white/[0.08] bg-obsidian-950 overflow-hidden">
      <div 
        className="absolute inset-0 -z-10" 
        style={{ 
          background: 'radial-gradient(ellipse 90% 70% at 50% 100%, rgba(79, 70, 229, 0.2) 0%, #070a11 75%)' 
        }} 
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={stagger} className="flex flex-col items-center gap-8">
          
          <motion.div variants={fadeUp}>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-600 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-indigo-600/30">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              Acredita tus horas de prácticas{' '}
              <span className="bg-gradient-to-r from-indigo-300 via-cyan-300 to-white bg-clip-text text-transparent">
                y sé de los primeros en la nómina oficial.
              </span>
            </h2>
          </motion.div>

          <motion.p variants={fadeUp} className="text-slate-300 text-sm sm:text-lg max-w-2xl font-normal leading-relaxed">
            Los cupos para Docentes Fundadores son limitados por especialidad. Ingresa al grupo de WhatsApp hoy mismo para asegurar tu acceso a la sesión oficial de inducción.
          </motion.p>

          <motion.div variants={fadeUp}>
            <CTAButton size="lg" text="👉 Unirse al Semillero en WhatsApp" />
          </motion.div>

          {/* Links and Credits */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-6 pt-10 border-t border-white/[0.08] w-full mt-4">
            {[
              { label: 'rale.sistemazenit.com', href: 'https://rale.sistemazenit.com' }, 
              { label: 'raletest.sistemazenit.com', href: 'https://raletest.sistemazenit.com' }
            ].map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 text-xs sm:text-sm transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{link.label}</span>
              </a>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-1.5 text-xs text-slate-400 pt-2">
            <p>© {new Date().getFullYear()} Academia Pre-Militar RALE · Sistema Zenit Group</p>
            <p>
              Convocatoria de Docentes Fundadores ·{' '}
              <span className="text-indigo-400 font-semibold">Semillero EdTech 2026</span>
            </p>
          </motion.div>

        </motion.div>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-obsidian-950 text-white font-sans antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <main>
        <Hero />
        <InstitutionsMarquee />
        <StatMetrics />
        <Authority />
        <Benefits />
        <ComparisonSection />
        <EdTechStackTabs />
        <HoursCalculator />
        <ProfileEvaluator />
        <CertificationShowcase />
        <Requirements />
        <Timeline />
        <FAQ />
      </main>
      <Footer />
      <DynamicIslandBar />
    </div>
  );
}
