import mongoose from 'mongoose';
import env from './env.js';

export const getDbState = () => ({
  connected: mongoose.connection.readyState === 1,
  readyState: mongoose.connection.readyState,
});

const connectDb = async () => {
  if (!env.mongoUri) {
    console.warn('[db] MONGODB_URI is missing. Starting server without database connection.');
    return false;
  }

  try {
    await mongoose.connect(env.mongoUri);
    console.log('[db] Connected to MongoDB');
    return true;
  } catch (error) {
    console.error('[db] Connection failed:', error.message);
    if (env.nodeEnv === 'production') {
      throw error;
    }
    console.warn('[db] Continuing without database connection (non-production mode).');
    return false;
  }
};

export default connectDb;
