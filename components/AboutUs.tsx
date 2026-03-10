"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Rocket, Users, Target, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        icon: <Target className="w-8 h-8 text-primary-500" />,
        title: "Problem-First Strategy",
        description: "We don't just build tools; we research your workflows and challenges to engineer technology that fits perfectly.",
    },
    {
        icon: <Rocket className="w-8 h-8 text-teal-500" />,
        title: "Scalable Innovation",
        description: "Our solutions are built for long-term performance, allowing you to scale operations and unlock new efficiencies.",
    },
    {
        icon: <Users className="w-8 h-8 text-accent-500" />,
        title: "End-to-End Delivery",
        description: "From discovery and architecture to deployment and management, we handle the entire product lifecycle.",
    },
];

export function AboutUs() {
    return (
        <section className="py-24 px-6 bg-ghost-100" id="about">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-4">
                            About iDegin Technologies
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-dark-900 mb-8 leading-tight">
                            Transforming Ideas into <span className="text-primary-500">Scalable Digital Reality</span>
                        </h3>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            iDegin Technologies Limited is dedicated to helping businesses grow through powerful, tailor-made digital solutions. We take the opposite approach to generic software—we adapt our technology to fit your organization, not the other way around.
                        </p>

                        <div className="space-y-4 mb-10">
                            {[
                                "Custom software precisely aligned with operational needs",
                                "Ready-made technology solutions for rapid growth",
                                "Deep technical expertise combined with business insight",
                                "End-to-end lifecycle management"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary-500 flex-shrink-0" />
                                    <span className="text-dark-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <button className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-primary-500/30">
                            Learn More About Our Process
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-8"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -8 }}
                                className={cn(
                                    "p-10 rounded-[2.5rem] bg-white shadow-premium hover:shadow-glow transition-all duration-500 border border-slate-100 flex flex-col items-start",
                                    index === 2 ? "sm:col-span-2" : ""
                                )}
                            >
                                <div className={cn(
                                    "mb-8 p-5 rounded-3xl w-fit shadow-inner",
                                    index === 0 ? "bg-primary-50" : index === 1 ? "bg-teal-50" : "bg-accent-50"
                                )}>
                                    {feature.icon}
                                </div>
                                <h4 className="text-2xl font-bold text-dark-950 mb-4 font-display">{feature.title}</h4>
                                <p className="text-slate-500 leading-relaxed text-lg">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}


