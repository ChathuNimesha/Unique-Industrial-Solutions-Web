import About from '../components/About';
import iso9001Badge from '../assets/logo/logo7.jpeg';
import {
    FaAward,
    FaUsers,
    FaShieldAlt,
    FaLeaf,
    FaBullseye,
    FaEye,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

/* ================= Animations ================= */

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
    },
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUpSmall = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const slideFadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
};

const slideFadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
};

const hoverZoom = {
    hover: { scale: 1.03 },
};

/* ================= Component ================= */

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
            description: 'We ensure premium products with the highest standards.',
            icon: FaAward,
        },
        {
            title: 'Customer Focused',
            description: 'Your safety and satisfaction are our priority.',
            icon: FaUsers,
        },
        {
            title: 'Safety Standards',
            description: 'We follow strict international safety regulations.',
            icon: FaShieldAlt,
        },
        {
            title: 'Sustainability',
            description: 'Eco-friendly and responsible solutions.',
            icon: FaLeaf,
        },
    ];

    return (
        <div className="pt-20">

            {/* ================= Hero ================= */}
            <section className="bg-gradient-to-r from-industrial-900 to-industrial-800 text-white py-20">
                <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-7xl mx-auto text-center px-4">
                    <h1 className="text-5xl font-bold mb-6">
                        About Unique Industrial Solutions
                    </h1>
                    <p className="text-xl text-industrial-200 max-w-3xl mx-auto">
                        Sri Lanka's trusted partner for industrial safety and water solutions
                    </p>
                </motion.div>
            </section>

            {/* ================= Stats ================= */}
            <section className="bg-white py-16 -mt-10">
                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <motion.div key={i} variants={{ ...fadeUpSmall, ...hoverZoom }} whileHover="hover"
                            className="bg-gradient-to-br from-white to-primary-50 rounded-xl p-6 text-center shadow-lg hover:shadow-2xl border border-primary-100">
                            <stat.icon className="text-4xl text-primary-600 mx-auto mb-3" />
                            <div className="text-3xl font-bold">{stat.value}</div>
                            <div className="text-sm text-industrial-600">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ================= About ================= */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                <About />
            </motion.div>

            {/* ================= Mission & Vision ================= */}
            <section className="bg-industrial-800 py-24 text-white">
                <div className="max-w-7xl mx-auto px-4">

                    {/* Section Label */}
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-2 bg-primary-600/20 text-primary-400 rounded-full font-semibold text-sm mb-4 border border-primary-500/30">
                            WHO WE ARE
                        </span>
                        <h2 className="text-4xl font-display font-bold text-white">
                            Our Mission &amp; Vision
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">

                        {/* Mission */}
                        <motion.div
                            variants={{ ...slideFadeLeft, ...hoverZoom }}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true }}
                            className="relative bg-white/10 border border-primary-500/30 p-10 rounded-2xl shadow-xl hover:shadow-primary-500/20 transition-all duration-300"
                        >
                            {/* Top accent bar */}
                            <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-primary-300 rounded-t-2xl" />
                            <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary-900/40">
                                <FaBullseye className="text-white text-2xl" />
                            </div>
                            <h3 className="text-3xl font-display font-bold text-primary-400 mb-4">Our Mission</h3>
                            <p className="text-industrial-200 text-lg leading-relaxed">
                                To be the leading provider of industrial safety and engineering
                                solutions in South Asia, delivering reliable protection for every worker.
                            </p>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            variants={{ ...slideFadeRight, ...hoverZoom }}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true }}
                            className="relative bg-white/10 border border-primary-500/30 p-10 rounded-2xl shadow-xl hover:shadow-primary-500/20 transition-all duration-300"
                        >
                            {/* Top accent bar */}
                            <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-primary-300 rounded-t-2xl" />
                            <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary-900/40">
                                <FaEye className="text-white text-2xl" />
                            </div>
                            <h3 className="text-3xl font-display font-bold text-primary-400 mb-4">Our Vision</h3>
                            <p className="text-industrial-200 text-lg leading-relaxed">
                                To deliver high-quality, reliable safety solutions through 24/7 customer
                                service that protect lives and promote a culture of safety and compliance,
                                driven by innovation and international standards.
                            </p>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ================= ISO Certification ================= */}
            <section className="bg-industrial-50 py-20">
                <div className="max-w-7xl mx-auto px-4">

                    {/* Header */}
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-semibold text-sm mb-4">
                            CERTIFIED EXCELLENCE
                        </span>
                        <h2 className="text-4xl font-display font-bold text-industrial-900 mb-3">
                            ISO Certified Quality
                        </h2>
                        <p className="text-industrial-600 max-w-xl mx-auto">
                            We are proud to be ISO 9001 certified, demonstrating our unwavering
                            commitment to quality management and customer satisfaction.
                        </p>
                    </div>

                    {/* Single ISO Badge Card */}
                    <motion.div
                        variants={{ ...fadeUpSmall, ...hoverZoom }}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true }}
                        className="relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl border border-primary-100 transition-all duration-300 max-w-xl mx-auto text-center"
                    >
                        <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-primary-300 rounded-t-3xl" />

                        <img
                            src={iso9001Badge}
                            alt="ISO 9001 SGS UKAS Certified"
                            className="w-72 mx-auto mb-6 object-contain"
                        />

                        <h3 className="text-2xl font-display font-bold text-industrial-900 mb-2">
                            ISO 9001 Certified
                        </h3>
                        <p className="text-industrial-600 leading-relaxed">
                            Our quality management system is certified by SGS under UKAS accreditation,
                            ensuring every product and service meets the highest international standards.
                        </p>

                        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-primary-300 rounded-b-3xl" />
                    </motion.div>

                </div>
            </section>

            {/* ================= Values ================= */}
            <section className="bg-industrial-50 py-20">
                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible"
                    className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">

                    {values.map((value, i) => (
                        <motion.div key={i} variants={{ ...fadeUpSmall, ...hoverZoom }} whileHover="hover"
                            className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="w-14 h-14 bg-primary-600 flex items-center justify-center rounded-xl mb-4">
                                <value.icon className="text-white text-2xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
                            <p className="text-industrial-600">{value.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ================= CTA ================= */}
            <section className="bg-gradient-to-r from-primary-600 to-primary-500 py-16 text-center">
                <h2 className="text-4xl font-bold text-white mb-4">Ready to Work With Us?</h2>
                <p className="text-white/90 mb-6">Let’s protect your workforce together.</p>
                <a href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-xl font-bold shadow hover:scale-105 transition">
                    Get In Touch
                </a>
            </section>

        </div>
    );
};

export default AboutPage;