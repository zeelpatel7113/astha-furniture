import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutUsSection from "@/components/AboutUsSection";
import ProductGrid from "@/components/ProductGrid";
import CategoryHighlights from "@/components/CategoryHighlights";
import OurHappyCustomers from "@/components/OurHappyCustomers";
import DecorBrands from "@/components/DecorBrands";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import SummerSaleBanner from "@/components/SummerSaleBanner";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ContactModal />
      {/* <HeroSection /> */}
      <SummerSaleBanner />
      <AboutUsSection />
      <ProductGrid
        title="Best Sellers"
        subtitle="Our most loved furniture pieces that customers can't get enough of"
      />
      <CategoryHighlights />
      <ProductGrid
        title="Summer Sale - Up to 70% OFF"
        subtitle="Limited time offer on selected furniture items. Don't miss out!"
      />
      <OurHappyCustomers />
      <DecorBrands />
      <Footer />
    </div>
  );
}
