import cors from 'cors';
import env from './env.js';

const corsMiddleware = cors({
  origin: env.clientUrl,
  credentials: true,
});

export default corsMiddleware;
