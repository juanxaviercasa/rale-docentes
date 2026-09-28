'use client';

import React from 'react';
import { Shield, Award, Plane, CheckCircle2 } from 'lucide-react';

const INSTITUTIONS = [
  { name: 'Escuela Militar de Chorrillos (EMCH)', tag: 'Ejército del Perú', icon: '🎖️' },
  { name: 'Escuela de Oficiales EOFAP', tag: 'Fuerza Aérea del Perú', icon: '✈️' },
  { name: 'Escuela de Oficiales PNP', tag: 'Policía Nacional del Perú', icon: '👮' },
  { name: 'Escuela Técnica del Ejército (ETE)', tag: 'Suboficiales EP', icon: '🛡️' },
  { name: 'Escuela de Suboficiales PNP', tag: 'Suboficiales PNP', icon: '⭐' },
  { name: 'Academia Pre-Militar RALE', tag: 'Innovación EdTech', icon: '🎓' },
];

export default function InstitutionsMarquee() {
  return (
    <div className="py-6 border-y border-white/[0.06] bg-obsidian-900/60 overflow-hidden relative">
      {/* Edge gradient mask for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-obsidian-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-obsidian-950 to-transparent z-10 pointer-events-none" />

      <div className="flex items-center gap-4">
        {/* Static Title Label */}
        <div className="pl-6 sm:pl-10 flex items-center gap-2 flex-shrink-0 z-20">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 bg-obsidian-850 px-3 py-1 rounded-full border border-white/[0.08] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Destino Académico de Nuestros Alumnos:
          </span>
        </div>

        {/* Marquee Ticker */}
        <div className="flex overflow-hidden select-none w-full">
          <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
            {INSTITUTIONS.concat(INSTITUTIONS).map((inst, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-xl bg-obsidian-850/60 border border-white/[0.06] text-xs font-semibold text-slate-300 hover:border-indigo-500/40 hover:text-white transition-colors"
              >
                <span className="text-base">{inst.icon}</span>
                <span className="text-white font-bold">{inst.name}</span>
                <span className="text-[10px] text-cyan-300 font-mono">[{inst.tag}]</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
