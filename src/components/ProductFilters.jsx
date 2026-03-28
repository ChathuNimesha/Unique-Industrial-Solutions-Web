import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

const ProductFilters = ({
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    categories,
    productCounts
}) => {
    return (
        <div className="bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl shadow-xl shadow-industrial-900/5 p-6 md:p-8 mb-12 sticky top-24 z-30 transition-all duration-300">
            <div className="flex flex-col gap-6">
                {/* Search Bar - Sleek and modern */}
                <div className="w-full relative group">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <FaSearch className="text-industrial-400 group-focus-within:text-primary-500 transition-colors text-lg" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search for products, categories, or keywords..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-14 pr-12 py-4 bg-industrial-50/50 border border-industrial-200 rounded-2xl focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all outline-none text-industrial-800 placeholder:text-industrial-400 font-medium text-lg"
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="absolute inset-y-0 right-0 pr-5 flex items-center text-industrial-400 hover:text-primary-600 transition-colors"
                        >
                            <svg className="w-6 h-6 bg-industrial-100 rounded-full p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                </div>

                {/* Categories Tab Bar - Horizontal Scroll */}
                <div className="relative mt-2">
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10 hidden md:block"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10 hidden md:block"></div>
                    
                    <div className="flex gap-3 overflow-x-auto pb-4 pt-1 px-1 snap-x snap-mandatory [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:bg-industrial-200 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-industrial-300 transition-all">
                        {/* All Products */}
                        <button
                            onClick={() => setSelectedCategory('all')}
                            className={`snap-start whitespace-nowrap px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 border flex-shrink-0 ${
                                selectedCategory === 'all'
                                    ? 'bg-primary-600 border-primary-600 text-white shadow-lg shadow-primary-500/30 scale-[1.02]'
                                    : 'bg-white border-industrial-200 text-industrial-600 hover:bg-industrial-50 hover:border-industrial-300 hover:text-industrial-900'
                            }`}
                        >
                            <span>All Products</span>
                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                                selectedCategory === 'all' ? 'bg-white/25' : 'bg-industrial-100 text-industrial-500'
                            }`}>
                                {productCounts.all}
                            </span>
                        </button>

                        {/* Mapped Category Buttons */}
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`snap-start whitespace-nowrap px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 border flex-shrink-0 ${
                                    selectedCategory === category.id
                                        ? 'bg-primary-600 border-primary-600 text-white shadow-lg shadow-primary-500/30 scale-[1.02]'
                                        : 'bg-white border-industrial-200 text-industrial-600 hover:bg-industrial-50 hover:border-industrial-300 hover:text-industrial-900'
                                }`}
                            >
                                <span>{category.name}</span>
                                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                                    selectedCategory === category.id ? 'bg-white/25' : 'bg-industrial-100 text-industrial-500'
                                }`}>
                                    {productCounts[category.id] || 0}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductFilters.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    setSearchQuery: PropTypes.func.isRequired,
    selectedCategory: PropTypes.string.isRequired,
    setSelectedCategory: PropTypes.func.isRequired,
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
    productCounts: PropTypes.object.isRequired,
};

export default ProductFilters;
