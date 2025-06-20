import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { customerTestimonials } from "@/data";

const featuredProjects = [
  {
    id: 1,
    title: "Modern Luxury Apartment",
    location: "Bandra, Mumbai",
    date: "March 2024",
    category: "Complete Home Makeover",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    description:
      "A stunning 3BHK apartment transformation featuring contemporary furniture and elegant design elements.",
    furniture: [
      "L-Shaped Sofa Set",
      "King Size Bed",
      "6-Seater Dining Set",
      "TV Unit",
      "Wardrobe",
    ],
  },
  {
    id: 2,
    title: "Traditional Family Home",
    location: "Juhu, Mumbai",
    date: "February 2024",
    category: "Living & Dining Setup",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    description:
      "Classic wooden furniture collection that perfectly complements the traditional architecture.",
    furniture: [
      "Traditional Sofa Set",
      "Wooden Dining Table",
      "Coffee Table",
      "Bookshelf",
    ],
  },
  {
    id: 3,
    title: "Contemporary Office Space",
    location: "Andheri, Mumbai",
    date: "January 2024",
    category: "Office Furniture",
    image:
      "https://images.unsplash.com/photo-1541558869434-2840d308329a?w=600&q=80",
    description:
      "Professional office setup with ergonomic furniture and modern storage solutions.",
    furniture: [
      "Executive Chairs",
      "Conference Table",
      "Storage Cabinets",
      "Reception Desk",
    ],
  },
  {
    id: 4,
    title: "Cozy Bedroom Retreat",
    location: "Powai, Mumbai",
    date: "December 2023",
    category: "Bedroom Furniture",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
    description:
      "Peaceful bedroom design with storage-optimized furniture and calming color palette.",
    furniture: [
      "Platform Bed",
      "Wardrobe with Mirror",
      "Study Table",
      "Bedside Tables",
    ],
  },
  {
    id: 5,
    title: "Elegant Dining Experience",
    location: "Worli, Mumbai",
    date: "November 2023",
    category: "Dining Room",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80",
    description:
      "Sophisticated dining room setup perfect for family gatherings and entertaining guests.",
    furniture: [
      "8-Seater Dining Set",
      "Bar Cabinet",
      "Crockery Unit",
      "Accent Chairs",
    ],
  },
  {
    id: 6,
    title: "Compact Smart Living",
    location: "Thane, Mumbai",
    date: "October 2023",
    category: "Space Optimization",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80",
    description:
      "Innovative furniture solutions for a compact apartment, maximizing space and functionality.",
    furniture: [
      "Sofa Cum Bed",
      "Foldable Dining Table",
      "Multi-purpose Storage",
      "Wall-mounted TV Unit",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover how we've transformed homes and offices across Mumbai
              with our premium furniture and design expertise. Each project
              tells a unique story of style, comfort, and functionality.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our recent work and see how we bring dreams
              to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.date}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Furniture Included:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.furniture.slice(0, 3).map((item, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                        >
                          {item}
                        </span>
                      ))}
                      {project.furniture.length > 3 && (
                        <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-sm">
                          +{project.furniture.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-amber-700 text-amber-700 hover:bg-amber-50"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real stories from real customers who trusted us with their homes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customerTestimonials.slice(0, 6).map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic leading-relaxed">
                  &quot;{testimonial.testimonial}&quot;
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.customerName}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {testimonial.location}
                  </p>
                  <p className="text-sm text-amber-700 font-medium">
                    {testimonial.projectType}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Let us help you create the perfect space that reflects your style
              and meets your needs. Get in touch for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-amber-800 hover:bg-gray-100 font-semibold px-8 py-3"
                >
                  Get Free Consultation
                </Button>
              </Link>
              <Link href="/category/sofas">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-amber-800 font-semibold px-8 py-3"
                >
                  Browse Furniture
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
