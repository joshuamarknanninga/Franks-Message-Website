import mongoose from 'mongoose';

const audioMessageSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    description: { type: String, default: '' },
    transcript: { type: String, default: '' },
    speaker: { type: String, default: 'Frank' },
    scriptureReference: { type: String, default: '' },
    series: { type: String, default: '' },
    audioUrl: { type: String, required: true },
    duration: { type: Number, required: true, min: 1 },
    coverImage: { type: String, default: '' },
    featured: { type: Boolean, default: false },
    publishedAt: { type: Date, default: Date.now },
    isPublished: { type: Boolean, default: true },
    status: {
      type: String,
      enum: ['received', 'mastering', 'ready', 'published'],
      default: 'received',
    },
    source: {
      type: String,
      enum: ['frank-phone', 'team-mastered', 'quick-publish'],
      default: 'frank-phone',
    },
  },
  { timestamps: true }
);

audioMessageSchema.index({ isPublished: 1, publishedAt: -1 });

const AudioMessage = mongoose.model('AudioMessage', audioMessageSchema);
export default AudioMessage;
