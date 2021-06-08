import React from 'react';
import { useSelector } from 'react-redux';
import { CartItem } from './CartItem';
import styled from 'styled-components/macro';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';

export const Cart = () => {
	// TODO - fetch products from the cart store
	const products = useSelector((store) => store.cart.items);

	// TODO - calculate total from the sum of all products in the cart
	const totalPrice = useSelector((store) =>
		store.cart.items.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		)
	);

	return (
		<CartWrapper>
			<Items>
				{products.map((product) => (
					<CartItem key={product.id} product={product} />
				))}
			</Items>
			<Total>
				<Amount>Total: {totalPrice}:-</Amount>
				<LocalGroceryStoreIcon fontSize='large' />
			</Total>
		</CartWrapper>
	);
};

const CartWrapper = styled.div`
	background-color: ${(props) => props.theme.secundary};
	display: flex;
	height: 100px;
	width: 80%;
	margin: auto 0;
	justify-content: space-between;
`;
const Total = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	color: ${(props) => props.theme.textColor};
`;
const Amount = styled.div`
	color: ${(props) => props.theme.textColor};
`;
const Items = styled.ul`
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: ${(props) => props.theme.textColor};
`;
