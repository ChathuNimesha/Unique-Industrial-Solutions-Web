import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

const ProductFilters = ({
    searchQuery,
    setSearchQuery,
    selectedBrand,
    setSelectedBrand,
    selectedCategory,
    setSelectedCategory,
    categories,
    productCounts
}) => {
    const brands = [
        { id: 'all', name: 'All Solutions', icon: 'all' },
        { id: '3M', name: '3M Products', icon: '3m' },
        { id: 'Other', name: 'Industrial Solutions', icon: 'other' }
    ];

    return (
        <div className="bg-white/90 backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl shadow-industrial-900/10 p-6 md:p-10 mb-16 sticky top-24 z-30 transition-all duration-500 hover:shadow-primary-900/5">
            <div className="flex flex-col gap-10">
                {/* Brand Selection - Two Large Buttons as Primary Choice */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {brands.map((brand) => (
                        <button
                            key={brand.id}
                            onClick={() => {
                                setSelectedBrand(brand.id);
                                setSelectedCategory('all'); // Reset category when switching brands
                            }}
                            className={`group relative overflow-hidden px-8 py-5 rounded-2xl font-display font-bold text-lg transition-all duration-500 border-2 flex flex-col items-center justify-center gap-2 ${
                                selectedBrand === brand.id
                                    ? brand.id === '3M'
                                        ? 'bg-red-600 border-red-600 text-white shadow-xl shadow-red-500/30 scale-[1.03]'
                                        : brand.id === 'all'
                                            ? 'bg-industrial-900 border-industrial-900 text-white shadow-xl shadow-industrial-900/30 scale-[1.03]'
                                            : 'bg-primary-600 border-primary-600 text-white shadow-xl shadow-primary-500/30 scale-[1.03]'
                                    : 'bg-white border-industrial-100 text-industrial-500 hover:border-industrial-300 hover:text-industrial-900 hover:bg-industrial-50 hover:-translate-y-1'
                            }`}
                        >
                            {/* Brand Specific Logic for "nice and clear" look */}
                            <span className="relative z-10">{brand.name}</span>
                            <div className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded opacity-70 ${
                                selectedBrand === brand.id ? 'bg-white/20' : 'bg-industrial-100'
                            }`}>
                                Select Group
                            </div>
                            
                            {/* Glossy overlay on active */}
                            {selectedBrand === brand.id && (
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
                            )}
                        </button>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row items-center gap-6">
                    {/* Search Bar - Sleek and modern */}
                    <div className="w-full relative group">
                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                            <FaSearch className={`transition-colors text-lg ${
                                searchQuery ? 'text-primary-500' : 'text-industrial-400 group-focus-within:text-primary-500'
                            }`} />
                        </div>
                        <input
                            type="text"
                            placeholder="Find specific products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-14 pr-12 py-4 bg-industrial-50/50 border border-industrial-200 rounded-2xl focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all outline-none text-industrial-800 placeholder:text-industrial-400 font-medium text-lg"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute inset-y-0 right-0 pr-5 flex items-center text-industrial-400 hover:text-red-500 transition-colors"
                            >
                                <svg className="w-6 h-6 bg-industrial-100 rounded-full p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>

                {/* Categories Tab Bar - Horizontal Scroll */}
                <div className="relative mt-2">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-1 h-6 bg-primary-500 rounded-full"></div>
                        <h4 className="text-sm font-bold text-industrial-900 uppercase tracking-widest">
                            Available Categories for {selectedBrand === 'all' ? 'All Products' : selectedBrand === '3M' ? '3M Selection' : 'Industrial Solutions'}
                        </h4>
                    </div>
                    
                    <div className="flex gap-3 overflow-x-auto pb-4 pt-1 px-1 snap-x snap-mandatory [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:bg-industrial-200 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-industrial-300 transition-all">
                        {/* All Categories Button */}
                        <button
                            onClick={() => setSelectedCategory('all')}
                            className={`snap-start whitespace-nowrap px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 border flex-shrink-0 ${
                                selectedCategory === 'all'
                                    ? 'bg-industrial-900 border-industrial-900 text-white shadow-lg shadow-industrial-900/20 scale-[1.02]'
                                    : 'bg-white border-industrial-100 text-industrial-600 hover:bg-industrial-50 hover:border-industrial-300 hover:text-industrial-900'
                            }`}
                        >
                            <span>All Categories</span>
                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                                selectedCategory === 'all' ? 'bg-white/25' : 'bg-industrial-100 text-industrial-500'
                            }`}>
                                {productCounts.all}
                            </span>
                        </button>

                        {/* Mapped Category Buttons - Only show those with products in current brand */}
                        {categories.map((category) => {
                            const count = productCounts[category.id] || 0;
                            if (count === 0 && selectedBrand !== 'all') return null; // Hide empty categories when brand is selected

                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`snap-start whitespace-nowrap px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 border flex-shrink-0 ${
                                        selectedCategory === category.id
                                            ? 'bg-primary-600 border-primary-600 text-white shadow-lg shadow-primary-500/30 scale-[1.02]'
                                            : 'bg-white border-industrial-100 text-industrial-600 hover:bg-industrial-50 hover:border-industrial-300 hover:text-industrial-900'
                                    }`}
                                >
                                    <span>{category.name}</span>
                                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                                        selectedCategory === category.id ? 'bg-white/25' : 'bg-industrial-100 text-industrial-500'
                                    }`}>
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductFilters.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    setSearchQuery: PropTypes.func.isRequired,
    selectedBrand: PropTypes.string.isRequired,
    setSelectedBrand: PropTypes.func.isRequired,
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
