"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { LoadingSpinner } from "@/components/ui/spinner";
import {
  Heart,
  ShoppingCart,
  Star,
  Share2,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Truck,
  Shield,
  RotateCcw,
  Phone,
  MessageCircle,
  CheckCircle,
  Info,
  Package,
  Award,
  Clock,
  MapPin,
  Gift,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { productOffers } from "@/data.js";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

interface Offer {
  id: string;
  title: string;
  description: string;
  type: string;
  icon: string;
}

const productImages = [
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
];

const colorVariants = [
  {
    name: "Jade Ivory",
    color: "#F5F5DC",
    price: 46989,
    image: productImages[0],
  },
  {
    name: "Salmon Pink",
    color: "#FA8072",
    price: 44989,
    image: productImages[1],
  },
  {
    name: "Chestnut Brown",
    color: "#954535",
    price: 44989,
    image: productImages[2],
  },
  {
    name: "Dark Olive Green",
    color: "#556B2F",
    price: 44989,
    image: productImages[3],
  },
  {
    name: "Indigo Blue",
    color: "#4B0082",
    price: 44989,
    image: productImages[4],
  },
];



export default function ProductPage({ params }: ProductPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [offers, setOffers] = useState<Offer[]>([]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + productImages.length) % productImages.length,
    );
  };

  useEffect(() => {
    // Simulate loading product data and offers
    const loadProductData = async () => {
      setIsLoading(true);
      try {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setOffers(productOffers);
      } catch (error) {
        console.error("Error loading product data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProductData();
  }, [params.slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <Skeleton className="w-full h-96 lg:h-[500px] rounded-lg" />
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="w-20 h-20 rounded-lg" />
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-32 w-full" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

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
            <Link href="/category/sofas" className="hover:text-orange-500">
              Sofas
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 font-medium">
              Osbert 3 Seater Curved Sofa
            </span>
          </nav>
        </div>
      </div>

      {/* Product Detail Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative group">
              <div
                className="relative w-full h-96 lg:h-[500px] bg-gray-100 rounded-lg overflow-hidden cursor-zoom-in"
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <Image
                  src={productImages[currentImageIndex]}
                  alt="Osbert 3 Seater Curved Sofa"
                  fill
                  className={`object-cover transition-transform duration-300 ${
                    isZoomed ? "scale-150" : "hover:scale-105"
                  }`}
                />
                <div className="absolute top-4 right-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-white/80 hover:bg-white"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Navigation Arrows */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={prevImage}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={nextImage}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-2 overflow-x-auto">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    currentImageIndex === index
                      ? "border-orange-500"
                      : "border-gray-200"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <Image
                    src={image}
                    alt={`Product view ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Title and Rating */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Osbert 3 Seater Curved Sofa
              </h1>
              <p className="text-gray-600 mb-4">(Cotton, Jade Ivory)</p>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    (365 reviews)
                  </span>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-amber-100 text-amber-700"
                >
                  <ShoppingCart className="h-3 w-3 mr-1" />
                  Popular choice among customers
                </Badge>
              </div>
            </div>

            {/* Product Features */}
            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3 text-slate-700">
                Premium Features & Benefits
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-white p-3 rounded border">
                  <div className="text-sm font-medium mb-1 text-slate-700">
                    Expert Craftsmanship
                  </div>
                  <div className="text-xs text-slate-600">
                    Handcrafted with precision
                  </div>
                </div>
                <div className="bg-white p-3 rounded border">
                  <div className="text-sm font-medium mb-1 text-slate-700">
                    Premium Materials
                  </div>
                  <div className="text-xs text-slate-600">
                    High-quality cotton fabric
                  </div>
                </div>
                <div className="bg-white p-3 rounded border">
                  <div className="text-sm font-medium mb-1 text-slate-700">
                    Comfort Guaranteed
                  </div>
                  <div className="text-xs text-slate-600">Ergonomic design</div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-amber-700" />
                <span className="text-sm">Free Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-amber-700" />
                <span className="text-sm">36 Month Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="h-5 w-5 text-amber-700" />
                <span className="text-sm">Easy Returns</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-amber-700" />
                <span className="text-sm">Expert Assembly</span>
              </div>
            </div>

            {/* Special Offers Section */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
              <h3 className="text-xl font-bold text-amber-800 mb-4 flex items-center gap-2">
                <Gift className="h-6 w-6" />
                Save Extra with Below Offers
              </h3>
              <div className="space-y-3">
                {offers.map((offer) => (
                  <div
                    key={offer.id}
                    className="bg-white p-4 rounded-lg border border-amber-100 flex items-center gap-3 hover:shadow-md transition-shadow"
                  >
                    <span className="text-2xl">{offer.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {offer.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {offer.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Information Accordion */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Product Information
          </h3>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {/* Product Overview */}
            <AccordionItem value="overview" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Product Overview
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-gray-600">
                      Design
                    </span>
                    <p className="font-medium">Modern</p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-gray-600">
                      Material
                    </span>
                    <p className="font-medium">Cotton</p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-gray-600">
                      Color
                    </span>
                    <p className="font-medium">Jade Ivory</p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-gray-600">
                      Seater
                    </span>
                    <p className="font-medium">3 Seater</p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-gray-600">
                      Base Material
                    </span>
                    <p className="font-medium">SS Electroplating Ring</p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-gray-600">
                      Dimensions (Inch)
                    </span>
                    <p className="font-medium">94 L x 33 W x 30 H</p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-gray-600">
                      Dimensions (Cm)
                    </span>
                    <p className="font-medium">238.8 L x 83.8 W x 76.2 H</p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-gray-600">
                      Seating Height
                    </span>
                    <p className="font-medium">17 inch</p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-gray-600">
                      Foam
                    </span>
                    <p className="font-medium">High Density Foam</p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-gray-600">
                      Armrest
                    </span>
                    <p className="font-medium">Yes</p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-gray-600">
                      Shape
                    </span>
                    <p className="font-medium">Curved</p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-gray-600">
                      Brand
                    </span>
                    <p className="font-medium">Wooden Street</p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-gray-600">
                      Storage
                    </span>
                    <p className="font-medium">Without Storage</p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-gray-600">
                      SKU
                    </span>
                    <p className="font-medium">WSFBS56</p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-gray-600">
                      Delivery Condition
                    </span>
                    <p className="font-medium">
                      Expert-Assembly (within 3 days)
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* About Product */}
            <AccordionItem value="about" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                About This Product
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6 pt-4">
                  <div>
                    <h4 className="font-semibold mb-2">Material & Color</h4>
                    <p className="text-gray-700">
                      Crafted with premium cotton upholstery in elegant Jade
                      Ivory, this sofa combines durability with sophisticated
                      aesthetics. The fabric is carefully selected for its
                      softness, breathability, and long-lasting color retention.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Manufacturing Quality
                    </h4>
                    <p className="text-gray-700">
                      Each piece undergoes strict quality checks to ensure
                      premium finishing. Our manufacturing process follows
                      international standards with attention to every detail,
                      from frame construction to final upholstery.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Product Features</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>
                        Innovative curved design that complements modern
                        interiors
                      </li>
                      <li>
                        High-density foam for superior comfort and longevity
                      </li>
                      <li>Stylish armrests with ergonomic design</li>
                      <li>
                        Sturdy base frame with SS electroplating for durability
                      </li>
                      <li>Expert assembly service included</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Brand Philosophy</h4>
                    <p className="text-gray-700">
                      Wooden Street believes in delivering affordable luxury
                      through high-caliber furniture design. We combine
                      traditional craftsmanship with contemporary aesthetics to
                      create pieces that transform your living space.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Merchant Details */}
            <AccordionItem value="merchant" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Merchant Details
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm font-medium text-gray-600">
                        Brand Name
                      </span>
                      <p className="font-medium">Wooden Street</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">
                        Merchant Name
                      </span>
                      <p className="font-medium">
                        The WoodenStreet Furnitures Pvt. Ltd.
                      </p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">
                        Merchant Address
                      </span>
                      <p className="font-medium">
                        Khasra no. 210/211, Village Narnadi, Boranada, Jodhpur,
                        Rajasthan, 342012
                      </p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">
                        Country of Origin
                      </span>
                      <p className="font-medium">India</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm font-medium text-gray-600">
                        Country of Assembly
                      </span>
                      <p className="font-medium">India</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">
                        Manufacturer Name
                      </span>
                      <p className="font-medium">
                        The WoodenStreet Furnitures Pvt. Ltd.
                      </p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">
                        Packer Name
                      </span>
                      <p className="font-medium">
                        The WoodenStreet Furnitures Pvt. Ltd.
                      </p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">
                        Generic Name
                      </span>
                      <p className="font-medium">
                        Osbert 3 Seater Curved Sofa (Cotton, Jade Ivory)
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Technical Specifications */}
            <AccordionItem
              value="specifications"
              className="border rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-semibold">
                Technical Specifications
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                  <div>
                    <h4 className="font-semibold mb-3">Dimensions</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Length:</span>
                        <span>94 inches (238.8 cm)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Width:</span>
                        <span>33 inches (83.8 cm)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Height:</span>
                        <span>30 inches (76.2 cm)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Seating Height:</span>
                        <span>17 inches</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Materials</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Upholstery:</span>
                        <span>Premium Cotton</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Foam:</span>
                        <span>High Density</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Base:</span>
                        <span>SS Electroplating</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Frame:</span>
                        <span>Engineered Wood</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Packaging</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Package Weight:</span>
                        <span>45 kg (approx)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Package Dimensions:</span>
                        <span>100 x 40 x 35 cm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Assembly Required:</span>
                        <span>Yes (Expert Service)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Care & Instructions */}
            <AccordionItem value="care" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Care & Instructions
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6 pt-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      Regular Maintenance
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-7">
                      <li>
                        Vacuum regularly using upholstery attachment to remove
                        dust and debris
                      </li>
                      <li>
                        Rotate and flip cushions weekly to ensure even wear
                      </li>
                      <li>
                        Keep away from direct sunlight to prevent fabric fading
                      </li>
                      <li>
                        Maintain room humidity between 40-60% for optimal fabric
                        condition
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Info className="h-5 w-5 text-blue-600" />
                      Cleaning Methods
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-7">
                      <li>
                        For spot cleaning, use mild soap solution and clean
                        cloth
                      </li>
                      <li>Blot stains immediately - do not rub or scrub</li>
                      <li>
                        Professional cleaning recommended every 12-18 months
                      </li>
                      <li>Test any cleaning solution on hidden area first</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-purple-600" />
                      Protection Guidelines
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-7">
                      <li>Keep sharp objects away from fabric surface</li>
                      <li>Use furniture protectors under pet claws</li>
                      <li>
                        Avoid placing near heat sources (radiators, fireplaces)
                      </li>
                      <li>
                        Use coasters and protective covers for drinks and food
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Delivery & Installation */}
            <AccordionItem value="delivery" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Delivery & Installation
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6 pt-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Truck className="h-5 w-5 text-green-600" />
                      Delivery Policy
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-7">
                      <li>Free delivery across major cities in India</li>
                      <li>Standard delivery time: 7-14 business days</li>
                      <li>
                        Express delivery available in select cities (additional
                        charges apply)
                      </li>
                      <li>Delivery scheduling available between 9 AM - 6 PM</li>
                      <li>SMS and email notifications for delivery updates</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Package className="h-5 w-5 text-blue-600" />
                      Installation Procedure
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-7">
                      <li>Expert assembly service included at no extra cost</li>
                      <li>
                        Professional installation within 3 days of delivery
                      </li>
                      <li>
                        Installation team will contact you to schedule
                        appointment
                      </li>
                      <li>
                        All packaging materials will be removed after
                        installation
                      </li>
                      <li>Quality check performed post-installation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Phone className="h-5 w-5 text-orange-600" />
                      Customer Support
                    </h4>
                    <div className="ml-7 space-y-2">
                      <p className="text-gray-700">
                        For delivery-related queries:
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Phone className="h-4 w-4" />
                          1800-123-4567
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          Live Chat Available
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Warranty */}
            <AccordionItem value="warranty" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Warranty Information
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6 pt-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2 text-green-800">
                      <Shield className="h-5 w-5" />
                      36 Months Comprehensive Warranty
                    </h4>
                    <p className="text-green-700 text-sm">
                      Complete coverage against manufacturing defects and
                      structural issues
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Coverage Details</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-green-600 mb-1">
                          Covered
                        </h5>
                        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                          <li>Manufacturing defects</li>
                          <li>Structural frame issues</li>
                          <li>Hardware failures</li>
                          <li>Foam degradation (beyond normal wear)</li>
                          <li>Fabric defects (color bleeding, tearing)</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-red-600 mb-1">
                          Not Covered
                        </h5>
                        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                          <li>Normal wear and tear</li>
                          <li>Damage due to misuse</li>
                          <li>Stains and spills</li>
                          <li>Pet damage</li>
                          <li>Damage during relocation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Claim Process</h4>
                    <ol className="list-decimal list-inside text-gray-700 space-y-1">
                      <li>
                        Contact customer support with order details and issue
                        description
                      </li>
                      <li>Provide photos/videos of the defect if requested</li>
                      <li>Schedule inspection visit by our technical team</li>
                      <li>Receive repair/replacement as per warranty terms</li>
                      <li>Follow-up support to ensure satisfaction</li>
                    </ol>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* FAQ */}
            <AccordionItem value="faq" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Frequently Asked Questions
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-4">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="fabric">
                      <AccordionTrigger>
                        Which fabric is used in the furniture?
                      </AccordionTrigger>
                      <AccordionContent>
                        This sofa is upholstered with premium cotton fabric that
                        is durable, breathable, and comfortable. The fabric is
                        treated for stain resistance and color fastness to
                        ensure long-lasting beauty.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="wood">
                      <AccordionTrigger>
                        What kind of wood is used in the frame?
                      </AccordionTrigger>
                      <AccordionContent>
                        The frame is constructed using high-quality engineered
                        wood that provides excellent strength and durability.
                        The base features SS electroplating for added stability
                        and a premium finish.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="comfort">
                      <AccordionTrigger>
                        Is your furniture comfortable?
                      </AccordionTrigger>
                      <AccordionContent>
                        Absolutely! This sofa features high-density foam
                        cushioning that provides excellent support while
                        maintaining comfort. The curved design and ergonomic
                        armrests ensure a relaxing seating experience.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="designs">
                      <AccordionTrigger>
                        What designs can I print on the fabric furniture?
                      </AccordionTrigger>
                      <AccordionContent>
                        This particular model comes in pre-selected premium
                        colors and patterns. For custom printing options, please
                        contact our design team to discuss available
                        customization services.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="cleaning">
                      <AccordionTrigger>
                        How do I clean my furniture?
                      </AccordionTrigger>
                      <AccordionContent>
                        Regular vacuuming with an upholstery attachment is
                        recommended. For spot cleaning, use a mild soap solution
                        and clean cloth. Professional cleaning is recommended
                        annually for best results.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="delivery">
                      <AccordionTrigger>
                        Is delivery to my doorstep guaranteed?
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes, we provide free doorstep delivery across major
                        cities in India. Our delivery team will coordinate with
                        you to schedule a convenient time for delivery and
                        installation.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="prices">
                      <AccordionTrigger>
                        Are prices all-inclusive?
                      </AccordionTrigger>
                      <AccordionContent>
                        The displayed price includes the product cost, delivery,
                        and expert assembly service. Additional charges may
                        apply for express delivery or remote locations, which
                        will be clearly communicated before order confirmation.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="documents">
                      <AccordionTrigger>
                        Do I need to submit any documents upon delivery?
                      </AccordionTrigger>
                      <AccordionContent>
                        You'll need to provide a valid ID proof during delivery
                        for verification purposes. No additional documents are
                        required unless you're claiming GST input credit for
                        business purchases.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            You May Also Like
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <Card
                key={item}
                className="group cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={`https://images.unsplash.com/photo-${1586023492125 + item}-27b2c045efd7?w=300&q=80`}
                      alt={`Related Product ${item}`}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold mb-2">Related Sofa {item}</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-600">
                        Premium Collection
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
