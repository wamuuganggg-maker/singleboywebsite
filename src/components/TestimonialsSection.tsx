import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 px-4">
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
              Client <span className="bg-primary px-2 py-0.5 text-primary-foreground rounded-md">Testimonials</span>
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

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="glass-hover rounded-2xl p-6 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
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
                <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="text-sm font-bold text-foreground">{t.author}</p>
                  <p className="text-xs text-primary">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
