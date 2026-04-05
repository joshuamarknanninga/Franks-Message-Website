import cookieParser from 'cookie-parser';
import express from 'express';
import helmet from 'helmet';
import corsMiddleware from './config/cors.js';
import logger from './config/logger.js';
import errorHandler from './middleware/errorHandler.js';
import notFound from './middleware/notFound.js';
import apiRateLimiter from './middleware/rateLimiter.js';
import apiRoutes from './routes/index.js';

const app = express();

app.use(helmet());
app.use(corsMiddleware);
app.use(logger);
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(apiRateLimiter);

app.use('/api', apiRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
