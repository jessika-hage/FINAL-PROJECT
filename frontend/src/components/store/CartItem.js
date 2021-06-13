import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { cart } from '../../reducers/cart';

export const CartItem = ({ product }) => {
	const dispatch = useDispatch();

	return (
		<ItemContainer>
			<ImageTitleBox>
				<ProductImage src={require(`./assets/${product.image}`)} alt={product.title} />
				<ProductText>{product.title}</ProductText>
			</ImageTitleBox>
			<ButtonContainer>
				<AddDeleteButton 
					type='button' 
					onClick={() => dispatch(cart.actions.removeItem(product))}>
				-
				</AddDeleteButton>
				<ProductText>{product.quantity}</ProductText>
				<AddDeleteButton 
					type='button'
					onClick={() => dispatch(cart.actions.addItem(product))}>
					+
				</AddDeleteButton>
			</ButtonContainer>
			<ProductText>{product.price * product.quantity}$</ProductText>
		</ItemContainer>
	);
};

const ItemContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	border-bottom: 1px solid ${props => props.theme.secondary};
	padding: 8px 0 5px 0;
	min-width: 300px;
`;

const ImageTitleBox = styled.div`
	display: flex;
	align-items: center;
`;

const ProductImage = styled.img`
	height: 30px;
	margin: 0 5px 0 0;
`;

const ProductText = styled.p`
	font-size: 13px;
	color: ${props => props.theme.textColor};
	margin: 0;
`;

const ButtonContainer = styled.div`
	display: flex;	
	margin-left: 5px;
	align-items: center;
`;

const AddDeleteButton = styled.button`
	padding: 0 3px;
	background-color: transparent;
	color: ${props => props.theme.textColor};
	font-weight: bold;
	font-size: 16px;
	margin: 0 2px;
	:hover {
		color: ${(props) => props.theme.secondary};
	}
`;