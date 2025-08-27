"use client";

import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function PageBuilder() {
  return (
    <section className="w-full bg-[#0E1936] text-white py-20">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Customization By Page Builder
        </h2>
        <p className="mt-3 text-white/70 text-sm md:text-lg">
          Blend together to form a powerful force in web design.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-2">
        {/* Elementor */}
        <Card className="bg-[#121b3a] text-white border-none shadow-lg flex flex-col justify-between">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-xl md:text-2xl">
              <span className="bg-red-600 text-white font-bold px-2 py-0.5 rounded-sm text-sm">
                E
              </span>
              Elementor
            </CardTitle>
          </CardHeader>

          <CardContent className="text-center">
            <ul className="space-y-2 text-white/80 text-sm md:text-base">
              <li>Full website kits and templates library</li>
              <li>Pixel-perfect designs</li>
              <li>Fully responsive</li>
              <li>Supported by a strong community</li>
              <li>Fast loading websites</li>
              <li>And more...</li>
            </ul>

            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center gap-1 text-2xl  text-white font-medium"
              >
                Explore Now <ArrowRight size={18} />
              </a>
            </div>
          </CardContent>

          <CardFooter className="mt-6">
            <Image
              src="https://eduma.thimpress.com/wp-content/uploads/2024/03/section-el.png"
              alt="Elementor Preview"
              width={600}
              height={400}
              className="rounded-lg shadow-md object-cover w-full"
            />
          </CardFooter>
        </Card>

        {/* Thim Elementor Kit */}
        <Card className="bg-[#121b3a] text-white border-none shadow-lg flex flex-col justify-between">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-xl md:text-2xl">
              <span className="bg-red-600 text-white font-bold px-2 py-0.5 rounded-sm text-sm">
                E
              </span>
              Thim Elementor Kit
            </CardTitle>
          </CardHeader>

          <CardContent className="text-center">
            <ul className="space-y-2 text-white/80 text-sm md:text-base">
              <li>Header Footer Builder</li>
              <li>Mega Menu Builder</li>
              <li>Archive and Single course Builder</li>
              <li>Blog and Single Post Builder 20+</li>
              <li>Free Widgets</li>
              <li>And more...</li>
            </ul>

            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center gap-1 text-2xl  text-white font-medium"
              >
                Explore Now <ArrowRight size={18} />
              </a>
            </div>
          </CardContent>

          <CardFooter className="mt-6">
            <Image
              src="https://eduma.thimpress.com/wp-content/uploads/2024/03/section-thimkit.png"
              alt="Thim Elementor Kit Preview"
              width={600}
              height={400}
              className="rounded-lg shadow-md object-cover w-full"
            />
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
