import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import { Star, Quote, Plus } from "lucide-react";

const testimonials = [
  {
    text: "heheha",
    author: "Tom Kreissler",
    role: "Cubiq Studios",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tom",
  },
  {
    text: "ko",
    author: "Xyron Development",
    role: "ok",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Xyron",
  },
  {
    text: "Heehhee",
    author: "F34R Reacts F34R Reacts",
    role: "Founder Of Xyron Development",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=F34R",
  },
  {
    text: "asdood",
    author: "Glide BEE",
    role: "dood",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Glide",
  },
  {
    text: "Hoohihoo",
    author: "F34R Reacts F34R Reacts",
    role: "Founder Of Xyron Development",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=F34R2",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const doubledTestimonials = useMemo(() => [...testimonials, ...testimonials], []);

  return (
    <section className="py-20 px-4 overflow-hidden">
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
              Client{" "}
              <span className="relative inline-block">
                <span
                  className="absolute inset-0"
                  style={{
                    background: "hsl(270 70% 35%)",
                    borderRadius: "6px",
                    clipPath: "polygon(3% 10%, 97% 0%, 100% 90%, 0% 100%)",
                    transform: "rotate(3deg) scale(1.05)",
                  }}
                />
                <span
                  className="relative inline-block px-3 py-1 text-primary-foreground"
                  style={{
                    background: "hsl(270 70% 55%)",
                    borderRadius: "6px",
                    clipPath: "polygon(2% 8%, 98% 2%, 97% 92%, 1% 100%)",
                    transform: "rotate(-2deg)",
                  }}
                >
                  Testimonials
                </span>
              </span>
            </h2>
            <p className="mt-3 text-muted-foreground text-sm italic">
              See what others are saying about my work.
            </p>
          </div>
          <motion.button
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium"
            whileHover={{ scale: 1.02 }}
          >
            <Plus size={14} />
            Leave a Review
          </motion.button>
        </motion.div>
      </div>

      {/* CSS-based marquee for zero-lag infinite scroll */}
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        <div className="marquee-container">
          <div className="marquee-track">
            {doubledTestimonials.map((t, i) => (
              <div
                key={i}
                className="glass-hover rounded-2xl p-6 flex flex-col w-[280px] shrink-0"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <Quote size={28} className="text-primary/30" />
                </div>
                <p className="text-sm text-muted-foreground mb-4 italic">"{t.text}"</p>
                <div className="border-t border-border pt-4 mt-auto flex items-center gap-3">
                  <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full" loading="lazy" />
                  <div>
                    <p className="text-sm font-bold text-foreground">{t.author}</p>
                    <p className="text-xs text-primary">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
