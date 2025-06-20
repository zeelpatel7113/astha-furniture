"use client";

import { Button } from "@/components/ui/button";
import { Phone, HelpCircle, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navigationItems, siteConfig } from "@/data";
import Image from "next/image";

export default function Header() {
  const [showBanner, setShowBanner] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      {/* Top Banner */}
      {showBanner && (
        <div className="bg-gradient-to-r from-amber-700 to-amber-800 text-white text-center py-3 text-sm relative">
          <div className="flex items-center justify-center gap-2">
            <span className="text-lg">🔥</span>
            <span className="font-medium">
              Summer Sale: Up to 70% OFF on Selected Items | Free Delivery &
              Installation
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:bg-amber-800 h-8 w-8 p-0 rounded-full"
            onClick={() => setShowBanner(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo Icon */}
            {/* <div className="relative w-14 h-14 flex items-center justify-center rounded-xl overflow-hidden bg-gradient-to-br shadow-md group-hover:shadow-lg transition-all duration-300"> */}
              <Image
                src="/images/astha logo transparent.png"
                alt="Astha Furnitures Logo"
                width={60}
                height={60}
                className="object-cover w-24 h-24"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            {/* </div> */}

            {/* Logo Text */}
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-bold text-slate-700 group-hover:text-amber-700 transition-colors">
                {siteConfig.name}
              </span>
              <span className="text-sm text-slate-500 font-medium tracking-wide">
                Premium Furniture Store
              </span>
            </div>
          </Link>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex items-center gap-2 border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex items-center gap-2 border-2 border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <HelpCircle className="h-4 w-4" />
              Help Center
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden hover:bg-amber-50 hover:text-amber-700 transition-all duration-300 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        <div className="item">
          {/* Center Navigation - Desktop */}
          <nav className="hidden lg:flex items-center justify-center space-x-1 flex-1 mx-8 gap-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-amber-700 hover:bg-amber-50 font-medium transition-all duration-200 px-4 py-2 rounded-lg whitespace-nowrap relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-gray-200 mt-4 pt-6 bg-white shadow-xl rounded-b-2xl mx-4 -mx-4">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-700 hover:text-amber-700 hover:bg-amber-50 font-medium transition-all duration-200 px-6 py-4 rounded-xl mx-2 border border-transparent hover:border-amber-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 px-6 pt-6 border-t border-gray-200 mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white justify-center font-semibold py-3 transition-all duration-300"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 border-2 border-gray-300 text-gray-700 hover:bg-gray-100 justify-center font-semibold py-3 transition-all duration-300"
                >
                  <HelpCircle className="h-4 w-4" />
                  Help Center
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
