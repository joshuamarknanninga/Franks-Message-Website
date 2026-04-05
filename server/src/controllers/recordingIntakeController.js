import RecordingIntake from '../models/RecordingIntake.js';
import ApiError from '../utils/ApiError.js';
import asyncHandler from '../utils/asyncHandler.js';

export const createRecordingIntake = asyncHandler(async (req, res) => {
  const created = await RecordingIntake.create(req.body);
  res.status(201).json({ data: created });
});

export const listRecordingIntakes = asyncHandler(async (_req, res) => {
  const intakes = await RecordingIntake.find().sort({ createdAt: -1 });
  res.json({ data: intakes });
});

export const updateRecordingIntake = asyncHandler(async (req, res) => {
  const updated = await RecordingIntake.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updated) throw new ApiError(404, 'Recording intake not found');
  res.json({ data: updated });
});
