import React, { useState } from "react";
import {
    FaImages,
    FaMedal,
    FaChalkboardTeacher,
    FaProjectDiagram,
    FaCalendarAlt,
    FaChevronLeft,
    FaChevronRight
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {

    /* =======================
       Categories
    ======================== */
    const categories = [
        { name: "All", icon: FaImages },
        { name: "Events", icon: FaCalendarAlt },
        { name: "Trainings", icon: FaChalkboardTeacher },
        { name: "Awards", icon: FaMedal },
        { name: "Projects", icon: FaProjectDiagram },
    ];

    /* =======================
       Gallery Data
    ======================== */
    const galleryItems = [
        {
            title: "Annual Safety Event",
            category: "Events",
            images: [
                "/assets/gallery/events/event1.jpg",
                "/assets/gallery/events/event2.jpg",
                "/assets/gallery/events/event3.jpg",
            ],
        },
        {
            title: "Fire Safety Training",
            category: "Trainings",
            images: [
                "/assets/gallery/trainings/training1.jpg",
                "/assets/gallery/trainings/training2.jpg",
            ],
        },
        {
            title: "Award Ceremony 2024",
            category: "Awards",
            images: [
                "/assets/gallery/awards/award1.jpg",
            ],
        },
        {
            title: "Ceylon Tobacco – 2024",
            category: "Projects",
            images: [
                "/src/assets/Projects/Tobacco2024/1.jpeg",
                "/src/assets/Projects/Tobacco2024/2.jpeg",
                "/src/assets/Projects/Tobacco2024/3.jpeg",
                "/src/assets/Projects/Tobacco2024/4.jpeg",
                "/src/assets/Projects/Tobacco2024/5.jpeg", 
            ],
        },
        {
            title: "Ceylon Tobacco – 2020",
            category: "Projects",
            images: [
                "/src/assets/Projects/Tobacco2020/1.jpeg",
                "/src/assets/Projects/Tobacco2020/2.jpeg",
                "/src/assets/Projects/Tobacco2020/3.jpeg",
                "/src/assets/Projects/Tobacco2020/4.jpeg",
            ],
        },
        {
            title: "Supply Chain Excellence Award",
            category: "Awards",
            description: "1st Runner-Up for National Supply Chain Performance Excellence.",
            images: [
                "/src/assets/Awards/5.jpg",
                "/src/assets/Awards/1.1.jpg",
                "/src/assets/Awards/1.2.jpg",
                "/src/assets/Awards/1.3.jpg",
                "/src/assets/Awards/1.4.jpg",
                "/src/assets/Awards/1.5.jpg",
            ],
        },
        {
            title: "Asia Miracle Awards 2025",
            category: "Awards",
            description: "Best Safety Solutions & Product Industry Brand of the Year.",
            images: [
                "/src/assets/Awards/1.jpg",
            ],
        },
        {
            title: "Iconic Awards 2024",
            category: "Awards",
            description: "Awarded for outstanding performance in industrial safety solutions.",
            images: [
                "/src/assets/Awards/4.jpg",
            ],
        },
        {
            title: "Pinnacle Awards 2024",
            category: "Awards",
            description: "Best Safety Solutions & Product Industry of the Year.",
            images: [
                "/src/assets/Awards/2.jpg",
            ],
        },
        {
            title: "Pinnacle Awards 2024",
            category: "Awards",
            description: "Best Entrepreneur of the Year – Safety Equipment Industry.",
            images: [
                "/src/assets/Awards/3.jpg",
            ],
        },
    ];

    /* =======================
       States
    ======================== */
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [activeIndex, setActiveIndex] = useState({});

    /* =======================
       Filtering
    ======================== */
    const filteredItems =
        selectedCategory === "All"
            ? galleryItems
            : galleryItems.filter(item => item.category === selectedCategory);

    /* =======================
       Slider Handlers
    ======================== */
    const nextImage = (itemKey, length) => {
        setActiveIndex(prev => ({
            ...prev,
            [itemKey]: ((prev[itemKey] || 0) + 1) % length,
        }));
    };

    const prevImage = (itemKey, length) => {
        setActiveIndex(prev => ({
            ...prev,
            [itemKey]: ((prev[itemKey] || 0) - 1 + length) % length,
        }));
    };

    return (
        <section id="gallery" className="bg-industrial-50 py-20 relative overflow-hidden">
            
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary-50/50 to-transparent pointer-events-none"></div>

            <div className="section-container relative z-10">

                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-primary-100 shadow-sm text-primary-600 rounded-full font-bold text-xs tracking-widest uppercase mb-4">
                        <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                        Our Highlights
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-industrial-900 tracking-tight">
                        Events, Training & Achievements
                    </h2>
                    <p className="section-subheading mx-auto mt-4 max-w-2xl text-industrial-500 text-lg">
                        Explore highlights of our successful projects, award ceremonies, industrial safety trainings, and community events across Sri Lanka.
                    </p>
                </motion.div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((cat, index) => {
                        const isSelected = selectedCategory === cat.name;
                        return (
                            <button
                                key={index}
                                onClick={() => setSelectedCategory(cat.name)}
                                className={`relative flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-all duration-300 overflow-hidden
                                ${isSelected
                                    ? "text-white shadow-md shadow-primary-500/30 scale-105"
                                    : "bg-white text-industrial-600 hover:text-industrial-900 border border-industrial-200 hover:border-industrial-300 hover:bg-industrial-50 shadow-sm hover:shadow"
                                }`}
                            >
                                {isSelected && (
                                    <motion.div 
                                        layoutId="activeFilterBg"
                                        className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full -z-10"
                                    />
                                )}
                                <cat.icon className={isSelected ? "text-primary-100" : "text-primary-500"} />
                                <span className="relative z-10">{cat.name}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Gallery Grid */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item) => {
                            // Use title as key so state is preserved during filter operations
                            const itemKey = item.title;
                            const current = activeIndex[itemKey] || 0;

                            return (
                                <motion.div
                                    key={itemKey}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className="group bg-white rounded-2xl shadow-lg border border-industrial-100 hover:shadow-2xl hover:-translate-y-2 overflow-hidden transition-all duration-300 flex flex-col"
                                >
                                    {/* Image Slider */}
                                    <div className="relative h-64 overflow-hidden bg-industrial-100 flex-shrink-0">
                                        <AnimatePresence mode="wait">
                                            <motion.img
                                                key={current}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                src={item.images[current]}
                                                alt={item.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </AnimatePresence>

                                        {/* Gradient Overlay for bottom shadow */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                        {/* Slider Arrows */}
                                        {item.images.length > 1 && (
                                            <div className="absolute inset-0 flex items-center justify-between px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); prevImage(itemKey, item.images.length); }}
                                                    className="w-8 h-8 flex items-center justify-center rounded-full bg-black/40 hover:bg-primary-600 backdrop-blur-md text-white border border-white/20 transition-colors shadow-lg"
                                                >
                                                    <FaChevronLeft className="text-sm pr-0.5" />
                                                </button>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); nextImage(itemKey, item.images.length); }}
                                                    className="w-8 h-8 flex items-center justify-center rounded-full bg-black/40 hover:bg-primary-600 backdrop-blur-md text-white border border-white/20 transition-colors shadow-lg"
                                                >
                                                    <FaChevronRight className="text-sm pl-0.5" />
                                                </button>
                                            </div>
                                        )}

                                        {/* Image Counter */}
                                        {item.images.length > 1 && (
                                            <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white/90 text-[10px] sm:text-xs font-semibold z-10 border border-white/10 uppercase tracking-widest">
                                                {current + 1} / {item.images.length}
                                            </div>
                                        )}

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-primary-700 text-xs font-bold shadow-md">
                                                {item.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex-grow flex flex-col">
                                        <h3 className="text-xl font-bold text-industrial-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                                            {item.title}
                                        </h3>
                                        {item.description && (
                                            <p className="text-sm text-industrial-600 border-l-[3px] border-primary-500 pl-3 leading-relaxed mt-auto">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                    
                                    {/* Action bar (subtle) */}
                                    <div className="px-6 py-4 bg-industrial-50/50 border-t border-industrial-100 flex items-center justify-between flex-shrink-0">
                                        <span className="text-xs font-bold text-industrial-400 group-hover:text-primary-500 uppercase tracking-widest transition-colors">
                                            Gallery Focus
                                        </span>
                                        <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors text-industrial-300">
                                            <FaImages className="text-sm" />
                                        </div>
                                    </div>

                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* CTA Module */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 max-w-4xl mx-auto bg-white rounded-[2rem] shadow-2xl p-10 md:p-14 border border-industrial-100 text-center relative overflow-hidden"
                >
                    {/* Decorative Background Gradients */}
                    <div className="absolute -top-[100px] -left-[100px] w-[300px] h-[300px] bg-primary-100/50 rounded-full blur-[80px] pointer-events-none"></div>
                    <div className="absolute -bottom-[100px] -right-[100px] w-[300px] h-[300px] bg-primary-200/50 rounded-full blur-[80px] pointer-events-none"></div>
                    
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 shadow-inner ring-1 ring-primary-100">
                            <FaProjectDiagram className="text-3xl text-primary-500" />
                        </div>
                        <h3 className="text-2xl md:text-4xl font-extrabold text-industrial-900 mb-4 tracking-tight">
                            Partner with Industry Leaders
                        </h3>
                        <p className="text-lg md:text-xl text-industrial-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                            Let's collaborate on your next industrial project or safety training to achieve operational safety and excellence together.
                        </p>
                        <a href="/contact" className="group inline-flex justify-center items-center px-8 py-4 bg-primary-600 text-white font-bold text-lg rounded-xl shadow-xl shadow-primary-500/30 hover:bg-primary-500 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-white/20 overflow-hidden relative">
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[200%] group-hover:animate-[shimmer_1.5s_infinite]"></div>
                            <span className="relative z-10">Schedule a Consultation</span>
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Gallery;
