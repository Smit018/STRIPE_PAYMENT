// models/Payment.js
import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    email: { type: String, required: true },
    transactionId: { type: String, required: true },
    // paymentIntentId: { type: String, required: true },
    status: { type: String, required: true },
    amount: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Payment = mongoose.model('Payment', paymentSchema);


export default Payment;
