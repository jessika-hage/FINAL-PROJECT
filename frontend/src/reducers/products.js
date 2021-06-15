import { createSlice } from '@reduxjs/toolkit';

const productData = [
	{
		id: 1,
		title: 'Socks',
		description: 'One size fits all',
		price: 20,
		image: 'socks.png',
		ranking: 0.5,
	},
	{
		id: 2,
		title: 'Overall',
		description: 'One size fits all',
		price: 100,
		image: 'overall.png',
		ranking: 1,
	},
	{
		id: 3,
		title: 'Soap',
		description: 'Essential item. Shuld be used daily',
		price: 15,
		image: 'soap.png',
		ranking: 0.5,
	},
	{
		id: 4,
		title: 'Toilet paper',
		description: 'Essential item. Shuld be used daily',
		price: 15,
		image: 'toilet-paper.png',
		ranking: 0.5
	},
	{
		id: 5,
		title: 'Vitamin-D',
		description: 'One a day keeps the dector away',
		price: 50,
		image: 'vitamins.png',
		ranking: 1,
	},
	{
		id: 6,
		title: 'Vacuum cleaner',
		description: 'A tidy home is a happy home',
		price: 500,
		image: 'vaccum-cleaner.png',
		ranking: 2,
	},
	{
		id: 7,
		title: 'Blancet',
		description: '100% paper. Reusble.',
		price: 80,
		image: 'blanket.png',
		ranking: 1.5,
	},
	{
		id: 8,
		title: 'Slippers',
		description: 'One size fits all',
		price: 30,
		image: 'slippers.png',
		ranking: 1,
	},
	{
		id: 9,
		title: 'Citizens Little Red One',
		description: 'The only reading needed',
		price: 50,
		image: 'book.png',
		ranking: 1,
	},
	{
		id: 10,
		title: 'Noise reducer',
		description: 'Get the 14h beauty sleep that you deserve',
		price: 200,
		image: 'noise.png',
		ranking: 1.5,
	},
	{
		id: 11,
		title: 'Happy-pills',
		description: 'Just for emergencies',
		price: 250,
		image: 'hallucinogen.png',
		ranking: 2,
	},
];

export const products = createSlice({
	name: 'products',
	initialState: productData,
});
