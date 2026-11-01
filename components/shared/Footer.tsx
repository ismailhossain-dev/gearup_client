"use client";

import * as React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa6";
import { 
  Mountain, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight 
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Keep backend ready for future integration
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="w-full bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-200">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Top Newsletter Banner Section */}
        <div className="mb-12 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Stay Updated with GearUp
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md">
              Get the latest updates, exclusive rental offers, and outdoor inspiration straight to your inbox.
            </p>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="flex w-full lg:w-auto max-w-md items-center space-x-2">
            {isSubmitted ? (
              <div className="text-sm font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/50 px-4 py-2.5 rounded-md w-full text-center">
                Thank you for subscribing! 🎉
              </div>
            ) : (
              <>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white dark:bg-zinc-950 border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus-visible:ring-primary"
                />
                <Button type="submit" className="shrink-0">
                  Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </>
            )}
          </form>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12">
          
          {/* Section 1: Brand Info (Spans 2 columns on large screens) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-2.5 focus:outline-none">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
                <Mountain className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Gear<span className="text-primary">Up</span>
              </span>
            </Link>
            
            <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Rent Sports & Outdoor Gear Instantly.
            </p>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-sm">
              GearUp makes it easy to rent quality sports and outdoor equipment. Discover the gear you need and enjoy your next adventure without the hassle of ownership.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
              >
                <FaFacebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
              >
                <FaLinkedin className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
              >
                <FaYoutube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-zinc-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/gear" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Explore Gear
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Customer Support */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-zinc-900 dark:text-white">Customer Support</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/help" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/rental-policy" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Rental Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 4: Contact Information */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-zinc-900 dark:text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3 text-zinc-600 dark:text-zinc-400">
                <Mail className="h-4 w-4 text-primary shrink-0 mt-1" />
                <a href="mailto:support@gearup.com" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  support@gearup.com
                </a>
              </li>
              <li className="flex items-start space-x-3 text-zinc-600 dark:text-zinc-400">
                <Phone className="h-4 w-4 text-primary shrink-0 mt-1" />
                <a href="tel:+8801XXXXXXXXX" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  +880 1XXX-XXXXXX
                </a>
              </li>
              <li className="flex items-start space-x-3 text-zinc-600 dark:text-zinc-400">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-1" />
                <span>Bangladesh</span>
              </li>
            </ul>
          </div>

        </div>

        <Separator className="bg-zinc-200 dark:bg-zinc-900" />

        {/* Bottom Footer Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <p>© 2026 GearUp. All rights reserved.</p>
          
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>

          <p className="text-zinc-400 dark:text-zinc-600">Designed with care for outdoor enthusiasts.</p>
        </div>

      </div>
    </footer>
  );
}