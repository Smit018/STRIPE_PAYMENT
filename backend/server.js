
import express from 'express';
import Payment from './models/Payment.js';
import Stripe from 'stripe';
import  connectDB  from './config/db.js';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config();

const app = express();
const stripe = Stripe(process.env.SECRET_KEY);

app.use(cors());
app.use(express.json());
   
connectDB();

app.post('/create-checkout-session', async (req, res) => {
    const { email, amount } = req.body;

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'Product Name',
                        },
                        unit_amount: amount,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: 'http://localhost:3000/payment-success',
            cancel_url: 'http://localhost:3000/payment-failed',
            customer_email: email,
        });
        // const paymentIntentId = session.payment_intent;
        console.log(session);
        const newPayment = new Payment({
            email: email,
            transactionId: session.id,
            
            status: 'succeed',
            amount: amount,
        });

        await newPayment.save();

        res.json({ id: session.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



















































// import express from 'express';
// import Stripe from 'stripe';
// // const bodyParser = require('body-parser');
// import cors from 'cors';
// import dotenv from 'dotenv';

// dotenv.config();

// const app = express();
// const stripe = Stripe(process.env.SECRET_KEY);

// app.use(cors());
// app.use(express.json());

// app.post('/create-payment-intent', async (req, res) => {
//     try {
//         const { email, amount } = req.body;

//         const paymentIntent = await stripe.paymentIntents.create({
//             amount: amount,
//             currency: 'usd',
//             receipt_email: email,
//         });

//         res.status(200).send({
//             clientSecret: paymentIntent.client_secret,
//         });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
