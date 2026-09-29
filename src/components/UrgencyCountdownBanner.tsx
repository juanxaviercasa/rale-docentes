'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Flame, ChevronRight, X, Sparkles, MessageCircle } from 'lucide-react';

const WA_LINK = 'https://chat.whatsapp.com/DOpudOHiXs7DKsmAo1KeM5?s=cl&p=a&mlu=4&ilr=4';

export default function UrgencyCountdownBanner() {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 2,
    hours: 5,
    minutes: 42,
    seconds: 18,
  });
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Target next upcoming Saturday at 20:00 (Lima/Bogotá time)
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date();
      // Find upcoming Saturday (day 6)
      const dayOfWeek = now.getDay();
      const daysUntilSaturday = (6 - dayOfWeek + 7) % 7 || 7;
      target.setDate(now.getDate() + daysUntilSaturday);
      target.setHours(20, 0, 0, 0);

      const diff = target.getTime() - now.getTime();
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  if (isDismissed) return null;

  return (
    <aside 
      aria-label="Aviso de próxima sesión de inducción en vivo"
      className="relative z-50 bg-gradient-to-r from-indigo-950 via-obsidian-900 to-indigo-950 border-b border-indigo-500/30 text-white text-xs py-2 px-3 sm:px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
        
        {/* Left Side: Live Badge & Announcement */}
        <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start text-center sm:text-left">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 font-bold uppercase tracking-wider text-[10px]">
            <Flame className="w-3 h-3 text-red-400 animate-pulse" />
            <span>En Vivo Este Sábado 20:00 hrs</span>
          </span>
          <span className="text-slate-200 font-medium">
            Sesión de Inducción Oficial & Capacitación en IA para Docentes Fundadores
          </span>
          <span className="hidden md:inline-block text-slate-500">|</span>
          <span className="hidden md:inline-block text-cyan-300 font-mono text-[11px]">
            Capacidad de sala: 50 vacantes
          </span>
        </div>

        {/* Right Side: Live Countdown & CTA */}
        <div className="flex items-center gap-3">
          {/* Countdown Clock */}
          <div className="flex items-center gap-1.5 font-mono font-bold text-xs bg-obsidian-950/80 px-2.5 py-1 rounded-lg border border-white/10 text-cyan-300">
            <Clock className="w-3 h-3 text-cyan-400" />
            <div className="flex items-center gap-1 tabular-nums">
              <span>{String(timeLeft.days).padStart(2, '0')}d</span>:
              <span>{String(timeLeft.hours).padStart(2, '0')}h</span>:
              <span>{String(timeLeft.minutes).padStart(2, '0')}m</span>:
              <span>{String(timeLeft.seconds).padStart(2, '0')}s</span>
            </div>
          </div>

          {/* Quick CTA Link */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 font-bold hover:text-white transition-colors text-[11px] whitespace-nowrap"
          >
            <MessageCircle className="w-3 h-3 text-emerald-400" />
            <span>Asegurar Lugar</span>
            <ChevronRight className="w-3 h-3" />
          </a>

          {/* Dismiss button */}
          <button
            onClick={() => setIsDismissed(true)}
            type="button"
            aria-label="Cerrar aviso"
            className="p-1 text-slate-500 hover:text-slate-300 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </aside>
  );
}
