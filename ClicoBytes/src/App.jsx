import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from './Pages/Home'
import AllEvents from './Pages/AllEvents'
import EventDetails from './Pages/EventsDetails'
import AllBlog from './Pages/AllBlog'
import BlogDetails from './Pages/BlogDetails'
import AllTips from './Pages/AllTips'
import TipDetails from './Pages/TipDetails'

function App() {
  return (
    <Router>
      <div className="bg-bg">
        <Header />
        <div className="pt-[96px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eventos" element={<AllEvents />} />
            <Route path="/evento/:id" element={<EventDetails />} />
            <Route path="/blog" element={<AllBlog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/dicas" element={<AllTips />} />
            <Route path="/dicas/:id" element={<TipDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App