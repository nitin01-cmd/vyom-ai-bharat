import { motion } from "framer-motion";
import { Cpu, Layers, Server } from "lucide-react";

const techItems = [
  {
    icon: Layers,
    title: "Transformer Architecture",
    description: "State-of-the-art multi-head attention optimized for Indic language morphology and script diversity.",
    stat: "40B+ Parameters",
  },
  {
    icon: Cpu,
    title: "Token Optimization",
    description: "Custom tokenizer built for Devanagari, Dravidian, and Indo-Aryan script families — 3× more efficient than generic models.",
    stat: "3× Efficiency",
  },
  {
    icon: Server,
    title: "Sovereign Cloud",
    description: "Deployed on Indian cloud infrastructure with CERT-IN compliance and end-to-end encryption.",
    stat: "100% Indian Infra",
  },
];

const TechnologySection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading italic mb-4">
            The <span className="text-gradient-blue">Technology</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-light">
            World-class AI architecture, purpose-built for India.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {techItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative p-8 rounded-2xl bg-card border-glow overflow-hidden group"
            >
              {/* Accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-chakra to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-chakra" />
              </div>

              <p className="text-xs font-mono tracking-widest text-chakra mb-3 uppercase">{item.stat}</p>
              <h3 className="text-xl font-semibold mb-3 font-body">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
