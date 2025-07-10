"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { summerSaleSlides } from "@/data";

export default function SummerSaleBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % summerSaleSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % summerSaleSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + summerSaleSlides.length) % summerSaleSlides.length
    );
  };

  const slide = summerSaleSlides[currentSlide];

  // Image URLs for the slider - replace these with your actual image URLs
  const imageUrls = [
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80"
  ];

  return (
    <section className="relative overflow-hidden rounded-xl shadow-lg my-8">
      {/* Left Navigation Button */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 rounded-full p-2 shadow-md transition-all duration-300"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-black" />
      </button>

      {/* Right Navigation Button */}
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 rounded-full p-2 shadow-md transition-all duration-300"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-black" />
      </button>

      {/* Slide Content */}
      <div className={`${slide.bgColor} text-black relative`}>
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image 
            src={imageUrls[currentSlide % imageUrls.length]}
            alt={`Slide ${currentSlide + 1}`}
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Content */}
            <div className="text-center md:text-left md:w-1/2">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Sparkles className="h-6 w-6 text-amber-900" />
                <span className="text-lg font-semibold text-amber-900">
                  Limited Time Offer
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-2">
                {slide.title}
              </h2>
              <p className="text-xl md:text-2xl font-bold mb-2 text-amber-900">
                {slide.subtitle}
              </p>
              <p className="text-lg md:text-xl opacity-90 ">
                {slide.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
                {slide.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-1"
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link href="/category/sofas">
                  <Button
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/category/bedroom">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-black hover:bg-white/20 font-semibold px-8 py-3 rounded-lg transition-all duration-300"
                  >
                    Explore Offers
                  </Button>
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center items-center">
              <div className="relative w-full max-w-md aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src={imageUrls[currentSlide % imageUrls.length]}
                  alt={`${slide.title} - ${slide.subtitle}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {summerSaleSlides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-4" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
