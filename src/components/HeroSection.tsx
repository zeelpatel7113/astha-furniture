"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { heroSlides } from "@/data";

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  const currentSlide = heroSlides[currentImageIndex];

  return (
    <section className="bg-gradient-to-r from-amber-50 to-amber-100 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-700 leading-tight">
              {currentSlide.title}
              <span className="text-amber-700 block">
                {currentSlide.subtitle}
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg">
              {currentSlide.description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                Free Delivery & Installation
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                Expert Assembly Service
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-700 rounded-full"></div>1 Year
                Warranty
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-amber-700 hover:bg-amber-800 text-white"
                onClick={() => (window.location.href = "/category/sofas")}
              >
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-amber-700 text-amber-700 hover:bg-amber-50"
                onClick={() => (window.location.href = "/about")}
              >
                Contect Us
              </Button>
            </div>
          </div>

          {/* Hero Image Slider */}
          <div className="relative">
            <div className="relative z-10 group">
              <Image
                src={currentSlide.src}
                alt={currentSlide.alt}
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl transition-all duration-500 w-full h-[400px] object-cover"
              />

              {/* Navigation Arrows */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg transition-all duration-200 opacity-80 hover:opacity-100 rounded-full w-10 h-10"
                onClick={prevImage}
              >
                <ChevronLeft className="h-5 w-5 text-slate-700" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg transition-all duration-200 opacity-80 hover:opacity-100 rounded-full w-10 h-10"
                onClick={nextImage}
              >
                <ChevronRight className="h-5 w-5 text-slate-700" />
              </Button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentImageIndex
                        ? "bg-amber-700 scale-110"
                        : "bg-white/70 hover:bg-white/90"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-amber-200 rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-amber-300 rounded-full opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
