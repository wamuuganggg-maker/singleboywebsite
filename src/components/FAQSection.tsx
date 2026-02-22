import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "What services do you offer?",
    a: "I specialize in Fullstack Web Development (React, Next.js) and advanced Discord Bot development. I can build custom websites, automation tools, and community management bots tailored to your needs.",
  },
  {
    q: "How much do you charge for a project?",
    a: "Pricing depends on the scope and complexity of the project. Contact me for a free quote and consultation.",
  },
  {
    q: "What tech stack do you use?",
    a: "I primarily use React, Next.js, TypeScript, Tailwind CSS for frontend, and Node.js, Go, MongoDB for backend. For Discord bots, I use Discord.js with TypeScript.",
  },
  {
    q: "Do you provide support after deployment?",
    a: "Yes! I offer post-deployment support and maintenance packages to ensure your application runs smoothly.",
  },
  {
    q: "How can I hire you?",
    a: "Simply fill out the contact form below or reach out via email. I'll get back to you within 24 hours.",
  },
];

const FAQItem = ({ faq, index, isOpen, onToggle }: { faq: typeof faqs[0]; index: number; isOpen: boolean; onToggle: () => void }) => {
  return (
    <motion.div
      className="border-b border-border last:border-b-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-1 text-left"
      >
        <span className={`font-medium text-sm ${isOpen ? "text-primary" : "text-foreground"}`}>{faq.q}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 ${isOpen ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-1 pb-5 text-sm text-muted-foreground">{faq.a}</p>
      </motion.div>
    </motion.div>
  );
};

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 px-4">
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
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Need <span className="inline-block px-3 py-1 text-primary-foreground" style={{ background: "hsl(270 70% 55%)", borderRadius: "4px", clipPath: "polygon(2% 8%, 98% 0%, 100% 92%, 0% 100%)", transform: "rotate(-1deg)" }}>Help?</span>
            </h2>
            <p className="text-2xl md:text-3xl text-muted-foreground mt-1">We're here to assist.</p>
            <p className="mt-4 text-muted-foreground text-sm">
              Still have questions? Feel free to contact our friendly support team specialists.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl bg-foreground text-background text-sm font-medium"
              whileHover={{ scale: 1.02 }}
            >
              Contact Support
              <ArrowRight size={14} />
            </motion.a>
          </motion.div>

          {/* Right side - FAQ */}
          <div className="lg:w-7/12">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
