"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Settings, Cpu, DollarSign } from "lucide-react";

const impacts = [
    {
        value: "提高效率",
        title: "Increased Operational Efficiency",
        description: "Steamline internal processes and reduce manual overhead significantly.",
        icon: <Settings className="w-8 h-8 text-primary-500" />,
        stat: "40%+"
    },
    {
        value: "流程自动化",
        title: "Automation of Business Processes",
        description: "Replacing human-dependent workflows with intelligent automated systems.",
        icon: <Cpu className="w-8 h-8 text-teal-500" />,
        stat: "10x"
    },
    {
        value: "更快增长",
        title: "Faster Growth Through Tech",
        description: "Empowering your team with tools that allow for rapid scaling and innovation.",
        icon: <TrendingUp className="w-8 h-8 text-accent-500" />,
        stat: "2.5x"
    },
    {
        value: "收入扩展",
        title: "Revenue Scaling via Digital Systems",
        description: "Opening new digital revenue streams and optimizing existing ones for profit.",
        icon: <DollarSign className="w-8 h-8 text-indigo-500" />,
        stat: "$$$"
    }
];

export function ImpactSection() {
    return (
        <section className="py-24 px-6 bg-dark-500 text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-500 blur-[150px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-teal-500 blur-[150px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 text-center">
                <div className="mb-20">
                    <h2 className="text-primary-400 font-bold tracking-wider uppercase text-sm mb-4">
                        The Result of Innovation
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold mb-8 font-display">
                        Driving Measurable <span className="text-primary-400">Business Impact</span>
                    </h3>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Technology is only as good as the value it creates. We focus on outcomes that directly affect your bottom line and operational sanity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {impacts.map((impact, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-md hover:bg-white/10 transition-all text-left group"
                        >
                            <div className="mb-8 flex justify-between items-start">
                                <div className="p-4 bg-white/10 rounded-2xl group-hover:scale-110 transition-transform">
                                    {impact.icon}
                                </div>
                                <div className="text-3xl font-black text-primary-400 opacity-50 group-hover:opacity-100 transition-opacity">
                                    {impact.stat}
                                </div>
                            </div>
                            <h4 className="text-2xl font-bold mb-4 font-display leading-tight">{impact.title}</h4>
                            <p className="text-slate-400 leading-relaxed font-medium">{impact.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
