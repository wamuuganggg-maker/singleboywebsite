import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import musicBanner from "@/assets/music-banner.png";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return p + 0.2;
        });
      }, 100);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current as unknown as number);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current as unknown as number);
    };
  }, [isPlaying]);

  return (
    <motion.div
      className="glass rounded-2xl overflow-hidden w-full lg:w-80"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      {/* Album Art */}
      <div className="relative">
        <img
          src={musicBanner}
          alt="Album Art"
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-xs bg-background/80 text-muted-foreground font-mono">
          {isPlaying ? "PLAYING" : "PAUSED"}
        </div>
        {/* Stars decoration at bottom */}
        <div className="absolute bottom-2 right-2 flex gap-1 text-muted-foreground/60 text-xs">
          ★ ★ ★ ★ ★
        </div>
      </div>

      {/* Track info + equalizer */}
      <div className="p-4 pb-2">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-foreground">Coding Lo-Fi</h3>
            <p className="text-sm text-muted-foreground">Chill Vibes Only</p>
          </div>
          {/* Equalizer bars */}
          <div className="flex items-end gap-[3px] h-5">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="w-[3px] rounded-full bg-primary"
                animate={isPlaying ? {
                  height: [4, 12 + Math.random() * 8, 6, 16 + Math.random() * 4, 4],
                } : { height: 4 }}
                transition={isPlaying ? {
                  duration: 0.8 + Math.random() * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                } : {}}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Controls section */}
      <div className="mx-4 mb-4 p-3 rounded-xl bg-secondary/50">
        <div className="flex items-center gap-3">
          <motion.button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-11 h-11 rounded-full flex items-center justify-center text-primary-foreground bg-gradient-purple shadow-glow flex-shrink-0"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
          </motion.button>

          {/* Progress bar */}
          <div className="flex-1 h-1 rounded-full bg-background/50">
            <div
              className="music-progress transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>

          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-1.5 text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MusicPlayer;
