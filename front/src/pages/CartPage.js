import React from 'react';
import Cart from '../components/Cart';
import { Link } from 'react-router-dom';

const CartPage = ({ cartItems, removeFromCart }) => {
    console.log(cartItems);
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold mt-4">Your Cart</h1>
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            {cartItems.length > 0 && (
                // <Link to="/checkout" className="bg-blue-500 text-white px-4 py-2 rounded mt-4 inline-block">
                //     Proceed to Checkout
                // </Link>
                <Link to={{pathname: "/checkout", state: {cartItems: cartItems}}} className='bg-blue-500 text-white px-4 py-2 rounded mt-4 inline-block'>
                    Proceed to Checkout
                </Link>
            )}
        </div>
    );
};

export default CartPage;













