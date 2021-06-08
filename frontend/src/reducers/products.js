import { createSlice } from '@reduxjs/toolkit';

const productData = [
	{
		id: 1,
		title: 'Socks',
		description: 'One size fits all',
		price: 2,
		emoji: '🐖',
	},
	{
		id: 2,
		title: 'Overall',
		description: 'One size fits all',
		price: 20,
		emoji: '🦑',
	},
	{ id: 3, title: 'Soap', price: 3, emoji: '☀️' },
	{ id: 4, title: 'Toilet paper', price: 2, emoji: '🌨' },
	{ id: 5, title: 'Vitamin-D', price: 3, emoji: '🌨' },
	{ id: 6, title: 'Vacuum cleaner', price: 20, emoji: '🌨' },
	{ id: 7, title: 'Blancet', price: 5, emoji: '🌨' },
	{
		id: 8,
		title: 'Slippers',
		description: 'One size fits all',
		price: 2,
		emoji: '🌨',
	},
	{ id: 9, title: 'Citizens Little Red One', price: 1, emoji: '🌨' },
	{ id: 10, title: 'Earplugs', price: 2, emoji: '🌨' },
	{ id: 11, title: 'Happy-pills', price: 6, emoji: '🌨' },
];

export const products = createSlice({
	name: 'products',
	initialState: productData,
});
