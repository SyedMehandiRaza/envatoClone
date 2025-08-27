// "use client";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// export default function AddsOn() {
//   const addons = [
//     { name: "WooCommerce add-on for LearnPress", price: "$49", eduma: "FREE" },
//     { name: "2Checkout Payment add-on for LearnPress", price: "$29", eduma: "FREE" },
//     { name: "Authorize.Net Payment add-on for LearnPress", price: "$29", eduma: "FREE" },
//     { name: "Certificates add-on for LearnPress", price: "$39", eduma: "FREE" },
//     { name: "Co-Instructors add-on for LearnPress", price: "$29", eduma: "FREE" },
//     { name: "Collections add-on for LearnPress", price: "$19", eduma: "FREE" },
//     { name: "Content Drip add-on for LearnPress", price: "$39", eduma: "FREE" },
//     { name: "Sorting Choice add-on for LearnPress", price: "$19", eduma: "FREE" },
//     { name: "Gradebook add-on for LearnPress", price: "$39", eduma: "FREE" },
//     { name: "Commission add-on for LearnPress", price: "$29", eduma: "FREE" },
//     { name: "Paid Membership Pro add-on for LearnPress", price: "$39", eduma: "FREE" },
//     { name: "Stripe add-on for LearnPress", price: "$39", eduma: "FREE" },
//     { name: "Random Quiz add-on for LearnPress", price: "$29", eduma: "FREE" },
//     { name: "myCRED add-on for LearnPress", price: "$29", eduma: "FREE" },
//     { name: "H5P add-on for LearnPress", price: "$29", eduma: "FREE" },
//     { name: "WPML add-on for LearnPress", price: "$29", eduma: "FREE" },
//     { name: "Live Course add-on for LearnPress", price: "$19", eduma: "FREE" },
//     { name: "Instamojo add-on for LearnPress", price: "$19", eduma: "FREE" },
//     { name: "RazorPay add-on for LearnPress", price: "$19", eduma: "FREE" },
//     { name: "Upsell Add-on for LearnPress", price: "$29", eduma: "FREE" },
//     { name: "Assignments Add-on for LearnPress", price: "$39", eduma: "FREE" },
//     { name: "Announcement for Learnpress", price: "$29", eduma: "FREE" },
//   ];

//   return (
//     <section className="w-full bg-[#0E1936] text-white">
//       {/* Header */}
//       <div className="mx-auto max-w-6xl px-4 pt-14 pb-10 text-center">
//         <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
//           Unlock 22 Premium Add-Ons
//           <br />
//           <span className="block mt-2">At No Cost</span>
//         </h1>
//         <p className="mt-6 text-sm md:text-lg text-white/80">
//           Save a total of $500 per year compared with purchasing all LearnPress Premium Add-ons.
//         </p>
//       </div>

//       {/* Table (wrapped text, no scroll) */}
//       <div className="w-full max-w-5xl mx-auto px-2 lg:px-6">
//         <Table className="border-separate border-spacing-y-3 w-full">
//           <TableHeader>
//             <TableRow className="bg-gray-600 text-white  md:h-12  overflow-hidden">
//               <TableHead className="text-white text-left text-2xl md:text-base  px-2 md:pr-20 md:pl-8">
//                 PREMIUM ADD-ONS
//               </TableHead>
//               <TableHead className="text-white text-right text-2xl md:text-base  px-2 md:pr-20 md:pl-8">
//                 PRICE
//               </TableHead>
//               <TableHead className="text-white text-right text-2xl md:text-base  px-2 md:pr-20 md:pl-8">
//                 EDUMA
//               </TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {addons.map((addon, i) => (
//               <TableRow
//                 key={i}
//                 className="bg-[#1f2544] text-white h-16 mb:h-12 overflow-hidden"
//               >
//                 <TableCell className="text-left text-sm md:text-base flex px-2 md:pr-20 md:pl-8 whitespace-normal break-words leading-snug">
//                   {addon.name}
//                 </TableCell>
//                 <TableCell className="text-right text-sm md:text-base  px-2 md:pr-20 md:pl-8">
//                   {addon.price}
//                 </TableCell>
//                 <TableCell className="text-right text-sm md:text-base  px-2 md:pr-20 md:pl-8">
//                   {addon.eduma}
//                 </TableCell>
//               </TableRow>
//             ))}

//             {/* Total Row */}
//             <TableRow className="rounded-lg overflow-hidden h-18">
//               <TableCell className="bg-gray-500 text-white font-bold text-left text-sm md:text-base px-2 md:pr-20 md:pl-8">
//                 TOTAL
//               </TableCell>
//               <TableCell className="bg-gray-500 text-white font-bold text-right text-sm md:text-base px-2 md:pr-20 md:pl-8">
//                 $814
//               </TableCell>
//               <TableCell className="bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold text-center text-sm md:text-base px-3 md:px-4">
//                 <div className="flex flex-col items-center">
//                   <span>ALL IN EDUMA</span>
//                   <span className="text-[10px] md:text-sm font-normal">
//                     Save up to 80%. No monthly cost
//                   </span>
//                 </div>
//               </TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </div>
//     </section>
//   );
// }












"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AddsOn() {
  const addons = [
    { name: "WooCommerce add-on for LearnPress", price: "$49", eduma: "FREE" },
    { name: "2Checkout Payment add-on for LearnPress", price: "$29", eduma: "FREE" },
    { name: "Authorize.Net Payment add-on for LearnPress", price: "$29", eduma: "FREE" },
    { name: "Certificates add-on for LearnPress", price: "$39", eduma: "FREE" },
    { name: "Co-Instructors add-on for LearnPress", price: "$29", eduma: "FREE" },
    { name: "Collections add-on for LearnPress", price: "$19", eduma: "FREE" },
    { name: "Content Drip add-on for LearnPress", price: "$39", eduma: "FREE" },
    { name: "Sorting Choice add-on for LearnPress", price: "$19", eduma: "FREE" },
    { name: "Gradebook add-on for LearnPress", price: "$39", eduma: "FREE" },
    { name: "Commission add-on for LearnPress", price: "$29", eduma: "FREE" },
    { name: "Paid Membership Pro add-on for LearnPress", price: "$39", eduma: "FREE" },
    { name: "Stripe add-on for LearnPress", price: "$39", eduma: "FREE" },
    { name: "Random Quiz add-on for LearnPress", price: "$29", eduma: "FREE" },
    { name: "myCRED add-on for LearnPress", price: "$29", eduma: "FREE" },
    { name: "H5P add-on for LearnPress", price: "$29", eduma: "FREE" },
    { name: "WPML add-on for LearnPress", price: "$29", eduma: "FREE" },
    { name: "Live Course add-on for LearnPress", price: "$19", eduma: "FREE" },
    { name: "Instamojo add-on for LearnPress", price: "$19", eduma: "FREE" },
    { name: "RazorPay add-on for LearnPress", price: "$19", eduma: "FREE" },
    { name: "Upsell Add-on for LearnPress", price: "$29", eduma: "FREE" },
    { name: "Assignments Add-on for LearnPress", price: "$39", eduma: "FREE" },
    { name: "Announcement for Learnpress", price: "$29", eduma: "FREE" },
  ];

  return (
    <section className="w-full bg-[#0E1936] text-white">
      {/* Header */}
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-10 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
          Unlock 22 Premium Add-Ons
          <br />
          <span className="block mt-2">At No Cost</span>
        </h1>
        <p className="mt-6 text-sm md:text-lg text-white/80">
          Save a total of $500 per year compared with purchasing all LearnPress Premium Add-ons.
        </p>
      </div>

      {/* Table */}
      <div className="w-full max-w-5xl mx-auto px-2 lg:px-6">
        <Table className="border-separate border-spacing-y-3 w-full">
          <TableHeader>
            <TableRow className="bg-gray-600 text-white md:h-12">
              <TableHead className="text-white text-left px-2 md:px-6">
                PREMIUM ADD-ONS
              </TableHead>
              <TableHead className="text-white text-right px-2 md:px-6 w-[80px]">
                PRICE
              </TableHead>
              <TableHead className="text-white text-right px-2 md:px-6 w-[80px]">
                EDUMA
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {addons.map((addon, i) => (
              <TableRow
                key={i}
                className="bg-[#1f2544] text-white h-auto md:h-12"
              >
                <TableCell className="text-left text-sm md:text-base px-2 md:px-6 whitespace-normal break-words leading-snug">
                  {addon.name}
                </TableCell>
                <TableCell className="text-right text-sm md:text-base px-2 md:px-6 w-[80px]">
                  {addon.price}
                </TableCell>
                <TableCell className="text-right text-sm md:text-base px-2 md:px-6 w-[80px]">
                  {addon.eduma}
                </TableCell>
              </TableRow>
            ))}

            {/* Total Row */}
            <TableRow className="rounded-lg overflow-hidden h-18">
              <TableCell className="bg-gray-500 text-white font-bold text-left text-sm md:text-base px-2 md:px-6">
                TOTAL
              </TableCell>
              <TableCell className="bg-gray-500 text-white font-bold text-right text-sm md:text-base px-2 md:px-6 w-[80px]">
                $814
              </TableCell>
              <TableCell className="bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold text-center text-sm md:text-base px-3 md:px-4 w-[80px]">
                <div className="flex flex-col items-center">
                  <span>ALL IN EDUMA</span>
                  <span className="text-[10px] md:text-sm font-normal">
                    Save up to 80%. No monthly cost
                  </span>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
