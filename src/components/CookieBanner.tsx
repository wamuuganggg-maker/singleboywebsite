import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookies-accepted", "true");
    setVisible(false);
  };

  const decline = () => {
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-lg glass rounded-2xl p-5 shadow-glow"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-start gap-4">
            <Cookie size={24} className="text-primary flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-semibold text-foreground text-sm mb-1">Cookie Policy</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
              </p>
              <div className="flex gap-3 mt-3">
                <button
                  onClick={decline}
                  className="px-4 py-1.5 rounded-lg text-xs text-muted-foreground hover:text-foreground transition-colors border border-border"
                >
                  Decline
                </button>
                <button
                  onClick={accept}
                  className="px-4 py-1.5 rounded-lg text-xs bg-gradient-purple text-primary-foreground font-medium"
                >
                  Accept All
                </button>
              </div>
            </div>
            <button onClick={decline} className="text-muted-foreground hover:text-foreground">
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
