import AboutSection from "./components/AboutSection"
import BlogSection from "./components/BlogSection"
import CO2Calculator from "./components/C02Calculator"
import EventsSection from "./components/EventsSection"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import MapSection from "./components/MapSection"
import PollutionSection from "./components/PollutionSection"
import TipsSection from "./components/TipsSection"

function App() {
  return (
    <div className="min-h-screen bg-bg pt-[96px]">
      <Header />
      <HeroSection />
      <PollutionSection />
      <MapSection/>
      <CO2Calculator />
      <EventsSection/>
      <BlogSection/>
      <TipsSection />
      <AboutSection />
      <Footer/>
    </div>
  )
}

export default App