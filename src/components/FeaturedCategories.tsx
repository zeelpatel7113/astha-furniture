"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Sofas",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&q=80",
    itemCount: "500+ Items",
  },
  {
    name: "Living",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&q=80",
    itemCount: "400+ Items",
  },
  {
    name: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300&q=80",
    itemCount: "300+ Items",
  },
  {
    name: "Dining & Kitchen",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&q=80",
    itemCount: "200+ Items",
  },
  {
    name: "Storage",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80",
    itemCount: "350+ Items",
  },
  {
    name: "Study & Office",
    image:
      "https://images.unsplash.com/photo-1541558869434-2840d308329a?w=300&q=80",
    itemCount: "150+ Items",
  },
  {
    name: "Mattresses",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=300&q=80",
    itemCount: "100+ Items",
  },
  {
    name: "Decor",
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&q=80",
    itemCount: "250+ Items",
  },
  {
    name: "Lamps & Lighting",
    image:
      "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=300&q=80",
    itemCount: "180+ Items",
  },
  {
    name: "Furnishings",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&q=80",
    itemCount: "220+ Items",
  },
  {
    name: "Outdoor",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80",
    itemCount: "80+ Items",
  },
  {
    name: "Sale",
    image:
      "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=300&q=80",
    itemCount: "Hot Deals",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of furniture categories to find exactly what
            you need for your home
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/category/${category.name.toLowerCase()}`}
            >
              <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={200}
                      height={150}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {category.itemCount}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
