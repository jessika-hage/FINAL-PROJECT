import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	username: null,
	email: null,
	accessToken: null,
	userId: null,
	badges: null,
};

export const profile = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setUsername: (store, action) => {
			store.username = action.payload;
		},
		setEmail: (store, action) => {
			store.email = action.payload;
		},
		setAccessToken: (store, action) => {
			store.accessToken = action.payload;
		},
		setUserId: (store, action) => {
			store.userId = action.payload;
		},
		setBadges: (store, action) => {
			store.badges = action.payload;
		},
		setLogOut: () => {
			return {
				username: null,
				email: null,
				accessToken: null,
			};
		},
	},
});

export const updateBadges = (badges) => {
	return (dispatch, getState) => {
		const user = getState().profile.userId;
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ badges: getState().profile.badges }),
		};
		fetch(`http://localhost:8080/citizen/${user}/badges`, options)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				dispatch(profile.actions.setBadges(data.badges));
			})
			.catch((err) => console.error(err));
	};
};
