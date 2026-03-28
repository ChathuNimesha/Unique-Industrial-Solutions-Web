import PropTypes from 'prop-types';

const ProductCard = ({ product, onClick }) => {
    return (
        <div
            onClick={() => onClick(product)}
            className="group relative bg-white/90 backdrop-blur-md rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-primary-900/10 transition-all duration-500 cursor-pointer overflow-hidden border border-industrial-100 hover:border-primary-200 flex flex-col h-full hover:-translate-y-2"
        >
            {/* Image Container with inner shadow & zoom */}
            <div className="relative h-64 overflow-hidden bg-industrial-50/50 p-6 flex items-center justify-center">
                {/* Decorative background circle */}
                <div className="absolute inset-0 bg-gradient-to-tr from-industrial-100/60 to-transparent rounded-full scale-150 transform -translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700 ease-in-out z-0"></div>
                
                <img
                    src={product.image}
                    alt={product.name}
                    className="relative z-10 w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500 ease-out drop-shadow-sm group-hover:drop-shadow-md"
                    loading="lazy"
                />
                
                {product.latest && (
                    <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r from-accent-gold to-yellow-500 text-white text-xs font-bold rounded-full shadow-lg shadow-accent-gold/30 tracking-wider">
                        NEW
                    </div>
                )}
                
                {/* Overlay gradient on image hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-1 bg-gradient-to-b from-white to-industrial-50/20">
                <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 font-bold rounded-full tracking-wider uppercase text-[10px] shadow-sm">
                        {product.subcategory}
                    </span>
                </div>

                <h3 className="font-display font-bold text-xl text-industrial-900 mb-2 line-clamp-2 leading-tight group-hover:text-primary-600 transition-colors duration-300">
                    {product.name}
                </h3>

                {product.description && (
                    <p className="text-sm text-industrial-500 mb-6 line-clamp-2 flex-1 leading-relaxed">
                        {product.description}
                    </p>
                )}

                <div className="mt-auto pt-5 border-t border-industrial-100 flex items-center justify-between">
                    <span className="text-sm font-semibold text-industrial-400 group-hover:text-primary-600 transition-colors duration-300">
                        View Details
                    </span>
                    <div className="w-8 h-8 rounded-full bg-industrial-50 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 shadow-sm text-industrial-400">
                        <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string,
        subcategory: PropTypes.string.isRequired,
        latest: PropTypes.bool,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ProductCard;
