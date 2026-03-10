"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, PenSquare, Terminal, Rocket } from "lucide-react";

const steps = [
    {
        title: "Discovery & Research",
        description: "We carefully research your business, understanding workflows, challenges, and growth objectives.",
        icon: <Search className="w-10 h-10" />,
        color: "text-primary-500",
        bg: "bg-primary-50"
    },
    {
        title: "Product Architecture",
        description: "Strategic engineering that positions your product for long-term scalability and business value.",
        icon: <PenSquare className="w-10 h-10" />,
        color: "text-teal-500",
        bg: "bg-teal-50"
    },
    {
        title: "Expert Engineering",
        description: "Our team combines technical expertise with business insight to build practical and transformative code.",
        icon: <Terminal className="w-10 h-10" />,
        color: "text-indigo-500",
        bg: "bg-indigo-50"
    },
    {
        title: "Deployment & Scaling",
        description: "Launch with confidence. We manage the entire lifecycle to ensure reliability and exponential growth.",
        icon: <Rocket className="w-10 h-10" />,
        color: "text-accent-500",
        bg: "bg-accent-50"
    }
];

export function ProcessSection() {
    return (
        <section className="py-24 px-6 bg-white relative overflow-hidden">
            {/* Decorative vertical line for desktop */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 hidden lg:block" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-4">
                        Our Working Process
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-dark-950 font-display">
                        The Journey to <span className="text-primary-500">Digital Success</span>
                    </h3>
                </div>

                <div className="relative">
                    {steps.map((step, i) => (
                        <div key={i} className="flex flex-col lg:flex-row items-center justify-center mb-20 lg:mb-32">
                            {/* Left Side (Desktop) */}
                            <div className="flex-1 w-full text-center lg:text-right px-0 lg:px-12 order-2 lg:order-1">
                                {i % 2 === 0 ? (
                                    <motion.div
                                        initial={{ opacity: 0, x: -40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="lg:ml-auto lg:max-w-md"
                                    >
                                        <h4 className="text-3xl font-bold text-dark-950 mb-4 font-display">{step.title}</h4>
                                        <p className="text-lg text-slate-500 leading-relaxed font-medium">
                                            {step.description}
                                        </p>
                                    </motion.div>
                                ) : (
                                    <div className="hidden lg:block w-full" />
                                )}
                            </div>

                            {/* Step Circle (Center) */}
                            <div className="relative flex-shrink-0 z-20 order-1 lg:order-2 mb-8 lg:mb-0">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    className={`w-24 h-24 rounded-full ${step.bg} ${step.color} flex items-center justify-center shadow-2xl border-4 border-white`}
                                >
                                    {step.icon}
                                </motion.div>
                                <div className="absolute -top-4 -right-4 w-10 h-10 bg-dark-500 text-white rounded-full flex items-center justify-center font-bold shadow-lg text-xl">
                                    {i + 1}
                                </div>
                            </div>

                            {/* Right Side (Desktop) */}
                            <div className="flex-1 w-full text-center lg:text-left px-0 lg:px-12 order-3">
                                {i % 2 !== 0 ? (
                                    <motion.div
                                        initial={{ opacity: 0, x: 40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="lg:mr-auto lg:max-w-md"
                                    >
                                        <h4 className="text-3xl font-bold text-dark-950 mb-4 font-display">{step.title}</h4>
                                        <p className="text-lg text-slate-500 leading-relaxed font-medium">
                                            {step.description}
                                        </p>
                                    </motion.div>
                                ) : (
                                    <div className="hidden lg:block w-full" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
