import { motion } from "framer-motion";
import { Download, Code2, Bot } from "lucide-react";
import avatarImg from "@/assets/avatar.png";
import badgeEarlyDev from "@/assets/badges/early-verified-bot-developer.svg";
import badgeEarlySupporter from "@/assets/badges/early-supporter.svg";
import badgeNitro from "@/assets/badges/nitro.svg";
import badgeBooster from "@/assets/badges/boost-24-month.svg";
import badgeActiveDev from "@/assets/badges/active-developer.svg";
import badgeHypesquad from "@/assets/badges/balance.svg";
import badgeBugHunter from "@/assets/badges/bug-hunter-lv1.svg";
import badgeModerator from "@/assets/badges/discord-certified-moderator.svg";

const badges = [
  { src: badgeEarlyDev, label: "Early Verified Bot Developer" },
  { src: badgeEarlySupporter, label: "Early Supporter" },
  { src: badgeNitro, label: "Nitro" },
  { src: badgeBooster, label: "Booster" },
  { src: badgeActiveDev, label: "Active Developer" },
  { src: badgeHypesquad, label: "Hypesquad" },
  { src: badgeBugHunter, label: "Bug Hunter" },
  { src: badgeModerator, label: "Moderator" },
];

const LaurelDecoration = () => (
  <svg viewBox="0 0 160 160" className="absolute -inset-4 w-[calc(100%+32px)] h-[calc(100%+32px)] z-10 pointer-events-none">
    {/* Left laurel branch */}
    {[0, 1, 2, 3, 4, 5, 6].map((i) => {
      const angle = -40 + i * 22;
      const rad = (angle * Math.PI) / 180;
      const cx = 80 + Math.cos(rad) * 62;
      const cy = 80 + Math.sin(rad) * 62;
      return (
        <g key={`l-${i}`} transform={`rotate(${angle + 90}, ${cx}, ${cy})`}>
          <ellipse cx={cx} cy={cy} rx="5" ry="11" fill="hsl(45, 75%, 45%)" opacity="0.85" />
          <ellipse cx={cx} cy={cy} rx="3.5" ry="9" fill="hsl(45, 85%, 55%)" opacity="0.7" />
        </g>
      );
    })}
    {/* Right laurel branch */}
    {[0, 1, 2, 3, 4, 5, 6].map((i) => {
      const angle = 220 - i * 22;
      const rad = (angle * Math.PI) / 180;
      const cx = 80 + Math.cos(rad) * 62;
      const cy = 80 + Math.sin(rad) * 62;
      return (
        <g key={`r-${i}`} transform={`rotate(${-angle - 90}, ${cx}, ${cy})`}>
          <ellipse cx={cx} cy={cy} rx="5" ry="11" fill="hsl(45, 75%, 45%)" opacity="0.85" />
          <ellipse cx={cx} cy={cy} rx="3.5" ry="9" fill="hsl(45, 85%, 55%)" opacity="0.7" />
        </g>
      );
    })}
    {/* Top star */}
    <polygon points="80,8 82,14 88,14 83,18 85,24 80,20 75,24 77,18 72,14 78,14" fill="hsl(45, 85%, 55%)" />
    {/* Bottom ribbon */}
    <path d="M65,148 Q72,142 80,148 Q88,142 95,148" stroke="hsl(45, 80%, 50%)" strokeWidth="2.5" fill="none" />
  </svg>
);

const HeroProfile = () => {
  return (
    <motion.div
      className="glass rounded-2xl p-6 lg:p-8 flex-1"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <div className="flex flex-col sm:flex-row items-start gap-6">
        {/* Avatar with Discord decoration */}
        <div className="relative w-28 h-28">
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary/30 shadow-glow">
            <img src={avatarImg} alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <motion.div
            className="absolute inset-0"
            animate={{ scale: [1, 1.03, 1], opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <LaurelDecoration />
          </motion.div>
          <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-muted-foreground border-4 border-card z-20" title="Offline" />
        </div>

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-foreground">秋.</h1>
          <p className="text-muted-foreground font-mono text-sm">@gaeuly</p>

          {/* Badges */}
          <div className="flex flex-wrap gap-1.5 mt-3 p-2 rounded-xl bg-secondary/50">
            {badges.map((badge, i) => (
              <motion.div
                key={i}
                className="cursor-pointer transition-transform hover:scale-125"
                title={badge.label}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + i * 0.05 }}
              >
                <img src={badge.src} alt={badge.label} className="w-6 h-6" />
              </motion.div>
            ))}
          </div>

          {/* Roles */}
          <div className="mt-4 space-y-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Code2 size={14} className="text-primary" />
              <span>Fullstack Developer</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Bot size={14} className="text-primary" />
              <span>Discord Bot Developer</span>
            </div>
          </div>

          {/* Bio */}
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Hi, I'm Gaeuly. A developer focusing on Discord Bot and Web Development. I enjoy exploring new technologies!
          </p>

          {/* Download CV */}
          <motion.button
            className="mt-4 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-purple text-primary-foreground text-sm font-medium transition-all hover:shadow-glow-strong"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download size={16} />
            Download CV
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroProfile;
