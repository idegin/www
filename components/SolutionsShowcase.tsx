"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Box, Zap, ShieldCheck } from "lucide-react";

export function SolutionsShowcase() {
    return (
        <section className="py-24 px-6 bg-white overflow-hidden" id="solutions">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-100 rounded-full blur-[80px] opacity-60" />
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 aspect-square lg:aspect-video">
                            <Image
                                src="/images/dashboard_mockup.png"
                                alt="iDegin Ready-made Solution"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Floating badge */}
                        <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-[2rem] shadow-xl border border-slate-50 hidden md:block">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-teal-50 rounded-xl">
                                    <Zap className="w-6 h-6 text-teal-500" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Ready to Launch</p>
                                    <p className="text-lg font-black text-dark-950">90% Faster Implementation</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-4">
                            Featured Solutions
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-dark-950 mb-8 font-display leading-tight">
                            Ready-Made Technology for <br />
                            <span className="text-primary-500">Accelerated Growth</span>
                        </h3>
                        <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium">
                            In addition to bespoke systems, we provide proven technology solutions built from industry insights. Adopt powerful tools faster and at a lower cost than standard internal development.
                        </p>

                        <div className="space-y-8 mb-12">
                            <div className="flex gap-5">
                                <div className="w-12 h-12 flex-shrink-0 bg-primary-50 rounded-2xl flex items-center justify-center">
                                    <Box className="w-6 h-6 text-primary-500" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-dark-950 mb-1">Pre-Built Industry Frameworks</h4>
                                    <p className="text-slate-500 font-medium">Proven architectures that solve common operational challenges out of the box.</p>
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <div className="w-12 h-12 flex-shrink-0 bg-teal-50 rounded-2xl flex items-center justify-center">
                                    <ShieldCheck className="w-6 h-6 text-teal-500" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-dark-950 mb-1">Enterprise-Grade Security</h4>
                                    <p className="text-slate-500 font-medium">Built-in compliance and security protocols for immediate peace of mind.</p>
                                </div>
                            </div>
                        </div>

                        <button className="group px-10 py-5 bg-dark-500 text-white rounded-2xl font-bold text-lg hover:bg-dark-600 transition-all flex items-center gap-3 shadow-xl shadow-dark-950/20 active:scale-95">
                            Explore Available Solutions
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
