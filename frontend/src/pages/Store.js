import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Products } from '../components/store/products/AllProducts';
import { Header } from '../components/header/Header';
import { Camera } from '../components/header/Camera';

import { Wrapper, Main } from 'components/store/Styling';

export const Store = () => {
	const accessToken = useSelector((store) => store.profile.accessToken);

	const history = useHistory();

	useEffect(() => {
		if (!accessToken) {
			history.push('/signin');
		}
	}, [accessToken, history]);

	return (
		<Main>
			<Header />
			<Camera />
			<Wrapper>
				<Products />
			</Wrapper>
		</Main>
	);
};
