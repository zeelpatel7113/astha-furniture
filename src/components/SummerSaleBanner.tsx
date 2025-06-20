"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SummerSaleBanner() {
  return (
    <section className="bg-gradient-to-r from-amber-700 to-amber-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Content */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Sparkles className="h-6 w-6 text-yellow-300" />
              <span className="text-lg font-semibold text-yellow-300">
                Limited Time Offer
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Summer Sale is Live!
            </h2>
            <p className="text-lg md:text-xl opacity-90">
              Up to 40% Off on Select Collections
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/category/sofas">
              <Button
                size="lg"
                className="bg-white text-amber-800 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Shop the Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/category/bedroom">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-amber-800 font-semibold px-8 py-3 rounded-lg transition-all duration-300"
              >
                Explore Offers
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 pt-6 border-t border-amber-600">
          <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
            <span className="text-sm font-medium">Free Shipping</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
            <span className="text-sm font-medium">No Cost EMI</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
            <span className="text-sm font-medium">36 Months Warranty</span>
          </div>
        </div>
      </div>
    </section>
  );
}
