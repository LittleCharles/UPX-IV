import HeroSection from "../components/HeroSection"
import PollutionSection from "../components/PollutionSection"
import MapSection from "../components/MapSection"
import CO2Calculator from "../components/C02Calculator"
import EventsSection from "../components/EventsSection"
import BlogSection from "../components/BlogSection"
import TipsSection from "../components/TipsSection"
import AboutSection from "../components/AboutSection"

function Home() {
  return (
    <>
      <HeroSection />
      <PollutionSection />
      <MapSection />
      <CO2Calculator />
      <EventsSection />
      <BlogSection />
      <TipsSection />
      <AboutSection />
    </>
  )
}

export default Home