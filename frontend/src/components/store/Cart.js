import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import { FaTimes } from 'react-icons/fa';

import { CartItem } from './CartItem';

export const Cart = () => {
	const products = useSelector((store) => store.cart.items);

	const totalPrice = useSelector((store) =>
		store.cart.items.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		)
	);

	return (
		<CartWrapper>
			<CloseIcon>
				<FaTimes onClick={onClick} />
			</CloseIcon>
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
