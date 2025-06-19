import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface BrandPageProps {
  params: {
    slug: string;
  };
}

export default function BrandPage({ params }: BrandPageProps) {
  const brandSlug = params.slug;
  const brandName = brandSlug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-500">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/#brands" className="hover:text-orange-500">
              Brands
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 font-medium">{brandName}</span>
          </nav>
        </div>
      </div>

      {/* Brand Header */}
      <div className="py-12 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {brandName}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the exclusive collection from {brandName}, featuring
            premium quality and exceptional design for your home.
          </p>
        </div>
      </div>

      {/* Products */}
      <ProductGrid
        title={`${brandName} Collection`}
        subtitle={`Explore premium furniture and decor from ${brandName}`}
      />

      <Footer />
    </div>
  );
}
