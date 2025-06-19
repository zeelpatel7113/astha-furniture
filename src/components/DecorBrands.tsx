"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const brands = [
  {
    name: "CasaGold",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&q=80",
    description: "Luxury Home Decor",
  },
  {
    name: "Earthy Homes",
    logo: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=200&q=80",
    description: "Natural & Sustainable",
  },
  {
    name: "Rudhigat",
    logo: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&q=80",
    description: "Artisan Crafted",
  },
  {
    name: "Aakriti Art Creations",
    logo: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=200&q=80",
    description: "Handmade Art Pieces",
  },
  {
    name: "The Quirk India",
    logo: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&q=80",
    description: "Unique & Quirky",
  },
  {
    name: "Ace of Spades",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&q=80",
    description: "Premium Collection",
  },
  {
    name: "Nestroots",
    logo: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=200&q=80",
    description: "Modern Living",
  },
];

export default function DecorBrands() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Decor Brands that You'll Love
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose Your Favorite
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
          {brands.map((brand, index) => (
            <Link
              key={index}
              href={`/brand/${brand.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={120}
                      height={80}
                      className="w-full h-16 object-contain mx-auto group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                    {brand.name}
                  </h3>
                  <p className="text-xs text-gray-600">{brand.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
