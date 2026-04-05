import mongoose from 'mongoose';

const prayerRequestSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    displayName: { type: String, default: '' },
    email: { type: String, trim: true, lowercase: true, default: '' },
    request: { type: String, required: true, trim: true, maxlength: 4000 },
    isPrivate: { type: Boolean, default: true },
    allowPublic: { type: Boolean, default: false },
    isApproved: { type: Boolean, default: false },
    approvedAt: { type: Date, default: null },
    approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
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
