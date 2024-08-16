import React from 'react';
import CheckoutForm from '../components/CheckoutForm';
import { useNavigate,useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PndiiJ4z3YcjgAvbxgKlfhrTPvp6rF8MIKKLZE9wLki85NTHt0POKk4YjIa8azqul76uKLHJ5QL0ieSUssip8fu00IILIN2B5');

const CheckoutPage = () => {
    const navigate = useNavigate();
   const location=useLocation();
   const cartItems = location.state ? location.state.cartItems : null;
   console.log(cartItems);
    const handleCheckout = async (email) => {
        try {
            const response = await fetch('http://localhost:3001/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, amount: 5000 }), // Amount in cents ($50.00)
            });

            const { id } = await response.json();
            const stripe = await stripePromise;

            const { error } = await stripe.redirectToCheckout({ sessionId: id });

            if (error) {
                navigate('/payment-failed');
            }
        } catch (error) {
            navigate('/payment-failed');
        }
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold mt-4">Checkout</h1>
            <CheckoutForm onCheckout={handleCheckout} />
        </div>
    );
};

export default CheckoutPage;









// import React from 'react';
// import CheckoutForm from '../components/CheckoutForm';
// import { useNavigate } from 'react-router-dom';
// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe('pk_test_51PndiiJ4z3YcjgAvbxgKlfhrTPvp6rF8MIKKLZE9wLki85NTHt0POKk4YjIa8azqul76uKLHJ5QL0ieSUssip8fu00IILIN2B5');

// const CheckoutPage = () => {
//     const navigate = useNavigate();

//     const handleCheckout = async (email) => {
//         try {
//             const response = await fetch('http://localhost:3001/create-checkout-session', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email, amount: 5000 }), // Amount in cents ($50.00)
//             });

//             const { id } = await response.json();
//             const stripe = await stripePromise;

//             const { error } = await stripe.redirectToCheckout({ sessionId: id });

//             if (error) {
//                 navigate('/payment-failed');
//             }
//         } catch (error) {
//             navigate('/payment-failed');
//         }
//     };

//     return (
//         <div className="container mx-auto px-4">
//             <h1 className="text-2xl font-bold mt-4">Checkout</h1>
//             <CheckoutForm onCheckout={handleCheckout} />
//         </div>
//     );
// };

// export default CheckoutPage;






























































// import React from 'react';
// import CheckoutForm from '../components/CheckoutForm';
// import { useNavigate } from 'react-router-dom';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';

// const stripePromise = loadStripe('pk_test_51PndiiJ4z3YcjgAvbxgKlfhrTPvp6rF8MIKKLZE9wLki85NTHt0POKk4YjIa8azqul76uKLHJ5QL0ieSUssip8fu00IILIN2B5');

// const CheckoutPage = () => {
//     const navigate = useNavigate();

//     const handleCheckout = async (email) => {
//         try {
//             const response = await fetch('http://localhost:3001/create-payment-intent', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email, amount: 5000 }), // Amount in cents ($50.00)
//             });

//             const { clientSecret } = await response.json();

//             if (clientSecret) {
//                 navigate('/payment', { state: { clientSecret, email } });
//             }
//         } catch (error) {
//             navigate('/payment-failed');
//         }
//     };

//     return (
//         <Elements stripe={stripePromise}>
//             <div className="container mx-auto px-4">
//                 <h1 className="text-2xl font-bold mt-4">Checkout</h1>
//                 <CheckoutForm onCheckout={handleCheckout} />
//             </div>
//         </Elements>
//     );
// };

// export default CheckoutPage;
