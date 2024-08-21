import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
// import PaymentPage from './pages/PaymentPage';
import PaymentSuccess from './components/PaymentSuccess';
import PaymentFailed from './components/PaymentFailed';

const stripePromise = loadStripe('pk_test_51PndiiJ4z3YcjgAvbxgKlfhrTPvp6rF8MIKKLZE9wLki85NTHt0POKk4YjIa8azqul76uKLHJ5QL0ieSUssip8fu00IILIN2B5');

function App() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    return (
        <Elements stripe={stripePromise}>
            <Router>
                <div className="App">
                    <Routes>
                        <Route
                            path="/"
                            element={<HomePage addToCart={addToCart} cartItems={cartItems} setCartItems={setCartItems} />}
                        />
                        <Route
                            path="/cart"
                            element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />}
                        />
                        <Route
                            path="/checkout"
                            element={<CheckoutPage />}
                        />
                        <Route
                            path="/payment-success"
                            element={<PaymentSuccess />}
                        />
                        <Route
                            path="/payment-failed"
                            element={<PaymentFailed />}
                        />
                    </Routes>
                </div>
            </Router>
        </Elements>
    );
}

export default App;
































// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import CartPage from './pages/CartPage';
// import CheckoutPage from './pages/CheckoutPage';
// import PaymentSuccess from './components/PaymentSuccess';
// import PaymentFailed from './components/PaymentFailed';
// import './index.css';

