import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaTimes, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';

const ProductModal = ({ product, onClose }) => {
    const whatsappNumber = '94717231998';

    // Prevent body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    const handleWhatsAppContact = () => {
        const message = `Hi, I'm interested in learning more about ${product.name}. Can you provide more details and pricing?`;
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-industrial-900/60 backdrop-blur-md animate-fadeIn"
            onClick={handleBackdropClick}
        >
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl max-w-5xl w-full max-h-[95vh] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] animate-slideUp border border-white/20">
                {/* Modal Content Container */}
                <div className="flex flex-col md:flex-row max-h-[95vh] h-full">
                    
                    {/* Left Side - Image Container */}
                    <div className="md:w-1/2 relative bg-gradient-to-br from-industrial-50 to-industrial-100 p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-industrial-200 overflow-hidden h-64 md:h-auto">
                        {/* Decorative background element */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200/40 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-gold/20 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
                        </div>

                        <img
                            src={
                                product.image.includes('product-placeholder.png')
                                    ? product.brand === '3M'
                                        ? '/images/placeholder-3m.png'
                                        : product.id.startsWith('VAU') || product.name.includes('VAULTEX')
                                            ? '/images/placeholder-vaultex.png'
                                            : product.image
                                    : product.image
                            }
                            onError={(e) => {
                                e.target.onerror = null;
                                if (product.brand === '3M') {
                                    e.target.src = '/images/placeholder-3m.png';
                                    e.target.classList.remove('mix-blend-multiply');
                                } else if (product.id.startsWith('VAU') || product.name.includes('VAULTEX')) {
                                    e.target.src = '/images/placeholder-vaultex.png';
                                    e.target.classList.remove('mix-blend-multiply');
                                } else {
                                    e.target.src = '/images/product-placeholder.png';
                                    e.target.classList.remove('mix-blend-multiply');
                                }
                            }}
                            alt={product.name}
                            className={`relative z-10 w-full h-full object-contain ${
                                product.image.includes('placeholder') ? '' : 'mix-blend-multiply'
                            } drop-shadow-2xl transition-transform duration-700 hover:scale-105`}
                        />
                        {product.latest && (
                            <div className="absolute top-6 left-6 z-20 px-4 py-1.5 bg-gradient-to-r from-accent-gold to-yellow-500 text-white text-xs font-bold rounded-full shadow-lg shadow-accent-gold/30 tracking-widest">
                                NEW ARRIVAL
                            </div>
                        )}
                    </div>

                    {/* Right Side - Content */}
                    <div className="md:w-1/2 flex flex-col h-full bg-white">
                        {/* Header */}
                        <div className="sticky top-0 bg-white/90 backdrop-blur-sm px-8 py-6 flex justify-between items-start border-b border-industrial-100 z-10">
                            <div className="flex-1 pr-4">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    <div className="px-3 py-1 bg-primary-50 text-primary-600 text-xs font-bold rounded-full tracking-wider uppercase shadow-sm">
                                        {product.subcategory}
                                    </div>
                                    <div className={`px-3 py-1 flex items-center gap-2 text-white text-xs font-black rounded-full shadow-sm tracking-widest ${
                                        product.brand === '3M' ? 'bg-red-600' : 'bg-industrial-900/10 text-industrial-500'
                                    }`}>
                                        {product.brand === '3M' ? (
                                            <>
                                                <span>3M BRAND</span>
                                                <span className="opacity-50">|</span>
                                                <span className="text-[9px] tracking-[0.1em] uppercase bg-white/20 px-2 py-0.5 rounded">Authorized Distributor</span>
                                            </>
                                        ) : 'INDUSTRIAL SOLUTION'}
                                    </div>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-display font-extrabold text-industrial-900 leading-tight">
                                    {product.name}
                                </h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2.5 bg-industrial-50 hover:bg-red-50 text-industrial-400 hover:text-red-500 rounded-full transition-all flex-shrink-0 group shadow-sm hover:shadow"
                                aria-label="Close modal"
                            >
                                <FaTimes className="text-xl group-hover:rotate-90 transition-transform duration-300" />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-8 scrollbar-thin scrollbar-thumb-industrial-200 scrollbar-track-transparent hover:scrollbar-thumb-industrial-300">
                            {/* Description */}
                            {product.description && (
                                <div>
                                    <h3 className="font-display font-bold text-industrial-900 mb-3 text-lg flex items-center gap-3">
                                        <div className="w-1.5 h-6 bg-primary-500 rounded-full shadow-lg shadow-primary-500/30"></div>
                                        Product Overview
                                    </h3>
                                    <p className="text-industrial-600 leading-relaxed">
                                        {product.description}
                                    </p>
                                </div>
                            )}

                            {/* Specifications */}
                            {product.specs && Object.keys(product.specs).length > 0 && (
                                <div>
                                    <h3 className="font-display font-bold text-industrial-900 mb-4 text-lg flex items-center gap-3">
                                        <div className="w-1.5 h-6 bg-gradient-to-b from-primary-500 to-accent-gold rounded-full shadow-lg shadow-primary-500/30"></div>
                                        Technical Specifications
                                    </h3>
                                    <div className="bg-industrial-50/50 border border-industrial-100 rounded-xl overflow-hidden shadow-sm">
                                        {Object.entries(product.specs).map(([key, value], index) => (
                                            <div key={key} className={`flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 transition-colors hover:bg-white ${index !== Object.keys(product.specs).length - 1 ? 'border-b border-industrial-100' : ''}`}>
                                                <span className="font-semibold text-industrial-500 text-sm mb-1 sm:mb-0 w-1/3">{key}</span>
                                                <span className="text-industrial-900 font-medium sm:w-2/3 sm:text-right">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Features */}
                            {product.features && product.features.length > 0 && (
                                <div>
                                    <h3 className="font-display font-bold text-industrial-900 mb-4 text-lg flex items-center gap-3">
                                        <div className="w-1.5 h-6 bg-primary-500 rounded-full shadow-lg shadow-primary-500/30"></div>
                                        Key Features
                                    </h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {product.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-3 bg-industrial-50 p-3 rounded-lg border border-industrial-100/50">
                                                <FaCheckCircle className="text-primary-500 mt-1 flex-shrink-0" />
                                                <span className="text-industrial-700 text-sm font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Quality Assurance */}
                            <div className="bg-gradient-to-br from-primary-50/50 to-accent-gold/5 border hover:border-primary-200 transition-colors rounded-xl p-5 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-primary-500/10 transition-colors"></div>
                                <h4 className="font-bold text-industrial-900 mb-3 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                    Quality Assurance
                                </h4>
                                <ul className="space-y-2 text-sm text-industrial-600 font-medium relative z-10">
                                    <li className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                                        Premium quality from trusted manufacturers
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                                        Meets rigorous international safety standards
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                                        Expert technical support available
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Footer - WhatsApp Button */}
                        <div className="sticky bottom-0 bg-white/95 backdrop-blur-md border-t border-industrial-100 p-6 z-10">
                            <button
                                onClick={handleWhatsAppContact}
                                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-lg rounded-xl hover:shadow-[0_8px_25px_-5px_rgba(37,211,102,0.5)] transition-all duration-300 transform hover:-translate-y-1 group"
                            >
                                <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform" />
                                <span>Inquire via WhatsApp</span>
                            </button>
                            <p className="text-center text-xs text-industrial-400 mt-4 font-medium uppercase tracking-wider">
                                Get instant quotes, specifications, and availability
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animations */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; backdrop-filter: blur(0px); }
                    to { opacity: 1; backdrop-filter: blur(8px); }
                }
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px) scale(0.98);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out forwards;
                }
                .animate-slideUp {
                    animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                
                /* Custom Scrollbar for Modal */
                .scrollbar-thin::-webkit-scrollbar {
                    width: 6px;
                }
                .scrollbar-thin::-webkit-scrollbar-track {
                    background: transparent;
                }
                .scrollbar-thin::-webkit-scrollbar-thumb {
                    background-color: #cbd5e1;
                    border-radius: 20px;
                }
                .hover\:scrollbar-thumb-industrial-300:hover::-webkit-scrollbar-thumb {
                    background-color: #94a3b8;
                }
            `}</style>
        </div>
    );
};

ProductModal.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string,
        subcategory: PropTypes.string.isRequired,
        features: PropTypes.arrayOf(PropTypes.string),
        specs: PropTypes.object,
        latest: PropTypes.bool,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ProductModal;
