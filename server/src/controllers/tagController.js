import Tag from '../models/Tag.js';
import { buildSlug } from '../services/seo/slugService.js';
import { createItem, deleteItem, getItemById, listItems, updateItem } from './crudFactory.js';

export const listTags = listItems(Tag);
export const getTagById = getItemById(Tag);
export const createTag = createItem(Tag);
export const updateTag = updateItem(Tag);
export const deleteTag = deleteItem(Tag);

export const prepareTagPayload = (req, _res, next) => {
  if (req.body.name && !req.body.slug) req.body.slug = buildSlug(req.body.name);
  next();
};
