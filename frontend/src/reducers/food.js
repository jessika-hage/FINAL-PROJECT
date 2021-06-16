import { createSlice } from '@reduxjs/toolkit';

//Daily intake
// Energy: 8,400kJ/2,000kcal
// Total fat: less than 70g
// Saturates: less than 20g
// Carbohydrate: 260g
// Total sugars: 90g
// Protein: 50g
// Salt: less than 6g

const foodData = [
	{
		id: 1,
		title: 'Protein Burger',
		energy: 900,
		protein: 80,
		salt: 2,
		price: 5,
	},
	{
		id: 2,
		title: 'Protein Shake',
		energy: 500,
		protein: 80,
		salt: 2,
		price: 3,
	},
	{
		id: 3,
		title: 'Fish´n Go',
		energy: 600,
		protein: 50,
		salt: 2,
		price: 5,
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
