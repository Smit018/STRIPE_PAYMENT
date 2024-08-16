import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';


dotenv.config();
const DB_URL=process.env.DB_URL


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}

export default connectDB;