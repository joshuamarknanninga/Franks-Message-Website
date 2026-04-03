import mongoose from 'mongoose';
import env from './env.js';

const connectDb = async () => {
  if (!env.mongoUri) {
    throw new Error('MONGODB_URI is missing');
  }

  await mongoose.connect(env.mongoUri);
};

export default connectDb;
