import mongoose from 'mongoose';

const prayerRequestSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true, default: '' },
    request: { type: String, required: true, trim: true, maxlength: 4000 },
    isPrivate: { type: Boolean, default: true },
    status: {
      type: String,
      enum: ['new', 'reviewed', 'prayed', 'archived'],
      default: 'new',
    },
  },
  { timestamps: true }
);

const PrayerRequest = mongoose.model('PrayerRequest', prayerRequestSchema);
export default PrayerRequest;
