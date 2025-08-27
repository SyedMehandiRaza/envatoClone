import Navbar from "@/components/Navbar"
import PremiumDemos from "@/components/PremiumDemos"
import WhyChooseUs from "@/components/WhyChooseUs"
import Course from "@/components/Courses"
import Hero from "@/components/Hero"
import Learn from "@/components/Learn"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0D1430] py-20 text-white relative overflow-hidden">
      <Hero />
      <WhyChooseUs />
      <PremiumDemos />
      <Course />
      <Learn />
      </main>
    </>
  )
}
