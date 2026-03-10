"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-dark-500 text-white pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand Info */}
                    <div className="col-span-1 lg:col-span-1">
                        <Link href="/" className="relative h-12 w-44 block mb-8">
                            <Image
                                src="/logo-dark.png"
                                alt="iDegin Logo"
                                fill
                                className="object-contain"
                            />
                        </Link>
                        <p className="text-slate-400 mb-10 leading-relaxed font-medium">
                            We specialize in engineering tecnologia tailored to your business workflows, unlocking new efficiencies and driving exponential growth.
                        </p>
                        <div className="flex gap-5">
                            <Link href="https://twitter.com/idegin_tech" className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-primary-500 border border-white/10 rounded-2xl transition-all group">
                                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </Link>
                            <Link href="https://linkedin.com/company/idegin" className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-primary-500 border border-white/10 rounded-2xl transition-all group">
                                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:ml-auto">
                        <h4 className="text-xl font-bold mb-10 flex items-center gap-2 font-display">
                            Solutions <span className="w-8 h-[2px] bg-primary-500 inline-block" />
                        </h4>
                        <ul className="space-y-5">
                            {["Custom Software", "Cloud Infrastructure", "API Integration", "Mobile Applications", "AI Solutions"].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-slate-400 hover:text-white transition-colors flex items-center group font-medium">
                                        {link} <ArrowUpRight className="w-4 h-4 ml-2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="lg:ml-auto">
                        <h4 className="text-xl font-bold mb-10 flex items-center gap-2 font-display">
                            Company <span className="w-8 h-[2px] bg-teal-500 inline-block" />
                        </h4>
                        <ul className="space-y-5">
                            {["About Us", "Our Process", "Expertise", "Success Stories", "Contact"].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-slate-400 hover:text-white transition-colors flex items-center group font-medium">
                                        {link} <ArrowUpRight className="w-4 h-4 ml-2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:ml-auto">
                        <h4 className="text-xl font-bold mb-10 flex items-center gap-2 font-display">
                            Get in Touch <span className="w-8 h-[2px] bg-accent-500 inline-block" />
                        </h4>
                        <ul className="space-y-8">
                            <li className="flex gap-5">
                                <div className="w-12 h-12 flex items-center justify-center bg-primary-500/10 border border-primary-500/20 rounded-2xl">
                                    <Mail className="w-6 h-6 text-primary-500" />
                                </div>
                                <div>
                                    <p className="text-[13px] text-slate-500 uppercase font-bold tracking-widest mb-1">Email Us</p>
                                    <a href="mailto:project@idegin.com" className="text-slate-200 hover:text-primary-400 font-bold transition-colors">project@idegin.com</a>
                                </div>
                            </li>
                            <li className="flex gap-5">
                                <div className="w-12 h-12 flex items-center justify-center bg-teal-500/10 border border-teal-500/20 rounded-2xl">
                                    <MapPin className="w-6 h-6 text-teal-400" />
                                </div>
                                <div>
                                    <p className="text-[13px] text-slate-500 uppercase font-bold tracking-widest mb-1">Visit Us</p>
                                    <p className="text-slate-200 font-bold leading-relaxed">Suite 405, City Plaza, Gwarinpa, Abuja</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-[15px] font-medium">
                        © {new Date().getFullYear()} iDegin Technologies Limited. All rights reserved.
                    </p>
                    <div className="flex gap-10">
                        <Link href="#" className="text-slate-500 hover:text-white text-[15px] font-medium transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-slate-500 hover:text-white text-[15px] font-medium transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
