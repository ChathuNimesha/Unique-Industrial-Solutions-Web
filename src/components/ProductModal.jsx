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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
            onClick={handleBackdropClick}
        >
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-slideUp">
                {/* Modal Content Container */}
                <div className="flex flex-col md:flex-row max-h-[90vh]">
                    {/* Left Side - Image */}
                    <div className="md:w-1/2 relative bg-industrial-900">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-64 md:h-full object-cover"
                        />
                        {product.latest && (
                            <div className="absolute top-4 right-4 px-4 py-2 bg-primary-600 text-white text-sm font-bold rounded-full shadow-lg">
                                NEW ARRIVAL
                            </div>
                        )}
                    </div>

                    {/* Right Side - Content */}
                    <div className="md:w-1/2 flex flex-col">
                        {/* Header */}
                        <div className="sticky top-0 bg-primary-600 text-white p-6 flex justify-between items-start">
                            <div className="flex-1">
                                <div className="text-sm font-semibold text-primary-50 mb-2">
                                    {product.subcategory}
                                </div>
                                <h2 className="text-2xl md:text-3xl font-display font-bold leading-tight">
                                    {product.name}
                                </h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="ml-4 p-2 hover:bg-white/20 rounded-lg transition-colors flex-shrink-0"
                                aria-label="Close modal"
                            >
                                <FaTimes className="text-xl" />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {/* Description */}
                            {product.description && (
                                <div>
                                    <h3 className="font-display font-bold text-industrial-900 mb-3 text-lg flex items-center gap-2">
                                        <div className="w-1 h-6 bg-primary-600 rounded-full"></div>
                                        Product Description
                                    </h3>
                                    <p className="text-industrial-700 leading-relaxed">
                                        {product.description}
                                    </p>
                                </div>
                            )}

                            {/* Features */}
                            {product.features && product.features.length > 0 && (
                                <div>
                                    <h3 className="font-display font-bold text-industrial-900 mb-3 text-lg flex items-center gap-2">
                                        <div className="w-1 h-6 bg-primary-600 rounded-full"></div>
                                        Key Features
                                    </h3>
                                    <ul className="space-y-2">
                                        {product.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <FaCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                                                <span className="text-industrial-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Specifications */}
                            {product.specs && Object.keys(product.specs).length > 0 && (
                                <div>
                                    <h3 className="font-display font-bold text-industrial-900 mb-3 text-lg flex items-center gap-2">
                                        <div className="w-1 h-6 bg-gradient-to-b from-primary-500 to-accent-gold rounded-full"></div>
                                        Technical Specifications
                                    </h3>
                                    <div className="bg-industrial-50 rounded-lg p-4 space-y-2">
                                        {Object.entries(product.specs).map(([key, value]) => (
                                            <div key={key} className="flex justify-between items-center py-2 border-b border-industrial-200 last:border-0">
                                                <span className="font-semibold text-industrial-700">{key}:</span>
                                                <span className="text-industrial-900">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Quality Assurance */}
                            <div className="bg-gradient-to-r from-primary-50 to-accent-gold/10 border-l-4 border-primary-500 rounded-lg p-4">
                                <h4 className="font-bold text-industrial-900 mb-2">Quality Assurance</h4>
                                <ul className="space-y-1 text-sm text-industrial-700">
                                    <li className="flex items-center gap-2">
                                        <FaCheckCircle className="text-primary-600 text-xs" />
                                        Premium quality from trusted manufacturers
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FaCheckCircle className="text-primary-600 text-xs" />
                                        Meets international safety standards
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FaCheckCircle className="text-primary-600 text-xs" />
                                        Expert technical support available
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Footer - WhatsApp Button */}
                        <div className="sticky bottom-0 bg-white border-t border-industrial-200 p-6">
                            <button
                                onClick={handleWhatsAppContact}
                                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                <FaWhatsapp className="text-2xl" />
                                <span>Contact Us on WhatsApp</span>
                            </button>
                            <p className="text-center text-xs text-industrial-500 mt-3">
                                Get instant quotes, specifications, and availability
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animations */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out;
                }
                .animate-slideUp {
                    animation: slideUp 0.3s ease-out;
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
