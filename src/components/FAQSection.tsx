import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { HelpCircle, ChevronDown, ArrowRight } from "lucide-react";

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

const FAQItem = ({ faq, index }: { faq: typeof faqs[0]; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="glass-hover rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="font-medium text-foreground text-sm">{faq.q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={18} className="text-muted-foreground" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-5 pb-5 text-sm text-muted-foreground">{faq.a}</p>
      </motion.div>
    </motion.div>
  );
};

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <HelpCircle size={32} className="text-primary mx-auto mb-3" />
          <h2 className="text-3xl font-bold">
            Need Help? <span className="text-gradient">We're here to assist.</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Still have questions? Feel free to contact our friendly support team.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-xl bg-gradient-purple text-primary-foreground text-sm font-medium"
            whileHover={{ scale: 1.02 }}
          >
            Contact Support
            <ArrowRight size={14} />
          </motion.a>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
