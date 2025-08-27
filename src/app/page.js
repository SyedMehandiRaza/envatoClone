import Navbar from "@/components/Navbar"
import PremiumDemos from "@/components/PremiumDemos"
import WhyChooseUs from "@/components/WhyChooseUs"
import Course from "@/components/Courses"
import Hero from "@/components/Hero"
import Learn from "@/components/Learn"
import AddsOn from "@/components/AddsOn"
import SectionWrapper from "@/components/SectionWrapper"
import Plugins from "@/components/Plugins"
import PageBuilder from "@/components/PageBuilder"
import PerformanceSection from "@/components/PerformanceSection"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0D1430] py-20 text-white relative overflow-hidden">
      {/* <Hero />
      <WhyChooseUs />
      <PremiumDemos />
      <Course />
      <Learn />
      <AddsOn /> */}
      <SectionWrapper>
          <Hero />
        </SectionWrapper>

        <SectionWrapper>
          <WhyChooseUs />
        </SectionWrapper>

        <SectionWrapper>
          <PremiumDemos />
        </SectionWrapper>

        {/* <SectionWrapper> */}
          <Course />
        {/* </SectionWrapper> */}

        <SectionWrapper>
          <Learn />
        </SectionWrapper>

        <SectionWrapper>
          <AddsOn />
        </SectionWrapper>

        <SectionWrapper>
          <Plugins />
        </SectionWrapper>

        <SectionWrapper>
          <PageBuilder />
        </SectionWrapper>

        <PerformanceSection />

      </main>
    </>
  )
}
