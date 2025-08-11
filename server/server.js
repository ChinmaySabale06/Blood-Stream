// server.js

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

// Your route imports - using ES modules import syntax, include extensions
import bloodbankRoutes from './routes/bloodbanks.js';
import campsRoutes from './routes/api/camps.js';
import saveUserRoutes from './routes/saveUser.js';
import bloodstockRoutes from './routes/bloodstock.js'; // <-- NEW
import connectDB from './config/mongodb.js';

// Initialize env variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Start server function
const startServer = async () => {
    try {
        await connectDB();
        console.log('Database connected successfully.');

        // Routes
        app.use('/api/bloodbanks', bloodbankRoutes);
        app.use('/api/camps', campsRoutes);
        app.use('/api', saveUserRoutes);
        app.use('/api/bloodstock', bloodstockRoutes); // <-- NEW

        // Health check endpoint
        app.get('/api/health', (req, res) => {
            res.json([{ name: "Red Cross", group: "A+" }]);
        });

        // Start server
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (error) {
        console.error('Failed to connect to the database:', error);
        process.exit(1);
    }
};

startServer();
