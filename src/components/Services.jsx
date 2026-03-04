import {
    FaHardHat,
    FaLeaf,
    FaTools,
    FaCogs,
    FaFireExtinguisher,
    FaIndustry,
    FaFlask,
    FaWater,
    FaSearch,
    FaChalkboardTeacher,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

// ================= IMAGE IMPORTS =================
import protectiveGear from "../assets/Protective-Gear.png";
import industrialEnvironmental from "../assets/Industrial Environmental.jpg";
import wastewaterTreatment from "../assets/WastewaterTreatment.jpg";
import industrialEngineering from "../assets/Industrial Engineering Projects.jpg";
import roofLifelines from "../assets/Roof Lifelines.jpg";
import gasAnalyzers from "../assets/Gas Analyzers.jpg";
import industrialChemicals from "../assets/Industrial Chemicals.jpg";
import walkthroughSurveys from "../assets/Walkthrough Surveys.jpg";
import safetyTrainings from "../assets/Industrial Safety Trainings.jpg";
import fireProtection from "../assets/Fire Protection & Detection.jpg";
import supplyMachines from "../assets/Supply Machines & Machinery Parts.jpg";

const Services = () => {

    const services = [
        {
            icon: FaHardHat,
            title: "Personal Protective Equipment",
            description:
                "High-quality PPE including helmets, gloves, masks, safety shoes, coveralls, and more—ensuring maximum protection for industrial workers.",
            image: protectiveGear,
        },
        {
            icon: FaLeaf,
            title: "Industrial Environmental Solutions",
            description:
                "End-to-end environmental protection services including pollution control, waste management, and regulatory compliance.",
            image: industrialEnvironmental,
        },
        {
            icon: FaWater,
            title: "Water & Wastewater Treatment Plant",
            description:
                "Design, installation, and maintenance of water and wastewater treatment systems for industrial and commercial operations.",
            image: wastewaterTreatment,
        },
        {
            icon: FaCogs,
            title: "Industrial Engineering Projects",
            description:
                "Turnkey industrial engineering solutions covering system design, installation, testing, and commissioning.",
            image: industrialEngineering,
        },
        {
            icon: FaTools,
            title: "Roof Lifelines",
            description:
                "Certified roof lifeline systems for fall protection, ensuring worker safety during high-risk operations.",
            image: roofLifelines,
        },
        {
            icon: FaSearch,
            title: "Gas Analyzers",
            description:
                "Reliable gas detection and analysis equipment for monitoring industrial gases and ensuring a safe working environment.",
            image: gasAnalyzers,
        },
        {
            icon: FaFlask,
            title: "Industrial Chemicals",
            description:
                "Specialized chemicals for water treatment, cleaning, and industrial processes supplied with quality assurance.",
            image: industrialChemicals,
        },
        {
            icon: FaIndustry,
            title: "Walkthrough Surveys",
            description:
                "Comprehensive onsite surveys to identify hazards, evaluate risk, and recommend corrective safety actions.",
            image: walkthroughSurveys,
        },
        {
            icon: FaChalkboardTeacher,
            title: "Industrial Safety Trainings",
            description:
                "Professional workplace safety training programs including fire safety, PPE usage, and emergency response.",
            image: safetyTrainings,
        },
        {
            icon: FaFireExtinguisher,
            title: "Fire Protection & Detection",
            description:
                "Fire detection systems, extinguishers, alarms, and preventive solutions to safeguard industrial facilities.",
            image: fireProtection,
        },
        {
            icon: FaTools,
            title: "Supply Machines & Machinery Parts",
            description:
                "Industrial machines, tools, and genuine spare parts sourced from trusted global manufacturers.",
            image: supplyMachines,
        },
    ];

    return (
        <section id="services" className="bg-industrial-50 py-20">
            <div className="section-container">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-semibold text-sm mb-4">
                        OUR SERVICES
                    </span>

                    <h2 className="section-heading">
                        Industrial Solutions We Provide
                    </h2>

                    <p className="section-subheading mx-auto mt-4 max-w-2xl">
                        Your trusted partner for industrial safety, engineering,
                        environmental, and technical service solutions across Sri Lanka.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            {/* Image */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <service.icon className="text-3xl text-primary-600 mb-4" />

                                <h3 className="text-xl font-bold text-industrial-900 mb-3 group-hover:text-primary-600 transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-industrial-600 mb-5 leading-relaxed">
                                    {service.description}
                                </p>

                                <Link
                                    to="/contact"
                                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                                >
                                    Learn More
                                    <svg
                                        className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-20 text-center">
                    <p className="text-lg text-industrial-600 mb-6">
                        Need something custom? We offer tailored industrial solutions.
                    </p>

                    <Link
                        to="/contact"
                        className="btn-primary inline-flex items-center"
                    >
                        Request a Consultation
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Services;