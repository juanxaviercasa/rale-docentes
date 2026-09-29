'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, FileText, CheckCircle2, Shield, Award, Clock, 
  ExternalLink, Download, MessageCircle, Sparkles, Building2
} from 'lucide-react';

const WA_LINK = 'https://chat.whatsapp.com/DOpudOHiXs7DKsmAo1KeM5?s=cl&p=a&mlu=4&ilr=4';

interface CurricularGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CurricularGuideModal({ isOpen, onClose }: CurricularGuideModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md -z-10"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-3xl rounded-2xl bg-obsidian-900 border border-indigo-500/40 shadow-2xl shadow-black overflow-hidden my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 bg-gradient-to-r from-indigo-950 via-obsidian-950 to-indigo-950 border-b border-white/[0.08] flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-cyan-400 flex-shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                  <span>Guía Curricular & Convenio PPP 2026</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono">
                    Oficial RALE
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  Academia Pre-Militar RALE · Sistema Zenit Group
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              type="button"
              aria-label="Cerrar modal"
              className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content - Scrollable */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto text-xs sm:text-sm text-slate-300 leading-relaxed">
            
            {/* Box 1: Marco de Validez */}
            <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/25 flex items-start gap-3">
              <Building2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-white font-bold text-sm mb-1">
                  Validez Universitaria para Prácticas Pre-Profesionales (PPP)
                </h4>
                <p className="text-slate-300 text-xs">
                  Conforme a la Ley Universitaria N° 30220 y los reglamentos de grados y títulos, las horas de docencia y preparación de balotarios pedagógicos en la Academia RALE se certifican formalmente para convalidar tus prácticas universitarias obligatorias.
                </p>
              </div>
            </div>

            {/* Section 2: Estructura del Plan 120 Horas */}
            <div>
              <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Desglose de Horas Curriculares Acreditadas (Módulos de 120 hrs)</span>
              </h4>
              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-obsidian-950 border border-white/[0.06]">
                  <span className="font-bold text-cyan-300 block mb-1">
                    Dictado Pedagógico en Vivo (60 hrs)
                  </span>
                  <p className="text-slate-400">
                    Micro-sesiones de 2 a 4 hrs semanales frente a cadetes aspirantes a la EMCH, EOFAP y PNP.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-obsidian-950 border border-white/[0.06]">
                  <span className="font-bold text-cyan-300 block mb-1">
                    Preparación & Prompts IA (30 hrs)
                  </span>
                  <p className="text-slate-400">
                    Diseño de reactivos militares, solucionarios paso a paso y mapas conceptuales con IA.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-obsidian-950 border border-white/[0.06]">
                  <span className="font-bold text-cyan-300 block mb-1">
                    Capacitación EdTech (15 hrs)
                  </span>
                  <p className="text-slate-400">
                    Talleres en vivo de pedagogía pre-militar, analítica de aprendizaje y rúbricas de evaluación.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-obsidian-950 border border-white/[0.06]">
                  <span className="font-bold text-cyan-300 block mb-1">
                    Tutoría & Retroalimentación (15 hrs)
                  </span>
                  <p className="text-slate-400">
                    Análisis de resultados de simulacros cronometrados y orientación a los cadetes.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Documentos Entregados al Docente */}
            <div>
              <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Documentos & Reconocimientos Otorgados</span>
              </h4>
              <div className="space-y-2 text-xs">
                {[
                  'Constancia oficial de Prácticas Pre-Profesionales con horas pedagógicas detalladas y sello institucional.',
                  'Diploma acreditativo de "Docente Fundador de la Academia Pre-Militar RALE".',
                  'Carta de recomendación personalizada firmada por la Dirección Académica para tu currículum vitae.',
                  'Bono directo en efectivo de S/. 40 por cada cadete referido matriculado.',
                  'Pase Preferente #1 a la nómina remunerada oficial (a partir de S/. 20/hora en adelante según desempeño y nivel de logro).'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-2 rounded bg-obsidian-950/70 border border-white/[0.04]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: Requisitos & Compromiso */}
            <div className="p-4 rounded-xl bg-obsidian-950 border border-white/[0.06] text-xs">
              <span className="font-bold text-white block mb-1">Compromiso del Pasante Fundador:</span>
              <p className="text-slate-400">
                Puntualidad en los turnos asignados (2 a 4 hrs/semana), trato respetuoso y reglamentario con los cadetes premilitares, y participación en la sesión de bienvenida. La academia provee el aula virtual, los materiales y el acompañamiento constante.
              </p>
            </div>

          </div>

          {/* Footer with Actions */}
          <div className="p-5 bg-obsidian-950 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
            <span className="text-xs text-slate-400 text-center sm:text-left">
              ¿Listo para validar tus prácticas universitarias?
            </span>
            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                onClick={onClose}
                type="button"
                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-bold transition-colors w-full sm:w-auto"
              >
                Cerrar
              </button>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:brightness-110 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-600/30 w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>Postular al Semillero en WhatsApp</span>
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
