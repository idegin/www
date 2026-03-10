"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, MessageSquare, ArrowRight } from "lucide-react";

export function CTASection() {
    return (
        <section className="py-24 px-6 relative overflow-hidden" id="contact">
            <div className="absolute inset-0 bg-primary-600 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-400/30 via-transparent to-transparent" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10 text-white bg-white/10 backdrop-blur-2xl p-10 md:p-20 rounded-[4rem] border border-white/20 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-8 border border-white/30">
                            <Sparkles className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 font-display leading-tight">
                            Ready to Transform <br />
                            <span className="text-primary-200">Your Business?</span>
                        </h2>
                        <p className="text-lg text-white/80 font-medium leading-relaxed max-w-md">
                            Let's discuss your workflows and engineer the technology you need to innovate, operate intelligently, and achieve exponential growth.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center lg:justify-end"
                    >
                        <Link href="/contact" className="group px-12 py-6 bg-white text-primary-600 rounded-[2rem] font-black text-2xl hover:bg-slate-50 transition-all flex items-center justify-center gap-4 shadow-2xl shadow-primary-900/40 active:scale-95">
                            <MessageSquare className="w-8 h-8" />
                            Book a Strategy Call
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
