import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import Dialog from '@material-ui/core/Dialog';
import { updateCoins } from '../../reducers/profile';
import { cart } from '../../reducers/cart';

import { CartItem } from './CartItem';

export const Cart = () => {
	const coins = useSelector((store) => store.profile.coins);
	const products = useSelector((store) => store.cart.items);
	const [open, setOpen] = useState(false);
	const [openConfirmation, setOpenConfirmation] = useState(false);
	const [openFail, setOpenFail] = useState(false);

	const dispatch = useDispatch();
	const history = useHistory();

	const totalPrice = useSelector((store) =>
		store.cart.items.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		)
	);

	const onToggleDialog = () => {
		setOpen(!open);
	};

	const buy = () => {
		if (totalPrice <= coins) {
			dispatch(updateCoins(-totalPrice));
			dispatch(cart.actions.buyItems(products));
			setOpen(false);
			setOpenConfirmation(true);
		} else {
			setOpenFail(true);
			console.log('nähä');
		}
	};

	const onConfirmed = () => {
		setOpenConfirmation(false);
		history.push('/');
	};
	const onFail = () => {
		setOpenFail(false);
		history.push('/store');
	};

	return (
		<CartWrapper>
			<Dialog open={open} onClose={onToggleDialog}>
				<DialogContainer>
					{products.map((product) => (
						<CartItem key={product.id} product={product} />
					))}
					<Amount>Total Price: {totalPrice}:-</Amount>
					<AddButton onClick={buy}>Buy</AddButton>
				</DialogContainer>
			</Dialog>
			<Total>
				<Amount>Total: {totalPrice}:-</Amount>
				<ShoppingButton>
					<LocalGroceryStoreIcon fontSize='large' onClick={onToggleDialog} />
				</ShoppingButton>
			</Total>
			<Dialog open={openConfirmation} onClose={onToggleDialog}>
				<ConfirmationDialog>
					<Text>
						Purchase successful! You can now see your items on your profile.
					</Text>
					<ConfirmedButton onClick={onConfirmed}>Thanks!</ConfirmedButton>
				</ConfirmationDialog>
			</Dialog>

			<Dialog open={openFail} onClose={onToggleDialog}>
				<ConfirmationDialog>
					<Text>Your purchase was denied due to insufficient funds.</Text>
					<ConfirmedButton onClick={onFail}>Keep on making money!</ConfirmedButton>
				</ConfirmationDialog>
			</Dialog>
		</CartWrapper>
	);
};

const DialogContainer = styled.ul`
	background-color: ${(props) => props.theme.backgroundColor};
	border: 2px solid ${(props) => props.theme.primary};
	display: flex;
	flex-direction: column;
	padding: 20px;
	color: ${(props) => props.theme.textColor};
	margin: 0;
`;

const AddButton = styled.button`
	padding: 5px;
	margin-top: 5px;
	font-size: 12px;
	cursor: pointer;
	outline: none;
	border: none;
	width: fit-content;
	text-transform: uppercase;
	background-color: ${(props) => props.theme.primary};
	color: ${(props) => props.theme.textColor};
	border: 2px solid ${(props) => props.theme.secondary};
	:hover,
	:focus {
		background-color: ${(props) => props.theme.secondary};
	}
`;

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
	width: 90%;
	align-items: center;
	justify-content: flex-end;
	color: ${(props) => props.theme.textColor};
`;
const Amount = styled.div`
	color: ${(props) => props.theme.textColor};
`;

const ShoppingButton = styled.button`
	outline: none;
	border: none;
	background-color: transparent;
	cursor: pointer;
	color: ${(props) => props.theme.textColor};
	:hover {
		opacity: 0.7;
	}
`;

export const ConfirmationDialog = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 20px;
	max-width: 300px;
	background-color: ${(props) => props.theme.primary};
	border: 3px solid ${(props) => props.theme.secondary};
	color: ${(props) => props.theme.textColor};
`;

export const ConfirmedButton = styled.button`
	outline: none;
	border: none;
	background-color: ${(props) => props.theme.primary};
	border: 2px solid ${(props) => props.theme.secondary};
	font-size: 14px;
	padding: 8px;
	font-family: 'Trispace', serif;
	text-transform: uppercase;
	color: ${(props) => props.theme.textColor};
	:hover,
	:focus {
		background-color: ${(props) => props.theme.secondary};
	}
`;

export const Text = styled.p`
	font-size: 16px;
`;
