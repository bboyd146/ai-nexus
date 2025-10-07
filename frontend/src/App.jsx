import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ParticlesBackground, Header, Footer } from "./components";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Showcase from "./pages/Showcase";
import Technology from "./pages/Technology";

export default function App() {
  return (
    <Router>
      <div className="font-['Space Grotesk'] text-slate-50 min-h-screen relative overflow-hidden">
        <ParticlesBackground />
        <main className="container mx-auto px-6 relative z-10 backdrop-blur-[1px] bg-white/5 rounded-2xl shadow-lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="/technology" element={<Technology />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
