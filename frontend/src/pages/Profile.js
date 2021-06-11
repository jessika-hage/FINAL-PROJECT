import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Countdown from 'react-countdown';
import moment from 'moment';
import { FaSignOutAlt } from 'react-icons/fa';

import { profile } from '../reducers/profile';
import { ThemeButtons } from '../components/ThemeButtons';
import { ItemsProfile } from './ItemsProfile';

export const Profile = () => {
	const username = useSelector((store) => store.profile.username);
	const created = useSelector((store) => store.profile.created);
	const badges = useSelector((store) => store.profile.badges);
	const ranking = useSelector((store) => store.profile.ranking);
	const coins = useSelector((store) => store.profile.coins);
	const products = useSelector((store) => store.cart.myItems);

	const dispatch = useDispatch();

	return (
		<ProfileContainer>
			<TopContainer>
				<ImageNameContainer>
					<ProfileAvatar src={require(`../assets/hacker.png`)} />
					<TextContainer>
						<Username>{username}</Username>
						<PointsText><IconImage src={require(`../assets/badge.png`)} /> {badges}</PointsText>
						<PointsText>{ranking}/100 Ranking</PointsText>
						<PointsText><IconImage src={require(`../assets/money2.png`)} /> {coins}</PointsText>
					</TextContainer>
				</ImageNameContainer>
				<DaysContainer>
					<DaysText>Days on ship: {moment(created).toNow(true)}</DaysText>
					<DaysText>
						Days to destination: <Countdown date={moment().add(3500, 'day')} />
					</DaysText>
				</DaysContainer>
			</TopContainer>
			<BottomContainer>
				<LeftContainer>
					<TaskTitle>Tasks for today</TaskTitle>
				</LeftContainer>
				<RightContainer>
					<TaskTitle>My items</TaskTitle>
					<ItemsContainer>
						{products.map((product) => (
							<ItemsProfile item={product} />
						))}
					</ItemsContainer>
				</RightContainer>
			</BottomContainer>
			<LastContainer>
			<ThemeButtons text='Change your spaceship color:' />
			<ButtonSignOut onClick={() => dispatch(profile.actions.setLogOut())}>
			<FaSignOutAlt />
			</ButtonSignOut>
			</LastContainer>
		</ProfileContainer>
	);
};

const ProfileContainer = styled.section`
	display: flex;
	flex-direction: column;
	padding: 20px;
	height: 100%;
`;

const TopContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 2px solid ${(props) => props.theme.secondary};
	padding-bottom: 0px;
	width: 100%;
	margin: 0;
`;

const ImageNameContainer = styled.div`
	display: flex;
	align-items: center;
	width: 40%;
	height: 100%;
`;

const ProfileAvatar = styled.img`
	width: 40px;
	height: 40px;
	padding: 2px;
	border-radius: 50%;
	cursor: pointer;
	outline: none;
	border: 1px solid ${props => props.theme.primary};
	background-color: ${props => props.theme.secondary};
	margin: 0 0 0 6px;
	:hover {
		opacity: 0.7;
	}
	@media (min-width: 768px) {
		width: 64px;
		height: 64px;
		padding: 4px;
	}
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px 0 20px 10px;
	width: 50%;
`;

const IconImage = styled.img`
	margin: 0 5px 5px 5px;
`;

const DaysContainer = styled(TextContainer)`
	padding-left: 20px;
	margin: 0;
	height: 100%;
	border-left: 2px solid ${(props) => props.theme.secondary};
`;

const Username = styled.h3`
	font-size: 14px;
	font-weight: bold;
	margin: 3px 0 3px 3px;
	color: ${(props) => props.theme.textColor};
	text-transform: uppercase;
	font-family: 'Trispace';
	@media (min-width: 768px) {
		font-size: 16px;
	}
`;

const PointsText = styled.p`
display: flex;
align-items: center;
	font-size: 12px;
	margin: 2px 0 2px 3px;
	color: ${(props) => props.theme.textColor};
	font-family: 'Trispace';
	@media (min-width: 768px) {
		font-size: 14px;
	}
`;

const DaysText = styled(PointsText)`
	font-weight: bold;
`;

const BottomContainer = styled.div`
	display: flex;
	height: 100%;
	margin: 0;
	border-bottom: 2px solid ${props => props.theme.secondary};
`;

const LeftContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	padding: 10px;
`;

const RightContainer = styled(LeftContainer)`
	display: flex; 
  padding-left: 20px;
  border-left: 2px solid ${(props) => props.theme.secondary};
`;

const ItemsContainer = styled.div`
	margin-left: 7px;
`;

const TaskTitle = styled(Username)`
	font-size: 15px;
`;

const LastContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const ButtonSignOut = styled.button`
  outline: none;
  border: none;
  margin-top: 10px;
  background-color: transparent;
  font-size: 30px;
  cursor: pointer;
  color: ${props => props.theme.textColor};
  :hover {
	color: ${props => props.theme.hover};
  }
`;

