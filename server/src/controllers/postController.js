import Post from '../models/Post.js';
import { buildSlug } from '../services/seo/slugService.js';
import { createItem, deleteItem, getItemById, listItems, updateItem } from './crudFactory.js';

export const listPosts = listItems(Post, 'author categories tags');
export const getPostById = getItemById(Post, 'author categories tags');
export const deletePost = deleteItem(Post);

export const createPost = createItem(Post);
export const updatePost = updateItem(Post);

export const preparePostPayload = (req, _res, next) => {
  if (req.body.title && !req.body.slug) {
    req.body.slug = buildSlug(req.body.title);
  }
  if (req.body.published && !req.body.publishedAt) {
    req.body.publishedAt = new Date();
  }
  next();
};
