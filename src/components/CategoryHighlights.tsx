"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

const categoryProducts = {
  Sofas: [
    {
      id: "s1",
      name: "Modern 3 Seater Fabric Sofa",
      price: 25999,
      originalPrice: 35999,
      discount: 28,
      rating: 4.5,
      reviews: 124,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
      isNew: false,
      isSale: true,
    },
    {
      id: "s2",
      name: "L-Shaped Corner Sofa",
      price: 45999,
      originalPrice: 65999,
      discount: 30,
      rating: 4.8,
      reviews: 203,
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
      isNew: true,
      isSale: true,
    },
    {
      id: "s3",
      name: "Recliner Chair",
      price: 18999,
      originalPrice: 24999,
      discount: 24,
      rating: 4.5,
      reviews: 92,
      image:
        "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&q=80",
      isNew: true,
      isSale: true,
    },
    {
      id: "s4",
      name: "2 Seater Loveseat",
      price: 19999,
      originalPrice: 26999,
      discount: 26,
      rating: 4.3,
      reviews: 67,
      image:
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80",
      isNew: false,
      isSale: true,
    },
  ],
  Living: [
    {
      id: "l1",
      name: "Modern TV Unit",
      price: 15999,
      originalPrice: 21999,
      discount: 27,
      rating: 4.4,
      reviews: 89,
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
      isNew: false,
      isSale: true,
    },
    {
      id: "l2",
      name: "Coffee Table with Storage",
      price: 8999,
      originalPrice: 12999,
      discount: 31,
      rating: 4.2,
      reviews: 45,
      image:
        "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&q=80",
      isNew: false,
      isSale: true,
    },
    {
      id: "l3",
      name: "Bookshelf Unit",
      price: 12999,
      originalPrice: 17999,
      discount: 28,
      rating: 4.6,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
      isNew: true,
      isSale: true,
    },
    {
      id: "l4",
      name: "Side Table Set",
      price: 6999,
      originalPrice: 9999,
      discount: 30,
      rating: 4.3,
      reviews: 78,
      image:
        "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&q=80",
      isNew: false,
      isSale: true,
    },
  ],
  Bedroom: [
    {
      id: "b1",
      name: "King Size Wooden Bed with Storage",
      price: 32999,
      originalPrice: 45999,
      discount: 28,
      rating: 4.7,
      reviews: 89,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&q=80",
      isNew: true,
      isSale: true,
    },
    {
      id: "b2",
      name: "Wardrobe with Mirror",
      price: 22999,
      originalPrice: 29999,
      discount: 23,
      rating: 4.4,
      reviews: 78,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
      isNew: false,
      isSale: true,
    },
    {
      id: "b3",
      name: "Dressing Table",
      price: 14999,
      originalPrice: 19999,
      discount: 25,
      rating: 4.5,
      reviews: 124,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&q=80",
      isNew: false,
      isSale: true,
    },
    {
      id: "b4",
      name: "Bedside Table Pair",
      price: 8999,
      originalPrice: 12999,
      discount: 31,
      rating: 4.2,
      reviews: 45,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
      isNew: true,
      isSale: true,
    },
  ],
  "Dining & Kitchen": [
    {
      id: "d1",
      name: "6 Seater Dining Table Set",
      price: 28999,
      originalPrice: 38999,
      discount: 26,
      rating: 4.3,
      reviews: 67,
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80",
      isNew: false,
      isSale: true,
    },
    {
      id: "d2",
      name: "4 Seater Dining Set",
      price: 18999,
      originalPrice: 24999,
      discount: 24,
      rating: 4.5,
      reviews: 92,
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80",
      isNew: true,
      isSale: true,
    },
    {
      id: "d3",
      name: "Bar Cabinet",
      price: 16999,
      originalPrice: 22999,
      discount: 26,
      rating: 4.4,
      reviews: 56,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
      isNew: false,
      isSale: true,
    },
    {
      id: "d4",
      name: "Kitchen Island",
      price: 24999,
      originalPrice: 32999,
      discount: 24,
      rating: 4.6,
      reviews: 78,
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80",
      isNew: true,
      isSale: true,
    },
  ],
};

export default function CategoryHighlights() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Our Collections
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated furniture collections for every room
            in your home
          </p>
        </div>

        {Object.entries(categoryProducts).map(([category, products]) => (
          <div key={category} className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">{category}</h3>
              <Link
                href={`/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <Button
                  variant="outline"
                  className="border-amber-700 text-amber-700 hover:bg-amber-50"
                >
                  Explore Our Collections
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <ProductCard {...product} />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
