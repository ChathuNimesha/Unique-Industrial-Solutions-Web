import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import productsData from '../data/products.json';
import { FaArrowRight } from 'react-icons/fa';

const LatestProducts = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const navigate = useNavigate();

    // Get latest products (products marked as latest: true)
    const latestProducts = productsData.products
        .filter(product => product.latest)
        .slice(0, 6);

    const goToProducts = () => {
        navigate('/products');
    };

    return (
        <section className="bg-white py-20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50 to-transparent opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-block px-4 py-2 bg-primary-600 text-white rounded-full font-semibold text-sm mb-4 shadow-lg">
                        NEW ARRIVALS
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-industrial-900 mb-4">
                        Latest Products
                    </h2>
                    <p className="text-lg text-industrial-600 max-w-2xl mx-auto">
                        Discover our newest additions - cutting-edge safety equipment and water treatment solutions
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {latestProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onClick={setSelectedProduct}
                        />
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center">
                    <button
                        onClick={goToProducts}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-gold text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
                    >
                        <span>View All Products</span>
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-industrial-500 text-sm mt-4">
                        Browse our complete catalog of {productsData.products.length}+ products
                    </p>
                </div>
            </div>

            {/* Product Modal */}
            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </section>
    );
};

export default LatestProducts;
