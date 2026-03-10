"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const painPoints = [
    "Generic software forcing you to adapt your internal processes.",
    "Operational bottlenecks causing delays and productivity loss.",
    "Inefficient manual workflows that drain team energy.",
    "Missed opportunities due to outdated digital infrastructure."
];

const solutionPoints = [
    "Technology engineered specifically for your unique workflows.",
    "Streamlined operations that automate critical business tasks.",
    "Problem-first methodology focused on your business goals.",
    "Seamless integration that scales as your organization grows."
];

export function ProblemSolution() {
    return (
        <section className="py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-4">
                        The Approach
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-dark-950 font-display">
                        Stop Adapting to Software. <br />
                        <span className="text-primary-500">Make Software Adapt to You.</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    {/* Problem Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-10 md:p-14 bg-ghost-100 rounded-[3rem] border border-slate-200"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-accent-50 rounded-2xl">
                                <AlertCircle className="w-8 h-8 text-accent-500" />
                            </div>
                            <h4 className="text-2xl font-bold text-dark-900">The Problem</h4>
                        </div>
                        <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium">
                            Most businesses struggle with generic tools that create operational friction and force teams to change how they work.
                        </p>
                        <ul className="space-y-6">
                            {painPoints.map((point, i) => (
                                <li key={i} className="flex gap-4 items-start text-dark-700 font-medium">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-400 flex-shrink-0" />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Solution Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-10 md:p-14 bg-dark-500 text-white rounded-[3rem] shadow-premium relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-20 opacity-10 bg-gradient-to-br from-primary-400 to-transparent rounded-full -mr-16 -mt-16 pointer-events-none" />

                        <div className="flex items-center gap-3 mb-8 relative z-10">
                            <div className="p-3 bg-primary-500 rounded-2xl">
                                <CheckCircle2 className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-2xl font-bold">The iDegin Way</h4>
                        </div>
                        <p className="text-lg text-slate-300 mb-10 leading-relaxed font-medium relative z-10">
                            We engineer tailor-made technology that sits perfectly within your workflows, unlocking new levels of efficiency and scale.
                        </p>
                        <ul className="space-y-6 relative z-10">
                            {solutionPoints.map((point, i) => (
                                <li key={i} className="flex gap-4 items-start font-medium hover:text-primary-300 transition-colors cursor-default">
                                    <ArrowRight className="mt-1 w-5 h-5 text-primary-400 flex-shrink-0" />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
