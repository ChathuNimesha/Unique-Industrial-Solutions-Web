import { FaArrowRight, FaShieldAlt, FaWater, FaLeaf } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CountUp from './CountUp';
import { motion } from 'framer-motion';

// ================= IMAGE IMPORTS =================
import logo1 from "../assets/logo/logo1.png"
import logo2 from "../assets/logo/logo2.png"
import logo3 from "../assets/logo/logo3.png"
import logo4 from "../assets/logo/logo4.jpeg"
import logo5 from "../assets/logo/logo5.png"
import logo6 from "../assets/logo/logo6.webp"
import logo7 from "../assets/logo/logo7.jpeg"

import bgVideo from "../assets/Videos/bg.mp4"

const Hero = () => {

    const carouselImages = [
        logo1,
        logo2,
        logo3,
        logo4,
        logo5,
        logo6,
        logo7,
    ];

    return (
        <>
            <section
                id="home"
                className="relative min-h-screen flex items-center overflow-hidden"
            >

                {/* ================= BACKGROUND VIDEO ================= */}
                <div className="absolute inset-0 z-0 overflow-hidden">

                    <video
                        src={bgVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80"></div>

                </div>

                {/* ================= GLOW BLOBS ================= */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-24 left-10 w-72 h-72 bg-primary-500/30 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-24 right-10 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                {/* ================= CONTENT ================= */}
                <div className="relative z-10 w-full section-container">
                    <div className="max-w-6xl mx-auto px-4">

                        {/* -------- Heading -------- */}
                        <h1 className="pt-24 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white leading-tight mb-6">
                            Innovating Safety for a{' '}
                            <span className="text-primary-400 drop-shadow-[0_0_30px_rgba(255,193,7,0.6)]">
                                Better Tomorrow
                            </span>
                        </h1>

                        {/* -------- Subtitle -------- */}
                        <p className="text-lg sm:text-xl md:text-2xl text-industrial-100 max-w-3xl mb-10">
                            Leading supplier of Occupational Safety Products, Water Treatment Systems,
                            and Environmental Protection Solutions across Sri Lankan industries.
                        </p>

                        {/* -------- Feature Pills -------- */}
                        <div className="flex flex-wrap gap-4 mb-12">
                            <div className="flex items-center px-5 py-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg shadow-xl">
                                <FaShieldAlt className="text-white mr-2 text-xl" />
                                <span className="text-white font-bold text-sm">Safety First</span>
                            </div>

                            <div className="flex items-center px-5 py-3 bg-industrial-800 rounded-lg shadow-xl">
                                <FaWater className="text-primary-400 mr-2 text-xl" />
                                <span className="text-white font-bold text-sm">Water Treatment</span>
                            </div>

                            <div className="flex items-center px-5 py-3 bg-green-700 rounded-lg shadow-xl">
                                <FaLeaf className="text-white mr-2 text-xl" />
                                <span className="text-white font-bold text-sm">Eco Friendly</span>
                            </div>
                        </div>

                        {/* -------- CTA Buttons -------- */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-16">
                            <Link
                                to="/services"
                                className="group inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-bold text-lg rounded-xl shadow-2xl hover:scale-105 transition-all duration-300"
                            >
                                Explore Our Solutions
                                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-500 text-white font-bold text-lg rounded-xl hover:bg-primary-500 transition-all duration-300"
                            >
                                Contact Us Today
                            </Link>
                        </div>

                        {/* -------- Stats -------- */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/20 pt-12 mb-20">
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-primary-400">
                                    <CountUp end="9" suffix="+" />
                                </div>
                                <div className="text-industrial-300 text-sm">Years Experience</div>
                            </div>

                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-primary-400">
                                    <CountUp end="500" suffix="+" />
                                </div>
                                <div className="text-industrial-300 text-sm">Active Clients</div>
                            </div>

                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-primary-400">
                                    <CountUp end="1000" suffix="+" />
                                </div>
                                <div className="text-industrial-300 text-sm">Projects Delivered</div>
                            </div>

                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-primary-400">
                                    24/7
                                </div>
                                <div className="text-industrial-300 text-sm">
                                    Support Available
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ================= SCROLL INDICATOR ================= */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                        <div className="w-1 h-3 bg-white/50 rounded-full"></div>
                    </div>
                </div>

            </section>

            {/* ================= TRUSTED BRANDS STRIP ================= */}
            <div className="relative bg-white border-t border-b border-industrial-100 shadow-lg py-6 overflow-hidden">

                {/* Pill label */}
                <div className="flex justify-center mb-5">
                    <span className="inline-flex items-center gap-2 px-5 py-1.5 bg-primary-50 border border-primary-200 text-primary-700 rounded-full text-xs font-semibold tracking-widest uppercase shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse inline-block"></span>
                        Trusted by Industry Leaders
                    </span>
                </div>

                {/* Edge fades — white this time */}
                <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                {/* Scrolling logos */}
            <div className="flex items-center h-[100px] overflow-hidden">
                <motion.div
                    className="flex gap-12 md:gap-24 items-center"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{
                        repeat: Infinity,
                        duration: 35,
                        ease: 'linear',
                    }}
                >
                    {[...carouselImages, ...carouselImages].map((img, index) => {
                        const isLarge = img === logo3 || img === logo5;
                        return (
                            <div
                                key={index}
                                className={`flex items-center justify-center flex-shrink-0 h-[100px] ${
                                    isLarge ? 'w-[160px] md:w-[220px]' : 'w-[140px] md:w-[180px]'
                                }`}
                            >
                                <img
                                    src={img}
                                    alt="Partner Logo"
                                    className={`object-contain opacity-90 hover:opacity-100 drop-shadow-sm hover:drop-shadow-lg transition-all duration-500 cursor-pointer ${
                                        isLarge 
                                            ? 'max-w-full max-h-[80px] md:max-h-[95px] hover:scale-105' 
                                            : 'max-w-full max-h-[60px] md:max-h-[75px] hover:scale-110'
                                    }`}
                                />
                            </div>
                        );
                    })}
                </motion.div>
            </div>

            </div>
        </>

    );
};

export default Hero;