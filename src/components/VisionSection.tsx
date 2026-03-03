import { motion } from "framer-motion";

const VisionSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, hsl(var(--foreground)) 0px, hsl(var(--foreground)) 1px, transparent 1px, transparent 40px),
                          repeating-linear-gradient(-45deg, hsl(var(--foreground)) 0px, hsl(var(--foreground)) 1px, transparent 1px, transparent 40px)`,
      }} />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-16 h-[2px] bg-gradient-to-r from-saffron to-chakra mx-auto mb-10" />
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading italic leading-tight mb-8">
            "India deserves intelligence built for its own{" "}
            <span className="text-gradient-saffron">diversity</span>."
          </h2>

          <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Vyom AI is more than a language model. It is a commitment to building technology
            that reflects India's intellectual heritage, linguistic richness, and ambition
            to lead the world in sovereign AI.
          </p>

          <div className="w-16 h-[2px] bg-gradient-to-r from-chakra to-saffron mx-auto mt-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
