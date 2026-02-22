import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Moonveil Landing Page",
    desc: "A modern and sleek landing page for a Discord bot, built with React and Tailwind.",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&q=80",
    color: false,
  },
  {
    title: "Moonveil Bot",
    desc: "An advanced all-in-one Discord bot packed with powerful features, designed for both utility and entertainment.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    color: true,
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
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured{" "}<span className="relative inline-block"><span className="absolute inset-0 px-3 py-1" style={{ background: "hsl(270 70% 35%)", borderRadius: "4px", clipPath: "polygon(2% 8%, 98% 0%, 100% 92%, 0% 100%)", transform: "rotate(-3deg)" }} /><span className="relative inline-block px-3 py-1 text-primary-foreground" style={{ background: "hsl(270 70% 55%)", borderRadius: "4px", clipPath: "polygon(2% 8%, 98% 0%, 100% 92%, 0% 100%)", transform: "rotate(-1deg)" }}>Projects</span></span>
            </h2>
            <p className="mt-3 text-muted-foreground text-sm italic">
              A glimpse of my recent work. Check out the full portfolio for more.
            </p>
          </div>
          <motion.button
            className="hidden md:flex items-center gap-2 text-sm font-medium text-foreground"
            whileHover={{ scale: 1.02 }}
          >
            View All Projects
            <ArrowRight size={14} />
          </motion.button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className={`glass-hover rounded-2xl overflow-hidden group cursor-pointer ${project.color ? "glow-border" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.15, duration: 0.5 }}
            >
              <div className="h-56 md:h-64 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {project.color && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                    Moonveil Bot
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${project.color ? "text-primary" : "text-foreground"}`}>
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
