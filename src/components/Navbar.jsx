import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaPhone, FaMoon, FaSun } from 'react-icons/fa';
import logo from '../assets/Logo - Light.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );
    const location = useLocation();

    // Sticky scroll effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
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

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
        { name: "Highlights", href: "/gallery" }
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 
            ${scrolled
                    ? "bg-gray-950/95 backdrop-blur-lg shadow-2xl shadow-black/40 py-3 border-b border-white/10"
                    : "backdrop-blur-xl bg-white/10 dark:bg-black/30 py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <img
                            src={logo}
                            alt="Unique Industrial Solutions"
                            className="h-12 lg:h-14 transition-transform group-hover:scale-105"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`
                                    font-medium tracking-wide
                                    relative group transition-colors duration-300
                                    ${scrolled
                                        ? location.pathname === link.href
                                            ? "text-primary-400"
                                            : "text-gray-200 hover:text-white"
                                        : location.pathname === link.href
                                            ? "text-primary-500"
                                            : "text-gray-700 dark:text-gray-300 hover:text-primary-500"
                                    }
                                `}
                            >
                                {link.name}
                                <span
                                    className={`absolute bottom-0 left-0 h-0.5 transition-all 
                                    duration-300 group-hover:w-full
                                    ${scrolled ? "bg-primary-400" : "bg-primary-500"}
                                    ${location.pathname === link.href ? "w-full" : "w-0"}`}
                                ></span>
                            </Link>
                        ))}
                    </div>

                    {/* Right Icons */}
                    <div className="hidden lg:flex items-center space-x-6">

                        {/* Phone */}
                        <a
                            href="tel:+94347223666"
                            className={`flex items-center transition-colors duration-300
                                ${scrolled
                                    ? "text-gray-200 hover:text-primary-400"
                                    : "text-gray-700 dark:text-gray-300 hover:text-primary-500"
                                }`}
                        >
                            <FaPhone className="mr-2" />
                            +94 34 7223 666
                        </a>

                        {/* Dark Mode Toggle */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 
                            hover:scale-110 transition"
                        >
                            {darkMode ? (
                                <FaSun className="text-yellow-400" />
                            ) : (
                                <FaMoon className="text-gray-900" />
                            )}


                        </button>

                        {/* CTA */}
                        <Link
                            to="/contact"
                            className="px-5 py-2 rounded-full bg-primary-600 text-white 
                            hover:bg-primary-700 transition shadow-md"
                        >
                            Get Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`lg:hidden p-2 rounded-lg transition-colors duration-300
                            ${scrolled ? "text-gray-100" : "text-gray-700 dark:text-gray-300"}`}
                    >
                        {isOpen ? <HiX className="h-7 w-7" /> : <HiMenu className="h-7 w-7" />}
                    </button>
                </div>

                {/* Mobile Dropdown */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 
                    ${isOpen ? "max-h-96 mt-4" : "max-h-0"}
                `}
                >
                    <div className="bg-white/80 dark:bg-black/60 backdrop-blur-xl rounded-xl p-5 shadow-lg space-y-3">

                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`
                                    block px-4 py-2 rounded-lg 
                                    text-gray-700 dark:text-gray-300
                                    hover:bg-primary-50 dark:hover:bg-gray-700 
                                    transition 
                                    ${location.pathname === link.href &&
                                    "bg-primary-100 dark:bg-gray-700 text-primary-600"}
                                `}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <hr className="border-gray-300 dark:border-gray-600" />

                        {/* Phone */}
                        <a
                            href="tel:+94347223666"
                            className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300"
                        >
                            <FaPhone className="mr-2" />
                            +94 34 7223 666
                        </a>

                        {/* Dark Mode Toggle */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="px-4 py-2 flex items-center gap-3 bg-gray-200 dark:bg-gray-700 
                            rounded-lg hover:scale-105 transition mx-4"
                        >
                            {darkMode ? (
                                <>
                                    <FaSun className="text-yellow-400" /> Light Mode
                                </>
                            ) : (
                                <>
                                    <FaMoon className="text-gray-900" /> Dark Mode
                                </>
                            )}
                        </button>

                        {/* CTA */}
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="block text-center px-5 py-2 rounded-full bg-primary-600 text-white"
                        >
                            Get Quote
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
