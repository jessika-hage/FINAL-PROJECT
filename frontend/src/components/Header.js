import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Drawer from '@material-ui/core/Drawer';
import { Tooltip } from '@material-ui/core';
import { FaUserAstronaut } from 'react-icons/fa';

import { Profile } from '../pages/Profile';

export const Header = () => {
	const [openForm, setOpenForm] = useState(false);
	const today = moment().add(1500, 'year').format('DD/MM YYYY');

	return (
		<Main>
			<TitleDate>
				<Title>Citizen Ship</Title>
				<Date>{today}</Date>
			</TitleDate>
			<Tooltip title='My Profile'>
				<ProfilImg onClick={() => setOpenForm(true)}>
					<FaUserAstronaut />
				</ProfilImg>
			</Tooltip>
			<Drawer
				anchor='bottom'
				open={openForm}
				onClose={() => setOpenForm(false)}
			>
				<DrawerContainer>
					<Profile />
				</DrawerContainer>
			</Drawer>
		</Main>
	);
};

const Main = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100px;
	background-color: ${(props) => props.theme.primary};
	position: fixed;
	margin: 0;
	width: 100%;
	bottom: 0;
	z-index: 1;
	@media (min-width: 768px) {
		top: 0;
	}
`;

const TitleDate = styled.div`
	display: flex;
	flex-direction: column;
`;

const Title = styled.h1`
	margin: 0;
	padding: 0 0 2px 20px;
	color: ${(props) => props.theme.textColor};
	font-family: 'Trispace';
	text-transform: uppercase;
	font-size: 24px;
`;

const Date = styled.p`
  padding 0 20px;
  margin: 0;
  font-size: 14px;
  color: ${(props) => props.theme.textColor};
  font-family: "Trispace";
`;

const ProfilImg = styled.button`
	font-size: 38px;
	border: none;
	outline: none;
	background-color: transparent;
	color: ${(props) => props.theme.textColor};
	margin-right: 20px;
	cursor: pointer;
	display: flex;
	align-items: center;
	cursor: pointer;
	z-index: 5;
	:hover {
		opacity: 0.7;
	}
`;

const DrawerContainer = styled.section`
	height: 500px;
	background-color: ${(props) => props.theme.primary};
`;
