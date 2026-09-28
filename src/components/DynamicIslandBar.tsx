'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ChevronRight } from 'lucide-react';

const WA_LINK = 'https://chat.whatsapp.com/DOpudOHiXs7DKsmAo1KeM5?s=cl&p=a&mlu=4&ilr=4';

export default function DynamicIslandBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear only after scrolling past the hero (450px)
      if (window.scrollY > 450 && !isDismissed) {
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
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 50, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Acceso directo a postulación"
          className="fixed bottom-6 right-4 sm:right-6 z-40 pointer-events-auto"
        >
          <div className="flex items-center gap-1.5 p-1.5 pl-3.5 pr-2 rounded-full bg-obsidian-950/90 backdrop-blur-xl border border-indigo-500/30 shadow-2xl shadow-black/80 hover:border-cyan-400/50 transition-all duration-300 group">
            {/* Ambient subtle glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/10 via-cyan-500/10 to-transparent pointer-events-none" />

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-slate-200 group-hover:text-white transition-colors"
            >
              {/* Green status pulse dot */}
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>

              {/* WhatsApp Icon */}
              <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />

              {/* Text */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white tracking-tight whitespace-nowrap">
                  Postular al Semillero
                </span>
                <span className="hidden sm:inline-block text-[11px] text-cyan-300 font-medium">
                  · WhatsApp
                </span>
              </div>

              {/* Arrow Icon */}
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-obsidian-950 transition-all">
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>

            {/* Dismiss Button */}
            <button
              onClick={() => setIsDismissed(true)}
              type="button"
              aria-label="Ocultar acceso flotante"
              className="p-1 rounded-full text-slate-500 hover:text-slate-300 hover:bg-white/10 transition-colors ml-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
