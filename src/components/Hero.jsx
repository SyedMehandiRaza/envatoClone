"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[#0D1430] text-white mt-20 overflow-hidden">
      {/* Background grid */}
      {/* <div className="absolute inset-0 bg-[url('https://eduma.thimpress.com/wp-content/uploads/2024/03/image-head-5.png')] bg-cover bg-center opacity-30" /> */}

      {/* Content wrapper */}
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          EDUCATION <br /> WORDPRESS THEME
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 max-w-2xl mb-8">
          Using LearnPress – #1 popular LMS plugin on WordPress ORG
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-500 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg">
            Buy Now ($69)
          </Button>
          <Button
            variant="outline"
            className="bg-white text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100"
          >
            Discover Demos
          </Button>
        </div>
      </div>
      <div
        className="absolute bottom-[-8] left-10 xl:ml-60 lg:ml-40 hidden lg:flex items-center w-full 
           transition-transform duration-500 ease-in-out hover:-translate-y-4 hover:scale-105 hover:-translate-x-2"
      >
        <div className="flex flex-col items-center mr-4">
          <span className="text-5xl font-extrabold">38+</span>
          <span className="text-gray-300 tracking-wider text-sm">DEMO</span>
        </div>

        <img
          src="https://eduma.thimpress.com/wp-content/uploads/2024/03/image-head-5.png"
          alt="Best Seller"
          className="w-24 h-24 object-contain mx-auto"
        />
      </div>
    </section>
  );
}
