import { useState } from "react";
import { Home, FolderOpen, BookOpen, Moon, LogIn } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: FolderOpen, label: "Projects", href: "#projects" },
  { icon: BookOpen, label: "Blog", href: "#blog" },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const handleClick = (label: string, href: string) => {
    setActive(label);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div className="flex items-center gap-1 glass rounded-2xl px-2 py-2">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleClick(item.label, item.href)}
            className={`relative p-3 rounded-xl transition-all duration-300 ${
              active === item.label
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {active === item.label && (
              <motion.div
                layoutId="nav-active"
                className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-primary"
              />
            )}
            <item.icon size={20} />
          </button>
        ))}
      </div>

      <div className="flex items-center gap-1 glass rounded-2xl px-2 py-2">
        <button className="p-3 rounded-xl text-muted-foreground hover:text-foreground transition-colors">
          <Moon size={20} />
        </button>
        <button className="p-3 rounded-xl text-muted-foreground hover:text-foreground transition-colors">
          <LogIn size={20} />
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
