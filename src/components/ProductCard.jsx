import PropTypes from 'prop-types';

const ProductCard = ({ product, onClick }) => {
    return (
        <div
            onClick={() => onClick(product)}
            className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border border-transparent hover:border-primary-200 hover:-translate-y-2"
        >
            {/* Product Image */}
            <div className="relative h-56 overflow-hidden bg-industrial-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                />
                {product.latest && (
                    <div className="absolute top-3 right-3 px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-full shadow-lg">
                        NEW
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Product Content */}
            <div className="p-5">
                {/* Category Badge */}
                <div className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full mb-3">
                    {product.subcategory}
                </div>

                {/* Product Name */}
                <h3 className="font-display font-bold text-lg text-industrial-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {product.name}
                </h3>

                {/* Product Description */}
                {product.description && (
                    <p className="text-sm text-industrial-600 mb-4 line-clamp-2">
                        {product.description}
                    </p>
                )}

                {/* View Details Button */}
                <button className="flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
                    <span>View Details</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
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
