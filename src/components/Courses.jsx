"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"; 
import { useState } from "react";

const categories = [
  { name: "All (38)", value: "all" },
  { name: "Popular", value: "popular" },
  { name: "University", value: "university" },
  { name: "Academy", value: "academy" },
  { name: "School", value: "school" },
  { name: "Personal", value: "personal" },
  { name: "Technology", value: "technology" },
  { name: "Multi-Language", value: "multi-language" },
  { name: "Landing Page", value: "landing" },
];

const cardData = [
  {
    title: "Main",
    img: "https://eduma.thimpress.com/wp-content/uploads/2024/04/university-home1.webp",
  },
  {
    title: "Online Learning",
    img: "https://eduma.thimpress.com/wp-content/uploads/2024/04/university-home1.webp",
    badge: "Hot",
    badgeVariant: "destructive",
    category: "academy",
  },
  {
    title: "Marketplace",
    img: "https://eduma.thimpress.com/wp-content/uploads/2024/04/university-home-3.webp",
    badge: "Popular",
    badgeVariant: "secondary",
    category: "popular",
  },
  {
    title: "Learning Platform",
    img: "https://eduma.thimpress.com/wp-content/uploads/2024/04/university-home-4_11zon.webp",
    badge: "New",
    badgeVariant: "default",
    category: "university",
  },
];

// Duplicate to make 32 cards
while (cardData.length < 32) {
  cardData.push(...cardData.slice(0, 4));
}

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCards =
    activeCategory === "all"
      ? cardData
      : cardData.filter((card) => card.category === activeCategory);

  return (
    <section className="py-12 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollArea className="w-full whitespace-nowrap mb-10 relative">
          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-lg font-semibold">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`pb-1 transition-colors ${
                  activeCategory === cat.value
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-300 hover:text-orange-400"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <ScrollBar
            orientation="horizontal"
            className="mt-2 h-2 [&>div]:bg-orange-500 [&>div]:rounded-full"
          />
        </ScrollArea>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredCards.slice(0, 32).map((card, i) => (
            <Card
              key={i}
              className="bg-[#0D1430] border-none shadow-lg rounded-xl overflow-hidden relative"
            >
              {/* Badge */}
              {card.badge && (
                <Badge
                  variant={card.badgeVariant}
                  className="absolute top-3 right-3"
                >
                  {card.badge}
                </Badge>
              )}

              {/* Image */}
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-48 object-cover rounded-xl"
              />

              {/* Title */}
              <CardContent className="text-center py-4">
                <h3 className="text-lg text-white font-semibold">
                  {card.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
