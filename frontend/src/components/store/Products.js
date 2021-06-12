import React from 'react';
import { useSelector } from 'react-redux';
import { Product } from './Product';
import { Cart } from './Cart';
import styled from 'styled-components';

export const Products = () => {
	// TODO - fetch all products from the store
	const allProducts = useSelector((store) => store.products);

	return (
		<Main>
			<Title>Space shop</Title>
			<Cart />
			<ProductsWrapper>
				{allProducts.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</ProductsWrapper>
		</Main>
	);
};

const Title = styled.h1`
	font-size: 30px;
	color: ${(props) => props.theme.textColor};
	text-transform: uppercase;
`;

const ProductsWrapper = styled.div`
	display: flex;
	aling-items: center;
	justify-content: center;
	flex-wrap: wrap;
	margin: auto 0;
`;

const Main = styled.main`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	margin: 0;
`;
