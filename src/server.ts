import express, { Application, Request, Response } from 'express';
import { userRoute } from './routes/user.route';
import './database/db';
import 'dotenv/config';
import cors from 'cors';

const app: Application = express();

// Allowed origins for CORS
const allowedOrigins = ['http://localhost:4200'];
const options: cors.CorsOptions = {
    origin: allowedOrigins,
    optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

// Middleware setup
app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route to verify server is running
app.get('/', (req: Request, res: Response) => {
    res.send('Hello world');
});

// User routes
app.use('/api/users', userRoute);

// Start server
const port = process.env.PORT || 4001;
app.listen(port, () => {
    console.log(`App is listening on http://localhost:${port}`);
});
