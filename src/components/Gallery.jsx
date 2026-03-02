import React, { useState } from "react";
import {
    FaImages,
    FaMedal,
    FaChalkboardTeacher,
    FaProjectDiagram,
    FaCalendarAlt,
} from "react-icons/fa";

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
       Gallery Data (ONE structure)
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
    const [activeIndex, setActiveIndex] = useState({}); // ONE state for all sliders

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
    const nextImage = (itemIndex, length) => {
        setActiveIndex(prev => ({
            ...prev,
            [itemIndex]: ((prev[itemIndex] || 0) + 1) % length,
        }));
    };

    const prevImage = (itemIndex, length) => {
        setActiveIndex(prev => ({
            ...prev,
            [itemIndex]:
                ((prev[itemIndex] || 0) - 1 + length) % length,
        }));
    };

    return (
        <section id="gallery" className="bg-industrial-50 py-20">
            <div className="section-container">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-semibold text-sm mb-4">
                        GALLERY
                    </div>
                    <h2 className="section-heading">
                        Our Events, Training & Achievements
                    </h2>
                    <p className="section-subheading mx-auto mt-4 max-w-2xl">
                        Explore highlights of our projects, award ceremonies, safety trainings, and community events.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedCategory(cat.name)}
                            className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold border transition-all
                            ${selectedCategory === cat.name
                                ? "bg-primary-600 text-white border-primary-600"
                                : "bg-white text-industrial-700 border-industrial-300 hover:bg-industrial-100"
                            }`}
                        >
                            <cat.icon />
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {filteredItems.map((item, index) => {
                        const current = activeIndex[index] || 0;

                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden"
                            >
                                {/* Image Slider */}
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={item.images[current]}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-all duration-500"
                                    />

                                    {/* Arrows */}
                                    {item.images.length > 1 && (
                                        <>
                                            <button
                                                onClick={() => prevImage(index, item.images.length)}
                                                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded"
                                            >
                                                ‹
                                            </button>
                                            <button
                                                onClick={() => nextImage(index, item.images.length)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded"
                                            >
                                                ›
                                            </button>
                                        </>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-industrial-900">
                                        {item.title}
                                    </h3>
                                    <p className="text-industrial-600 mt-1">
                                        {item.category}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="mt-20 text-center">
                    <p className="text-lg text-industrial-600 mb-6">
                        Want to feature your event with us? Let’s collaborate.
                    </p>
                    <a href="/contact" className="btn-primary">
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
