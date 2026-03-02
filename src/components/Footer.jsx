import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/Logo - Light.png';
import { Link } from "react-router-dom";


const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { name: 'About Us', href: './about' },
            { name: 'Our Services', href: './services' },
            { name: 'Industries', href: '/industries' },
            { name: 'Gallery', href: './gallery' },
        ],
        services: [
            { name: 'Safety Equipment', href: '#products' },
            { name: 'Water Treatment', href: '#products' },
            { name: 'Environmental Solutions', href: '#products' },
            { name: 'Consulting', href: '#contact' },
        ],
        support: [
            { name: 'Contact Us', href: '#contact' },
            { name: 'Get a Quote', href: '#contact' },
            { name: 'Technical Support', href: '#contact' },
            { name: 'FAQs', href: '#contact' },
        ],
    };

    const socialLinks = [
        { icon: FaFacebook, href: 'https://www.facebook.com/Unique Industrial Solutions', label: 'Facebook' },
        { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
        { icon: FaTwitter, href: '#', label: 'Twitter' },
        { icon: FaInstagram, href: '#', label: 'Instagram' },
    ];

    return (
        <footer className="bg-industrial-900 text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <img
                            src={logo}
                            alt="Unique Industrial Solutions"
                            className="h-16 w-auto object-contain mb-4"
                        />
                        <p className="text-industrial-300 mb-6 leading-relaxed">
                            Sri Lanka's leading supplier of Occupational Safety Products, Water Treatment Systems,
                            and Environmental Protection Solutions. Your trusted partner for sustainable industrial excellence.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <a href="tel:+94112345678" className="flex items-center text-industrial-300 hover:text-primary-400 transition-colors">
                                <FaPhone className="mr-3 text-primary-400" />
                                <span>+94 34 47 223 666</span>
                            </a>
                            <a href="mailto:info@uniqueindustrial.lk" className="flex items-center text-industrial-300 hover:text-primary-400 transition-colors">
                                <FaEnvelope className="mr-3 text-primary-400" />
                                <span>sales@uniquein.lk</span>
                            </a>
                            <div className="flex items-start text-industrial-300">
                                <FaMapMarkerAlt className="mr-3 text-primary-400 mt-1" />
                                <span>No. 15, Uyankele Road,<br />Panadura, Sri Lanka</span>
                            </div>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-lg font-display font-bold mb-4">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-industrial-300 hover:text-primary-400 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="text-lg font-display font-bold mb-4">Services</h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-industrial-300 hover:text-primary-400 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h3 className="text-lg font-display font-bold mb-4">Support</h3>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-industrial-300 hover:text-primary-400 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="border-t border-industrial-700 pt-8 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-xl font-display font-bold mb-2">
                                Stay Updated
                            </h3>
                            <p className="text-industrial-300">
                                Subscribe to our newsletter for the latest updates and industry insights.
                            </p>
                        </div>
                        <div>
                            <form className="flex gap-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 bg-industrial-800 border border-industrial-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none text-white placeholder-industrial-400"
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-300 whitespace-nowrap"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div className="border-t border-industrial-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-industrial-400 text-sm">
                            © {currentYear} Unique Industrial Solutions. All rights reserved.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 bg-industrial-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-all duration-300 group"
                                >
                                    <social.icon className="text-lg text-industrial-300 group-hover:text-white transition-colors" />
                                </a>
                            ))}
                        </div>

                        <div className="flex gap-6 text-sm text-industrial-400">
                            <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-industrial-950 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-industrial-400 text-sm">
                        Designed for excellence in industrial safety and environmental protection
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
