import { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import ProductFilters from './ProductFilters';
import productsData from '../data/products.json';

const ProductPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Calculate product counts
    const productCounts = useMemo(() => {
        const counts = {
            all: productsData.products.length,
        };
        productsData.categories.forEach(category => {
            counts[category.id] = productsData.products.filter(
                p => p.category === category.id
            ).length;
        });
        return counts;
    }, []);

    // Filter products based on search and category
    const filteredProducts = useMemo(() => {
        let filtered = productsData.products;

        // Filter by category
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(product => product.category === selectedCategory);
        }

        // Filter by search query
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(query) ||
                product.subcategory.toLowerCase().includes(query) ||
                product.description?.toLowerCase().includes(query)
            );
        }

        return filtered;
    }, [searchQuery, selectedCategory]);

    // Group products by subcategory
    const groupedProducts = useMemo(() => {
        const groups = {};
        filteredProducts.forEach(product => {
            if (!groups[product.subcategory]) {
                groups[product.subcategory] = [];
            }
            groups[product.subcategory].push(product);
        });
        return groups;
    }, [filteredProducts]);

    return (
        <section id="products" className="min-h-screen bg-gradient-to-b from-industrial-50/50 via-white to-primary-50/20 py-24 relative overflow-hidden">
            {/* Soft background aesthetic glow */}
            <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-br from-primary-900/5 via-transparent to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Page Header */}
                <div className="text-center mb-16 animate-fadeIn">
                    <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-bold tracking-widest text-xs mb-6 shadow-[0_0_20px_rgba(23,43,77,0.3)]">
                        OUR PRODUCTS
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-industrial-900 mb-6 tracking-tight">
                        Complete Industrial <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-gold">Solutions</span>
                    </h1>
                    <p className="text-lg md:text-xl text-industrial-500 max-w-3xl mx-auto font-medium leading-relaxed">
                        Premium safety equipment, industrial supplies, and water treatment systems from trusted global manufacturers
                    </p>
                </div>

                {/* Filters */}
                <div className="animate-slideUp [animation-delay:200ms]">
                    <ProductFilters
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        categories={productsData.categories}
                        productCounts={productCounts}
                    />
                </div>

                {/* Results Summary */}
                <div className="mb-10 flex items-center justify-between">
                    <p className="text-industrial-600 font-medium">
                        Showing <span className="font-bold text-primary-600 px-1 bg-primary-50 rounded">{filteredProducts.length}</span> products
                        {searchQuery && <span> for "{searchQuery}"</span>}
                    </p>
                </div>

                {/* Products Display */}
                {filteredProducts.length === 0 ? (
                    <div className="text-center py-24 bg-white/50 backdrop-blur-sm rounded-3xl border border-industrial-100 shadow-sm animate-fadeIn">
                        <div className="mb-6 relative inline-block">
                            <div className="absolute inset-0 bg-primary-100 rounded-full blur-xl scale-150 opacity-50"></div>
                            <svg className="relative w-24 h-24 mx-auto text-industrial-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-display font-bold text-industrial-900 mb-3">
                            No Products Found
                        </h3>
                        <p className="text-lg text-industrial-500 mb-8 max-w-md mx-auto">
                            Try adjusting your search query or switching to a different category filter.
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('all');
                            }}
                            className="px-8 py-3.5 bg-primary-900 hover:bg-primary-800 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-primary-900/20 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Clear All Filters
                        </button>
                    </div>
                ) : (
                    <div className="space-y-20">
                        {Object.entries(groupedProducts).map(([subcategory, products], index) => (
                            <div key={subcategory} className="animate-slideUp" style={{ animationDelay: `${(index % 5) * 100 + 300}ms` }}>
                                {/* Subcategory Header */}
                                <div className="flex items-center gap-5 mb-8">
                                    <div className="flex-shrink-0 w-1.5 h-12 bg-gradient-to-b from-primary-500 to-accent-gold rounded-full shadow-lg shadow-primary-500/20"></div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-display font-extrabold text-industrial-900 tracking-tight">
                                            {subcategory}
                                        </h2>
                                        <p className="text-industrial-500 text-sm mt-1 font-medium">
                                            {products.length} {products.length === 1 ? 'Product Available' : 'Products Available'}
                                        </p>
                                    </div>
                                    <div className="flex-1 h-px bg-gradient-to-r from-industrial-200 to-transparent ml-4 hidden sm:block"></div>
                                </div>

                                {/* Products Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8 snap-y">
                                    {products.map(product => (
                                        <div key={product.id} className="snap-start">
                                            <ProductCard
                                                product={product}
                                                onClick={setSelectedProduct}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Call to Action */}
                {filteredProducts.length > 0 && (
                    <div className="mt-24 relative overflow-hidden bg-gradient-to-br from-industrial-900 via-primary-900 to-industrial-900 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl animate-slideUp">
                        {/* Decorative background elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/30 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
                        
                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-5xl font-display font-extrabold mb-5 tracking-tight">
                                Can't Find What You're Looking For?
                            </h3>
                            <p className="text-lg md:text-xl mb-10 text-white/80 max-w-2xl mx-auto font-light line-clamp-2">
                                We have a massive inventory of specialized industrial products. Contact our sales team for custom requirements and immediate sourcing.
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-primary-900 font-bold text-lg rounded-2xl hover:bg-industrial-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-1 group"
                            >
                                <svg className="w-6 h-6 text-primary-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Contact Sales Team
                            </a>
                        </div>
                    </div>
                )}
            </div>

            {/* Product Modal */}
            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}

            {/* Global Animations */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.8s ease-out forwards;
                }
                .animate-slideUp {
                    animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    opacity: 0;
                }
            `}</style>
        </section>
    );
};

export default ProductPage;
