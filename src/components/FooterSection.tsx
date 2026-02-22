import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2024 Gaeuly. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          Made with <Heart size={14} className="text-primary" /> using React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
