import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Countdown from 'react-countdown';
import moment from 'moment';

// import { CITIZEN_URL } from '../reusable/Urls';
import { profile, updateBadges } from '../reducers/profile';
import { ThemeButtons } from '../components/ThemeButtons';

export const Profile = () => {
	//   const [mode, setMode] = useState('');
	const accessToken = useSelector((store) => store.profile.accessToken);
	const username = useSelector((store) => store.profile.username);
	const userId = useSelector((store) => store.profile.userId);
	const badges = useSelector((store) => store.profile.badges);
	const dispatch = useDispatch();

	return (
		<ProfileContainer>
			<TopContainer>
				<ImageNameContainer>
					<ProfileImg></ProfileImg>
					<TextContainer>
						<Username>{username}</Username>
						<PointsText>{badges} Badges</PointsText>
						<PointsText>4.2/10 Ranking</PointsText>
					</TextContainer>
				</ImageNameContainer>
				<DaysContainer>
					<DaysText>Days on ship: 4</DaysText>
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
					<TaskTitle>Tasks for today</TaskTitle>
				</RightContainer>
			</BottomContainer>
			<ThemeButtons text='Change your spaceship color:' />
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
	width: 50%;
	height: 100%;
`;

const ProfileImg = styled.img`
	width: 70px;
	height: 70px;
	border-radius: 50%;
	background-image: url('https://www.fillmurray.com/100/100');
	background-size: cover;
	margin-right: 10px;
	cursor: pointer;
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px 0 20px 0;
	width: 50%;
`;

const DaysContainer = styled(TextContainer)`
	padding-left: 20px;
	margin: 0;
	height: 100%;
	border-left: 2px solid ${(props) => props.theme.secondary};
`;

const Username = styled.h3`
	font-size: 16px;
	font-weight: bold;
	margin: 3px 0 3px 3px;
	color: ${(props) => props.theme.textColor};
	text-transform: uppercase;
	font-family: 'Trispace';
`;

const PointsText = styled.p`
	font-size: 14px;
	margin: 2px 0 2px 3px;
	color: ${(props) => props.theme.textColor};
	font-family: 'Trispace';
`;

const DaysText = styled(PointsText)`
	font-weight: bold;
`;

const BottomContainer = styled.div`
	display: flex;
	height: 100%;
	margin: 0;
	border-bottom: 2px solid ${(props) => props.theme.secondary};
`;

const LeftContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	padding: 10px;
`;

const RightContainer = styled(LeftContainer)`
	padding-left: 20px;
	border-left: 2px solid ${(props) => props.theme.secondary};
`;

const TaskTitle = styled(Username)`
	font-size: 15px;
`;
