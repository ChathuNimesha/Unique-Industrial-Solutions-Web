import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaPhoneAlt, FaMoon, FaSun, FaArrowRight } from 'react-icons/fa';
import logo from '../assets/Logo - Light.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );
    const location = useLocation();

    // Sticky scroll effect triggers earlier for smoother island transition
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Apply theme to HTML tag
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "Services", href: "/services" },
        { name: "Highlights", href: "/gallery" },
        { name: "About", href: "/about" }
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-700 ease-in-out px-4 sm:px-6 lg:px-8 ${
                scrolled ? "top-4" : "top-0"
            }`}
        >
            <div 
                className={`mx-auto transition-all duration-700 ease-in-out ${
                    scrolled 
                        ? "max-w-6xl bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl shadow-2xl shadow-industrial-900/10 border border-white/20 dark:border-gray-800 rounded-full py-2.5 px-3 sm:px-6" 
                        : "max-w-7xl bg-transparent py-5 px-0"
                }`}
            >
                <div className="flex justify-between items-center">
                    
                    {/* Logo */}
                    <Link to="/" className="flex items-center group relative z-50">
                        <img
                            src={logo}
                            alt="Unique Industrial Solutions"
                            className={`transition-all duration-500 ease-out transform group-hover:scale-[1.03] object-contain ${
                                scrolled ? 'h-10 lg:h-12' : 'h-12 lg:h-16'
                            }`}
                        />
                    </Link>

                    {/* Desktop Navigation Links (Centered) */}
                    <div className="hidden lg:flex items-center justify-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`
                                        relative px-5 py-2 rounded-full font-medium text-sm tracking-wide transition-all duration-300 group overflow-hidden
                                        ${isActive 
                                            ? "text-primary-600 dark:text-primary-400 font-bold" 
                                            : "text-industrial-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                                        }
                                    `}
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    {/* Active pill background */}
                                    {isActive && (
                                        <span className="absolute inset-0 bg-primary-50 dark:bg-primary-900/20 rounded-full -z-0"></span>
                                    )}
                                    {/* Hover slide effect */}
                                    {!isActive && (
                                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right Action Icons & CTA */}
                    <div className="hidden lg:flex items-center space-x-3">
                        
                        {/* Phone CTA Indicator */}
                        <a
                            href="tel:+94347223666"
                            className="hidden xl:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-industrial-600 dark:text-gray-300 hover:text-primary-600 hover:bg-industrial-50 dark:hover:bg-gray-800 transition-all duration-300 group"
                        >
                            <div className="w-8 h-8 rounded-full bg-industrial-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-primary-100 group-hover:text-primary-600 transition-colors">
                                <FaPhoneAlt className="text-xs" />
                            </div>
                            <span>+94 34 7223 666</span>
                        </a>

                        <div className="h-6 w-px bg-industrial-200 dark:bg-gray-700 mx-2 hidden xl:block"></div>

                        {/* Dark Mode Toggle */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="w-10 h-10 rounded-full flex items-center justify-center text-industrial-500 dark:text-gray-400 hover:bg-industrial-100 dark:hover:bg-gray-800 hover:text-primary-600 transition-all duration-300"
                            aria-label="Toggle Dark Mode"
                        >
                            {darkMode ? <FaSun className="text-lg text-yellow-500" /> : <FaMoon className="text-lg" />}
                        </button>

                        {/* Primary CTA */}
                        <Link
                            to="/contact"
                            className="ml-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold text-sm shadow-[0_4px_14px_0_rgba(15,86,179,0.39)] hover:shadow-[0_6px_20px_rgba(15,86,179,0.23)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group"
                        >
                            Get Quote
                            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Mobile Menu Trigger */}
                    <div className="flex items-center gap-3 lg:hidden relative z-50">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-industrial-700 dark:text-gray-300 shadow-sm border border-white/20 dark:border-gray-700"
                        >
                            {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-10 h-10 rounded-full flex items-center justify-center bg-primary-600 text-white shadow-lg shadow-primary-600/30 hover:bg-primary-700 transition-colors"
                        >
                            {isOpen ? <HiX className="h-5 w-5" /> : <HiMenuAlt3 className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Full-Screen Overlay Menu */}
            <div 
                className={`fixed inset-0 bg-white/95 dark:bg-gray-950/95 backdrop-blur-2xl z-40 lg:hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
                }`}
            >
                <div className="flex flex-col h-full pt-32 px-6 pb-12">
                    <div className="flex-1 flex flex-col gap-6">
                        {navLinks.map((link, i) => {
                            const isActive = location.pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`
                                        text-3xl font-display font-bold tracking-tight transform transition-all duration-500
                                        ${isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
                                        ${isActive ? "text-primary-600" : "text-industrial-900 dark:text-white hover:text-primary-500"}
                                    `}
                                    style={{ transitionDelay: `${i * 50}ms` }}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                        <Link
                            to="/contact"
                            className={`
                                text-3xl font-display font-bold tracking-tight text-industrial-900 dark:text-white transform transition-all duration-500
                                ${isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
                            `}
                            style={{ transitionDelay: `${navLinks.length * 50}ms` }}
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Bottom Actions */}
                    <div className={`mt-auto space-y-6 transform transition-all duration-700 delay-300 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-industrial-200 dark:via-gray-700 to-transparent"></div>
                        
                        <a href="tel:+94347223666" className="flex items-center justify-center gap-3 text-lg font-bold text-industrial-700 dark:text-gray-300">
                            <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 flex items-center justify-center">
                                <FaPhoneAlt />
                            </div>
                            +94 34 7223 666
                        </a>

                        <Link
                            to="/contact"
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold text-center text-lg flex items-center justify-center gap-2 shadow-lg shadow-primary-600/25"
                        >
                            Request a Quote
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
