import ApiError from '../utils/ApiError.js';
import asyncHandler from '../utils/asyncHandler.js';
import { getPagination } from '../utils/pagination.js';

export const listItems = (Model, populate = '') =>
  asyncHandler(async (req, res) => {
    const { page, limit, skip } = getPagination(req.query);
    const query = {};

    if (req.query.search) {
      query.$text = { $search: req.query.search };
    }

    const [items, total] = await Promise.all([
      Model.find(query).populate(populate).sort({ createdAt: -1 }).skip(skip).limit(limit),
      Model.countDocuments(query),
    ]);

    res.json({ data: items, meta: { page, limit, total } });
  });

export const getItemById = (Model, populate = '') =>
  asyncHandler(async (req, res) => {
    const item = await Model.findById(req.params.id).populate(populate);
    if (!item) throw new ApiError(404, 'Resource not found');
    res.json({ data: item });
  });

export const createItem = (Model) =>
  asyncHandler(async (req, res) => {
    const created = await Model.create(req.body);
    res.status(201).json({ data: created });
  });

export const updateItem = (Model) =>
  asyncHandler(async (req, res) => {
    const updated = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) throw new ApiError(404, 'Resource not found');
    res.json({ data: updated });
  });

export const deleteItem = (Model) =>
  asyncHandler(async (req, res) => {
    const deleted = await Model.findByIdAndDelete(req.params.id);
    if (!deleted) throw new ApiError(404, 'Resource not found');
    res.json({ message: 'Deleted successfully' });
  });
