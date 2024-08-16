import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-lg font-bold">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p className="text-gray-600">Your cart is empty</p>
            ) : (
                cartItems.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="flex justify-between items-center mt-4">
                        <span>{item.name}</span>
                        <span>${item.price}</span>
                        <button
                            className="bg-red-500 text-white px-2 py-1 rounded"
                            onClick={() => removeFromCart(item.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
















































