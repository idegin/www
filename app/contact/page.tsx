"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-ghost-50">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-dark-500 text-white overflow-hidden relative">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 blur-[100px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 blur-[100px] rounded-full" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-black mb-6 font-display">
                            Let's Engineer Your <br />
                            <span className="text-primary-400">Next Success</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
                            We're ready to research your workflows and build the technology your business needs to scale.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 px-6 -mt-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Contact Info */}
                        <div className="lg:col-span-5 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-10 bg-white rounded-[3rem] shadow-premium border border-slate-100"
                            >
                                <h2 className="text-3xl font-bold text-dark-950 mb-10 font-display">Contact Details</h2>

                                <div className="space-y-10">
                                    <div className="flex gap-6">
                                        <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-7 h-7 text-primary-500" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-1">Email Us</p>
                                            <a href="mailto:project@idegin.com" className="text-xl font-bold text-dark-950 hover:text-primary-500 transition-colors">
                                                project@idegin.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex gap-6">
                                        <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-7 h-7 text-teal-500" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-1">Visit Us</p>
                                            <p className="text-xl font-bold text-dark-950 leading-relaxed">
                                                Suite 405, City Plaza, Gwarinpa, Abuja
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 opacity-50">
                                        <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-7 h-7 text-indigo-500" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-1">Call Us</p>
                                            <p className="text-xl font-bold text-dark-950">
                                                Available for strategy calls
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-16 p-8 bg-ghost-100 rounded-[2rem] border border-slate-200">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Sparkles className="w-6 h-6 text-primary-500" />
                                        <h4 className="font-bold text-dark-950">Strategy Sessions</h4>
                                    </div>
                                    <p className="text-slate-500 font-medium leading-relaxed">
                                        We offer complimentary 30-minute strategy sessions to discuss your business challenges and potential digital solutions.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Map Placeholder */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="h-80 w-full bg-slate-200 rounded-[3rem] overflow-hidden shadow-inner relative grayscale"
                            >
                                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold uppercase tracking-widest text-sm">
                                    Interactive Map Coming Soon
                                </div>
                                {/* Real map iframe can be placed here */}
                            </motion.div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-10 md:p-16 bg-white rounded-[3.5rem] shadow-premium border border-slate-100 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-24 bg-primary-500/5 rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none" />

                                <h2 className="text-3xl font-bold text-dark-950 mb-4 font-display">Tell us about your project</h2>
                                <p className="text-slate-500 font-medium mb-12">Complete the form below and our strategy team will reach out within 24 hours.</p>

                                <form className="space-y-8 relative z-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-sm font-bold text-dark-950 uppercase tracking-wider ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                placeholder="Emeka Okafor"
                                                className="w-full px-6 py-4 bg-ghost-100 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-sm font-bold text-dark-950 uppercase tracking-wider ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                placeholder="emeka@company.com"
                                                className="w-full px-6 py-4 bg-ghost-100 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-sm font-bold text-dark-950 uppercase tracking-wider ml-1">Company Name</label>
                                            <input
                                                type="text"
                                                placeholder="TechScale Limited"
                                                className="w-full px-6 py-4 bg-ghost-100 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-sm font-bold text-dark-950 uppercase tracking-wider ml-1">Project Type</label>
                                            <select className="w-full px-6 py-4 bg-ghost-100 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium appearance-none">
                                                <option>Custom Software</option>
                                                <option>Web Application</option>
                                                <option>Internal Systems</option>
                                                <option>Automation</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-sm font-bold text-dark-950 uppercase tracking-wider ml-1">Project Details</label>
                                        <textarea
                                            rows={5}
                                            placeholder="Tell us about your challenges and what you hope to achieve..."
                                            className="w-full px-6 py-4 bg-ghost-100 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium resize-none"
                                        />
                                    </div>

                                    <button className="w-full py-6 bg-primary-500 text-white rounded-2xl font-black text-xl hover:bg-primary-600 transition-all shadow-xl shadow-primary-500/25 flex items-center justify-center gap-3 active:scale-[0.98]">
                                        <Send className="w-6 h-6" />
                                        Send Project Inquiry
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
