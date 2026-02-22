import { motion } from "framer-motion";
import { Download, Code2, Bot, Shield, Sparkles, Award, Bug, Heart, Zap, Star } from "lucide-react";
import avatarImg from "@/assets/avatar.png";

const badges = [
  { icon: Code2, label: "Early Verified Bot Developer", color: "text-green-400" },
  { icon: Heart, label: "Early Supporter", color: "text-pink-400" },
  { icon: Sparkles, label: "Nitro", color: "text-purple-400" },
  { icon: Zap, label: "Booster", color: "text-pink-500" },
  { icon: Star, label: "Active Developer", color: "text-green-500" },
  { icon: Shield, label: "Hypesquad", color: "text-yellow-400" },
  { icon: Bug, label: "Bug Hunter", color: "text-green-300" },
  { icon: Award, label: "Moderator", color: "text-blue-400" },
];

const HeroProfile = () => {
  return (
    <motion.div
      className="glass rounded-2xl p-6 lg:p-8 flex-1"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <div className="flex flex-col sm:flex-row items-start gap-6">
        {/* Avatar */}
        <div className="relative">
          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-primary/30 shadow-glow">
            <img
              src={avatarImg}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-muted-foreground border-4 border-card" title="Offline" />
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
                className={`${badge.color} cursor-pointer transition-transform hover:scale-125`}
                title={badge.label}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + i * 0.05 }}
              >
                <badge.icon size={18} />
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
