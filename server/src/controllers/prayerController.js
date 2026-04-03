import PrayerRequest from '../models/PrayerRequest.js';
import ApiError from '../utils/ApiError.js';
import asyncHandler from '../utils/asyncHandler.js';
import { deleteItem, getItemById, listItems, updateItem } from './crudFactory.js';

export const listPrayerRequests = listItems(PrayerRequest);
export const getPrayerRequestById = getItemById(PrayerRequest);
export const updatePrayerRequest = updateItem(PrayerRequest);
export const deletePrayerRequest = deleteItem(PrayerRequest);

export const createPrayerRequest = asyncHandler(async (req, res) => {
  const payload = {
    name: req.body.name,
    displayName: req.body.displayName || 'Anonymous',
    email: req.body.email || '',
    request: req.body.request,
    isPrivate: req.body.isPrivate ?? true,
    allowPublic: req.body.allowPublic ?? false,
  };

  if (payload.isPrivate) {
    payload.allowPublic = false;
  }

  const created = await PrayerRequest.create(payload);
  res.status(201).json({ data: created });
});

export const approvePrayerRequest = asyncHandler(async (req, res) => {
  const prayer = await PrayerRequest.findById(req.params.id);
  if (!prayer) {
    throw new ApiError(404, 'Prayer request not found');
  }

  prayer.isApproved = true;
  prayer.approvedAt = new Date();
  prayer.approvedBy = req.user._id;
  prayer.status = 'reviewed';
  await prayer.save();

  res.json({ data: prayer });
});

export const publicPrayerWall = asyncHandler(async (_req, res) => {
  const prayers = await PrayerRequest.find({
    isPrivate: false,
    allowPublic: true,
    isApproved: true,
  })
    .select('displayName request createdAt')
    .sort({ approvedAt: -1 })
    .limit(100);

  res.json({ data: prayers });
});
