import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SocialProof from '@/components/SocialProof';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ResultsSection from '@/components/ResultsSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SocialProof />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <ResultsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
