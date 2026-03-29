import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, index: true },
    slug: { type: String, required: true, unique: true, trim: true, index: true },
    excerpt: { type: String, required: true, maxlength: 400 },
    body: { type: mongoose.Schema.Types.Mixed, required: true },
    coverImage: { type: String, default: '' },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
    featured: { type: Boolean, default: false },
    published: { type: Boolean, default: false },
    publishedAt: { type: Date },
    scriptureReference: { type: String, default: '' },
    seoTitle: { type: String, default: '' },
    seoDescription: { type: String, default: '' },
    readTimeMinutes: { type: Number, min: 1, max: 120 },
  },
  { timestamps: true }
);

postSchema.index({ title: 'text', excerpt: 'text' });
postSchema.index({ published: 1, publishedAt: -1 });

const Post = mongoose.model('Post', postSchema);
export default Post;
