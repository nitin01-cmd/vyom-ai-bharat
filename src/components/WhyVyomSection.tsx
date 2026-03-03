import { motion } from "framer-motion";
import { Languages, Brain, ShieldCheck, Globe } from "lucide-react";

const features = [
  {
    icon: Languages,
    title: "Multilingual Intelligence",
    description: "Native understanding of 22+ Indian languages with contextual fluency beyond translation.",
  },
  {
    icon: Brain,
    title: "Cultural Context Awareness",
    description: "Trained on India's diverse cultural nuances, idioms, and regional knowledge systems.",
  },
  {
    icon: ShieldCheck,
    title: "Data Sovereignty",
    description: "Your data stays in India. Built on sovereign infrastructure with complete compliance.",
  },
  {
    icon: Globe,
    title: "Built for Bharat",
    description: "From villages to metros — designed to serve every Indian across every domain.",
  },
];

const WhyVyomSection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading italic mb-4">
            Why <span className="text-gradient-saffron">Vyom AI</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-light">
            Intelligence that understands the soul of India.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-xl border-glow bg-card hover:glow-saffron transition-shadow duration-500"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-saffron" />
              </div>
              <h3 className="text-lg font-semibold mb-3 font-body">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVyomSection;
