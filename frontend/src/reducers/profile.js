import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	username: null,
	email: null,
	accessToken: null,
	userId: null,
	badges: null,
	ranking: null,
	coins: null,
	createdAt: null,
	avatar: "man",
	items: "",
	investments: null,
	investmentQuantity: null,
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
		setRanking: (store, action) => {
			store.ranking = action.payload;
		},
		setCoins: (store, action) => {
			store.coins = action.payload;
		},
		setCreatedAt: (store, action) => {
			store.createdAt = action.payload;
		},
		setAvatar: (store, action) => {
			store.avatar = action.payload;
		},
		setItems: (store, action) => {
			store.items = action.payload;
		},
		setInvestments: (store, action) => {
			store.investments = action.payload;
		},
		setInvestmentQuantity: (store, action) => {
			store.investmentQuantity = action.payload;
		},
		setLogOut: () => {
			return {
				username: null,
				email: null,
				accessToken: null,
				userId: null,
				badges: null,
				ranking: null,
				coins: null,
				items: "",
				avatar: "man",
				createdAt: null,
				investments: null,
				investmentQuantity: null,
			};
		},
	},
});

// Thunk for updating badges
export const updateBadges = (badges) => {
	return (dispatch, getState) => {
		console.log(getState());
		const options = {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ badges }),
		};
		fetch(
			`http://localhost:8080/citizen/${getState().profile.userId}/badges`,
			options
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				dispatch(profile.actions.setBadges(data.badges));
			})
			.catch((err) => console.error(err));
	};
};

// Thunk for updating ranking
export const updateRanking = (ranking) => {
	return (dispatch, getState) => {
		console.log(getState());
		const options = {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ ranking }),
		};
		fetch(
			`http://localhost:8080/citizen/${getState().profile.userId}/ranking`,
			options
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				dispatch(profile.actions.setRanking(data.ranking));
			})
			.catch((err) => console.error(err));
	};
};

// Thunk for updating coins
export const updateCoins = (coins) => {
	return (dispatch, getState) => {
		console.log(getState());
		const options = {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ coins }),
		};
		fetch(
			`http://localhost:8080/citizen/${getState().profile.userId}/coins`,
			options
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				dispatch(profile.actions.setCoins(data.coins));
			})
			.catch((err) => console.error(err));
	};
};

// Thunk for updating bought items
export const updateItems = (items) => {
	return (dispatch, getState) => {
		console.log(getState());
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify( { items } ),
		};
		fetch(
			`http://localhost:8080/citizen/${getState().profile.userId}/items`,
			options
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				dispatch(profile.actions.setItems(data.items));
			})
			.catch((err) => console.error(err));
	};
};

// Thunk for updating investments
export const updateInvestments = (investmentQuantity, investments) => {
	return (dispatch, getState) => {
		console.log(getState());
		const options = {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ investmentQuantity, investments }),
		};
		fetch(
			`http://localhost:8080/citizen/${getState().profile.userId}/investments`,
			options
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				dispatch(profile.actions.setQuantity(data.investments));
				dispatch(profile.actions.setQuantity(data.investmentQuantity));
			})
			.catch((err) => console.error(err));
	};
};