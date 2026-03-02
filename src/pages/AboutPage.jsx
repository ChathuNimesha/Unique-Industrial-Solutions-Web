import About from '../components/About';
import {
    FaAward,
    FaUsers,
    FaShieldAlt,
    FaLeaf,
    FaBullseye,
    FaEye,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

/* =========================
   Animation Variants
========================= */

// Generic fade-up
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
};

// Stagger container
const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 },
    },
};

// Small cards
const fadeUpSmall = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
};

// Mission & Vision
const slideFadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
    },
};

const slideFadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
    },
};

// Professional hover zoom
const hoverZoom = {
    hover: {
        scale: 1.03,
        transition: {
            duration: 0.25,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

const AboutPage = () => {
    const stats = [
        { icon: FaAward, value: '9+', label: 'Years Experience' },
        { icon: FaUsers, value: '500+', label: 'Satisfied Clients' },
        { icon: FaShieldAlt, value: '1000+', label: 'Products Supplied' },
        { icon: FaLeaf, value: '100%', label: 'Quality Assured' },
    ];

    const values = [
        {
            title: 'Quality First',
            description:
                'We source only premium products from trusted global manufacturers ensuring the highest quality standards.',
            icon: FaAward,
        },
        {
            title: 'Customer Focused',
            description:
                'Your safety and satisfaction are our top priorities. We provide personalized solutions for every client.',
            icon: FaUsers,
        },
        {
            title: 'Safety Standards',
            description:
                'All our products meet or exceed international safety and environmental protection standards.',
            icon: FaShieldAlt,
        },
        {
            title: 'Sustainability',
            description:
                'Committed to environmental protection through eco-friendly products and sustainable practices.',
            icon: FaLeaf,
        },
    ];

    return (
        <div className="pt-20">

            {/* ================= Hero ================= */}
            <section className="bg-gradient-to-r from-industrial-900 to-industrial-800 text-white py-20">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="max-w-7xl mx-auto px-4 text-center"
                >
                    <h1 className="text-5xl font-display font-bold mb-6">
                        About Unique Industrial Solutions
                    </h1>
                    <p className="text-xl text-industrial-200 max-w-3xl mx-auto">
                        Sri Lanka's trusted partner for industrial safety equipment and water treatment solutions
                    </p>
                </motion.div>
            </section>

            {/* ================= Stats ================= */}
            <section className="bg-white py-16 -mt-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={{ ...fadeUpSmall, ...hoverZoom }}
                            whileHover="hover"
                            className="bg-gradient-to-br from-white to-primary-50 rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-shadow cursor-pointer border border-primary-100"
                        >
                            <stat.icon className="text-4xl text-primary-600 mx-auto mb-3" />
                            <div className="text-3xl font-bold text-industrial-900">
                                {stat.value}
                            </div>
                            <div className="text-sm text-industrial-600 font-semibold">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ================= About ================= */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <About />
            </motion.div>

            {/* ================= Mission & Vision ================= */}
            <section className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

                        {/* Mission */}
                        <motion.div
                            variants={{ ...slideFadeLeft, ...hoverZoom }}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true }}
                            className="relative bg-industrial-50 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                        >
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-industrial-500 text-white text-2xl mb-6 shadow-md">
                                <FaBullseye />
                            </div>

                            <h3 className="text-3xl font-bold mb-4 text-industrial-800">
                                Our Mission
                            </h3>

                            <p className="text-industrial-600 text-lg leading-relaxed">
                                To be the leading provider of industrial safety and engineering
                                solutions in South Asia.
                            </p>

                            <span className="absolute bottom-0 left-0 w-full h-1 bg-industrial-500 rounded-b-2xl"></span>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            variants={{ ...slideFadeRight, ...hoverZoom }}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true }}
                            className="relative bg-industrial-50 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                        >
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-industrial-600 text-white text-2xl mb-6 shadow-md">
                                <FaEye />
                            </div>

                            <h3 className="text-3xl font-bold mb-4 text-industrial-800">
                                Our Vision
                            </h3>

                            <p className="text-industrial-600 text-lg leading-relaxed">
                                To deliver high-quality, reliable safety solutions through
                                24/7 customer service that protect lives and promote a culture
                                of safety and compliance, driven by innovation and international standards.
                            </p>

                            <span className="absolute bottom-0 left-0 w-full h-1 bg-industrial-600 rounded-b-2xl"></span>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ================= Values ================= */}
            <section className="bg-industrial-50 py-20">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            variants={{ ...fadeUpSmall, ...hoverZoom }}
                            whileHover="hover"
                            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
                        >
                            <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-4">
                                <value.icon className="text-white text-2xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                            <p className="text-industrial-600">{value.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ================= CTA ================= */}
            <motion.section
                variants={{ ...fadeUp, ...hoverZoom }}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="bg-gradient-to-r from-primary-600 via-accent-gold to-primary-600 py-16 cursor-pointer"
            >
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Ready to Work With Us?
                    </h2>
                    <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                        Let's discuss how we can help protect your workforce.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-4 bg-white text-primary-600 font-bold rounded-xl shadow-xl hover:scale-105 transition-transform"
                    >
                        Get In Touch
                    </a>
                </div>
            </motion.section>
        </div>
    );
};

export default AboutPage;
