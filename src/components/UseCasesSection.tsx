import { motion } from "framer-motion";
import { GraduationCap, Stethoscope, Scale, Wheat } from "lucide-react";

const useCases = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Personalized learning in mother tongues. AI tutors that understand regional curricula and cultural context.",
    gradient: "from-saffron/20 to-transparent",
  },
  {
    icon: Wheat,
    title: "Agriculture",
    description: "Real-time crop advisory in local languages. Weather, soil, and market intelligence for 150M+ farmers.",
    gradient: "from-green-900/20 to-transparent",
  },
  {
    icon: Scale,
    title: "Judiciary",
    description: "Legal document analysis in Indian languages. Case summarization and accessible justice for all citizens.",
    gradient: "from-chakra/20 to-transparent",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Multilingual symptom analysis and health guidance. Bridging the rural healthcare information gap.",
    gradient: "from-red-900/20 to-transparent",
  },
];

const UseCasesSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading italic mb-4">
            Transforming <span className="text-gradient-saffron">India</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-light">
            AI that serves a billion dreams across every sector.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {useCases.map((useCase, i) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-8 rounded-2xl border-glow bg-card overflow-hidden hover:glow-blue transition-shadow duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-5">
                  <useCase.icon className="w-6 h-6 text-foreground/80" />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-body">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
