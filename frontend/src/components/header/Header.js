import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Drawer from '@material-ui/core/Drawer';
import { Tooltip } from '@material-ui/core';
import { FaCommentDots } from 'react-icons/fa';

import { Profile } from '../profile/Profile';
import { MessageBoard } from '../messageboard/MessageBoard';
import { 
	Main, 
	TitleDate, 
	NavLink, 
	Date, 
	IconsContainer, 
	MessageIcon, 
	ProfilImg, 
	Avatar, 
	DrawerContainer } from './Styling';

export const Header = () => {
	const [openProfile, setOpenProfile] = useState(false);
	const [openMessageBoard, setOpenMessageBoard] = useState(false);
	const avatar = useSelector((store) => store.profile.avatar);
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
					<ProfilImg onClick={() => setOpenProfile(true)}>
						<Avatar src={require(`../../assets/${avatar}.png`)} />
					</ProfilImg>
				</Tooltip>
			</IconsContainer>
			<Drawer anchor='right' open={openMessageBoard} onClose={() => setOpenMessageBoard(false)}>
				<MessageBoard onClick={() => setOpenMessageBoard(false)} />
			</Drawer>
			<Drawer anchor='right' open={openProfile} onClose={() => setOpenProfile(false)}>
				<DrawerContainer>
					<Profile />
				</DrawerContainer>
			</Drawer>
		</Main>
	);
};