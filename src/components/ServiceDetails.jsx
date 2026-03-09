import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FaCheckCircle,
    FaShieldAlt,
    FaIndustry,
    FaTools,
    FaWhatsapp
} from "react-icons/fa";

import servicesData from "../data/services";

const ServiceDetails = () => {

    const { id } = useParams();
    const service = servicesData.find((item) => item.id === id);

    const whatsappNumber = "94717231998";

    if (!service) {
        return (
            <div className="py-40 text-center text-2xl font-semibold">
                Service Not Found
            </div>
        );
    }

    const handleWhatsApp = () => {
        const message = `Hi, I'm interested in your ${service.title} service. Can you provide more information?`;
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="bg-white">

            {/* HERO SECTION */}
            <div className="relative h-[60vh] flex items-center justify-center">
                <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/60"></div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative text-4xl md:text-6xl font-bold text-white text-center px-4"
                >
                    {service.title}
                </motion.h1>
            </div>

            {/* SERVICE CARD */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4">

                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

                        <div className="grid md:grid-cols-2">

                            {/* IMAGE SIDE */}
                            <div className="relative">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* CONTENT SIDE */}
                            <div className="p-8 flex flex-col justify-between">

                                <div>

                                    {/* Description */}
                                    <div className="mb-8">
                                        <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                                            <div className="w-1 h-6 bg-primary-600 rounded-full"></div>
                                            Service Overview
                                        </h3>

                                        <p className="text-industrial-600 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Features */}
                                    <div>
                                        <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                                            <div className="w-1 h-6 bg-primary-600 rounded-full"></div>
                                            Key Features
                                        </h3>

                                        <ul className="space-y-3">
                                            {service.features.map((feature, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <FaCheckCircle className="text-primary-600 mt-1" />
                                                    <span className="text-industrial-700">
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                </div>

                                {/* WHATSAPP CTA */}
                                <div className="mt-10">

                                    <button
                                        onClick={handleWhatsApp}
                                        className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-all duration-300 shadow-lg"
                                    >
                                        <FaWhatsapp className="text-2xl" />
                                        Contact Us on WhatsApp
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* WHY CHOOSE US */}
                    <div className="bg-industrial-900 text-white rounded-2xl p-12 mt-20">

                        <h2 className="text-3xl font-bold mb-10 text-center">
                            Why Choose Our Service
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8 text-center">

                            <div>
                                <FaShieldAlt className="text-4xl mx-auto mb-4 text-primary-400" />
                                <h4 className="font-semibold mb-2">Certified Quality</h4>
                                <p className="text-industrial-300 text-sm">
                                    Services that follow international safety standards.
                                </p>
                            </div>

                            <div>
                                <FaIndustry className="text-4xl mx-auto mb-4 text-primary-400" />
                                <h4 className="font-semibold mb-2">Industry Experience</h4>
                                <p className="text-industrial-300 text-sm">
                                    Trusted by many industries across Sri Lanka.
                                </p>
                            </div>

                            <div>
                                <FaTools className="text-4xl mx-auto mb-4 text-primary-400" />
                                <h4 className="font-semibold mb-2">Full Technical Support</h4>
                                <p className="text-industrial-300 text-sm">
                                    Consultation, installation, and after-sales support.
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* BACK BUTTON */}
                    <div className="text-center mt-16">
                        <Link
                            to="/services"
                            className="inline-block px-8 py-4 bg-primary-600 text-white rounded-xl shadow hover:scale-105 transition"
                        >
                            Back to Services
                        </Link>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default ServiceDetails;