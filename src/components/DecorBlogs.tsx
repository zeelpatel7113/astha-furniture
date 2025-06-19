"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    title: "Photo Frame Guide: Styles, Sizes & Designs to Beautify Your Decor",
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&q=80",
    category: "Decor Tips",
    readTime: "5 min read",
  },
  {
    title: "Modern Living Room Ideas: Transform Your Space",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
    category: "Living Room",
    readTime: "7 min read",
  },
  {
    title: "Bedroom Styling: Create Your Perfect Sanctuary",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&q=80",
    category: "Bedroom",
    readTime: "6 min read",
  },
  {
    title: "Kitchen Organization: Smart Storage Solutions",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80",
    category: "Kitchen",
    readTime: "4 min read",
  },
  {
    title: "Diwali Decoration Ideas: Festive Home Makeover",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80",
    category: "Festival Decor",
    readTime: "8 min read",
  },
];

export default function DecorBlogs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Top Decor Blogs that Inspire
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect Deep with Decor World
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="bg-white shadow-lg hover:bg-gray-50"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="bg-white shadow-lg hover:bg-gray-50"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {blogs.map((blog, index) => (
              <Link
                key={index}
                href={`/blog/${blog.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white h-full">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          {blog.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm leading-tight">
                        {blog.title}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{blog.readTime}</span>
                        <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
