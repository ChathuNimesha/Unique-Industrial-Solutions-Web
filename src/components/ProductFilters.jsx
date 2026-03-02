import PropTypes from 'prop-types';
import { FaSearch, FaShieldAlt, FaWater } from 'react-icons/fa';

const ProductFilters = ({
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    categories,
    productCounts
}) => {
    const categoryIcons = {
        safety: FaShieldAlt,
        environmental: FaWater,
    };

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 sticky top-24 z-10">
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Search Bar */}
                <div className="flex-1">
                    <label className="block text-sm font-semibold text-industrial-700 mb-2">
                        Search Products
                    </label>
                    <div className="relative">
                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-industrial-400" />
                        <input
                            type="text"
                            placeholder="Search by product name or category..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border-2 border-industrial-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-industrial-400 hover:text-industrial-600"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>

                {/* Category Filters */}
                <div className="lg:w-auto">
                    <label className="block text-sm font-semibold text-industrial-700 mb-2">
                        Filter by Category
                    </label>
                    <div className="flex flex-wrap gap-3">
                        {/* All Products */}
                        <button
                            onClick={() => setSelectedCategory('all')}
                            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${selectedCategory === 'all'
                                    ? 'bg-primary-600 text-white shadow-lg scale-105'
                                    : 'bg-industrial-100 text-industrial-700 hover:bg-industrial-200'
                                }`}
                        >
                            <span>All Products</span>
                            <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs">
                                {productCounts.all}
                            </span>
                        </button>

                        {/* Category Buttons */}
                        {categories.map((category) => {
                            const Icon = categoryIcons[category.id];
                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${selectedCategory === category.id
                                            ? 'bg-primary-600 text-white shadow-lg scale-105'
                                            : 'bg-industrial-100 text-industrial-700 hover:bg-industrial-200'
                                        }`}
                                >
                                    {Icon && <Icon className="text-lg" />}
                                    <span>{category.name}</span>
                                    <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs">
                                        {productCounts[category.id] || 0}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Active Filters Display */}
            {(searchQuery || selectedCategory !== 'all') && (
                <div className="mt-4 pt-4 border-t border-industrial-200">
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-semibold text-industrial-700">Active Filters:</span>
                        {searchQuery && (
                            <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm flex items-center gap-2">
                                Search: "{searchQuery}"
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="hover:text-primary-900"
                                >
                                    ×
                                </button>
                            </span>
                        )}
                        {selectedCategory !== 'all' && (
                            <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm flex items-center gap-2">
                                {categories.find(c => c.id === selectedCategory)?.name}
                                <button
                                    onClick={() => setSelectedCategory('all')}
                                    className="hover:text-primary-900"
                                >
                                    ×
                                </button>
                            </span>
                        )}
                    </div>
                </div>
            )}
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
