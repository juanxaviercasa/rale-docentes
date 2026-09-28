'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Sparkles, GraduationCap, ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const WA_BASE_LINK = 'https://chat.whatsapp.com/DOpudOHiXs7DKsmAo1KeM5?s=cl&p=a&mlu=4&ilr=4';

interface Option {
  id: string;
  label: string;
  sub?: string;
  score: number;
}

const CAREERS: Option[] = [
  { id: 'educacion', label: 'Educación', sub: 'Matemática, Ciencias o Humanidades', score: 35 },
  { id: 'ciencias-puras', label: 'Matemática, Física o Química', sub: 'Ciencias exactas', score: 35 },
  { id: 'ingenieria', label: 'Ingeniería', sub: 'Sistemas, Industrial, Civil u afines', score: 30 },
  { id: 'letras', label: 'Comunicación, Literatura o Historia', sub: 'Humanidades y Letras', score: 32 },
  { id: 'otra', label: 'Otra carrera afín', sub: 'Con vocación pedagógica comprobada', score: 25 },
];

const CYCLES: Option[] = [
  { id: 'c1-4', label: '1° a 4° Ciclo', sub: 'Etapa inicial formativa', score: 15 },
  { id: 'c5-6', label: '5° a 6° Ciclo', sub: 'Acreditación de Prácticas Iniciales', score: 30 },
  { id: 'c7-8', label: '7° a 8° Ciclo', sub: 'Prácticas Pre-Profesionales Avanzadas', score: 35 },
  { id: 'c9-egresado', label: '9° - 10° Ciclo o Egresado', sub: 'Perfil Docente Fundador & Prioridad', score: 35 },
];

const INSTITUTIONS: Option[] = [
  { id: 'emch', label: 'EMCH', sub: 'Escuela Militar de Chorrillos', score: 30 },
  { id: 'eofap', label: 'EOFAP', sub: 'Fuerza Aérea del Perú', score: 30 },
  { id: 'pnp', label: 'PNP', sub: 'Policía Nacional del Perú', score: 30 },
  { id: 'todas', label: 'Todas las Escuelas', sub: 'Mayor flexibilidad curricular', score: 35 },
];

export default function ProfileEvaluator() {
  const [selectedCareer, setSelectedCareer] = useState<string>('educacion');
  const [selectedCycle, setSelectedCycle] = useState<string>('c7-8');
  const [selectedInst, setSelectedInst] = useState<string>('todas');

  const careerObj = CAREERS.find((c) => c.id === selectedCareer) || CAREERS[0];
  const cycleObj = CYCLES.find((c) => c.id === selectedCycle) || CYCLES[2];
  const instObj = INSTITUTIONS.find((i) => i.id === selectedInst) || INSTITUTIONS[3];

  const totalScore = Math.min(100, careerObj.score + cycleObj.score + instObj.score);
  const isEarlyCycle = selectedCycle === 'c1-4';

  const prefilledMessage = encodeURIComponent(
    `Hola, completé el evaluador de Docente Fundador RALE. Soy estudiante de ${careerObj.label} (${cycleObj.label}) interesado en la pasantía formativa ad honorem para postulantes a ${instObj.label}. Mi compatibilidad resultó en ${totalScore}%. Deseo unirme al grupo oficial para validar mis prácticas y asistir al lanzamiento.`
  );

  return (
    <section id="evaluador" className="py-24 relative overflow-hidden bg-obsidian-900 border-t border-white/[0.06]">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(79,70,229,0.1),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Filtro Rápido de Postulación</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            ¿Eres Apto para la Pasantía Docente RALE?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3 leading-relaxed">
            Verifica al instante tu afinidad con la convocatoria de Docentes Fundadores, acreditación de prácticas y convalidación universitaria 2026.
          </p>
        </div>

        {/* 3 Step Selectors + Result Container */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls: Step 1, 2, 3 */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Step 1: Carrera */}
            <SpotlightCard className="p-6" spotlightColor="rgba(99, 102, 241, 0.15)">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-indigo-600/30 text-indigo-400 border border-indigo-500/40 text-[11px] font-mono flex items-center justify-center">1</span>
                <span>¿Cuál es tu carrera universitaria?</span>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {CAREERS.map((c) => {
                  const active = selectedCareer === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCareer(c.id)}
                      type="button"
                      className={`p-3 rounded-xl text-left border transition-all text-xs ${
                        active
                          ? 'bg-indigo-600/20 border-indigo-400 text-white font-bold'
                          : 'bg-obsidian-850/70 border-white/[0.06] text-slate-300 hover:bg-obsidian-850 hover:text-white'
                      }`}
                    >
                      <div className="font-semibold text-white">{c.label}</div>
                      {c.sub && <div className="text-[10px] text-slate-400 mt-0.5">{c.sub}</div>}
                    </button>
                  );
                })}
              </div>
            </SpotlightCard>

            {/* Step 2: Ciclo */}
            <SpotlightCard className="p-6" spotlightColor="rgba(6, 182, 212, 0.15)">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-cyan-600/30 text-cyan-400 border border-cyan-500/40 text-[11px] font-mono flex items-center justify-center">2</span>
                <span>¿En qué ciclo de estudios te encuentras?</span>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2.5">
                {CYCLES.map((c) => {
                  const active = selectedCycle === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCycle(c.id)}
                      type="button"
                      className={`p-3 rounded-xl text-left border transition-all text-xs ${
                        active
                          ? 'bg-cyan-500/20 border-cyan-400 text-white font-bold'
                          : 'bg-obsidian-850/70 border-white/[0.06] text-slate-300 hover:bg-obsidian-850 hover:text-white'
                      }`}
                    >
                      <div className="font-semibold text-white">{c.label}</div>
                      {c.sub && <div className="text-[10px] text-slate-400 mt-0.5">{c.sub}</div>}
                    </button>
                  );
                })}
              </div>
            </SpotlightCard>

            {/* Step 3: Institución de interés */}
            <SpotlightCard className="p-6" spotlightColor="rgba(16, 185, 129, 0.15)">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 text-[11px] font-mono flex items-center justify-center">3</span>
                <span>¿A qué aspirantes te gustaría enseñar?</span>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2.5">
                {INSTITUTIONS.map((inst) => {
                  const active = selectedInst === inst.id;
                  return (
                    <button
                      key={inst.id}
                      onClick={() => setSelectedInst(inst.id)}
                      type="button"
                      className={`p-3 rounded-xl text-left border transition-all text-xs ${
                        active
                          ? 'bg-emerald-500/20 border-emerald-400 text-white font-bold'
                          : 'bg-obsidian-850/70 border-white/[0.06] text-slate-300 hover:bg-obsidian-850 hover:text-white'
                      }`}
                    >
                      <div className="font-semibold text-white">{inst.label}</div>
                      {inst.sub && <div className="text-[10px] text-slate-400 mt-0.5">{inst.sub}</div>}
                    </button>
                  );
                })}
              </div>
            </SpotlightCard>

          </div>

          {/* Right Column: Score & Recommendation Card */}
          <div className="lg:col-span-4">
            <SpotlightCard
              className="p-7 border-indigo-500/40 bg-gradient-to-b from-obsidian-850 to-obsidian-950 relative overflow-hidden"
              spotlightColor="rgba(99, 102, 241, 0.25)"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Dictamen de Afinidad
                </div>
                <span className="text-[10px] uppercase font-bold text-indigo-300 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/30">
                  Instantáneo
                </span>
              </div>

              {/* Score Display */}
              <div className="py-6 text-center">
                <div className="inline-flex items-center justify-center w-28 h-28 rounded-full border-4 border-indigo-500/30 bg-indigo-950/40 relative mb-3">
                  <div className="text-3xl sm:text-4xl font-black text-white font-mono tabular-nums">
                    {totalScore}%
                  </div>
                  <div
                    className="absolute inset-0 rounded-full border-4 border-indigo-400 border-t-transparent"
                    style={{ transform: `rotate(${totalScore * 3.6}deg)` }}
                  />
                </div>
                
                <div className="text-sm font-extrabold text-white">
                  {isEarlyCycle ? 'En Etapa Formativa Inicial' : totalScore >= 85 ? 'Perfil Altamente Compatible' : 'Perfil Compatible'}
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  {isEarlyCycle
                    ? 'La pasantía prioriza convalidación desde el 5° ciclo, pero puedes participar como docente observador y capacitarte en IA.'
                    : 'Cumples los requisitos clave para acreditar tus prácticas pre-profesionales, obtener tu certificación y ser Docente Fundador.'}
                </p>
              </div>

              {/* Status List */}
              <div className="space-y-2.5 py-4 border-t border-white/[0.08] text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Área curricular: <strong>{careerObj.label}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Nivel: <strong>{cycleObj.label}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Acreditación: <strong>Prácticas + Certificado IA</strong></span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 border-t border-white/[0.08]">
                <a
                  href={`${WA_BASE_LINK}&text=${prefilledMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 hover:brightness-110 active:scale-[0.98] transition-all text-center group"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300 group-hover:scale-110 transition-transform" />
                  <span>Postular como Docente Fundador</span>
                </a>
              </div>

            </SpotlightCard>
          </div>

        </div>

      </div>
    </section>
  );
}
