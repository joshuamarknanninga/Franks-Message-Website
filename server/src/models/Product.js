import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    description: { type: String, default: '' },
    price: { type: Number, default: 0, min: 0 },
    currency: { type: String, default: 'USD' },
    images: [{ type: String }],
    category: { type: String, default: 'books' },
    inventory: { type: Number, default: 0, min: 0 },
    isActive: { type: Boolean, default: true },
    isPlaceholder: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);
export default Product;
