"use client";

import React from "react";
import { motion } from "framer-motion";

const partners = [
    "TechFlow", "GlobalSystems", "FutureScale", "EliteDigital", "PrimeCompute"
];

export function TrustSection() {
    return (
        <section className="py-16 bg-white border-y border-slate-100 italic">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-slate-400 font-bold uppercase tracking-[0.2em] text-sm mb-12">
                    Trusted by Innovative Teams Worldwide
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                    {partners.map((partner) => (
                        <div key={partner} className="text-2xl md:text-3xl font-black text-dark-900 tracking-tighter">
                            {partner}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
