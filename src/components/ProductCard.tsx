"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  id?: string;
  name?: string;
  price?: number;
  originalPrice?: number;
  discount?: number;
  rating?: number;
  reviews?: number;
  image?: string;
  isNew?: boolean;
  isSale?: boolean;
}

export default function ProductCard({
  id = "1",
  name = "Modern 3 Seater Sofa",
  price = 25999,
  originalPrice = 35999,
  discount = 28,
  rating = 4.5,
  reviews = 124,
  image = "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
  isNew = false,
  isSale = true,
}: ProductCardProps) {
  const handleCardClick = () => {
    const slug = name.toLowerCase().replace(/\s+/g, "-");
    window.location.href = `/product/${slug}`;
  };

  return (
    <Card
      className="group cursor-pointer hover:shadow-lg transition-shadow duration-300 bg-white"
      onClick={handleCardClick}
    >
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-t-lg">
          <Image
            src={image}
            alt={name}
            width={300}
            height={250}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && (
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                NEW
              </span>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
            {name}
          </h3>

          {/* Category */}
          <p className="text-sm text-slate-600 mt-1">
            Premium Furniture Collection
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
