import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Mail, FlaskConical, Braces, Settings, Circle, Leaf, Code } from "lucide-react";

const ToolIcon = ({ name }: { name: string }) => {
  switch (name) {
    case "JavaScript":
      return <FlaskConical size={18} className="text-yellow-400" />;
    case "TypeScript":
      return <Braces size={18} className="text-blue-400" />;
    case "React":
      return <Settings size={18} className="text-cyan-400" />;
    case "Next.js":
      return <Circle size={18} className="text-foreground" fill="currentColor" />;
    case "Go (Golang)":
      return <span className="text-xs font-extrabold text-cyan-300 font-mono">GO</span>;
    case "Discord.js":
      return <span className="text-xs font-extrabold text-indigo-400 font-mono">DJS</span>;
    case "MongoDB":
      return <Leaf size={18} className="text-green-400" />;
    case "Other Tool":
      return <Code size={18} className="text-muted-foreground" />;
    default:
      return <Code size={18} className="text-muted-foreground" />;
  }
};

const tools = [
  { name: "JavaScript", desc: "CORE LANGUAGE", yoe: "4 YOE", highlight: false },
  { name: "TypeScript", desc: "TYPED SUPERSET", yoe: "3 YOE", highlight: false },
  { name: "React", desc: "FRONTEND LIBRARY", yoe: "4 YOE", highlight: false },
  { name: "Next.js", desc: "FULLSTACK FRAMEWORK", yoe: "3 YOE", highlight: false },
  { name: "Go (Golang)", desc: "BACKEND PERFORMANCE", yoe: "2 YOE", highlight: false },
  { name: "Discord.js", desc: "BOT FRAMEWORK", yoe: "4 YOE", highlight: false },
  { name: "MongoDB", desc: "NOSQL DATABASE", yoe: "3 YOE", highlight: true },
  { name: "Other Tool", desc: "EXAMPLE", yoe: "1 YOE", highlight: false },
];

const ToolsStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="tools" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-5/12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-3">
              Tools &{" "}<span className="relative inline-block"><span className="absolute inset-0" style={{ background: "hsl(270 70% 35%)", borderRadius: "6px", clipPath: "polygon(3% 10%, 97% 0%, 100% 90%, 0% 100%)", transform: "rotate(3deg) scale(1.05)" }} /><span className="relative inline-block px-3 py-1 text-primary-foreground" style={{ background: "hsl(270 70% 55%)", borderRadius: "6px", clipPath: "polygon(2% 8%, 98% 2%, 97% 92%, 1% 100%)", transform: "rotate(-2deg)" }}>Stack</span></span>
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              I specialize in building scalable applications using modern technologies. Here is my preferred stack that I use to bring ideas to life.
            </p>

            <div className="flex gap-3">
              <motion.a
                href="https://github.com"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 rounded-xl glass-hover text-sm font-medium text-foreground"
                whileHover={{ scale: 1.02 }}
              >
                <ExternalLink size={14} />
                Open Github
              </motion.a>
              <motion.a
                href="#contact"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-foreground"
                whileHover={{ scale: 1.02 }}
              >
                Get in touch
              </motion.a>
            </div>
          </motion.div>

          {/* Right side - Tool list */}
          <div className="lg:w-7/12 space-y-3">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                className={`glass-hover rounded-2xl px-5 py-4 flex items-center gap-4 ${tool.highlight ? "glow-border" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <ToolIcon name={tool.name} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-sm">{tool.name}</h3>
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{tool.desc}</p>
                </div>
                <span className="text-xs text-muted-foreground font-mono flex-shrink-0">{tool.yoe}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsStack;
