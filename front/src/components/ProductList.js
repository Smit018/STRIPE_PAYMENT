import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { getProducts } from '../services/productService';




const ProductList = ({ addToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
         const fetchProducts = async () => {
            const productsData = await getProducts();
            setProducts(productsData);
         };
        fetchProducts();
    }, []);
        
    return (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} addToCart={addToCart} />
                    ))}
                </div>
            );
};
        
export default ProductList;





















