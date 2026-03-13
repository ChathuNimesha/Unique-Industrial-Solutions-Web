import { FaIndustry, FaHospital, FaFlask, FaHotel, FaWarehouse, FaUtensils } from 'react-icons/fa';

const Industries = () => {
    const industries = [
        {
            icon: FaIndustry,
            title: 'Manufacturing',
            description: 'Complete safety and water treatment solutions for manufacturing facilities.',
            image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=2070',
        },
        {
            icon: FaFlask,
            title: 'Chemical & Pharmaceutical',
            description: 'Specialized equipment and safety gear for chemical and pharmaceutical industries.',
            image: 'https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?q=80&w=2070',
        },
        {
            icon: FaUtensils,
            title: 'Food & Beverage',
            description: 'Food-grade water treatment and hygiene safety solutions.',
            image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=2070',
        },
        {
            icon: FaHotel,
            title: 'Hospitality',
            description: 'Water treatment systems and safety equipment for hotels and resorts.',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070',
        },
        {
            icon: FaHospital,
            title: 'Healthcare',
            description: 'Medical-grade water purification and safety equipment.',
            image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2070',
        },
        {
            icon: FaWarehouse,
            title: 'Logistics & Warehousing',
            description: 'Safety equipment and solutions for logistics and storage facilities.',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070',
        },
    ];

    return (
        <section id="industries" className="bg-industrial-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="section-container relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-primary-600 text-white rounded-full font-semibold text-sm mb-4">
                        INDUSTRIES WE SERVE
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                        Trusted Across Multiple Industries
                    </h2>
                    <p className="text-lg md:text-xl text-industrial-300 max-w-3xl mx-auto">
                        From manufacturing to healthcare, we provide specialized solutions tailored
                        to meet the unique needs of diverse industrial sectors.
                    </p>
                </div>

                {/* Industries Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-xl bg-industrial-800 hover:bg-industrial-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                                <img
                                    src={industry.image}
                                    alt={industry.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="relative p-8 z-10">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                                    <industry.icon className="text-3xl text-white" />
                                </div>
                                <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary-400 transition-colors">
                                    {industry.title}
                                </h3>
                                <p className="text-industrial-300 leading-relaxed mb-4">
                                    {industry.description}
                                </p>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center text-primary-400 font-semibold hover:text-primary-300 transition-colors group/link"
                                >
                                        Learn More
                                    <svg        
                                        className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-8 md:p-12">
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-display font-bold mb-2">500+</div>
                        <div className="text-primary-100">Active Clients</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-display font-bold mb-2">15+</div>
                        <div className="text-primary-100">Industries Served</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-display font-bold mb-2">1000+</div>
                        <div className="text-primary-100">Projects Completed</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-display font-bold mb-2">98%</div>
                        <div className="text-primary-100">Client Satisfaction</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Industries;
