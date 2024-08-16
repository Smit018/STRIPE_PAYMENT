import React from 'react';

const PaymentFailed = () => {
    return (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg">
            <h1 className="text-2xl font-bold">Payment Failed</h1>
            <p>Unfortunately, your payment could not be processed. Please try again.</p>
        </div>
    );
};

export default PaymentFailed;