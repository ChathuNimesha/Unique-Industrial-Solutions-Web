import { FaLeaf, FaRecycle, FaSeedling, FaHandHoldingHeart } from 'react-icons/fa';

const Sustainability = () => {
    const commitments = [
        {
            icon: FaLeaf,
            title: 'Environmental Protection',
            description: 'All our solutions are designed with environmental impact in mind, helping industries reduce their ecological footprint.',
            stat: '30%',
            statLabel: 'Reduced Emissions',
        },
        {
            icon: FaRecycle,
            title: 'Sustainable Solutions',
            description: 'We prioritize long-term sustainable solutions that benefit both your business and the environment.',
            stat: '100%',
            statLabel: 'Eco-Friendly Products',
        },
        {
            icon: FaSeedling,
            title: 'Green Technology',
            description: 'Implementing cutting-edge green technologies to minimize waste and maximize resource efficiency.',
            stat: '50%',
            statLabel: 'Water Conservation',
        },
        {
            icon: FaHandHoldingHeart,
            title: 'Community Partnership',
            description: 'Strong partnerships with local businesses and communities to build a sustainable industrial ecosystem.',
            stat: '500+',
            statLabel: 'Local Partners',
        },
    ];

    return (
        <section id="sustainability" className="bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-safety-green rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
            </div>

            <div className="section-container relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold text-sm mb-4">
                        SUSTAINABILITY & ENVIRONMENT
                    </div>
                    <h2 className="section-heading">
                        Committed to a Greener Future
                    </h2>
                    <p className="section-subheading mx-auto mt-4">
                        At Unique Industrial Solutions, we believe that industrial progress and environmental
                        protection go hand in hand. Our commitment to sustainability drives everything we do.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Left - Image & Quote */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2070"
                                alt="Sustainable industrial practices"
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-900/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                                    <FaLeaf className="text-4xl text-green-400 mb-4" />
                                    <p className="text-white text-xl font-semibold mb-2">
                                        "Building a sustainable tomorrow, today"
                                    </p>
                                    <p className="text-green-100 text-sm">
                                        Our mission is to provide industrial solutions that protect both people and the planet.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Statistics Overlay */}
                        <div className="absolute bottom-26 -right-1 bg-gradient-to-br from-safety-green to-green-600 rounded-2xl p-8 shadow-2xl max-w-xs z-50">
                            <div className="text-primary-600">
                                <div className="text-5xl font-display font-bold mb-2">99%</div>
                                <div className="text-black">
                                    Of our products meet international environmental standards
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Commitments */}
                    <div className="space-y-6">
                        {commitments.map((item, index) => (
                            <div
                                key={index}
                                className="group bg-industrial-50 rounded-xl p-6 hover:bg-gradient-to-r hover:from-green-50 hover:to-primary-50 transition-all duration-300 border border-transparent hover:border-green-200"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-14 h-14 bg-primary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <item.icon className="text-2xl text-white" />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-display font-bold text-industrial-900 mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-industrial-600 mb-3">
                                            {item.description}
                                        </p>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-3xl font-display font-bold text-safety-green">
                                                {item.stat}
                                            </span>
                                            <span className="text-sm text-industrial-600">
                                                {item.statLabel}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-gradient-to-r from-industrial-900 to-industrial-800 rounded-2xl p-8 md:p-12 text-white">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-safety-green rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-display font-bold mb-2">ISO Certified</h4>
                        <p className="text-industrial-300">
                            All products meet international quality and environmental standards
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-display font-bold mb-2">Carbon Neutral</h4>
                        <p className="text-industrial-300">
                            Committed to achieving carbon neutrality in our operations
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-safety-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-display font-bold mb-2">24/7 Support</h4>
                        <p className="text-industrial-300">
                            Round-the-clock technical support for all environmental solutions
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sustainability;
