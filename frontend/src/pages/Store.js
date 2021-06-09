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
	margin: 0 auto;
	background-color: ${(props) => props.theme.backgroundColor};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 90%;
`;

const Main = styled.main`
	background-color: ${(props) => props.theme.backgroundColor};
`;
