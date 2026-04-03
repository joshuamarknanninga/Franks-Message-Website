import connectDb from '../config/db.js';
import ChatRoom from '../models/ChatRoom.js';
import { defaultChatRooms } from './seedData.js';

const runSeed = async () => {
  await connectDb();

  for (const room of defaultChatRooms) {
    await ChatRoom.updateOne({ slug: room.slug }, room, { upsert: true });
  }

  console.log('Seed complete.');
  process.exit(0);
};

runSeed().catch((err) => {
  console.error('Seed failed:', err.message);
  process.exit(1);
});
