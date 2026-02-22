import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Mail } from "lucide-react";

const tools = [
  { name: "JavaScript", desc: "Core Language", yoe: "4 YOE", color: "from-yellow-500/20 to-yellow-600/5" },
  { name: "TypeScript", desc: "Typed Superset", yoe: "3 YOE", color: "from-blue-500/20 to-blue-600/5" },
  { name: "React", desc: "Frontend Library", yoe: "4 YOE", color: "from-cyan-500/20 to-cyan-600/5" },
  { name: "Next.js", desc: "Fullstack Framework", yoe: "3 YOE", color: "from-foreground/10 to-foreground/5" },
  { name: "Go (Golang)", desc: "Backend Performance", yoe: "2 YOE", color: "from-sky-500/20 to-sky-600/5" },
  { name: "Discord.js", desc: "Bot Framework", yoe: "4 YOE", color: "from-indigo-500/20 to-indigo-600/5" },
  { name: "MongoDB", desc: "NoSQL Database", yoe: "3 YOE", color: "from-green-500/20 to-green-600/5" },
  { name: "Tailwind CSS", desc: "Utility CSS", yoe: "3 YOE", color: "from-teal-500/20 to-teal-600/5" },
];

const ToolsStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="tools" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-3">
            Tools & <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mb-6">
            I specialize in building scalable applications using modern technologies. Here is my preferred stack.
          </p>

          <div className="flex gap-3 mb-10">
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
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-purple text-primary-foreground text-sm font-medium"
              whileHover={{ scale: 1.02 }}
            >
              <Mail size={14} />
              Get in touch
            </motion.a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              className="glass-hover rounded-2xl p-5 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-3`}>
                <span className="text-lg font-bold text-foreground">{tool.name[0]}</span>
              </div>
              <h3 className="font-semibold text-foreground text-sm">{tool.name}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{tool.desc}</p>
              <p className="text-xs text-primary font-mono mt-2">{tool.yoe}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsStack;
