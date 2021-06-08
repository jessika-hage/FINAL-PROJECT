import React from 'react';
import { useDispatch } from 'react-redux';
import { cart } from '../../reducers/cart';
import styled from 'styled-components';
import { Label } from '@material-ui/icons';

export const Product = ({ product }) => {
	const dispatch = useDispatch();

	return (
		<ProductWrapper>
			<Icon>{product.emoji}</Icon>
			<Wrapper1>
				<TextWrapper>
					<Text>{product.title}</Text>
					<TextDescription>{product.description}</TextDescription>
				</TextWrapper>
			</Wrapper1>
			<Wrapper2>
				<Text>{product.price}:-</Text>

				<AddBotton
					type='button'
					disabled={product.inventory === 0}
					onClick={() => dispatch(cart.actions.addItem(product))}
				>
					Add to cart
				</AddBotton>
			</Wrapper2>
		</ProductWrapper>
	);
};

const AddBotton = styled.button`
	margin-left: 40px;
	border-radius: 5px;
	height: 35px;
`;

const ProductWrapper = styled.div`
	display: flex;
	width: 80%;
	aline-items: center;
	justify-content: center;
	border-bottom: 4px solid ${(props) => props.theme.secundary};
`;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0;
`;

const Wrapper1 = styled.div`
	display: flex;
	width: 40%;
	align-items: center;
	justify-content: space-between;
	margin: 10px;
`;
const Wrapper2 = styled.div`
	display: flex;
	width: 20%;
	align-items: center;
	justify-content: flex-end;
	margin: 10px;
`;

const Icon = styled.image``;
const Text = styled.h4`
	color: ${(props) => props.theme.textColor};
`;

const TextDescription = styled.p`
	color: ${(props) => props.theme.textColor};
`;
