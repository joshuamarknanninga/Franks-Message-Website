import VideoEmbed from '../models/VideoEmbed.js';
import { createItem, deleteItem, getItemById, listItems, updateItem } from './crudFactory.js';

export const listVideos = listItems(VideoEmbed);
export const getVideoById = getItemById(VideoEmbed);
export const createVideo = createItem(VideoEmbed);
export const updateVideo = updateItem(VideoEmbed);
export const deleteVideo = deleteItem(VideoEmbed);
