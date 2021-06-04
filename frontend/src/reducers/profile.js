import { createSlice } from '@reduxjs/toolkit';

export const profile = createSlice({
	name: 'profile',
	initailState: {
		username: null,
		accessToken: null,
		points: 0,
	},

	setUsername: (store, action) => {
		store.username = action.payload;
	},
	setAccessToken: (store, action) => {
		store.accessToken = action.payload;
	},
	setPoints: (store, action) => {
		store.points = action.payload;
	},
});
