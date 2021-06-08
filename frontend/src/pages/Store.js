import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import styled from 'styled-components';

import { Products } from '../components/store/Products';
import { Cart } from '../components/store/Cart';
import { Header } from '../components/Header';
import { Camera } from '../components/Camera';
import { cart } from '../reducers/cart';
import { products } from '../reducers/products';

const reducer = combineReducers({
	cart: cart.reducer,
	products: products.reducer,
});

const store = configureStore({ reducer: reducer });

export const Store = () => (
	<Main>
		<Header />
		<Camera />
		<Provider store={store}>
			<Wrapper>
				<Cart />
				<Products />
			</Wrapper>
		</Provider>
	</Main>
);

const Wrapper = styled.div`
	margin: auto 0;
	background-color: ${(props) => props.theme.backgroundColor};
	display: flex;
	flex-direction: column;
	align-item: center;
	justify-content: center;
	width: 100vw;
`;

const Main = styled.main`
	background-color: ${(props) => props.theme.backgroundColor};
`;
