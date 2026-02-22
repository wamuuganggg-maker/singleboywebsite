import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Code, Terminal, Quote, CheckCircle, Server, Zap } from "lucide-react";

const timelineData = [
  {
    year: "2024",
    title: "Fullstack Evolution",
    description: "Expanding my skills into Fullstack Development and modern UI/UX design.",
    items: [
      { icon: Rocket, text: "Modern Portfolio", sub: "Built with React, Tailwind, and Framer Motion." },
      { icon: Zap, text: "Advanced Bots", sub: "Developing complex Discord bots with dashboard integration." },
    ],
  },
  {
    year: "2023",
    title: "Bot Developer",
    description: "Deep dived into Discord API and verified my first bot. Started gaining traction in the community.",
    items: [
      { icon: CheckCircle, text: "Verified Bot Developer Badge" },
      { icon: Server, text: "Reached 100+ Server Installs" },
      { icon: Code, text: "Learned TypeScript & Node.js" },
    ],
  },
  {
    year: "2022",
    title: "The Beginning",
    description: "The beginning of my coding journey. Started with simple scripts and Minecraft plugins.",
    items: [
      { icon: Quote, text: '"Hello World" was just the start.' },
    ],
  },
];

const TimelineItem = ({ item, index }: { item: typeof timelineData[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative flex items-start mb-20 last:mb-0 pl-10 md:pl-14">
      {/* Dot - outer ring + inner filled circle */}
      <motion.div
        className="absolute left-0 top-2 z-10 -translate-x-1/2 flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, type: "spring" }}
      >
        <div className="w-6 h-6 rounded-full border-[3px] border-muted-foreground/30 bg-background flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_hsl(270_70%_60%/0.8)]" />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, x: 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Year badge - double sticker style */}
        <motion.div
          className="relative inline-block mb-4"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, type: "spring" }}
        >
          {/* Back sticker layer */}
          <div
            className="absolute inset-0 px-5 py-2"
            style={{
              background: "hsl(270 70% 35%)",
              borderRadius: "4px",
              transform: "rotate(-4deg)",
              clipPath: "polygon(2% 8%, 98% 0%, 100% 92%, 0% 100%)",
            }}
          />
          {/* Front sticker layer */}
          <div
            className="relative px-5 py-2 text-2xl font-extrabold text-primary-foreground"
            style={{
              background: "hsl(270 70% 55%)",
              borderRadius: "4px",
              transform: "rotate(-1deg)",
              clipPath: "polygon(2% 8%, 98% 0%, 100% 92%, 0% 100%)",
            }}
          >
            {item.year}
          </div>
        </motion.div>

        <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
        <div className={`${item.items.length <= 2 ? "grid grid-cols-1 md:grid-cols-2 gap-3" : "space-y-3"}`}>
          {item.items.map((sub, i) => (
            <div key={i} className="glass-hover rounded-xl p-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <sub.icon size={16} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{sub.text}</p>
                {"sub" in sub && sub.sub && (
                  <p className="text-xs text-muted-foreground mt-0.5">{sub.sub}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const JourneyTimeline = () => {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-50px" });
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 px-3 py-1" style={{ background: "hsl(270 70% 35%)", borderRadius: "4px", clipPath: "polygon(2% 8%, 98% 0%, 100% 92%, 0% 100%)", transform: "rotate(-3deg)" }} />
              <span className="relative inline-block px-3 py-1 text-primary-foreground" style={{ background: "hsl(270 70% 55%)", borderRadius: "4px", clipPath: "polygon(2% 8%, 98% 0%, 100% 92%, 0% 100%)", transform: "rotate(-1deg)" }}>Journey</span>
            </span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg">
            A timeline of my growth from a curious beginner to a Fullstack & Bot Developer.
          </p>
        </motion.div>

        <div className="relative" ref={timelineRef}>
          {/* Static background line */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-muted-foreground/20 rounded-full" />
          {/* Animated fill line */}
          <motion.div
            className="absolute left-0 top-0 w-[3px] -translate-x-1/2 rounded-full origin-top"
            style={{
              height: lineHeight,
              background: "linear-gradient(to bottom, hsl(270 70% 60%), hsl(270 70% 50% / 0.5))",
              boxShadow: "0 0 12px hsl(270 70% 60% / 0.5), 0 0 4px hsl(270 70% 60% / 0.3)",
            }}
          />

          {timelineData.map((item, i) => (
            <TimelineItem key={item.year} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
