import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FaCheckCircle,
    FaShieldAlt,
    FaIndustry,
    FaTools
} from "react-icons/fa";

import servicesData from "../data/services";

const ServiceDetails = () => {
    const { id } = useParams();
    const service = servicesData.find((item) => item.id === id);

    if (!service) {
        return (
            <div className="py-40 text-center text-2xl font-semibold">
                Service Not Found
            </div>
        );
    }

    return (
        <div className="bg-white">

            {/* ================= HERO SECTION ================= */}
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

            {/* ================= CONTENT SECTION ================= */}
            <section className="py-20">
                <div className="section-container max-w-5xl mx-auto px-4">

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-lg text-industrial-600 leading-relaxed mb-12 text-center"
                    >
                        {service.description}
                    </motion.p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        {service.features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-4 bg-industrial-50 p-6 rounded-xl shadow-sm"
                            >
                                <FaCheckCircle className="text-primary-600 text-xl mt-1" />
                                <p className="text-industrial-700 font-medium">
                                    {feature}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* WHY CHOOSE US */}
                    <div className="bg-industrial-900 text-white rounded-2xl p-12 mb-20">
                        <h2 className="text-3xl font-bold mb-8 text-center">
                            Why Choose Us
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <FaShieldAlt className="text-4xl mx-auto mb-4 text-primary-400" />
                                <h4 className="font-semibold mb-2">Certified Quality</h4>
                                <p className="text-industrial-300 text-sm">
                                    Products meeting international safety standards.
                                </p>
                            </div>

                            <div>
                                <FaIndustry className="text-4xl mx-auto mb-4 text-primary-400" />
                                <h4 className="font-semibold mb-2">Industry Expertise</h4>
                                <p className="text-industrial-300 text-sm">
                                    Years of experience serving Sri Lankan industries.
                                </p>
                            </div>

                            <div>
                                <FaTools className="text-4xl mx-auto mb-4 text-primary-400" />
                                <h4 className="font-semibold mb-2">Full Support</h4>
                                <p className="text-industrial-300 text-sm">
                                    Installation, training & after-sales service.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-6">
                            Need More Information?
                        </h3>

                        <Link
                            to="/contact"
                            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            Request a Consultation
                        </Link>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default ServiceDetails;