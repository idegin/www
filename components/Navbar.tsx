"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Services", href: "/#services" },
    { name: "Solutions", href: "/#solutions" },
    { name: "About Us", href: "/#about" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="relative h-10 w-32">
                    <Image
                        src={!isScrolled ? "/logo-dark.png" : "/logo-light.png"}
                        alt="iDegin Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>

                <div className="hidden md:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-[15px] font-semibold transition-all hover:text-primary-500 relative group",
                                isScrolled ? "text-dark-700" : "text-white/90"
                            )}
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all group-hover:w-full" />
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className={cn(
                            "group px-7 py-3 rounded-2xl text-[15px] font-bold transition-all shadow-xl active:scale-95 flex items-center gap-2 overflow-hidden relative",
                            isScrolled
                                ? "bg-primary-500 text-white hover:bg-primary-600 shadow-primary-500/25"
                                : "bg-white text-primary-600 hover:bg-ghost-50 shadow-white/10"
                        )}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Get Started
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-md"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className={isScrolled ? "text-dark-700" : "text-white"} />
                    ) : (
                        <Menu className={isScrolled ? "text-dark-700" : "text-white"} />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 bg-dark-950/90 backdrop-blur-lg z-40 md:hidden transition-all duration-300 flex flex-col items-center justify-center space-y-8",
                    isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                )}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-2xl font-semibold text-white hover:text-primary-400 transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
                <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-8 py-3 bg-primary-500 text-white rounded-full text-lg font-bold shadow-xl"
                >
                    Get Started
                </Link>
            </div>
        </nav>
    );
}
