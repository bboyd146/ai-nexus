// src/pages/Showcase.jsx
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { motion } from "framer-motion";
import demoImg from "../assets/port-assist.jpg";
import demoImg2 from "../assets/code-explain.jpg";
import demoImg3 from "../assets/chat-ai.jpg";

export default function Showcase() {
    const showcases = [
        {
            title: "AI Portfolio Assistant",
            desc: "Chat-driven portfolio that personalizes content for each visitor.",
            img: demoImg,
            link: "",
        },
        {
            title: "Code Explainer",
            desc: "Natural-language code interpreter that turns syntax into insight.",
            img: demoImg2,
            link: "",
        },
        {
            title: "Realtime AI Chat API",
            desc: "Lightweight API enabling instant AI chat responses for developers.",
            img: demoImg3,
            link: "",
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
                    Showcase
                </motion.h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {showcases.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.6 }}
                            className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-slate-700 hover:border-blue-400 transition-all"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity rounded-2xl"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                                <p className="text-slate-300 text-sm mb-4">{item.desc}</p>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-emerald-400 text-sm"
                                >
                                    View Project →
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
