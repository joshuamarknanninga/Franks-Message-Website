import NewsletterSubscriber from '../models/NewsletterSubscriber.js';
import { createItem, deleteItem, getItemById, listItems, updateItem } from './crudFactory.js';

export const listSubscribers = listItems(NewsletterSubscriber);
export const getSubscriberById = getItemById(NewsletterSubscriber);
export const createSubscriber = createItem(NewsletterSubscriber);
export const updateSubscriber = updateItem(NewsletterSubscriber);
export const deleteSubscriber = deleteItem(NewsletterSubscriber);
