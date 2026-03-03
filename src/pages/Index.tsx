import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyVyomSection from "@/components/WhyVyomSection";
import TechnologySection from "@/components/TechnologySection";
import UseCasesSection from "@/components/UseCasesSection";
import VisionSection from "@/components/VisionSection";
import VyomFooter from "@/components/VyomFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div id="why"><WhyVyomSection /></div>
      <div id="technology"><TechnologySection /></div>
      <div id="use-cases"><UseCasesSection /></div>
      <div id="vision"><VisionSection /></div>
      <VyomFooter />
    </div>
  );
};

export default Index;
