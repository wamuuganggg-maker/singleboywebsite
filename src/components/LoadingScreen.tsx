import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        // Slow down near the end for a natural feel
        const increment = prev < 70 ? 3 : prev < 90 ? 1.5 : 0.5;
        return Math.min(prev + increment, 100);
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {progress <= 100 && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Glowing orb background effect */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full opacity-20 blur-[100px]"
              style={{ background: "hsl(var(--primary))" }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Logo / Name */}
          <motion.h1
            className="text-2xl font-bold text-foreground tracking-wider mb-1 relative z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            PRATIYUSH
          </motion.h1>

          <motion.p
            className="text-xs font-mono text-muted-foreground mb-8 tracking-[0.3em] uppercase relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Developer
          </motion.p>

          {/* Progress bar */}
          <div className="w-56 h-[2px] rounded-full bg-secondary/50 overflow-hidden relative z-10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          <motion.span
            className="mt-3 text-[10px] font-mono text-muted-foreground/60 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {Math.round(progress)}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
