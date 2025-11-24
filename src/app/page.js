import CallToActionBanner  from "@/Home/CallToActionBanner";
import HeroSection from "@/Home/HeroSection";
import MarketplaceAdvantages from "@/Home/MarketplaceAdvantages";
import MarketplaceBenefitsSection from "@/Home/MarketplaceBenefitsSection";
import ReviewsSection from "@/Home/ReviewsSection";
export default function Home() {
  return (
    <div className="section min-h-screen font-sans">
      <HeroSection></HeroSection>
      <MarketplaceAdvantages></MarketplaceAdvantages>
      <MarketplaceBenefitsSection></MarketplaceBenefitsSection>
      <ReviewsSection></ReviewsSection>
      <CallToActionBanner></CallToActionBanner>
    </div>
  );
}
