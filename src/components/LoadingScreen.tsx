import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {progress <= 100 && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-sm font-mono text-muted-foreground mb-6 tracking-widest uppercase">
            Loading...
          </p>

          {/* Simple progress bar */}
          <div className="w-48 h-0.5 rounded-full bg-secondary overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-primary"
              style={{ width: `${progress}%` }}
            />
          </div>

          <span className="mt-3 text-xs font-mono text-muted-foreground">{progress}%</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
