"use client";

import ProductCard from "@/components/ProductCard";
import { sampleProducts } from "@/data";

interface ProductGridProps {
  title?: string;
  subtitle?: string;
  products?: typeof sampleProducts;
  bgColor?: string;
}

export default function ProductGrid({
  title = "Featured Products",
  subtitle = "Discover our most popular furniture pieces",
  products = sampleProducts,
  bgColor = "bg-gray-50",
}: ProductGridProps) {
  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
