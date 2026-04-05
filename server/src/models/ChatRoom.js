import mongoose from 'mongoose';

const chatRoomSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    description: { type: String, default: '' },
    topic: {
      type: String,
      enum: ['Prayer', 'Encouragement', 'Bible Study', 'General Fellowship'],
      default: 'General Fellowship',
    },
    isActive: { type: Boolean, default: true },
    pinnedWelcomeMessage: { type: String, default: '' },
  },
  { timestamps: true }
);

const ChatRoom = mongoose.model('ChatRoom', chatRoomSchema);
export default ChatRoom;
