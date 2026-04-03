import Product from '../models/Product.js';
import { buildSlug } from '../services/seo/slugService.js';
import { createItem, deleteItem, getItemById, listItems, updateItem } from './crudFactory.js';

export const listProducts = listItems(Product);
export const getProductById = getItemById(Product);
export const createProduct = createItem(Product);
export const updateProduct = updateItem(Product);
export const deleteProduct = deleteItem(Product);

export const prepareProductPayload = (req, _res, next) => {
  if (req.body.name && !req.body.slug) req.body.slug = buildSlug(req.body.name);
  next();
};
