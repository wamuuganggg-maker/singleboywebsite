import { useState, useEffect, useCallback } from "react";
import { Home, FolderOpen, BookOpen, Moon, Sun, LogIn } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: FolderOpen, label: "Projects", href: "#projects" },
  { icon: BookOpen, label: "Blog", href: "#blog" },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove("light");
    } else {
      root.classList.add("light");
    }
  }, [isDark]);

  const handleClick = useCallback((label: string, href: string) => {
    setActive(label);
    const el = document.querySelector(href);
    if (!el) return;
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(el, { offset: -80, duration: 1.2 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <motion.nav
      className="fixed top-4 left-1/2 z-40 flex items-center gap-2"
      initial={{ x: "-50%", y: -60, opacity: 0 }}
      animate={{ x: "-50%", y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div className="flex items-center gap-1 glass rounded-2xl px-3 py-2">
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
            <item.icon size={22} />
          </button>
        ))}
      </div>

      <div className="flex items-center gap-1 glass rounded-2xl px-3 py-2">
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-3 rounded-xl text-muted-foreground hover:text-foreground transition-colors"
        >
          {isDark ? <Moon size={22} /> : <Sun size={22} />}
        </button>
        <button
          onClick={() => handleClick("Contact", "#contact")}
          className="p-3 rounded-xl text-muted-foreground hover:text-foreground transition-colors"
        >
          <LogIn size={22} />
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
