import React from 'react';
import { useDispatch } from 'react-redux';
import { cart } from '../../reducers/cart';

export const CartItem = ({ product }) => {
	const dispatch = useDispatch();

	return (
		<li>
			<span className='emoji' role='img' aria-label={product.title}>
				{product.emoji}
			</span>
			<div className='info'>
				<span className='quantity'>x{product.quantity}</span>
				<p>Price:</p>
				<span className='sum'>{product.price * product.quantity}:-</span>
			</div>

			<span className='actions'>
				<button
					type='button'
					onClick={() => dispatch(cart.actions.removeItem(product))}
				>
					-
				</button>
				<button
					type='button'
					onClick={() => dispatch(cart.actions.addItem(product))}
				>
					+
				</button>
			</span>
		</li>
	);
};

export const CloseIcon = styled.button`
	outline: none;
	border: none;
	position: absolute;
	top: 10px;
	right: 10px;
	background-color: transparent;
	font-size: 20px;
	color: ${(props) => props.theme.textColor};
	:hover,
	:focus {
		color: ${(props) => props.theme.hover};
	}
`;
