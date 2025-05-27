
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HistorySection from "@/components/HistorySection";
import MissionSection from "@/components/MissionSection";
import ImpactSection from "@/components/ImpactSection";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="historia">
        <HistorySection />
      </div>
      <div id="missao">
        <MissionSection />
      </div>
      <ImpactSection />
      <div id="beneficios">
        <BenefitsSection />
      </div>
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
