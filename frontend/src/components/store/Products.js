import React from 'react';
import { useSelector } from 'react-redux';
import { Product } from './Product';
import styled from 'styled-components';

export const Products = () => {
	// TODO - fetch all products from the store
	const allProducts = useSelector((store) => store.products);

	return (
		<ProductsWrapper>
			<Wrapper>
				{allProducts.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</Wrapper>
		</ProductsWrapper>
	);
};

const ProductsWrapper = styled.div`
	display: flex;
	aline-items: center;

	justify-content: center;
`;

const Wrapper = styled.div`
	width: 90vw;
`;
