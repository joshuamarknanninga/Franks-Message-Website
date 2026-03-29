import PrayerRequest from '../models/PrayerRequest.js';
import { createItem, deleteItem, getItemById, listItems, updateItem } from './crudFactory.js';

export const listPrayerRequests = listItems(PrayerRequest);
export const getPrayerRequestById = getItemById(PrayerRequest);
export const createPrayerRequest = createItem(PrayerRequest);
export const updatePrayerRequest = updateItem(PrayerRequest);
export const deletePrayerRequest = deleteItem(PrayerRequest);
