// src/pages/Technology.jsx
import { motion } from "framer-motion";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

export default function Technology() {
  const stack = [
    { name: "React + Vite", desc: "Blazing-fast front-end architecture for modular AI experiences." },
    { name: "Tailwind CSS", desc: "Utility-first design system for modern, responsive UI." },
    { name: "OpenAI / Custom LLM", desc: "Natural language understanding powered by cutting-edge AI models." },
    { name: "Firebase / Supabase", desc: "Realtime backend integration for authentication and data sync." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-slate-50">
      <Header />
      <main className="container mx-auto px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
        >
          Technology Stack
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="p-6 bg-white/5 border border-slate-700 rounded-2xl hover:border-emerald-400 transition-all"
            >
              <h2 className="text-xl font-semibold mb-2">{tech.name}</h2>
              <p className="text-slate-300 text-sm leading-relaxed">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
