"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { topPicksCategories, bankOffers } from "@/data";

export default function TopPicksSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Bank Offers Banner */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {bankOffers.map((offer, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-12 h-8 bg-white rounded flex items-center justify-center shadow-sm">
                    <span className="text-xs font-bold text-blue-600">
                      {offer.bank.split(" ")[0]}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900">
                      {offer.offer}
                    </div>
                    <div className="text-xs text-blue-600">
                      {offer.condition}
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-4 text-sm text-blue-700">
                <span className="flex items-center gap-1">
                  🚚 FREE DELIVERY & INSTALLATION
                </span>
                <span className="flex items-center gap-1">💳 NO COST EMI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Picks Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Top Picks For You
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Impressive Collection for your Dream Home
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {topPicksCategories.map((category, index) => (
            <Link key={index} href={category.href}>
              <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white h-full">
                <CardContent className="p-4 text-center">
                  <div className="relative mb-3">
                    <div className="w-16 h-16 mx-auto rounded-lg overflow-hidden bg-gray-100">
                      <Image
                        src={category.image}
                        alt={category.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="font-medium text-gray-900 text-sm leading-tight">
                    {category.name}
                  </h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
