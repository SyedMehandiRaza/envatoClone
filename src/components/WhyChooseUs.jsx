"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Calendar, LayoutGrid, Puzzle, Users, Code2 } from "lucide-react";

// Reusable counter hook
function useCounter(to, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = to;
    const increment = end / (duration / 16); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [to, duration]);

  return count;
}

export default function WhyChooseUs() {
  const years = useCounter(12);
  const blocks = useCounter(150);
  const websites = useCounter(42000);
  const addons = useCounter(23);
  const customers = useCounter(2100);

  const stats = [
    {
      value: `${years}+`,
      label: "Years Developed",
      icon: <Calendar className="w-14 h-14 text-gray-300" />,
    },
    {
      value: `${blocks}+`,
      label: "Amazing Content Blocks",
      icon: <LayoutGrid className="w-8 h-8 text-gray-300" />,
    },
    {
      value: `${websites.toLocaleString()}+`,
      label: "Websites Trust Eduma",
      icon: <Code2 className="w-8 h-8 text-gray-300" />,
    },
    {
      value: `${addons}+`,
      label: "Premium Add-Ons Included",
      icon: <Puzzle className="w-8 h-8 text-gray-300" />,
    },
    {
      value: `${(customers / 1000).toFixed(1)}K`,
      label: "Happy Customers",
      icon: <Users className="w-8 h-8 text-gray-300" />,
    },
  ];

  return (
    
    // <section className="bg-[#0D1430] py-16 text-white h-screen">
    //   <div className="max-w-6xl mx-auto px-6 text-center">
    //     <h2 className="text-3xl md:text-4xl font-bold mb-2">Why Choose Us</h2>
    //     <p className="text-gray-300 mb-12">
    //       Eduma elevates education with Innovative Solutions, Inspiring
    //       Engagement, and Unleashing Learning Potential.
    //     </p>

    //     {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    //       {stats.map((stat, i) => (
    //         <Card key={i} className="bg-[#1E2748] border-none shadow-lg text-center rounded-2xl">
    //           <CardContent className="flex flex-col items-center justify-center gap-3 py-8">
    //             <div>{stat.icon}</div>
    //             <h3 className="text-2xl md:text-3xl font-bold text-white">{stat.value}</h3>
    //             <p className="text-gray-300 text-sm md:text-base">{stat.label}</p>
    //           </CardContent>
    //         </Card>
    //       ))}
    //     </div> */}
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    //       {stats.map((stat, i) => (
    //         <Card
    //           key={i}
    //           className={`
    //     bg-[#1E2748] border-none shadow-lg text-center rounded-2xl 
    //     transition-transform duration-300
    //     ${i % 2 === 0 ? "translate-y-4" : "-translate-y-4"} 
    //   `}
    //         >
    //           <CardContent className="flex flex-col items-center justify-center gap-3 py-8">
    //             {/* Conditional layout: even index → icon below, odd index → icon above */}
    //             {i % 2 === 0 ? (
    //               <>
    //                 <h3 className="text-white text-2xl md:text-3xl font-bold">
    //                   {stat.value}
    //                 </h3>
    //                 <p className="text-gray-500 text-sm md:text-base">
    //                   {stat.label}
    //                 </p>
    //                 <div>{stat.icon}</div>
    //               </>
    //             ) : (
    //               <>
    //                 <div>{stat.icon}</div>
    //                 <h3 className="text-white text-2xl md:text-3xl font-bold">
    //                   {stat.value}
    //                 </h3>
    //                 <p className="text-gray-500 text-sm md:text-base">
    //                   {stat.label}
    //                 </p>
    //               </>
    //             )}
    //           </CardContent>
    //         </Card>
    //       ))}
    //     </div>
    //   </div>
      
    // </section>
    <section className="bg-[#0D1430] py-16 text-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
      Why Choose Us
    </h2>
    <p className="text-gray-300 mb-12 text-sm sm:text-base">
      Eduma elevates education with Innovative Solutions, Inspiring Engagement,
      and Unleashing Learning Potential.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {/* cards */}
      {stats.map((stat, i) => (
            <Card
              key={i}
              className={`
        bg-[#1E2748] border-none shadow-lg text-center rounded-2xl mt-8
        transition-transform duration-300
        ${i % 2 === 0 ? "translate-y-4" : "-translate-y-4"} 
      `}
            >
              <CardContent className="flex flex-col items-center justify-center gap-3 py-8">
                {/* Conditional layout: even index → icon below, odd index → icon above */}
                {i % 2 === 0 ? (
                  <>
                    <h3 className="text-white text-2xl md:text-3xl font-bold">
                      {stat.value}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-base">
                      {stat.label}
                    </p>
                    <div>{stat.icon}</div>
                  </>
                ) : (
                  <>
                    <div>{stat.icon}</div>
                    <h3 className="text-white text-2xl md:text-3xl font-bold">
                      {stat.value}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-base">
                      {stat.label}
                    </p>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
    </div>
  </div>
</section>
    
  );
}








