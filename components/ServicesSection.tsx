"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Globe, Database, Layers, Zap, PenTool } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "Custom Software Development",
        description: "Bespoke software engineered to solve your specific operational challenges and business goals.",
        icon: <Code className="w-8 h-8" />,
        color: "bg-primary-50 text-primary-500"
    },
    {
        title: "Web Application Development",
        description: "Scalable, high-performance web platforms built with modern architectures and superior user experiences.",
        icon: <Globe className="w-8 h-8" />,
        color: "bg-teal-50 text-teal-500"
    },
    {
        title: "Internal Business Systems",
        description: "Custom ERPs, CRMs, and management tools designed to streamline your unique internal workflows.",
        icon: <Database className="w-8 h-8" />,
        color: "bg-indigo-50 text-indigo-500"
    },
    {
        title: "SaaS Product Development",
        description: "End-to-end realization of subscription-based software products from early discovery to market deployment.",
        icon: <Layers className="w-8 h-8" />,
        color: "bg-dark-50 text-dark-800"
    },
    {
        title: "Automation & Workflow Solutions",
        description: "Intelligent systems that automate repetitive tasks, reducing human error and increasing output.",
        icon: <Zap className="w-8 h-8" />,
        color: "bg-accent-50 text-accent-500"
    },
    {
        title: "Product Design & Prototyping",
        description: "UI/UX design focused on usability and business impact, including rapid high-fidelity prototyping.",
        icon: <PenTool className="w-8 h-8" />,
        color: "bg-slate-100 text-slate-600"
    }
];

export function ServicesSection() {
    return (
        <section className="py-24 px-6 bg-ghost-50" id="services">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-4">
                        Our Core Expertise
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-dark-950 font-display">
                        Comprehensive Digital <span className="text-primary-500">Solutions</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-premium hover:shadow-glow transition-all group"
                        >
                            <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform", service.color)}>
                                {service.icon}
                            </div>
                            <h4 className="text-2xl font-bold text-dark-950 mb-4 font-display">
                                {service.title}
                            </h4>
                            <p className="text-slate-500 leading-relaxed font-medium">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
