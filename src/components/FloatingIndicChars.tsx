import { motion } from "framer-motion";

const chars = ["अ", "ஆ", "আ", "ಅ", "అ", "અ", "ਅ", "ଅ", "മ", "क", "த", "গ"];

const FloatingIndicChars = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl md:text-3xl font-heading select-none"
          style={{
            left: `${8 + (i * 7.5) % 85}%`,
            top: `${15 + (i * 13) % 70}%`,
            color: i % 2 === 0 ? "hsl(24 70% 45% / 0.15)" : "hsl(215 70% 50% / 0.12)",
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.15, 0.35, 0.15],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 5 + (i % 3) * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default FloatingIndicChars;
