import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import projectSpotify from "@/assets/project-spotify.webp";
import projectFreelancing from "@/assets/project-freelancing.png";

const projects = [
  {
    title: "Worked For Spotify",
    desc: "Collaborated with Spotify on music bot development, integrations, and custom audio experiences.",
    image: projectSpotify,
    color: false,
  },
  {
    title: "Freelancing",
    desc: "Professional freelance development services — web apps, Discord bots, and custom solutions for clients.",
    image: projectFreelancing,
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
              Featured{" "}<span className="relative inline-block"><span className="absolute inset-0" style={{ background: "hsl(270 70% 35%)", borderRadius: "6px", clipPath: "polygon(3% 10%, 97% 0%, 100% 90%, 0% 100%)", transform: "rotate(3deg) scale(1.05)" }} /><span className="relative inline-block px-3 py-1 text-primary-foreground" style={{ background: "hsl(270 70% 55%)", borderRadius: "6px", clipPath: "polygon(2% 8%, 98% 2%, 97% 92%, 1% 100%)", transform: "rotate(-2deg)" }}>Projects</span></span>
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
                    Freelancing
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
