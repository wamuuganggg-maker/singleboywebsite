import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Code, Terminal, Quote } from "lucide-react";

const timelineData = [
  {
    year: "2024",
    title: "Fullstack Evolution",
    description: "Expanding my skills into Fullstack Development and modern UI/UX design.",
    items: [
      { icon: Rocket, text: "Modern Portfolio", sub: "Built with React, Tailwind, and Framer Motion." },
      { icon: Code, text: "Advanced Bots", sub: "Developing complex Discord bots with dashboard integration." },
    ],
  },
  {
    year: "2023",
    title: "Bot Developer",
    description: "Deep dived into Discord API and verified my first bot. Started gaining traction in the community.",
    items: [
      { icon: Terminal, text: "Verified Bot Developer Badge" },
      { icon: Rocket, text: "Reached 100+ Server Installs" },
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
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-start justify-center mb-16">
      {/* Year badge */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 rounded-full bg-gradient-purple text-primary-foreground text-sm font-bold"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        {item.year}
      </motion.div>

      {/* Content card */}
      <motion.div
        className={`w-full md:w-5/12 mt-12 ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="glass-hover rounded-2xl p-5">
          <h4 className="text-lg font-bold text-foreground mb-1">{item.title}</h4>
          <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
          <div className="space-y-3">
            {item.items.map((sub, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <sub.icon size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{sub.text}</p>
                  {"sub" in sub && sub.sub && (
                    <p className="text-xs text-muted-foreground mt-0.5">{sub.sub}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const JourneyTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="journey" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg">
            A timeline of my growth from a curious beginner to a Fullstack & Bot Developer.
          </p>
        </motion.div>

        <div className="relative">
          <div className="timeline-line hidden md:block" />
          {timelineData.map((item, i) => (
            <TimelineItem key={item.year} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
