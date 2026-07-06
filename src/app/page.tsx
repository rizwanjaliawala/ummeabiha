import HeroSection from "@/components/hero/HeroSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PackageCategories from "@/components/home/PackageCategories";
import PackageBuilderCTA from "@/components/home/PackageBuilderCTA";
import HotelShowcase from "@/components/home/HotelShowcase";
import IslamicTours from "@/components/home/IslamicTours";
import Testimonials from "@/components/home/Testimonials";
import FAQSection from "@/components/home/FAQSection";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <PackageCategories />
      <PackageBuilderCTA />
      <HotelShowcase />
      <IslamicTours />
      <Testimonials />
      <FAQSection />
      <CTABanner />
    </>
  );
}
