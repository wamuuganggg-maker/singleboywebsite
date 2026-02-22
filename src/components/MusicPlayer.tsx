import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import bannerImg from "@/assets/banner.png";

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
          src={bannerImg}
          alt="Album Art"
          className="w-full h-44 object-cover"
        />
        <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-xs bg-background/80 text-muted-foreground font-mono">
          {isPlaying ? "PLAYING" : "PAUSED"}
        </div>
        {/* Dots decoration */}
        <div className="absolute bottom-2 left-2 flex gap-1">
          <div className="w-2 h-2 rounded-full bg-foreground/30" />
          <div className="w-2 h-2 rounded-full bg-foreground/50" />
          <div className="w-2 h-2 rounded-full bg-foreground/30" />
        </div>
        <div className="absolute bottom-2 right-2 flex gap-0.5">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-1 rounded-full bg-primary"
              style={{
                height: isPlaying ? `${8 + Math.random() * 12}px` : "4px",
                transition: "height 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>

      {/* Track info */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground">Coding Lo-Fi</h3>
        <p className="text-sm text-muted-foreground">Chill Vibes Only</p>

        {/* Progress bar */}
        <div className="mt-3 w-full h-1 rounded-full bg-secondary">
          <div
            className="music-progress transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Controls */}
        <div className="mt-3 flex items-center justify-between">
          <motion.button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
          </motion.button>

          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MusicPlayer;
