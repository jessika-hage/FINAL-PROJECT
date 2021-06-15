import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';
import Dialog from '@material-ui/core/Dialog';

import { cart } from '../../reducers/cart';

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
		<Main>
			<Dialog open={open} onClose={addProduct}>
				<DialogContainer>
					<ImageDialogWrapper>
						<ImageDialog
							src={require(`./assets/${product.image}`)}
							alt={product.title}
						/>
					</ImageDialogWrapper>
					<ProductContainer>
						<AddedText>Added to cart</AddedText>
						<Text>{product.title}</Text>
						<Text>{product.price}$</Text>
					</ProductContainer>
				</DialogContainer>
			</Dialog>

			<ProductWrapper>
				<ImageWrapper>
					<ProductImage
						src={require(`./assets/${product.image}`)}
						alt={product.title}
					/>
				</ImageWrapper>
				<TextWrapper>
					<Text>{product.title}</Text>
					<TextDescription>{product.description}</TextDescription>
					<Text>{product.price}$</Text>
					<TextDescription>Ranking: {product.ranking} <Icon /></TextDescription>
					<AddButton
						type='button'
						disabled={product.inventory === 0}
						onClick={addProduct}
					>
						Add to cart
					</AddButton>
				</TextWrapper>
			</ProductWrapper>
		</Main>
	);
};

const ProductImage = styled.img`
	width: 300px;
	margin: 0;

	@media (min-width: 768px) {
		width: 300px;
		padding: 5px;
	}
	@media (min-width: 1200px) {
		max-width: 330px;
	}
`;

const ImageWrapper = styled.div`
	margin: 0;
	display: flex;
	justify-items: center;
	align-items: center;
	background-color: ${(props) => props.theme.secondary};
`;

const ProductWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-items: center;
	align-items: center;
`;

const ProductContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const AddedText = styled.p`
	font-size: 16px;
	text-transform: uppercase;
	padding-bottom: 3px;
	border-bottom: 2px solid ${(props) => props.theme.primary};
`;

const AddButton = styled.button`
	padding: 5px;
	margin-top: 10px;
	font-size: 12px;
	width: fit-content;
	text-transform: uppercase;
	font-family: 'Trispace', serif;
	background-color: ${(props) => props.theme.primary};
	color: ${(props) => props.theme.textColor};
	border: 2px solid ${(props) => props.theme.secondary};
	:hover,
	:focus {
		background-color: ${(props) => props.theme.secondary};
	}
`;

const Main = styled.div`
	display: flex;
	margin: 5px;
	width: 350;
	// height: 500px;
	margin-bottom: 10px;
	aline-items: center;
	justify-content: center;
	padding: 5px;
	border: 2px solid ${(props) => props.theme.primary};

	@media (min-width: 768px) {
		width: 320px;
		padding: 5px;
	}
	@media (min-width: 1200px) {
		width: 350px;
	}
`;

const TextWrapper = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: space-evenly;
	padding: 7px 7px 7px 13px;
	margin: 0;
`;

const Text = styled.p`
	color: ${(props) => props.theme.textColor};
	margin: 3px 0;
	padding: 0;
	font-size: 15px;
	text-transform: uppercase;
`;

const TextDescription = styled.p`
	color: ${(props) => props.theme.textColor};
	margin: 2px 0;
	font-size: 14px;
	display: flex;
	align-items: center;
`;

const Icon = styled(FaArrowUp)`
	color: green;
	margin-left: 5px;
`;
const DialogContainer = styled.div`
	background-color: ${(props) => props.theme.backgroundColor};
	border: 2px solid ${(props) => props.theme.primary};
	display: flex;
	padding: 10px;
	height: 150px;
	color: ${(props) => props.theme.textColor};
`;

const ImageDialogWrapper = styled.div`
	margin-right: 5px;
`;
const ImageDialog = styled.img`
	background-color: ${(props) => props.theme.secondary};
	padding: 7px 2px;
	margin-right: 10px;
	height: 120px;
`;
