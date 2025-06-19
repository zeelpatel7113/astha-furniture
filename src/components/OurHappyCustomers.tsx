"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const customerProjects = [
  {
    id: 1,
    customerName: "Rajesh & Priya Sharma",
    location: "Mumbai, Maharashtra",
    projectType: "Complete Home Makeover",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    testimonial:
      "Astha Furnitures transformed our entire home. The quality and craftsmanship exceeded our expectations. Highly recommended!",
    rating: 5,
    furniture: ["Living Room Set", "Bedroom Furniture", "Dining Table"],
  },
  {
    id: 2,
    customerName: "Amit & Sneha Patel",
    location: "Ahmedabad, Gujarat",
    projectType: "Living Room Renovation",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    testimonial:
      "The L-shaped sofa and coffee table perfectly fit our space. The team was professional and delivery was on time.",
    rating: 5,
    furniture: ["L-Shaped Sofa", "Coffee Table", "TV Unit"],
  },
  {
    id: 3,
    customerName: "Dr. Vikram & Kavya Reddy",
    location: "Bangalore, Karnataka",
    projectType: "Bedroom & Study Setup",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
    testimonial:
      "Beautiful bedroom set with excellent storage solutions. The study table is perfect for our home office needs.",
    rating: 5,
    furniture: ["King Size Bed", "Wardrobe", "Study Table"],
  },
  {
    id: 4,
    customerName: "Rohit & Meera Gupta",
    location: "Delhi, NCR",
    projectType: "Dining Room Setup",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80",
    testimonial:
      "The 6-seater dining set is stunning and perfect for our family gatherings. Great value for money!",
    rating: 5,
    furniture: ["6-Seater Dining Set", "Bar Cabinet", "Crockery Unit"],
  },
  {
    id: 5,
    customerName: "Suresh & Lakshmi Iyer",
    location: "Chennai, Tamil Nadu",
    projectType: "Traditional Home Decor",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80",
    testimonial:
      "Astha Furnitures understood our traditional preferences and delivered exactly what we wanted. Excellent service!",
    rating: 5,
    furniture: ["Traditional Sofa Set", "Pooja Unit", "Storage Cabinets"],
  },
  {
    id: 6,
    customerName: "Karan & Riya Singh",
    location: "Pune, Maharashtra",
    projectType: "Modern Apartment Setup",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    testimonial:
      "Modern designs with excellent functionality. The space optimization solutions were brilliant for our compact apartment.",
    rating: 5,
    furniture: ["Compact Sofa", "Foldable Dining", "Multi-purpose Storage"],
  },
];

export default function OurHappyCustomers() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Happy Customers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how we've transformed homes across India with our premium
            furniture collections
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

          {/* Customer Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customerProjects.map((project) => (
              <Card
                key={project.id}
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image}
                      alt={`${project.customerName}'s ${project.projectType}`}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-700 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {project.projectType}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    <h3 className="font-bold text-lg text-gray-900 mb-1">
                      {project.customerName}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">
                      {project.location}
                    </p>

                    <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                      &quot;{project.testimonial}&quot;
                    </p>

                    <div className="border-t pt-4">
                      <p className="text-xs text-gray-500 mb-2">
                        Furniture Purchased:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.furniture.map((item, index) => (
                          <span
                            key={index}
                            className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-xs"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-amber-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-700 mb-2">
                5000+
              </div>
              <div className="text-slate-700 font-medium">Happy Families</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-700 mb-2">
                20+
              </div>
              <div className="text-slate-700 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-700 mb-2">
                50+
              </div>
              <div className="text-slate-700 font-medium">Cities Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-700 mb-2">
                4.8★
              </div>
              <div className="text-slate-700 font-medium">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
