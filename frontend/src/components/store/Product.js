import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cart } from '../../reducers/cart';
import styled from 'styled-components';

import Dialog from '@material-ui/core/Dialog';

export const Product = ({ product }) => {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);

	const addProduct = () => {
		dispatch(cart.actions.addItem(product));
		setOpen(!open);
		setTimeout(() => {
			setOpen(false);
		}, 1200);
	};

	return (
		<ProductWrapper>
			<Dialog open={open} onClose={addProduct}>
				<DialogContainer>
					<Icon>{}</Icon>
					<Text>{product.title}</Text>
					<Text>{product.price}:-</Text>
				</DialogContainer>
			</Dialog>
			<ProductImage src={`../../assets/${product.image}`} alt={product.title} />
			<img src='../../assets/soap.jpg' alt='test' />
			<Wrapper1>
				<TextWrapper>
					<TitleBotWrapper>
						<Text>{product.title}</Text>
						<AddButton
							type='button'
							disabled={product.inventory === 0}
							onClick={addProduct}
						>
							Add to cart
						</AddButton>
					</TitleBotWrapper>
					<TextDescription>{product.description}</TextDescription>
					<Text>{product.price}:-</Text>
				</TextWrapper>
			</Wrapper1>
		</ProductWrapper>
	);
};

const ProductImage = styled.img``;

const DialogContainer = styled.div`
	background-color: ${(props) => props.theme.backgroundColor};
	border: 2px solid ${(props) => props.theme.primary};
	display: flex;
	flex-direction: column;
	padding: 20px;
	color: ${(props) => props.theme.textColor};
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

const ProductWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 200px;
	margin-bottom: 10px;
	aline-items: center;
	justify-content: center;
	padding: 10px;
	border: 2px solid ${(props) => props.theme.primary};

	@media (min-width: 768px) {
		max-width: 45%;
		padding: 5px;
		margin: 10px;
	}
	@media (min-width: 1200px) {
		max-width: 25%;
	}
`;

const TextWrapper = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	margin: 0;
`;

const TitleBotWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Wrapper1 = styled.div`
	display: flex;
	align-items: center;
	justify-content: column;
	margin: 10px;
`;

const Icon = styled.image``;
const Text = styled.h3`
	color: ${(props) => props.theme.textColor};
	margin: 0;
`;

const TextDescription = styled.p`
	color: ${(props) => props.theme.textColor};
	margin: 5;
`;
