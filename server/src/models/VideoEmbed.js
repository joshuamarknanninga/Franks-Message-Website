import mongoose from 'mongoose';

const videoEmbedSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    youtubeVideoId: { type: String, required: true, unique: true, trim: true },
    description: { type: String, default: '' },
    featured: { type: Boolean, default: false },
    publishedAt: { type: Date, default: Date.now },
    thumbnail: { type: String, default: '' },
  },
  { timestamps: true }
);

const VideoEmbed = mongoose.model('VideoEmbed', videoEmbedSchema);
export default VideoEmbed;
