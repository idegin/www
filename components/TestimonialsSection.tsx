"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        name: "Olakunle Adebayo",
        role: "CEO, TechSphere Solutions",
        content: "iDegin didn't just build us a tool; they redefined how we manage our entire operations. The custom ERP they created has doubled our throughput in just 6 months.",
        rating: 5
    },
    {
        name: "Sarah Jenkins",
        role: "COO, Global Logistics Co.",
        content: "The research-first approach iDegin takes is a game changer. They understood our bottlenecks better than we did and built technology that fits seamlessly.",
        rating: 5
    },
    {
        name: "Marcus Thorne",
        role: "Founder, Fintech Innovators",
        content: "Finding a team that understands both complex engineering and business strategy is rare. iDegin is that partner. Highly recommended for scaling startups.",
        rating: 5
    }
];

export function TestimonialsSection() {
    return (
        <section className="py-24 px-6 bg-ghost-100">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-4">
                        Client Success
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-dark-950 font-display">
                        Trusted by Leaders, <span className="text-primary-500">Built for Results</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="p-10 bg-white rounded-[2.5rem] shadow-premium border border-slate-50 flex flex-col relative group hover:shadow-glow transition-all duration-500"
                        >
                            <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Quote className="w-12 h-12 text-primary-500" />
                            </div>
                            <div className="flex gap-1 mb-6">
                                {[...Array(t.rating)].map((_, j) => (
                                    <Star key={j} className="w-5 h-5 fill-accent-400 text-accent-400" />
                                ))}
                            </div>
                            <p className="text-lg text-slate-600 italic mb-10 leading-relaxed font-medium flex-grow">
                                "{t.content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-slate-200 bg-[url('https://api.dicebear.com/7.x/avataaars/svg?seed=')] flex-shrink-0"
                                    style={{ backgroundImage: `url(https://api.dicebear.com/7.x/avataaars/svg?seed=${t.name})` }}
                                />
                                <div>
                                    <h5 className="font-bold text-dark-950">{t.name}</h5>
                                    <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
