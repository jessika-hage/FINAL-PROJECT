import { createSlice } from '@reduxjs/toolkit';

const housingData = [
	{
		id: 3,
		title: 'Green Valley Compound',
		description:
			'Whit an amazingly stabil carbon dioxide concentrations, Geen Valley Compound is the go to choise for all future seeking settlers. (Only available for Citizens catogory 2+)',
		price: 2200000,
		ranking: 0.5,
		image: '01victor-garcia-VnFGmctBs1s-unsplash.jpg',
	},
	{
		id: 4,
		title: 'Esending Dragon',
		description:
			'Top class housing for Citizens carogory 3+. The 58 hours nhight time and only 12 hours daylight this is a perfect fit for you woh is an effectiv worker and longing for a hecktic nightlife. ',
		price: 1500000,
		ranking: 0.5,
		image: '1space-5319624_1280.jpg',
	},
	{
		id: 5,
		title: 'Morning Star',
		description:
			'On hovering Morning Star Island you will enjoy a gravity of only 4.807 m/s². Why not setteling down where living is easy!',
		price: 800000,
		ranking: 1,
		image: '11fantasy-2700914_1280.jpg',
	},
];

export const housing = createSlice({
	name: 'housing',
	initialState: housingData,
});
