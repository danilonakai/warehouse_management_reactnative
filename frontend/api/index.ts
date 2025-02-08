import axios from 'axios';
import Constants from 'expo-constants';

const API_URL = Constants.expoConfig.extra.API_URL;

// GET: Retrieve the entire collection
export const getCollection = async () => axios.get(API_URL);

// POST: Add a new item
export const addItem = async (item: { name: string; description: string; quantity: number; price: number }) => axios.post(API_URL, item);

// PUT: Update a specific item by ID
export const updateItem = async (id: number, item: { name: string; description: string; quantity: number; price: number }) => axios.put(`${API_URL}/${id}`, item);

// DELETE: Delete a specific item by ID
export const deleteItem = async (id: number) => axios.delete(`${API_URL}/${id}`);

// DELETE: Delete the entire collection
export const deleteCollection = async () => axios.delete(API_URL);

// PUT: Replace the entire collection
export const replaceCollection = async (newCollection: Array<{ name: string; description: string; quantity: number; price: number }>) => axios.put(API_URL, { items: newCollection });
