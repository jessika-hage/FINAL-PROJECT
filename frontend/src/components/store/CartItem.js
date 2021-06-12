import React from 'react';
import { useDispatch } from 'react-redux';
import { cart } from '../../reducers/cart';

export const CartItem = ({ product }) => {
	const dispatch = useDispatch();

	return (
		<li>
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
