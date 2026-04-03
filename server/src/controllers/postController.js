import Post from '../models/Post.js';
import { buildSlug } from '../services/seo/slugService.js';
import ApiError from '../utils/ApiError.js';
import asyncHandler from '../utils/asyncHandler.js';
import { createItem, deleteItem, getItemById, updateItem } from './crudFactory.js';

export const getPostById = getItemById(Post, 'author categories tags');
export const deletePost = deleteItem(Post);
export const createPost = createItem(Post);
export const updatePost = updateItem(Post);

export const listPosts = asyncHandler(async (req, res) => {
  const query = {};

  if (req.query.series) {
    query.series = req.query.series;
  }

  if (req.query.published === 'true') {
    query.published = true;
  }

  const posts = await Post.find(query)
    .populate('author categories tags')
    .sort({ publishedAt: -1, createdAt: -1 });

  res.json({ data: posts });
});

export const listPostSeries = asyncHandler(async (_req, res) => {
  const series = await Post.aggregate([
    { $match: { series: { $ne: '' } } },
    { $group: { _id: '$series', count: { $sum: 1 }, latest: { $max: '$publishedAt' } } },
    { $sort: { latest: -1 } },
    { $project: { _id: 0, name: '$_id', count: 1, latest: 1 } },
  ]);

  res.json({ data: series });
});

export const getSeriesByName = asyncHandler(async (req, res) => {
  const seriesName = decodeURIComponent(req.params.seriesName);

  const posts = await Post.find({ series: seriesName, published: true })
    .populate('author categories tags')
    .sort({ publishedAt: -1, createdAt: -1 });

  if (!posts.length) {
    throw new ApiError(404, 'Series not found');
  }

  res.json({ data: { series: seriesName, posts } });
});

export const preparePostPayload = (req, _res, next) => {
  if (req.body.title && !req.body.slug) {
    req.body.slug = buildSlug(req.body.title);
  }
  if (req.body.published && !req.body.publishedAt) {
    req.body.publishedAt = new Date();
  }
  next();
};
