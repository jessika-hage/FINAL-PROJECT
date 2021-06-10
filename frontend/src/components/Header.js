import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
	//använd
import Drawer from '@material-ui/core/Drawer';
import { Tooltip } from '@material-ui/core';
import { FaUserAstronaut, FaCommentDots } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Profile } from '../pages/Profile';
import { MessageBoard } from './messageboard/MessageBoard';

export const Header = () => {
	//använd
const [openForm, setOpenForm] = useState(false);
	const [openMessageBoard, setOpenMessageBoard] = useState(false);
	const today = moment().add(60, 'year').format('DD/MM YYYY');

	return (
		<Main>
			<TitleDate>
				<NavLink to='/'>Citizen Ship</NavLink>
				<Date>{today}</Date>
			</TitleDate>
			<IconsContainer>
			<Tooltip title='Citizens Messageboard'>
				<MessageIcon onClick={() => setOpenMessageBoard(true)}>
					<FaCommentDots />
				</MessageIcon>
				</Tooltip>
				<Tooltip title='My Profile'>
					<ProfilImg onClick={() => setOpenForm(true)}>
						<FaUserAstronaut />
					</ProfilImg>
				</Tooltip>
			</IconsContainer>
			<Drawer anchor='right' open={openMessageBoard} onClose={() => setOpenMessageBoard(false)}>
				<MessageBoard onClick={() => setOpenMessageBoard(false)} />
			</Drawer>
			<Drawer anchor='bottom' open={openForm} onClose={() => setOpenForm(false)}>
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
	height: 60px;
	background-color: ${props => props.theme.primary};
	position: fixed;
	margin: 0;
	width: 100%;
	bottom: 0;
	z-index: 1;
	@media (min-width: 768px) {
		top: 0;
		height: 80px;
	}
`;

const TitleDate = styled.div`
	display: flex;
	flex-direction: column;
`;

const NavLink = styled(Link)`
	margin: 0;
	padding: 0 0 2px 20px;
	color: ${props => props.theme.textColor};
	font-family: 'Trispace';
	text-transform: uppercase;
	font-size: 24px;
`;

const Date = styled.p`
	padding 0 20px;
	margin: 0;
	font-size: 12px;
	color: ${(props) => props.theme.textColor};
	font-family: "Trispace";
	@media (min-width: 768px) {
		font-size: 14px;
	}
`;

const IconsContainer = styled.div`
	display: flex;
	align-items: center;
	color: ${(props) => props.theme.textColor};
`;

const MessageIcon = styled.button`
font-size: 26px;
border: none;
outline: none;
border-radius: 50%;
padding: 8px;
background-color: ${props => props.theme.secondary};
color: ${props => props.theme.textColor};
margin-right: 7px;
cursor: pointer;
display: flex;
align-items: center;
margin-left: 5px;
cursor: pointer;
:hover {
	background-color: ${props => props.theme.hover};
	transform: scale(1.05);
}
@media (min-width: 768px) {
	font-size: 32px;
	padding: 10px;
}
`;

const ProfilImg = styled(MessageIcon)`
	margin-right: 20px;
`;

const DrawerContainer = styled.section`
	height: 500px;
	background-color: ${(props) => props.theme.primary};
`;
