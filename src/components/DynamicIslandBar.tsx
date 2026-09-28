'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Sparkles, ChevronRight } from 'lucide-react';

const WA_LINK = 'https://chat.whatsapp.com/DOpudOHiXs7DKsmAo1KeM5?s=cl&p=a&mlu=4&ilr=4';

export default function DynamicIslandBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 380 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          initial={{ y: 80, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 80, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Aviso de convocatoria"
          className="fixed bottom-5 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 pointer-events-auto"
        >
          <div className="relative rounded-2xl p-3.5 bg-obsidian-900/95 backdrop-blur-xl border border-indigo-500/40 shadow-2xl shadow-indigo-950/80 flex items-center justify-between gap-3 group">
            {/* Ambient inner glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-cyan-500/10 to-transparent pointer-events-none" />

            <div className="flex items-center gap-3 min-w-0">
              <div className="relative flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/30">
                <MessageCircle className="w-5 h-5 text-emerald-300" />
                <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-obsidian-900 animate-pulse" />
              </div>

              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-300">
                    Pasantía Docente Ad Honorem 2026
                  </span>
                  <span className="text-[10px] text-slate-400">· 2-4 hrs/sem</span>
                </div>
                <div className="text-xs font-bold text-white truncate">
                  Sé Docente Fundador RALE · Acredita tus Prácticas
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white text-xs font-extrabold shadow-md shadow-indigo-500/30 hover:brightness-110 active:scale-[0.97] transition-all"
              >
                <span>Unirme</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setIsDismissed(true)}
                type="button"
                aria-label="Cerrar notificación"
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
