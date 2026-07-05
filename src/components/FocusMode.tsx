'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRoadmapStore } from '@/lib/store';

export function FocusMode() {
  const isFocusModeEnabled = useRoadmapStore((state) => state.isFocusModeEnabled);
  const toggleFocusMode = useRoadmapStore((state) => state.toggleFocusMode);

  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minute Pomodoro
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      // Play notification sound
      setIsRunning(false);
      setTimeLeft(25 * 60);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isFocusModeEnabled) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-dark-bg"
      >
        {/* Ambient background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-0 bg-gradient-to-br from-rose/5 via-sage/5 to-dusty-pink/5"
            style={{
              backgroundSize: '400% 400%',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center p-6">
          {/* Close button */}
          <button
            onClick={toggleFocusMode}
            className="absolute top-6 right-6 px-3 py-2 hover:bg-dark-card rounded-lg transition-colors text-white"
          >
            Close
          </button>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-playfair font-bold text-white mb-8"
          >
            Deep Focus Mode
          </motion.h1>

          {/* Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center mb-12"
          >
            <div className="text-8xl font-grotesk font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose to-sage mb-4">
              {formatTime(timeLeft)}
            </div>
            <p className="text-white/60 text-lg">
              {isRunning ? 'Stay focused...' : 'Ready to start?'}
            </p>
          </motion.div>

          {/* Controls */}
          <div className="flex gap-4 mb-12">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="px-8 py-3 bg-rose text-white rounded-lg font-medium hover:bg-rose/90 transition-all"
            >
              {isRunning ? 'Pause' : 'Start'}
            </button>
            <button
              onClick={() => {
                setIsRunning(false);
                setTimeLeft(25 * 60);
              }}
              className="px-8 py-3 bg-dark-card text-white rounded-lg font-medium hover:bg-dark-border transition-all"
            >
              Reset
            </button>
          </div>

          {/* Affirmation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center text-white/70 text-lg max-w-md space-y-3"
          >
            <p>“Take your time.”</p>
            <p>“Small steps matter.”</p>
            <p>“You’re building your future gently.”</p>
            <p>“Progress is still progress.”</p>
          </motion.div>

          {/* Floating particles */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-rose/20"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  y: -window.innerHeight,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
