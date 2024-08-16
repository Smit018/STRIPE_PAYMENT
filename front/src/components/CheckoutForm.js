import React, { useState } from 'react';

const CheckoutForm = ({ onCheckout }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            onCheckout(email);
        } else {
            alert('Please enter your email');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-4">
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border rounded mt-2"
                    required
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Proceed to Checkout
            </button>
        </form>
    );
};

export default CheckoutForm;

















// import React, { useState } from 'react';

// const CheckoutForm = ({ onCheckout }) => {
//     const [email, setEmail] = useState('');
//     const [cardNumber, setCardNumber] = useState('');
//     const [expMonth, setExpMonth] = useState('');
//     const [expYear, setExpYear] = useState('');
//     const [cvc, setCvc] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (email && cardNumber && expMonth && expYear && cvc) {
//             onCheckout({ email, cardNumber, expMonth, expYear, cvc });
//         } else {
//             alert('Please fill out all fields');
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-4">
//             <div className="mb-4">
//                 <label htmlFor="email" className="block text-gray-700">
//                     Email
//                 </label>
//                 <input
//                     type="email"
//                     id="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="w-full px-4 py-2 border rounded mt-2"
//                     required
//                 />
//             </div>
//             <div className="mb-4">
//                 <label htmlFor="cardNumber" className="block text-gray-700">
//                     Card Number
//                 </label>
//                 <input
//                     type="text"
//                     id="cardNumber"
//                     value={cardNumber}
//                     onChange={(e) => setCardNumber(e.target.value)}
//                     className="w-full px-4 py-2 border rounded mt-2"
//                     required
//                 />
//             </div>
//             <div className="mb-4">
//                 <label htmlFor="expMonth" className="block text-gray-700">
//                     Expiration Month
//                 </label>
//                 <input
//                     type="text"
//                     id="expMonth"
//                     value={expMonth}
//                     onChange={(e) => setExpMonth(e.target.value)}
//                     className="w-full px-4 py-2 border rounded mt-2"
//                     required
//                 />
//             </div>
//             <div className="mb-4">
//                 <label htmlFor="expYear" className="block text-gray-700">
//                     Expiration Year
//                 </label>
//                 <input
//                     type="text"
//                     id="expYear"
//                     value={expYear}
//                     onChange={(e) => setExpYear(e.target.value)}
//                     className="w-full px-4 py-2 border rounded mt-2"
//                     required
//                 />
//             </div>
//             <div className="mb-4">
//                 <label htmlFor="cvc" className="block text-gray-700">
//                     CVC
//                 </label>
//                 <input
//                     type="text"
//                     id="cvc"
//                     value={cvc}
//                     onChange={(e) => setCvc(e.target.value)}
//                     className="w-full px-4 py-2 border rounded mt-2"
//                     required
//                 />
//             </div>
//             <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//                 Proceed to Checkout
//             </button>
//         </form>
//     );
// };

// export default CheckoutForm;