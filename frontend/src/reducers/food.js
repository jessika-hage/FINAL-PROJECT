import { createSlice } from '@reduxjs/toolkit';

const foodData = [
	{
		id: 1,
		title: 'Pasta',
		calories: 500,
	},
	{
		id: 2,
		title: 'Pasta',
		calories: 500,
	},
	{
		id: 3,
		title: 'Pasta',
		calories: 500,
	},
	{
		id: 4,
		title: 'Pasta',
		calories: 500,
	},

	{
		id: 5,
		title: 'Pasta',
		calories: 500,
	},
	{
		id: 6,
		title: 'Pasta',
		calories: 500,
	},
	{
		id: 7,
		title: 'Slippers',
		title: 'Pasta',
		calories: 500,
	},
	{
		id: 8,
		title: 'Socks',
		title: 'Pasta',
		calories: 500,
	},
	{
		id: 9,
		title: 'Pasta',
		calories: 500,
	},
	{
		id: 10,
		title: 'Pasta',
		calories: 500,
	},
	{
		id: 11,
		title: 'Pasta',
		calories: 500,
	},
];

export const food = createSlice({
	name: 'food',
	initialState: foodData,
});