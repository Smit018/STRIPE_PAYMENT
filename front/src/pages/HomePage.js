import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import { Link } from 'react-router-dom';

const HomePage = ({addToCart,cartItems,setCartItems}) => {

    // const removeFromCart = (productId) => {
    //     setCartItems(cartItems.filter(item => item.id !== productId));
    // };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold mt-4">Products</h1>
            <ProductList addToCart={addToCart} />                                  
            <div className="fixed bottom-4 right-4">
                <Link to="/cart">
                    <div className="relative">
                        <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                            {cartItems.length}
                        </span>
                        <img src={require(`../assets/images/1.jpeg`)} alt="Cart" className="w-12 h-12" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
