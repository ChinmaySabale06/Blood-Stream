// app.js — Express app definition, separated from server.js so it can be
// imported directly in tests without opening a DB connection or a port.
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express';

import bloodbankRoutes from './routes/bloodbanks.js';
import campsRoutes from './routes/api/camps.js';
import saveUserRoutes from './routes/saveUser.js';
import bloodstockRoutes from './routes/bloodstock.js';
import bloodRequestRoutes from './routes/bloodrequests.js';
import appointmentRoutes from './routes/appointments.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
}));
app.use(express.json());
app.use(bodyParser.json());
app.use(clerkMiddleware()); // attaches req.auth for downstream requireAuth() checks

app.use('/api/bloodbanks', bloodbankRoutes);
app.use('/api/camps', campsRoutes);
app.use('/api', saveUserRoutes);
app.use('/api/bloodstock', bloodstockRoutes);
app.use('/api/bloodrequests', bloodRequestRoutes);
app.use('/api/appointments', appointmentRoutes);

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.use(notFound);
app.use(errorHandler);

export default app;
