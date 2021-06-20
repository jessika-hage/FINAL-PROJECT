import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import Dialog from '@material-ui/core/Dialog';

import { updateCoins, updateItems, updateRanking } from '../../../reducers/profile';
import { cart } from '../../../reducers/cart';
import { CartItem } from './CartItem';
import { ConfirmationDialogs } from './ConfirmationDialogs';
import { 
	CartWrapper, 
	DialogContainer, 
	DialogHeader,
	HeaderText, 
	TotalPrice,
	TotalRanking, 
	BuyButton, 
	ShoppingCart, 
	ShoppingButton, 
	ItemsBadge, 
	ItemsBadgeText, 
	Icon } from './Styling';

export const MyCart = () => {
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

	const totalRanking = useSelector((store) =>
	store.cart.items.reduce(
		(total, item) => total + item.ranking * item.quantity,
		0
	)
);

	const onToggleDialog = () => {
		setOpen(!open);
	};

	const buy = () => {
		if (totalPrice <= coins) {
			dispatch(updateCoins(-totalPrice));
			dispatch(updateItems(products));
			dispatch(updateRanking(totalRanking));
			dispatch(cart.actions.emptyCart())
			setOpen(false);
			setOpenConfirmation(true);
		} else {
			setOpenFail(true);
			setOpen(false);
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
					<DialogHeader>
						<HeaderText>Product</HeaderText>
						<HeaderText>Quantity</HeaderText>
						<HeaderText>Price</HeaderText>
					</DialogHeader>
					{products.map((product) => (
						<CartItem key={product.id} product={product} />
					))}
					<TotalPrice>Total Price: {totalPrice}$</TotalPrice>
					<TotalRanking>Total Ranking: {totalRanking} <Icon /></TotalRanking>
					<BuyButton onClick={buy}>Buy</BuyButton>
				</DialogContainer>
			</Dialog>
			<ShoppingCart>
				<ShoppingButton>
					<ItemsBadge><ItemsBadgeText>{products.length}</ItemsBadgeText></ItemsBadge>
					<LocalGroceryStoreIcon fontSize='large' onClick={onToggleDialog} />
				</ShoppingButton>
			</ShoppingCart>
			<ConfirmationDialogs 
				openConfirmation={openConfirmation} 
				onConfirmed={onConfirmed} 
				openFail={openFail} 
				onFail={onFail} />
		</CartWrapper>
	);
};