import { FaAward, FaHandshake, FaGlobeAsia, FaLightbulb } from 'react-icons/fa';
import UniqueinAbout from '../assets/bg2.jpg'
const About = () => {
    const values = [
        {
            icon: FaAward,
            title: 'Excellence',
            description: 'Committed to delivering the highest quality products and services.',
        },
        {
            icon: FaHandshake,
            title: 'Partnership',
            description: 'Building lasting relationships with clients and communities.',
        },
        {
            icon: FaGlobeAsia,
            title: 'Sustainability',
            description: 'Prioritizing environmental protection in everything we do.',
        },
        {
            icon: FaLightbulb,
            title: 'Innovation',
            description: 'Constantly evolving with cutting-edge industrial solutions.',
        },
    ];

    return (
        <section id="about" className="bg-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50 to-transparent opacity-50"></div>

            <div className="section-container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-semibold text-sm mb-4">
                            ABOUT US
                        </div>
                        <h2 className="section-heading">
                            Leading the Way in Industrial Solutions
                        </h2>
                        <p className="text-lg text-industrial-600 leading-relaxed mt-6 mb-6">
                            <span className="font-display font-bold text-2xl text-industrial-900">Unique Industrial Solutions</span> is a
                            market-leading supplier in Occupational Safety, Industrial Water Treatment Systems,
                            and Environmental Protection solutions across Sri Lanka.
                        </p>
                        <p className="text-industrial-600 leading-relaxed mb-6">
                            With extensive operational experience, we provide a comprehensive range of solutions
                            in the Occupational Safety and Environment Protection field within the industrial sector.
                            Our company serves as a trusted partner across multiple industries, delivering reliable,
                            complete, and innovative industrial solutions.
                        </p>
                        <p className="text-industrial-600 leading-relaxed mb-8">
                            We focus on providing long-term sustainable solutions for Sri Lankan industries,
                            fostering strong partnerships with local businesses and communities while prioritizing
                            environmental protection. Our goal is to be your trusted partner of choice for all
                            industrial safety and environmental needs.
                        </p>

                        {/* Key Stats */}
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="border-l-4 border-primary-600 pl-4">
                                <div className="text-3xl font-display font-bold text-industrial-900">9+</div>
                                <div className="text-industrial-600 text-sm">Years of Excellence</div>
                            </div>
                            <div className="border-l-4 border-primary-600 pl-4">
                                <div className="text-3xl font-display font-bold text-industrial-900">500+</div>
                                <div className="text-industrial-600 text-sm">Satisfied Clients</div>
                            </div>
                        </div>

                        <a href="../pages/" className="btn-primary inline-flex items-center">
                            Partner With Us
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>

                    {/* Right Content - Image & Values */}
                    <div className="relative">
                        {/* Main Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
                            <img
                                src={UniqueinAbout}
                                alt="Industrial facility"
                                className="w-full h-[400px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-industrial-900/60 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-white text-lg font-semibold">
                                    "Delivering reliable, complete, and innovative industrial solutions"
                                </p>
                            </div>
                        </div>

                        {/* Values Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className="bg-industrial-50 rounded-xl p-6 hover:bg-primary-50 transition-all duration-300 group"
                                >
                                    <value.icon className="text-3xl text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
                                    <h4 className="font-display font-bold text-industrial-900 mb-2">
                                        {value.title}
                                    </h4>
                                    <p className="text-sm text-industrial-600">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
