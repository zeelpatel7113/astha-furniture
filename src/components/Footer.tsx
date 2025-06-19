"use client";

import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";

const footerLinks = {
  Shop: [
    "Sofas",
    "Bedroom",
    "Dining",
    "Living",
    "Study & Office",
    "Storage",
    "Decor",
    "Sale",
  ],
  "Customer Service": [
    "Contact Us",
    "Track Order",
    "Returns & Exchanges",
    "Size Guide",
    "Care Instructions",
    "Warranty",
  ],
  Company: [
    "About Us",
    "Careers",
    "Press",
    "Sustainability",
    "Investor Relations",
    "Store Locator",
  ],
  Policies: [
    "Privacy Policy",
    "Terms of Service",
    "Shipping Policy",
    "Return Policy",
    "Cookie Policy",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-amber-700 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Stay Updated with Latest Offers
          </h3>
          <p className="mb-6 text-amber-100">
            Subscribe to our newsletter and get exclusive deals delivered to
            your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-amber-700 hover:bg-gray-100 px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-amber-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-2xl font-bold text-slate-700">
                Astha Furnitures
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Transform your home with our premium furniture collection.
              Quality, style, and comfort - all in one place.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-amber-700" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-amber-700" />
                <span>info@asthafurnitures.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-amber-700" />
                <span>123 Furniture Street, Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <div className="flex gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
              <span>© 2024 Astha Furnitures. All rights reserved.</span>
              <div className="flex gap-4">
                <span>🔒 Quality Assured</span>
                <span>🚚 Free Delivery</span>
                <span>↩️ Expert Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
