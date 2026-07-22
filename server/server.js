// server.js — process entrypoint: loads env, connects to the DB, starts listening.
import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import connectDB from './config/mongodb.js';

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await connectDB();
        console.log('Database connected successfully.');

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to connect to the database:', error);
        process.exit(1);
    }
};

startServer();
