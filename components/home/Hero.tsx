"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Search, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  PackageCheck, 
  Sparkles,
  MapPin
} from "lucide-react";

import { Button } from "@/components/ui/button";


export default function Hero() {

  return (
    <section className="relative overflow-hidden bg-background pt-12 pb-16 lg:pt-20 lg:pb-28 border-b border-border/40">
      
      {/* Background Decorative Emerald Glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-125 w-200 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px] dark:bg-emerald-500/5"
      />

      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Search Interface */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase">
              <Sparkles className="h-3.5 w-3.5 text-emerald-500" />
              <span>Your Next Adventure Starts Here</span>
            </div>

            {/* Main Heading & Description */}
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                Adventure Begins With The{" "}
                <span className="text-emerald-600 dark:text-emerald-500">
                  Right Gear.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Discover and rent quality sports and outdoor equipment for your next adventure. Get the gear you need without the cost of ownership.
              </p>
            </div>

            

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
              <Button asChild size="lg" className="w-full sm:w-auto h-12 px-7 text-base font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20">
                <Link href="/gear">
                  Explore Gear <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-12 px-7 text-base font-semibold border-border hover:bg-accent text-foreground">
                <Link href="/how-it-works">
                  How It Works
                </Link>
              </Button>
            </div>

            {/* Compact Trust Indicators */}
            <div className="pt-4 border-t border-border/60 w-full max-w-xl grid grid-cols-3 gap-2 sm:gap-4">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-500 shrink-0" />
                <span className="text-xs font-medium">Quality Equipment</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground">
                <Clock className="h-4 w-4 text-emerald-600 dark:text-emerald-500 shrink-0" />
                <span className="text-xs font-medium">Easy Booking</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground">
                <PackageCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-500 shrink-0" />
                <span className="text-xs font-medium">Flexible Rentals</span>
              </div>
            </div>

          </div>

          {/* Right Column: Outdoor Visual & Floating Card */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Decorative Glow Container */}
              <div className="absolute -inset-2 rounded-[2rem] .bg-gradient-to-tr from-emerald-500/30 to-teal-500/20 blur-2xl opacity-60 dark:opacity-40" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden border border-border/80 bg-card shadow-2xl aspect-4/5 sm:aspect-square lg:aspect-4/5">
                <Image
                  src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1000&auto=format&fit=crop"
                  alt="Outdoor adventure gear and camping tent"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Subtle Image Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                {/* Floating Information Card */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-card/90 backdrop-blur-md border border-border/80 shadow-xl flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>Ready for Adventure</span>
                    </div>
                    <p className="text-sm font-bold text-foreground">
                      Find your perfect gear.
                    </p>
                  </div>
                  <Button asChild size="sm" className="h-8 px-3 text-xs bg-emerald-600 hover:bg-emerald-700 text-white font-medium">
                    <Link href="/gear">Rent Now</Link>
                  </Button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}