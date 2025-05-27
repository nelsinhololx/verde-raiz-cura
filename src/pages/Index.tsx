
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
      <HeroSection />
      <HistorySection />
      <MissionSection />
      <ImpactSection />
      <BenefitsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
