import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    desc: "A modern, animated portfolio built with React and Framer Motion.",
    tags: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "Discord Moderation Bot",
    desc: "A fully featured moderation bot with auto-mod, logging, and custom commands.",
    tags: ["Discord.js", "TypeScript", "MongoDB"],
  },
  {
    title: "E-Commerce Dashboard",
    desc: "A responsive admin dashboard for managing products, orders, and analytics.",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <h2 className="text-4xl font-bold">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              A glimpse of my recent work. Check out the full portfolio for more.
            </p>
          </div>
          <motion.button
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl glass-hover text-sm font-medium text-foreground"
            whileHover={{ scale: 1.02 }}
          >
            View All Projects
            <ArrowRight size={14} />
          </motion.button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="glass-hover rounded-2xl p-6 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-foreground">{project.title}</h3>
                <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="mt-6 md:hidden w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl glass-hover text-sm font-medium text-foreground"
          whileHover={{ scale: 1.02 }}
        >
          Explore All Projects
          <ArrowRight size={14} />
        </motion.button>
      </div>
    </section>
  );
};

export default ProjectsSection;
