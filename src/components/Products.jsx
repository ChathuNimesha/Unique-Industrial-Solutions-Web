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
        <section id="products" className="min-h-screen bg-gradient-to-b from-industrial-50 to-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <div className="inline-block px-4 py-2 bg-primary-600 text-white rounded-full font-semibold text-sm mb-4 shadow-lg animate-bounce">
                        OUR PRODUCTS
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-industrial-900 mb-4">
                        Complete Industrial Solutions
                    </h1>
                    <p className="text-lg md:text-xl text-industrial-600 max-w-3xl mx-auto">
                        Premium safety equipment and water treatment systems from trusted global manufacturers
                    </p>
                </div>

                {/* Filters */}
                <ProductFilters
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    categories={productsData.categories}
                    productCounts={productCounts}
                />

                {/* Results Summary */}
                <div className="mb-8">
                    <p className="text-industrial-600">
                        Showing <span className="font-bold text-primary-600">{filteredProducts.length}</span> products
                        {searchQuery && <span> for "{searchQuery}"</span>}
                    </p>
                </div>

                {/* Products Display */}
                {filteredProducts.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="mb-4">
                            <svg className="w-24 h-24 mx-auto text-industrial-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-display font-bold text-industrial-900 mb-2">
                            No Products Found
                        </h3>
                        <p className="text-industrial-600 mb-6">
                            Try adjusting your search or filter to find what you're looking for
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('all');
                            }}
                            className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                        >
                            Clear All Filters
                        </button>
                    </div>
                ) : (
                    <div className="space-y-16">
                        {Object.entries(groupedProducts).map(([subcategory, products]) => (
                            <div key={subcategory} className="animate-fadeIn">
                                {/* Subcategory Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="flex-shrink-0 w-1 h-12 bg-gradient-to-b from-primary-500 to-accent-gold rounded-full"></div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-display font-bold text-industrial-900">
                                            {subcategory}
                                        </h2>
                                        <p className="text-industrial-600 text-sm">
                                            {products.length} {products.length === 1 ? 'product' : 'products'}
                                        </p>
                                    </div>
                                </div>

                                {/* Products Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {products.map(product => (
                                        <ProductCard
                                            key={product.id}
                                            product={product}
                                            onClick={setSelectedProduct}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Call to Action */}
                {filteredProducts.length > 0 && (
                    <div className="mt-16 bg-gradient-to-r from-primary-600 via-accent-gold to-primary-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
                        <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
                            Can't Find What You Need?
                        </h3>
                        <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
                            We have access to thousands of products. Contact us with your specific requirements.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-industrial-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Contact Us for Custom Solutions
                        </a>
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

            {/* Animations */}
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out;
                }
            `}</style>
        </section>
    );
};

export default ProductPage;
