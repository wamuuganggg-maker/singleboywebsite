import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "minecraft-basic-tips",
    excerpt: "A few tips and tricks I learned while managing my own Minecraft community server.",
    date: "NOVEMBER 24, 2025",
    image: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=800&q=80",
  },
  {
    title: "discord-bots-basic",
    excerpt: "Creating your own Discord bot isn't as complicated as it might sound. With a basic understanding of **JavaScript** and the **Discord API**...",
    date: "NOVEMBER 24, 2025",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&q=80",
    highlight: true,
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
            <h2 className="text-4xl md:text-5xl font-bold">
              Latest Updates
            </h2>
            <p className="mt-3 text-muted-foreground text-sm italic">
              Insights, thoughts, and tutorials from my development journey.
            </p>
          </div>
          <motion.button
            className="hidden md:flex items-center gap-2 text-sm font-bold text-foreground"
            whileHover={{ scale: 1.02 }}
          >
            View All Posts
            <ArrowRight size={14} />
          </motion.button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              className={`glass-hover rounded-2xl overflow-hidden group cursor-pointer ${post.highlight ? "glow-border" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
            >
              <div className="h-48 md:h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar size={12} className="text-muted-foreground" />
                  <span className="text-xs text-muted-foreground font-mono uppercase">{post.date}</span>
                </div>
                <h3 className={`font-bold mb-2 ${post.highlight ? "text-primary" : "text-foreground"}`}>
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                <a href="#" className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-primary hover:underline">
                  Read Article <ArrowRight size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
