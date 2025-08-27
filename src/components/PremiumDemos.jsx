

// export default function PremiumDemos() {
//   return (
//     <section className="relative  flex flex-col items-center justify-center text-center overflow-hidden">
//       {/* Large Background Text */}
//       <h1 className="absolute inset-0 pb-40 flex items-center justify-center text-[250px] font-extrabold text-white/5 select-none tracking-tight">
//         EDUMA
//       </h1>

//       {/* Highlighted number */}
//       <div className="relative z-10">
//         <h2 className="text-[150px] md:text-[150px] font-extrabold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
//           38<span className="text-orange-500">+</span>
//         </h2>
//         <p className="text-2xl md:text-3xl font-bold text-white mt-4">
//           Premium Demos
//         </p>
//         <p className="text-gray-400 mt-2 max-w-xl mx-auto">
//           Easy to install and customize your websites with Drag & Drop Builder.
//         </p>
//       </div>
//     </section>
//   );
// }











export default function PremiumDemos() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center overflow-hidden px-4">
      {/* Background Text */}
      <h1 className="absolute inset-0 flex items-center justify-center text-[80px] sm:text-[150px] lg:text-[250px] font-extrabold text-white/5 select-none tracking-tight transition-transform duration-500 ease-in-out hover:-translate-y-4 hover:scale-105 hover:-translate-x-2">
        EDUMA
      </h1>

      {/* Highlighted Number */}
      <div className="relative z-10">
        <h2 className="text-[60px] sm:text-[100px] md:text-[150px] font-extrabold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
          38<span className="text-orange-500">+</span>
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-4">
          Premium Demos
        </p>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto text-sm sm:text-base">
          Easy to install and customize your websites with Drag & Drop Builder.
        </p>
      </div>
    </section>
  )
}
