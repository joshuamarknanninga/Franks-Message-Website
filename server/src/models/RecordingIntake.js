import mongoose from 'mongoose';

const recordingIntakeSchema = new mongoose.Schema(
  {
    senderName: { type: String, required: true, trim: true },
    senderEmail: { type: String, required: true, trim: true, lowercase: true },
    recordingUrl: { type: String, required: true },
    notes: { type: String, default: '' },
    status: {
      type: String,
      enum: ['received', 'reviewing', 'mastering', 'completed'],
      default: 'received',
    },
  },
  { timestamps: true }
);

const RecordingIntake = mongoose.model('RecordingIntake', recordingIntakeSchema);
export default RecordingIntake;
