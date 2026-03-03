import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-glass border-b border-border/30"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-heading italic">
            <span className="text-gradient-saffron">Vyom</span> AI
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#why" className="hover:text-foreground transition-colors">Why Vyom</a>
          <a href="#technology" className="hover:text-foreground transition-colors">Technology</a>
          <a href="#use-cases" className="hover:text-foreground transition-colors">Use Cases</a>
          <a href="#vision" className="hover:text-foreground transition-colors">Vision</a>
        </div>
        <div className="text-xs px-4 py-2 rounded-full border-glow bg-glass text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
          Get Access
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
