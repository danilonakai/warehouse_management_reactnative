// StAuth10244: I Danilo Nakai & Armand Amores, 000886940 & 000315902 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.

import axios from 'axios';

const API_URL = 'http://192.168.1.182:3001/api';

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
