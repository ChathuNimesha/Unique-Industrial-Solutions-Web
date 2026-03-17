import { FaTrophy } from "react-icons/fa";

const Acheivements = () => {
    const awards = [
        {
            icon: FaTrophy,
            title: "Supply Chain Excellence Award",
            description: "1st Runner-Up for National Supply Chain Performance Excellence.",
            image: "/src/assets/Awards/5.jpg",
        },
        {
            icon: FaTrophy,
            title: "Asia Miracle Awards 2025",
            description: "Best Safety Solutions & Product Industry Brand of the Year.",
            image: "/src/assets/Awards/1.jpg",
        },
         {
            icon: FaTrophy,
            title: "Iconic Awards 2024",
            description: "Awarded for outstanding performance in industrial safety solutions.",
            image: "/src/assets/Awards/4.jpg",
        },
        {
            icon: FaTrophy,
            title: "Pinnacle Awards 2024",
            description: "Best Safety Solutions & Product Industry of the Year.",
            image: "/src/assets/Awards/2.jpg",
        },
        
        {
            icon: FaTrophy,
            title: "Pinnacle Awards 2024",
            description: "Best Entrepreneur of the Year – Safety Equipment Industry.",
            image: "/src/assets/Awards/3.jpg",
        },
        
       
    ];

    return (
        <section
            id="achievements"
            className="relative text-white overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url('/src/assets/bg/awards-bg.jpg')`,
            }}
        >
            {/* DARK OVERLAY for Deep Industrial Vibe */}
            <div className="absolute inset-0 bg-black/80"></div>

            {/* Subtle gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-industrial-900/95"></div>

            <div className="section-container relative z-10">
                
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-primary-600 text-white rounded-full font-semibold text-sm mb-4">
                        OUR ACHIEVEMENTS
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                        Trusted Across Multiple Industries
                    </h2>

                    <p className="text-lg md:text-xl text-industrial-300 max-w-3xl mx-auto">
                        Recognized for excellence and reliability, we have earned multiple awards 
                        and acknowledgements for our commitment to safety, quality, and trusted service 
                        across diverse industrial sectors.
                    </p>
                </div>

                {/* Awards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {awards.map((award, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-xl 
                            bg-industrial-800/70 backdrop-blur-md 
                            transition-all duration-300 
                            hover:bg-industrial-700/90 hover:-translate-y-2 
                            hover:shadow-[0_0_25px_rgba(255,193,7,0.4)]"
                        >
                            {/* Glowing Edge Effect */}
                            <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 
                            group-hover:opacity-100 transition-all duration-500 
                            shadow-[0_0_20px_4px_rgba(255,193,7,0.9)]"></div>

                            {/* Background Image on Card */}
                            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                                <img
                                    src={award.image}
                                    alt={award.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="relative p-8 z-10">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg 
                                flex items-center justify-center mb-4 
                                group-hover:scale-110 transition-transform shadow-lg">
                                    <award.icon className="text-3xl text-white" />
                                </div>

                                <h3 className="text-2xl font-display font-bold mb-3 
                                group-hover:text-primary-400 transition-colors">
                                    {award.title}
                                </h3>

                                <p className="text-industrial-300 leading-relaxed mb-4">
                                    {award.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                
            </div>
        </section>
    );
};

export default Acheivements;
