// src/pages/Features.jsx
import { motion } from "framer-motion";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

export default function Features() {
  const features = [
    {
      title: "Conversational Intelligence",
      description:
        "AI Nexus uses next-generation NLP models to understand nuance, context, and intent — enabling fluid, human-like conversations.",
      icon: "💬",
    },
    {
      title: "Adaptive Learning",
      description:
        "Each session becomes smarter. The model adapts to user patterns, tone, and prior context for more personalized interactions.",
      icon: "⚡",
    },
    {
      title: "Seamless Integration",
      description:
        "Integrate AI Nexus into apps, chatbots, or dashboards through modular APIs designed for real-time AI interaction.",
      icon: "🔌",
    },
    {
      title: "Privacy-First Design",
      description:
        "All communication runs securely with end-to-end encryption and strict data policies for user protection.",
      icon: "🛡️",
    },
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
          Powerful Features
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((f, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-slate-700 hover:border-blue-400 transition-all"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h2 className="text-xl font-semibold mb-3">{f.title}</h2>
              <p className="text-slate-300 text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
