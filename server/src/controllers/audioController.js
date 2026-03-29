import AudioMessage from '../models/AudioMessage.js';
import { buildSlug } from '../services/seo/slugService.js';
import { createItem, deleteItem, getItemById, listItems, updateItem } from './crudFactory.js';

export const listAudio = listItems(AudioMessage);
export const getAudioById = getItemById(AudioMessage);
export const createAudio = createItem(AudioMessage);
export const updateAudio = updateItem(AudioMessage);
export const deleteAudio = deleteItem(AudioMessage);

export const prepareAudioPayload = (req, _res, next) => {
  if (req.body.title && !req.body.slug) req.body.slug = buildSlug(req.body.title);
  if (!req.body.publishedAt) req.body.publishedAt = new Date();
  next();
};
