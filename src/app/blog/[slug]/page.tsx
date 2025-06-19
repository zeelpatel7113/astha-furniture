import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar, Clock, User, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPage({ params }: BlogPageProps) {
  const blogSlug = params.slug;
  const blogTitle = blogSlug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-500">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/#blogs" className="hover:text-orange-500">
              Blog
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 font-medium">{blogTitle}</span>
          </nav>
        </div>
      </div>

      {/* Blog Content */}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Blog Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Decor Tips
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {blogTitle}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center justify-center gap-6 text-sm text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>FurniShop Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Dec 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
              </div>
            </div>

            <Button variant="outline" className="mb-8">
              <Share2 className="h-4 w-4 mr-2" />
              Share Article
            </Button>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <Image
              src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80"
              alt={blogTitle}
              width={800}
              height={400}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Welcome to our comprehensive guide on {blogTitle.toLowerCase()}.
              In this article, we'll explore the latest trends, tips, and
              techniques to help you create the perfect space for your home.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Getting Started
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              When it comes to home decor, the key is to find the perfect
              balance between functionality and aesthetics. Our experts have
              curated the best practices to help you achieve stunning results.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Expert Tips
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Choose quality materials that will last for years</li>
              <li>Consider the overall theme and color scheme of your space</li>
              <li>Don't be afraid to mix different textures and patterns</li>
              <li>Invest in statement pieces that reflect your personality</li>
              <li>Always measure your space before making purchases</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Conclusion
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Creating the perfect home decor is a journey, not a destination.
              Take your time, experiment with different styles, and most
              importantly, choose pieces that make you happy. Visit our showroom
              to explore our extensive collection and get personalized advice
              from our design experts.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
