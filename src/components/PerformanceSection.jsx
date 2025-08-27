// "use client";

// import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";

// export default function PerformanceSection() {
//   const metrics = [
//     { value: "95%", label: "Performance" },
//     { value: "100%", label: "Best Practices" },
//     { value: "100%", label: "Accessibility" },
//     { value: "97%", label: "SEO" },
//   ];

//   return (
//     <section className="w-full bg-[#222c4d] text-white px-10 py-10">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        
//         {/* Left side */}
//         <div className="flex flex-col justify-center">
//           <h2 className="text-3xl md:text-5xl font-extrabold leading-snug">
//             Outstanding And <br /> Blazing Performance.
//           </h2>
//           <p className="mt-4 text-white/70 text-sm md:text-lg">
//             Speed up your sales: Leave your competitors behind with
//             lightning-fast performance.
//           </p>

//           {/* PageSpeed Insights image */}
//           <div className="mt-6">
//             <Image
//               src="https://eduma.thimpress.com/wp-content/uploads/2024/03/perfomance.png"
//               alt="PageSpeed Insights powered by Google"
//               width={220}
//               height={60}
//               className="object-contain"
//             />
//           </div>
//         </div>

//         {/* Right side: Metric cards */}
//         <div className="grid grid-cols-2 gap-6">
//           {metrics.map((item, i) => (
//             <Card
//               key={i}
//               className="bg-[#1B2348] border-none shadow-md rounded-xl text-center flex items-center justify-center"
//             >
//               <CardContent className="p-6">
//                 <h3 className="text-2xl md:text-3xl font-bold text-green-400">
//                   {item.value}
//                 </h3>
//                 <p className="mt-2 text-white text-sm md:text-base">
//                   {item.label}
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function PerformanceSection() {
  const metrics = [
    { value: "95%", label: "Performance" },
    { value: "100%", label: "Best Practices" },
    { value: "100%", label: "Accessibility" },
    { value: "97%", label: "SEO" },
  ];

  return (
    <section className="max-w-6xl mx-auto bg-[#222c4d] text-white px-10 py-10 rounded-2xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        {/* Left side */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-snug">
            Outstanding And <br /> Blazing Performance.
          </h2>
          <p className="mt-4 text-white/70 text-sm md:text-lg">
            Speed up your sales: Leave your competitors behind with
            lightning-fast performance.
          </p>

          {/* PageSpeed Insights image */}
          <div className="mt-6">
            <Image
              src="https://eduma.thimpress.com/wp-content/uploads/2024/03/perfomance.png"
              alt="PageSpeed Insights powered by Google"
              width={220}
              height={60}
              className="object-contain"
            />
          </div>
        </div>

        {/* Right side: Metric cards */}
        <div className="grid grid-cols-2 gap-6">
          {metrics.map((item, i) => (
            <Card
              key={i}
              className="bg-[#1B2348] border-none shadow-md rounded-xl text-center flex items-center justify-center"
            >
              <CardContent className="p-6">
                <h3 className="text-2xl md:text-3xl font-bold text-green-400">
                  {item.value}
                </h3>
                <p className="mt-2 text-white text-sm md:text-base">
                  {item.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
