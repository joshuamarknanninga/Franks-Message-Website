import mongoose from 'mongoose';

const chatMessageSchema = new mongoose.Schema(
  {
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'ChatRoom', required: true, index: true },
    displayName: { type: String, required: true, trim: true, maxlength: 80 },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    content: { type: String, required: true, trim: true, maxlength: 2000 },
    isFlagged: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    moderation: {
      muted: { type: Boolean, default: false },
      banned: { type: Boolean, default: false },
      reason: { type: String, default: '' },
    },
  },
  { timestamps: true }
);

const ChatMessage = mongoose.model('ChatMessage', chatMessageSchema);
export default ChatMessage;
