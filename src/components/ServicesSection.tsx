import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Palette, Wrench, ArrowRight } from "lucide-react";
import serviceWebImg from "@/assets/service-web.png";
import serviceDiscordImg from "@/assets/service-discord.png";

const features = [
  { icon: Zap, text: "High Performance & Scalable" },
  { icon: Wrench, text: "Custom & Tailored Features" },
  { icon: Palette, text: "Modern UI/UX Design" },
];

const services = [
  {
    img: serviceWebImg,
    title: "Web Development",
    subtitle: "Design & Development",
    desc: "Modern, responsive, and high-performance websites built with React, Next.js, and Tailwind CSS.",
  },
  {
    img: serviceDiscordImg,
    title: "Discord Bot",
    subtitle: "Automation & Community",
    desc: "Advanced Discord bots with moderation, music, economy, and custom features using Discord.js.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-primary font-medium uppercase tracking-wider mb-2">My Services</p>
          <h2 className="text-4xl font-bold">
            Creative <span className="text-gradient">Solutions</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Elevate your digital presence with tailored strategies. I help you build robust applications and automate your community workflow.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <f.icon size={14} className="text-primary" />
                {f.text}
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl bg-gradient-purple text-primary-foreground font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="glass-hover rounded-2xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                <p className="text-sm text-primary mt-1">{service.subtitle}</p>
                <p className="text-sm text-muted-foreground mt-3">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
