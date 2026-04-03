import Category from '../models/Category.js';
import { buildSlug } from '../services/seo/slugService.js';
import { createItem, deleteItem, getItemById, listItems, updateItem } from './crudFactory.js';

export const listCategories = listItems(Category);
export const getCategoryById = getItemById(Category);
export const createCategory = createItem(Category);
export const updateCategory = updateItem(Category);
export const deleteCategory = deleteItem(Category);

export const prepareCategoryPayload = (req, _res, next) => {
  if (req.body.name && !req.body.slug) req.body.slug = buildSlug(req.body.name);
  next();
};
