import { FaArrowRight, FaShieldAlt, FaWater, FaLeaf } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CountUp from './CountUp';
import { motion } from 'framer-motion';
import img1  from "../assets/bg.jpg";
const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            {/* ================= BACKGROUND ================= */}
            <div className="absolute inset-0 z-0">
                <img
                    src={img1}
                    alt="Industrial facility"
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
                            to="/products"
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
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/20 pt-12 mb-24">
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
                            <div className="text-3xl md:text-4xl font-bold text-primary-400">24/7</div>
                            <div className="text-industrial-300 text-sm">Support Available</div>
                        </div>
                    </div>

                    {/* ================= 3D IMAGE CAROUSEL ================= */}
                    <div className="relative perspective-[1200px] overflow-hidden">
                        <div className="flex justify-center items-center h-[240px] sm:h-[280px] md:h-[320px]">

                            <motion.div
                                className="flex gap-10"
                                animate={{ x: ['0%', '-50%'] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 32,
                                    ease: 'linear',
                                }}
                            >
                                {[
                                    '/src/assets/bg2.jpg',
                                    '/src/assets/bg3 (1).jpg',
                                    '/src/assets/bg3 (2).jpg',
                                    '/src/assets/Gallery/img1.jpg',
                                    '/src/assets/Gallery/img2.jpg',
                                    '/src/assets/Gallery/img3.jpg',
                                    '/src/assets/bg2.jpg',
                                    '/src/assets/bg3 (1).jpg',
                                ].map((img, index) => (
                                    <motion.div
                                        key={index}
                                        className="relative min-w-[220px] sm:min-w-[260px] md:min-w-[300px] h-[160px] sm:h-[200px] md:h-[240px] rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-lg"
                                        initial={{
                                            rotateY: index % 2 === 0 ? -12 : 12,
                                            scale: 0.95,
                                        }}
                                        whileHover={{
                                            rotateY: 0,
                                            scale: 1.1,
                                            z: 40,
                                        }}
                                        style={{ transformStyle: 'preserve-3d' }}
                                    >
                                        <img
                                            src={img}
                                            alt="Gallery"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/10"></div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Shadow Reflection */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[75%] h-10 bg-black/40 blur-2xl rounded-full"></div>
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
    );
};

export default Hero;
