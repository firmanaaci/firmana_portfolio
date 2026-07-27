"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STATUS_MESSAGES = [
  "Menyiapkan komponen...",
  "Merender antarmuka...",
  "Memuat proyek...",
  "Hampir selesai...",
];

const FULL_TEXT = "Firmana";
const MIN_DURATION = 2000; // ms

export default function LoadingScreen() {
  const [displayText, setDisplayText] = useState("");
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const start = Date.now();
    let finishTimeout: NodeJS.Timeout;
    let exitTimeout: NodeJS.Timeout;

    // Animasi Ketik (Typewriter)
    let charIndex = 0;
    const typingTimer = setInterval(() => {
      if (charIndex < FULL_TEXT.length) {
        setDisplayText(FULL_TEXT.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingTimer);
      }
    }, 120);

    // Progress semu hingga 90%
    const progressTimer = setInterval(() => {
      setProgress((p) => {
        if (p >= 90) return p;
        const remaining = 90 - p;
        return p + remaining * 0.08;
      });
    }, 120);

    // Rotasi status message
    const statusTimer = setInterval(() => {
      setStatusIndex((i) => (i + 1) % STATUS_MESSAGES.length);
    }, 900);

    const finish = () => {
      const elapsed = Date.now() - start;
      const wait = Math.max(MIN_DURATION - elapsed, 0);

      finishTimeout = setTimeout(() => {
        clearInterval(progressTimer);
        clearInterval(statusTimer);
        clearInterval(typingTimer);
        setDisplayText(FULL_TEXT);
        setProgress(100);
        setIsDone(true);

        exitTimeout = setTimeout(() => {
          setShow(false);
          document.body.style.overflow = "";
          window.scrollTo(0, 0);
        }, 300);
      }, wait);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
    }

    return () => {
      clearInterval(typingTimer);
      clearInterval(progressTimer);
      clearInterval(statusTimer);
      clearTimeout(finishTimeout);
      clearTimeout(exitTimeout);
      window.removeEventListener("load", finish);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-[#0d201f]"
          initial={{ opacity: 1 }}
          exit={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* dot grid ambient */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(243,239,230,0.5) 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(28,70,69,0.9),transparent_60%)]" />

          <div className="relative flex flex-col items-center gap-6 px-6">
            {/* Logo dengan Kursor Mengikuti Ketikan */}
            <div className="flex items-center font-mono text-3xl font-extrabold tracking-tight text-[#f3efe6] sm:text-4xl">
              <span className="text-[#c9a15c]">&lt;</span>
              <span>{displayText}</span>
              {/* Kursor diletakkan tepat setelah teks yang sedang diketik */}
              <span className="mx-0.5 inline-block h-[0.85em] w-[2.5px] animate-pulse bg-[#c9a15c] align-middle" />
              <span className="text-[#c9a15c]">/&gt;</span>
            </div>

            {/* Progress Bar */}
            <div className="relative h-[2px] w-56 overflow-hidden rounded-full bg-white/10 sm:w-64">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-[#c9a15c]"
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.2 }}
              />
            </div>

            {/* Status Message */}
            <AnimatePresence mode="wait">
              <motion.p
                key={isDone ? "done" : statusIndex}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25 }}
                className="font-sans text-xs tracking-wide text-[#f3efe6]/60 sm:text-sm"
              >
                {isDone ? "Selesai." : STATUS_MESSAGES[statusIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}