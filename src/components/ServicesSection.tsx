import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowUpRight, ExternalLink } from "lucide-react";
import serviceWebImg from "@/assets/service-web.png";
import serviceDiscordImg from "@/assets/service-discord.png";

const features = [
  "High Performance & Scalable",
  "Custom & Tailored Features",
  "Modern UI/UX Design",
];

const services = [
  {
    img: serviceWebImg,
    title: "Web Development",
    subtitle: "DESIGN & DEVELOPMENT",
    desc: "Modern, responsive, and high-performance websites built with React, Next.js, and Tailwind CSS.",
  },
  {
    img: serviceDiscordImg,
    title: "Discord Bot",
    subtitle: "AUTOMATION & COMMUNITY",
    desc: "Advanced Discord bots with moderation, music, economy, and custom features using Discord.js.",
    highlight: true,
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="services" className="py-20 px-4">
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
            <p className="text-sm text-primary font-medium uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              MY SERVICES
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Creative<br />
              <span className="bg-primary px-2 py-0.5 text-primary-foreground rounded-md">Solutions</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-sm">
              Elevate your digital presence with tailored strategies. I help you build robust applications and automate your community workflow.
            </p>

            <div className="space-y-3 mt-6">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <Check size={16} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">{f}</span>
                </div>
              ))}
            </div>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-foreground text-background text-sm font-medium"
              whileHover={{ scale: 1.02 }}
            >
              Get Started
              <ExternalLink size={14} />
            </motion.a>
          </motion.div>

          {/* Right side - Service cards */}
          <div className="lg:w-7/12 space-y-4">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className={`glass-hover rounded-2xl p-4 flex items-center gap-5 group cursor-pointer ${service.highlight ? "glow-border" : ""}`}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{service.subtitle}</p>
                  <p className="text-sm text-muted-foreground mt-1">{service.desc}</p>
                </div>
                <motion.div
                  className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <ArrowUpRight size={16} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
