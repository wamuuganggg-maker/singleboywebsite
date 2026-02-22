import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Getting Started with Discord.js v14",
    excerpt: "A comprehensive guide to building your first Discord bot with the latest version.",
    date: "Dec 2024",
  },
  {
    title: "React Performance Tips",
    excerpt: "Optimize your React applications with these proven techniques and patterns.",
    date: "Nov 2024",
  },
  {
    title: "Tailwind CSS Best Practices",
    excerpt: "Write cleaner and more maintainable styles with Tailwind CSS utility-first approach.",
    date: "Oct 2024",
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="blog" className="py-20 px-4">
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
              Latest <span className="text-gradient">Updates</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Insights, thoughts, and tutorials from my development journey.
            </p>
          </div>
          <motion.button
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl glass-hover text-sm font-medium text-foreground"
            whileHover={{ scale: 1.02 }}
          >
            View All Posts
            <ArrowRight size={14} />
          </motion.button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              className="glass-hover rounded-2xl p-6 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <FileText size={14} className="text-primary" />
                <span className="text-xs text-muted-foreground font-mono">{post.date}</span>
              </div>
              <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground">{post.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
