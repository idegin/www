"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const slides = [
    {
        title: "Engineering Custom Software for Exponential Growth",
        description: "Tailor-made digital solutions that align precisely with your operational needs and long-term business goals.",
        image: "/images/software_development_hero_1773173650821.png",
        accent: "text-primary-400",
    },
    {
        title: "Scalable Cloud Architecture & Infrastructure",
        description: "Reliable, high-performance systems designed to streamline operations and unlock new efficiencies.",
        image: "/images/cloud_solutions_hero_1773173686246.png",
        accent: "text-teal-400",
    },
    {
        title: "Strategic Problem-First Innovation",
        description: "Transforming ideas and inefficiencies into powerful digital products that drive real business outcomes.",
        image: "/images/business_growth_hero_1773173714561.png",
        accent: "text-accent-400",
    },
];

export function HeroCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 6000, stopOnInteraction: false }),
    ]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    return (
        <div className="relative h-screen w-full overflow-hidden bg-dark-950" id="home">
            <div className="h-full" ref={emblaRef}>
                <div className="flex h-full">
                    {slides.map((slide, index) => (
                        <div key={index} className="relative min-w-full h-full flex-shrink-0 flex-grow-0">
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                className="object-cover brightness-[0.4]"
                                priority={index === 0}
                            />
                            <div className="absolute inset-0 flex items-center justify-center px-6">
                                <div className="max-w-5xl w-full text-center md:text-left">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={selectedIndex === index ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                        className="p-8 md:p-12 glass-dark rounded-[2.5rem] border-white/5 shadow-2xl backdrop-blur-xl"
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={selectedIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                            transition={{ duration: 0.8, delay: 0.2 }}
                                        >
                                            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight font-display">
                                                {slide.title.split(" ").map((word, i) => (
                                                    <span key={i} className={i > 2 ? slide.accent : "inline-block"}>
                                                        {word}{" "}
                                                    </span>
                                                ))}
                                            </h1>
                                        </motion.div>
                                        <motion.p
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={selectedIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                            transition={{ duration: 0.8, delay: 0.4 }}
                                            className="text-lg md:text-2xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-medium"
                                        >
                                            {slide.description}
                                        </motion.p>
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={selectedIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                            transition={{ duration: 0.8, delay: 0.6 }}
                                            className="flex flex-col sm:flex-row gap-5"
                                        >
                                            <button className="group px-8 py-4 bg-primary-500 hover:bg-primary-400 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-primary-500/20 active:scale-95 flex items-center justify-center gap-2">
                                                Explore Our Solutions
                                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </button>
                                            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-2xl font-bold text-lg transition-all active:scale-95">
                                                Contact Strategy Team
                                            </button>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-12 left-0 right-0 z-10 flex items-center justify-between px-6 md:px-12 max-w-7xl mx-auto">
                <div className="flex gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => emblaApi?.scrollTo(index)}
                            className={cn(
                                "h-1.5 transition-all duration-500 rounded-full",
                                selectedIndex === index ? "w-12 bg-primary-500" : "w-6 bg-white/30"
                            )}
                        />
                    ))}
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={scrollPrev}
                        className="p-3 bg-white/10 hover:bg-primary-500 text-white border border-white/20 backdrop-blur-md rounded-full transition-all group active:scale-90"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="p-3 bg-white/10 hover:bg-primary-500 text-white border border-white/20 backdrop-blur-md rounded-full transition-all group active:scale-90"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 hidden md:block"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white/50 rounded-full" />
                </div>
            </motion.div>
        </div>
    );
}
