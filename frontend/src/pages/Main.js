import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RollingInfoBar } from '../components/rollingInfoBar/RollingInfoBar';
import { Header } from '../components/Header';
import { Camera } from '../components/Camera';
import { Map } from '../components/Map';
import { EntertainmentCard } from '../components/descriptioncards/EntertainmentCard';
import { NutritionCard } from '../components/descriptioncards/NutritionCard';
import { LeaderBoard } from '../components/LeaderBoard';

export const Main = () => {
	const accessToken = useSelector((store) => store.profile.accessToken);

	const history = useHistory();

	useEffect(() => {
		if (!accessToken) {
			history.push('/signin');
		}
	}, [accessToken, history]);

	return (
		<MainContainer>
			<Header />
			<Camera />
			<Container>
				<MapContainer>
					<Map />
				</MapContainer>
			</Container>
			<BottomContainer>
				<WrapperCard>
					<CardTitle>Today on the ship</CardTitle>
					<CardContainer>
						<NutritionCard />
						<EntertainmentCard />
					</CardContainer>
				</WrapperCard>
				<WrapperLeaderBoard>
					<CardTitle>Citizens Leaderboard</CardTitle>
					<CitizensContainer>
						<LeaderBoard />
					</CitizensContainer>
				</WrapperLeaderBoard>
				<RollingInfoBar />
			</BottomContainer>
		</MainContainer>
	);
};

const MainContainer = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${(props) => props.theme.backgroundColor};
	width: 100%;
	min-height: 100vh;
	position: relative;
	overflow: auto;
`;

const Container = styled.section`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 0 20px;
	@media (min-width: 768px) {
		margin-top: 50px;
		padding: 0 40px;
	}
`;

const MapContainer = styled.div`
	width: 100%;
	@media (min-width: 768px) {
		width: 80%;
		height: 35vh;
		display: flex;
	}
`;

const BottomContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 20px;
	margin: 40px 0 100px 0;
	@media (min-width: 768px) {
		padding: 0 40px;
		flex-direction: row;
		justify-content: space-evenly;
		margin: 40px 0 80px 0;
		align-items: flex-start;
	}
`;

const WrapperCard = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 10px;
	@media (min-width: 768px) {
		flex-wrap: wrap;
		padding: 0;
		width: 40%;
	}
`;

const WrapperLeaderBoard = styled(WrapperCard)`
	@media (min-width: 768px) {
		width: 60%;
	}
`;

const CardTitle = styled.h4`
	text-transform: uppercase;
	color: ${(props) => props.theme.textColor};
	padding: 7px 10px;
	margin: 0;
	background-color: ${(props) => props.theme.primary};
	@media (min-width: 768px) {
		width: fit-content;
	}
`;

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 100%;
	background-color: ${(props) => props.theme.backgroundColor};
	border: 2px solid ${(props) => props.theme.primary};
	box-shadow: rgba(149, 157, 165, 0.1) 0px 2px 8px;
	@media (min-width: 768px) {
		flex-wrap: wrap;
		padding: 0;
		width: 100%;
	}
`;

const CitizensContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 100%;
	background-color: ${(props) => props.theme.backgroundColor};
	border: 2px solid ${(props) => props.theme.primary};
	box-shadow: rgba(149, 157, 165, 0.1) 0px 2px 8px;
	@media (min-width: 768px) {
		flex-wrap: wrap;
		padding: 0;
		width: 100%;
		// min-height: 320px;
	}
`;

// const RightContainer = styled.div`
// 	width: 100%;
// 	margin: 0;
// 	background-color: ${props => props.theme.backgroundColor};
// 	border: 2px solid ${props => props.theme.primary};
// 	box-shadow: rgba(149, 157, 165, 0.1) 0px 2px 8px;
// 	@media (min-width: 768px) {
// 		width: 35%;
// 	}
// `;

// const ThinnerCard = styled(Card)`
// 	width: 100%;
// 	margin: 0;
// 	cursor: pointer;
// 	border-bottom: 2px solid ${props => props.theme.primary};
// 	:hover {
// 		background-color: ${props => props.theme.primary};
// 	}
// `;
