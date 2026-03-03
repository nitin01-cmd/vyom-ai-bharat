import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const ChatHero = () => {
  return (
    <div className="flex-1 flex items-center justify-center min-h-[60vh] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" className="text-foreground">
          <defs>
            <pattern id="neural-chat" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="currentColor" />
              <line x1="30" y1="30" x2="60" y2="0" stroke="currentColor" strokeWidth="0.3" />
              <line x1="30" y1="30" x2="0" y2="60" stroke="currentColor" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-chat)" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center relative z-10 px-4"
      >
        {/* Logo mark */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center"
        >
          <Sparkles className="w-7 h-7 text-primary" />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-heading italic mb-3">
          <span className="text-gradient-saffron">Vyom</span>{" "}
          <span className="text-foreground">AI</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg text-muted-foreground font-light mb-2"
        >
          Intelligence Designed for India
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-sm text-muted-foreground/60 tracking-wide"
        >
          Multilingual · Context-Aware · Sovereign
        </motion.p>

        {/* Subtle glow */}
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
      </motion.div>
    </div>
  );
};

export default ChatHero;
