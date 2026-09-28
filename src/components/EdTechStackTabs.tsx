'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, BarChart3, Timer, Award, CheckCircle2, Sparkles, Terminal, ArrowUpRight } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

interface FeatureTab {
  id: string;
  name: string;
  badge: string;
  icon: React.ReactNode;
  headline: string;
  description: string;
  features: string[];
  mockupTitle: string;
  mockupContent: React.ReactNode;
}

export default function EdTechStackTabs() {
  const [activeTab, setActiveTab] = useState<string>('ia-pedagogica');

  const tabs: FeatureTab[] = [
    {
      id: 'ia-pedagogica',
      name: 'IA Pedagógica Aplicada',
      badge: 'Capacitación Incluida',
      icon: <Bot className="w-5 h-5 text-cyan-400" />,
      headline: 'Ahorra 10+ horas semanales en preparación con prompts docentes',
      description:
        'Aprenderás a estructurar prompts de alta precisión para generar balotarios de preguntas tipo admisión militar, desglosar pasos algebraicos complejos y crear explicaciones personalizadas según el nivel de cada postulante.',
      features: [
        'Generador asistido de reactivos para EMCH, EOFAP y PNP',
        'Solucionarios paso a paso con retroalimentación inmediata',
        'Adaptación pedagógica para ciencias y razonamiento',
      ],
      mockupTitle: 'RALE AI Assistant · Prompt Pedagógico v2.4',
      mockupContent: (
        <div className="space-y-3 font-mono text-xs text-slate-300">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.08] text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <Terminal className="w-3.5 h-3.5" />
              <span>Prompt Generador RALE</span>
            </span>
            <span className="text-emerald-400">Filtro: Admisión EMCH 2026</span>
          </div>
          <div className="p-3 rounded-lg bg-obsidian-950/80 border border-white/[0.06] text-slate-300">
            <span className="text-indigo-400">&gt; Generar reactivo de Física Mecánica (Estática de Fuerzas)</span>
            <p className="mt-1 text-slate-400">Nivel: Alto Rendimiento Oficiales · Tiempo límite: 90 segundos</p>
          </div>
          <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-cyan-200">
            <div className="flex items-center gap-1.5 font-bold text-cyan-300 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Reactivo Generado con Solucionario:</span>
            </div>
            <p className="text-[11px] text-slate-300">
              «Un cuerpo de 40 N reposa sobre un plano inclinado de 37° sujeto a un resorte... Determine la fuerza normal y el coeficiente de fricción estática mínimo.»
            </p>
            <div className="mt-2 text-[10px] text-emerald-400 flex items-center gap-2">
              <span>✓ Clave: Alternativa C</span>
              <span>✓ Esquema DCL integrado</span>
              <span>✓ Tiempo de creación: 1.2s</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'analitica',
      name: 'Analítica Predictiva',
      badge: 'Monitoreo en Tiempo Real',
      icon: <BarChart3 className="w-5 h-5 text-indigo-400" />,
      headline: 'Visualiza la probabilidad de ingreso de tus estudiantes',
      description:
        'Cada simulacro alimenta un panel docente que te muestra con precisión matemática qué temas necesitan refuerzo, qué alumnos están listos para el examen y cuál es la curva de mejora de tu aula.',
      features: [
        'Semáforo de aprendizaje por alumno y tema',
        'Ranking institucional de cadetes por escuela de destino',
        'Reportes automatizados sin necesidad de corregir en papel',
      ],
      mockupTitle: 'Dashboard de Aula Docente · Cohorte Cadetes A',
      mockupContent: (
        <div className="space-y-3 font-sans text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.08] text-[11px]">
            <span className="font-bold text-white">Simulacro General N° 08 · RALE</span>
            <span className="text-emerald-400 font-mono font-bold">+14.2% Promedio Global</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2.5 rounded-lg bg-obsidian-950 border border-white/[0.06]">
              <span className="text-[10px] text-slate-400 block">Aspirantes EMCH</span>
              <span className="text-base font-extrabold text-white font-mono">16.4/20</span>
              <span className="text-[10px] text-emerald-400 block mt-0.5">89% probabilidad</span>
            </div>
            <div className="p-2.5 rounded-lg bg-obsidian-950 border border-white/[0.06]">
              <span className="text-[10px] text-slate-400 block">Aspirantes EOFAP</span>
              <span className="text-base font-extrabold text-white font-mono">17.1/20</span>
              <span className="text-[10px] text-emerald-400 block mt-0.5">93% probabilidad</span>
            </div>
            <div className="p-2.5 rounded-lg bg-obsidian-950 border border-white/[0.06]">
              <span className="text-[10px] text-slate-400 block">Aspirantes PNP</span>
              <span className="text-base font-extrabold text-white font-mono">15.8/20</span>
              <span className="text-[10px] text-emerald-400 block mt-0.5">84% probabilidad</span>
            </div>
          </div>
          <div className="p-2.5 rounded-lg bg-indigo-950/30 border border-indigo-500/20 text-indigo-200">
            <span className="text-[11px] font-bold block mb-0.5 text-indigo-300">Recomendación Didáctica del Algoritmo:</span>
            <p className="text-[11px] text-slate-300">
              Reforzar Geometría del Espacio y Razonamiento Lógico en el bloque del viernes para cerrar la brecha del 7% de cadetes.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'simulacros',
      name: 'Simulacros Digitales',
      badge: 'Evaluación Dinámica',
      icon: <Timer className="w-5 h-5 text-emerald-400" />,
      headline: 'Plataforma cronometrada bajo el estándar de las FF.AA.',
      description:
        'Tus estudiantes experimentan la presión real del examen de admisión con cronómetro estricto, algoritmos anti-plagio y retroalimentación pedagógica tras cada entrega.',
      features: [
        'Banco de más de 10,000 preguntas oficiales de admisión',
        'Cronómetro adaptativo por tipo de prueba (Académica / Psicométrica)',
        'Calificación y retroalimentación automatizada en menos de 5 segundos',
      ],
      mockupTitle: 'Simulador Cronometrado · RALE Test Engine',
      mockupContent: (
        <div className="space-y-3 font-sans text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
              <span className="font-bold text-white">Simulacro Tipo PNP / EOFAP</span>
            </div>
            <span className="font-mono text-cyan-400 font-extrabold bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800">
              Tiempo: 01:24:19
            </span>
          </div>
          <div className="p-3 rounded-lg bg-obsidian-950 border border-white/[0.06]">
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider block mb-1">
              Pregunta 42 de 100 · Razonamiento Matemático
            </span>
            <p className="text-slate-200 text-xs">
              «Si el triple de la edad de un postulante hace 4 años es igual al doble de la que tendrá dentro de 6 años, ¿cuál es su edad actual?»
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="p-2 rounded bg-obsidian-850 border border-white/[0.06] text-slate-300">A) 21 años</div>
            <div className="p-2 rounded bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 font-bold">B) 24 años (Marcada)</div>
            <div className="p-2 rounded bg-obsidian-850 border border-white/[0.06] text-slate-300">C) 19 años</div>
            <div className="p-2 rounded bg-obsidian-850 border border-white/[0.06] text-slate-300">D) 26 años</div>
          </div>
        </div>
      ),
    },
    {
      id: 'disciplina',
      name: 'Disciplina Pre-Militar',
      badge: 'Cero Estrés de Aula',
      icon: <Award className="w-5 h-5 text-amber-400" />,
      headline: 'Alumnos que valoran cada minuto de tu clase',
      description:
        'Olvídate de lidiar con problemas de indisciplina o desinterés. Los cadetes de la Academia RALE postulan por vocación estricta y respetan la autoridad docente con puntualidad, asistencia y máxima atención.',
      features: [
        '100% asistencia y puntualidad militar',
        'Ambiente de respeto mutuo y alta exigencia académica',
        'Docente como guía y mentor de futuros oficiales del país',
      ],
      mockupTitle: 'Código de Aula · Academia RALE Pre-Militar',
      mockupContent: (
        <div className="space-y-3 font-sans text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
            <span className="font-bold text-amber-400 uppercase tracking-wider text-[11px]">
              Estándar de Conducta del Cadete
            </span>
            <span className="text-[10px] text-slate-400">Reglamento RALE 2026</span>
          </div>
          <div className="space-y-2">
            {[
              'Ingreso a sala virtual 5 minutos antes con cámara activa y uniforme.',
              'Participación activa con micrófono y solicitud de palabra reglamentaria.',
              'Cumplimiento del 100% de tareas y simulacros semanales programados.',
            ].map((rule, idx) => (
              <div key={idx} className="flex items-start gap-2 p-2 rounded bg-obsidian-950 border border-white/[0.06]">
                <span className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-400 text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="text-slate-300 text-[11px] leading-relaxed">{rule}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section id="tecnologia" className="py-24 relative overflow-hidden bg-obsidian-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Innovación en el Aula</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            El Ecosistema EdTech que Dominarás
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3 leading-relaxed">
            No somos una academia tradicional de pizarra. Te capacitamos en las tecnologías educativas que están transformando la preparación pre-universitaria.
          </p>
        </div>

        {/* Tab Switcher Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                type="button"
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 border ${
                  isActive
                    ? 'bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-600/30'
                    : 'bg-obsidian-900 text-slate-300 border-white/[0.08] hover:border-white/20 hover:bg-obsidian-850'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Description & List (6 cols) */}
              <div className="lg:col-span-6 flex flex-col gap-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold w-max bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  {currentTab.badge}
                </span>

                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  {currentTab.headline}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {currentTab.description}
                </p>

                <div className="space-y-3 pt-2">
                  {currentTab.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Interactive UI Showcase Card (6 cols) */}
              <div className="lg:col-span-6">
                <SpotlightCard
                  className="p-6 border-indigo-500/30 bg-obsidian-900 shadow-2xl relative"
                  spotlightColor="rgba(6, 182, 212, 0.2)"
                >
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                      <span className="text-[11px] text-slate-400 font-mono ml-2">
                        {currentTab.mockupTitle}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">Live Demo</span>
                  </div>

                  {currentTab.mockupContent}
                </SpotlightCard>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
