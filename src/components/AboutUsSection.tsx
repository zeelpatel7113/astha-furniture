"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { aboutUsCategories, siteConfig } from "@/data";

export default function AboutUsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            India's Finest Online Furniture Brand
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg">
            Buy Furniture Online from our extensive collection of wooden
            furniture units to give your home an elegant touch at affordable
            prices. We offer a wide range of...
            <Button variant="link" className="text-orange-500 p-0 h-auto ml-1">
              More
            </Button>
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {aboutUsCategories.map((category, index) => (
            <Link key={index} href={category.href}>
              <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white h-full overflow-hidden">
                <CardContent className="p-0 relative">
                  <div className="relative h-64">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div
                      className={`absolute inset-0 ${category.bgColor} bg-opacity-80`}
                    ></div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">
                          {category.title}
                        </h3>
                        <p className="text-lg font-medium opacity-90">
                          {category.subtitle}
                        </p>
                      </div>

                      <div>
                        <div className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-bold mb-3 inline-block">
                          {category.discount}
                        </div>
                        <p className="text-sm opacity-90">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Choose {siteConfig.name}?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">20+</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Years of Experience
                </h4>
                <p className="text-gray-600 text-sm">
                  Two decades of crafting quality furniture
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">5K+</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Happy Customers
                </h4>
                <p className="text-gray-600 text-sm">
                  Satisfied families across India
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">100%</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Quality Assured
                </h4>
                <p className="text-gray-600 text-sm">
                  Premium materials and craftsmanship
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
