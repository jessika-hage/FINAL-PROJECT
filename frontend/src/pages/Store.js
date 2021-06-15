import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { Products } from '../components/store/Products';
import { Header } from '../components/Header';
import { Camera } from '../components/Camera';

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

const Wrapper = styled.div`
	background-color: ${(props) => props.theme.backgroundColor};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

const Main = styled.main`
	background-color: ${(props) => props.theme.backgroundColor};
`;
