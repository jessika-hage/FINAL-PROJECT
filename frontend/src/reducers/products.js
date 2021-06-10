import { createSlice } from '@reduxjs/toolkit';

const productData = [
	{
		id: 1,
		title: 'Socks',
		description: 'One size fits all',
		price: 2,
		image: 'sock.jpg',
	},
	{
		id: 2,
		title: 'Overall',
		description: 'One size fits all',
		price: 20,
		image: 'soap.jpg',
	},
	{
		id: 3,
		title: 'Soap',
		description: 'Essential item. Shuld be used daily',
		price: 3,
		image: 'soap.jpg',
	},
	{
		id: 4,
		title: 'Toilet paper',
		description: 'Essential item. Shuld be used daily',
		price: 2,
		image: '',
	},
	{
		id: 5,
		title: 'Vitamin-D',
		description: 'One a day keeps the dector away',
		price: 3,
		image: 'vitamin.jpg',
	},
	{
		id: 6,
		title: 'Vacuum cleaner',
		description: 'A tidy home is a happy home',
		price: 20,
		image: 'vacuumcleaner.jpg',
	},
	{
		id: 7,
		title: 'Blancet',
		description: '100% paper. Reusble.',
		price: 5,
		image: 'blancets.jpg',
	},
	{
		id: 8,
		title: 'Slippers',
		description: 'One size fits all',
		price: 2,
		image: '',
	},
	{
		id: 9,
		title: 'Citizens Little Red One',
		description: 'The only reading needed',
		price: 1,
		image: '',
	},
	{
		id: 10,
		title: 'Noise reducer',
		description: 'Get the 14h beauty sleep that you deserve',
		price: 2,
		image: 'noisreducer.jpg',
	},
	{
		id: 11,
		title: 'Happy-pills',
		description: 'Just for emergencies',
		price: 6,
		image: 'happy-pill.jpg',
	},
];

export const products = createSlice({
	name: 'products',
	initialState: productData,
});
