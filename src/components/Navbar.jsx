// "use client"

// import { Button } from "@/components/ui/button"
// import Image from "next/image"
// import Link from "next/link"

// export default function Navbar() {
//   return (
//     <header className="sticky w-full">
//       {/* Top bar */}
//       <div className="w-full bg-gray-200 flex items-center justify-between px-6 py-2 text-sm">
//         <div className="">
//           <span className="text-black text-2xl font-bold pr-0.5">envato<span className="font-light">market</span></span>
//         </div>
//         <Button
//           className="bg-green-700 hover:bg-green-800 text-white px-4 py-1 rounded"
//         >
//           Buy now
//         </Button>
//       </div>

//       {/* Main Navbar */}
//       <nav className=" bg-primary text-white">
//         <div className="lg:mx-11 md:mx-auto  flex items-center justify-between px-6 py-3">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <Image
//               src="https://eduma.thimpress.com/wp-content/uploads/2024/03/logo-landing-1.png" // put your logo in public/eduma-logo.svg
//               alt="Eduma"
//               width={120}
//               height={40}
//             />
//           </div>

//           {/* Menu */}
//           <ul className="hidden md:flex items-center gap-8 font-semibold">
//             <li>
//               <Link href="#" className="text-orange-500">
//                 Demos
//               </Link>
//             </li>
//             <li>
//               <Link href="#" className="hover:text-orange-400">
//                 LearnPress
//               </Link>
//             </li>
//             <li>
//               <Link href="#" className="hover:text-orange-400">
//                 Premium Plugins
//               </Link>
//             </li>
//             <li>
//               <Link href="#" className="hover:text-orange-400">
//                 Features
//               </Link>
//             </li>
//             <li>
//               <Link href="#" className="hover:text-orange-400">
//                 What’s New
//               </Link>
//             </li>
//           </ul>

//           {/* Buy Now Button */}
//           <Button className="rounded-full bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 px-6 py-5 text-lg font-semibold">
//             Buy Now ($69)
//           </Button>
//         </div>
//       </nav>
//     </header>
//   )
// }













"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed w-full z-50">
      {/* Top bar */}
      <div className="w-full bg-gray-200 flex items-center justify-between px-4 sm:px-6 py-2 text-sm">
        <span className="text-black text-xl sm:text-2xl font-bold">
          envato<span className="font-light">market</span>
        </span>
        <Button className="bg-green-700 hover:bg-green-800 text-white px-3 sm:px-4 py-4 rounded text-sm sm:text-base ">
          Buy now
        </Button>
      </div>

      {/* Main Navbar */}
      <nav className="bg-primary text-white">
        <div className="flex items-center justify-between px-4 sm:px-6 py-3">
          {/* Logo */}
          <Image
            src="https://eduma.thimpress.com/wp-content/uploads/2024/03/logo-landing-1.png"
            alt="Eduma"
            width={120}
            height={40}
          />

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-semibold">
            <li><Link href="#" className="text-orange-500">Demos</Link></li>
            <li><Link href="#" className="hover:text-orange-400">LearnPress</Link></li>
            <li><Link href="#" className="hover:text-orange-400">Premium Plugins</Link></li>
            <li><Link href="#" className="hover:text-orange-400">Features</Link></li>
            <li><Link href="#" className="hover:text-orange-400">What’s New</Link></li>
          </ul>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Buy Now */}
          <Button className="hidden md:inline rounded-full bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 pb-10 text-sm lg:text-lg font-semibold ">
            Buy Now ($69)
          </Button>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="md:hidden bg-primary px-6 pb-4 space-y-3">
            <Link href="#" className="block text-orange-500">Demos</Link>
            <Link href="#" className="block hover:text-orange-400">LearnPress</Link>
            <Link href="#" className="block hover:text-orange-400">Premium Plugins</Link>
            <Link href="#" className="block hover:text-orange-400">Features</Link>
            <Link href="#" className="block hover:text-orange-400">What’s New</Link>
            <Button className="w-full rounded-full bg-gradient-to-r from-orange-400 to-orange-600 mt-4">
              Buy Now ($69)
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}

