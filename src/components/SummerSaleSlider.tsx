"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { summerSaleSlides } from "@/data";

export default function SummerSaleSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % summerSaleSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % summerSaleSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + summerSaleSlides.length) % summerSaleSlides.length,
    );
  };

  const slide = summerSaleSlides[currentSlide];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <div
            className={`${slide.bgColor} text-white py-8 px-6 md:py-12 md:px-12 relative`}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 text-6xl">🌞</div>
              <div className="absolute top-8 right-8 text-4xl">🏠</div>
              <div className="absolute bottom-4 left-8 text-5xl">🛋️</div>
              <div className="absolute bottom-8 right-4 text-3xl">✨</div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="mb-4">
                  <h2 className="text-4xl md:text-6xl font-bold mb-2">
                    {slide.title}
                  </h2>
                  <div className="text-2xl md:text-4xl font-bold mb-2">
                    {slide.subtitle}
                  </div>
                  <p className="text-lg opacity-90">{slide.description}</p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
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

                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 font-semibold"
                  onClick={() => (window.location.href = "/category/sofas")}
                >
                  Shop Now
                </Button>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-white/20 hover:bg-white/30 text-white"
                  onClick={prevSlide}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <div className="flex gap-2">
                  {summerSaleSlides.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide ? "bg-white" : "bg-white/50"
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-white/20 hover:bg-white/30 text-white"
                  onClick={nextSlide}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
