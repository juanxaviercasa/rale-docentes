'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, Clock, Award, Sparkles, TrendingUp, CheckCircle2, 
  MessageCircle, ShieldCheck, Users, HelpCircle, Gift
} from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const WA_BASE_LINK = 'https://chat.whatsapp.com/DOpudOHiXs7DKsmAo1KeM5?s=cl&p=a&mlu=4&ilr=4';

interface SubjectArea {
  id: string;
  name: string;
  demandLevel: 'Alta Demanda' | 'Prioridad Máxima' | 'Convocatoria Activa';
  badgeColor: string;
  icon: string;
}

const AREAS: SubjectArea[] = [
  {
    id: 'ciencias',
    name: 'Matemáticas, Física y Química',
    demandLevel: 'Prioridad Máxima',
    badgeColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
    icon: '📐',
  },
  {
    id: 'humanidades',
    name: 'Comunicación, Historia y Geopolítica',
    demandLevel: 'Convocatoria Activa',
    badgeColor: 'text-indigo-300 border-indigo-500/30 bg-indigo-500/10',
    icon: '📚',
  },
  {
    id: 'aptitud',
    name: 'Razonamiento Matemático & Verbal',
    demandLevel: 'Alta Demanda',
    badgeColor: 'text-emerald-300 border-emerald-500/30 bg-emerald-500/10',
    icon: '🧠',
  },
];

const CYCLES = [
  { id: '5-7', label: '5° - 7° Ciclo', role: 'Practicante Pre-Profesional', credLevel: 'Acreditación Básica PPP', rateFase2: 20 },
  { id: '8-10', label: '8° - 10° Ciclo', role: 'Practicante Avanzado', credLevel: 'Acreditación Titular PPP', rateFase2: 22 },
  { id: 'egresado', label: 'Egresado / Bachiller', role: 'Docente Fundador Líder', credLevel: 'Certificación Profesional & Portafolio', rateFase2: 25 },
];

export default function HoursCalculator() {
  const [weeklyHours, setWeeklyHours] = useState<number>(4);
  const [selectedArea, setSelectedArea] = useState<string>('ciencias');
  const [selectedCycle, setSelectedCycle] = useState<string>('8-10');
  const [referredStudents, setReferredStudents] = useState<number>(1);

  const currentArea = AREAS.find((a) => a.id === selectedArea) || AREAS[0];
  const currentCycle = CYCLES.find((c) => c.id === selectedCycle) || CYCLES[1];

  // Calculations
  const accreditedHoursMonth = weeklyHours * 4;
  const accreditedHoursQuarter = accreditedHoursMonth * 3;
  const commissionEarned = referredStudents * 40; // S/ 40 per enrolled cadet
  const projectedFase2Monthly = weeklyHours * 4 * currentCycle.rateFase2;

  const prefilledText = encodeURIComponent(
    `Hola, coticé el plan de acreditación docente RALE: deseo postular para ${weeklyHours} horas semanales en ${currentArea.name} (${currentCycle.label}). Me interesa validar mis prácticas pre-profesionales, obtener la certificación de Docente Fundador y conocer la fecha de inducción.`
  );

  return (
    <section id="simulador" className="py-24 relative overflow-hidden bg-obsidian-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/[0.08] blur-[140px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5 text-cyan-400" />
            <span>Planificación Curricular & Beneficios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Calculador de Horas & Acreditación de Prácticas
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3 leading-relaxed">
            Descubre cuántas horas curriculares acreditarás para tu universidad con una micro-dedicación de <strong className="text-cyan-400">2 a 6 horas por semana</strong> y tus beneficios como Docente Fundador.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Controls (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Control 1: Área de Enseñanza */}
            <SpotlightCard className="p-6 sm:p-7" spotlightColor="rgba(99, 102, 241, 0.15)">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" />
                  1. Materia o Área de Especialidad
                </span>
                <span className="text-xs text-slate-500">Área a dictar</span>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                {AREAS.map((area) => {
                  const isSelected = selectedArea === area.id;
                  return (
                    <button
                      key={area.id}
                      onClick={() => setSelectedArea(area.id)}
                      type="button"
                      className={`relative p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between gap-3 ${
                        isSelected
                          ? 'bg-indigo-600/20 border-indigo-400/80 shadow-md shadow-indigo-500/10'
                          : 'bg-obsidian-850/60 border-white/[0.06] hover:border-white/20 hover:bg-obsidian-850'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-2xl">{area.icon}</span>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                        )}
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm leading-tight mb-1">
                          {area.name}
                        </div>
                        <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold border ${area.badgeColor}`}>
                          {area.demandLevel}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </SpotlightCard>

            {/* Control 2: Horas Semanales Slider */}
            <SpotlightCard className="p-6 sm:p-7" spotlightColor="rgba(6, 182, 212, 0.15)">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  2. Dedicación Semanal en Pasantía
                </span>
                <span className="text-sm font-extrabold text-cyan-400 tabular-nums">
                  {weeklyHours} horas / semana
                </span>
              </div>

              {/* Slider Input */}
              <div className="py-3">
                <input
                  type="range"
                  min="2"
                  max="8"
                  step="1"
                  value={weeklyHours}
                  onChange={(e) => setWeeklyHours(Number(e.target.value))}
                  aria-label="Horas semanales disponibles"
                  className="w-full h-2.5 bg-obsidian-800 rounded-lg appearance-none cursor-pointer accent-indigo-500 hover:accent-cyan-400 transition-colors"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-2">
                  <span>2h (Micro-sesión)</span>
                  <span>4h (Recomendado)</span>
                  <span>6h</span>
                  <span>8h (Acelerado)</span>
                </div>
              </div>

              {/* Quick Select Presets */}
              <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-white/[0.06]">
                <span className="text-xs text-slate-400 self-center mr-1">Preajustes rápidos:</span>
                {[2, 4, 6, 8].map((hours) => (
                  <button
                    key={hours}
                    type="button"
                    onClick={() => setWeeklyHours(hours)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold font-mono transition-all ${
                      weeklyHours === hours
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'bg-obsidian-800/80 text-slate-300 hover:bg-obsidian-700 border border-white/[0.06]'
                    }`}
                  >
                    {hours}h/sem
                  </button>
                ))}
              </div>
            </SpotlightCard>

            {/* Control 3: Ciclo Universitario */}
            <SpotlightCard className="p-6 sm:p-7" spotlightColor="rgba(16, 185, 129, 0.15)">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  3. Tu Ciclo Universitario
                </span>
                <span className="text-xs text-slate-500">Nivel académico</span>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                {CYCLES.map((cycle) => {
                  const isSelected = selectedCycle === cycle.id;
                  return (
                    <button
                      key={cycle.id}
                      onClick={() => setSelectedCycle(cycle.id)}
                      type="button"
                      className={`p-3.5 rounded-xl text-left border transition-all ${
                        isSelected
                          ? 'bg-emerald-500/15 border-emerald-400/80 text-white'
                          : 'bg-obsidian-850/60 border-white/[0.06] text-slate-300 hover:bg-obsidian-850 hover:text-white'
                      }`}
                    >
                      <div className="text-xs font-bold mb-0.5">{cycle.label}</div>
                      <div className="text-[11px] text-emerald-400/90 font-medium">{cycle.role}</div>
                    </button>
                  );
                })}
              </div>
            </SpotlightCard>

            {/* Control 4: Opcional - Alumnos Referidos para Bonos Directos */}
            <SpotlightCard className="p-6 sm:p-7" spotlightColor="rgba(245, 158, 11, 0.15)">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Gift className="w-3.5 h-3.5 text-amber-400" />
                  4. Programa de Bonos por Postulantes Referidos
                </span>
                <span className="text-sm font-extrabold text-amber-400 tabular-nums">
                  {referredStudents} {referredStudents === 1 ? 'cadete' : 'cadetes'}
                </span>
              </div>
              <p className="text-xs text-slate-400 mb-3">
                Por cada cadete que recomiendes y se matricule en la academia, recibes un bono directo de <strong className="text-amber-300">S/. 40 en efectivo</strong>:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {[0, 1, 2, 3, 5].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setReferredStudents(num)}
                    className={`py-2 px-1 rounded-lg text-xs font-bold font-mono transition-all border text-center ${
                      referredStudents === num
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-sm'
                        : 'bg-obsidian-850 border-white/[0.06] text-slate-400 hover:text-white'
                    }`}
                  >
                    {num === 0 ? '0' : `${num} (S/. ${num * 40})`}
                  </button>
                ))}
              </div>

            </SpotlightCard>

          </div>

          {/* Right Column: Dynamic Results Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="sticky top-24 h-full">
              <SpotlightCard
                className="h-full p-7 sm:p-8 flex flex-col justify-between border-indigo-500/30 bg-gradient-to-b from-obsidian-900 to-obsidian-950 relative overflow-hidden"
                spotlightColor="rgba(99, 102, 241, 0.3)"
              >
                {/* Ambient glow in card */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 blur-3xl pointer-events-none" />

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white uppercase tracking-wider">
                          Balance de Pasantía
                        </div>
                        <div className="text-[11px] text-cyan-300">
                          {currentCycle.role} · {currentArea.name.split(',')[0]}
                        </div>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      Docente Fundador
                    </span>
                  </div>

                  {/* Main Metric: Horas Acreditadas */}
                  <div className="py-6">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-1">
                      Horas Pedagógicas Acreditadas
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-black text-white tabular-nums tracking-tight">
                        {accreditedHoursMonth} hrs / mes
                      </span>
                    </div>
                    <p className="text-xs text-emerald-400 mt-2 font-medium flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span>{accreditedHoursQuarter} horas acumuladas en un trimestre formativo para tu convalidación universitaria.</span>
                    </p>

                    {/* Visual Progress towards Standard University PPP (120 hrs) */}
                    <div className="mt-4 pt-3 border-t border-white/[0.06]">
                      <div className="flex justify-between text-[11px] text-slate-400 mb-1.5 font-medium">
                        <span>Meta Convalidación Curricular (120 hrs)</span>
                        <span className="font-mono text-cyan-400 font-bold">
                          {Math.min(100, Math.round((accreditedHoursQuarter / 120) * 100))}% alcanzado
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-obsidian-950 border border-white/10 overflow-hidden">
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 transition-all duration-500"
                          style={{ width: `${Math.min(100, Math.round((accreditedHoursQuarter / 120) * 100))}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Immediate Referral Income (if any) */}
                  {commissionEarned > 0 && (
                    <div className="p-3.5 mb-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Gift className="w-4 h-4 text-amber-400 flex-shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-amber-300">Bono Directo por Matrícula</div>
                          <div className="text-[10px] text-slate-300">{referredStudents} cadete(s) matriculado(s) x S/. 40</div>
                        </div>
                      </div>
                      <span className="text-base font-black text-amber-300 font-mono">
                        S/. {commissionEarned}
                      </span>
                    </div>
                  )}

                  {/* Phase 2 Projection */}
                  <div className="p-3.5 mb-4 rounded-xl bg-indigo-950/40 border border-indigo-500/20">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider">
                        Traspaso a Nómina Remunerada (Fase 2)
                      </span>
                      <span className="text-[10px] text-cyan-300 font-mono">Prioridad #1</span>
                    </div>
                    <div className="text-xs text-slate-300 leading-relaxed">
                      Al consolidar las primeras aulas de pago, tendrás pago <strong className="text-white">a partir de S/. 20/hora en adelante</strong> (según tu desempeño, nivel de logro y experiencia) sin pasar por concurso externo. Proyección estimada para este horario: ~S/. {projectedFase2Monthly}/mes.
                    </div>
                  </div>

                  {/* Breakdown Features */}
                  <div className="space-y-3 py-3 border-t border-white/[0.08]">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                        Documentación Otorgada
                      </span>
                      <span className="font-bold text-white">Constancia PPP Oficial</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                        Capacitación IA & EdTech
                      </span>
                      <span className="font-bold text-emerald-400">100% Gratuita</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-amber-400" />
                        Carta de Recomendación
                      </span>
                      <span className="font-bold text-white">Firma de Dirección</span>
                    </div>
                  </div>
                </div>

                {/* Direct CTA */}
                <div className="pt-6 border-t border-white/[0.08] flex flex-col gap-3">
                  <a
                    href={`${WA_BASE_LINK}&text=${prefilledText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-indigo-600/30 hover:brightness-110 active:scale-[0.98] transition-all text-center group"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-300 group-hover:scale-110 transition-transform" />
                    <span>Postular con este Plan</span>
                  </a>

                  <p className="text-[11px] text-center text-slate-500 flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Micro-carga de {weeklyHours}h/sem compatible con tus estudios universitarios
                  </p>
                </div>

              </SpotlightCard>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
