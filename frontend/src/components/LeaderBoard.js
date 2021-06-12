import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { CITIZEN_URL } from '../reusables/urls';

export const LeaderBoard = () => {
	const [leaderBoard, setLeaderBoard] = useState([]);
	const [sort, setSort] = useState('highestRanking');

	const fetchCitizens = useCallback(() => {
		fetch(CITIZEN_URL(`citizens?sort=${sort}`))
			.then((res) => res.json())
			.then((data) => setLeaderBoard(data.allCitizens))
			.catch((err) => console.error(err));
	}, [sort])

	useEffect(() => {
		fetchCitizens();
	}, [fetchCitizens]);


	return (
		<TableContainer>
			<TableHead>
				<TableTitle>Citizen</TableTitle>
				<TableTitleLinks onClick={() => setSort('highestRanking')}>Ranking</TableTitleLinks>
				<CitizenDaysLink onClick={() => setSort('senior')}>Days on Ship</CitizenDaysLink>
				<TableTitleLinks onClick={() => setSort('mostBadges')}>Badges</TableTitleLinks>
				<TableTitleLinks onClick={() => setSort('richest')}>Coins</TableTitleLinks>
			</TableHead>
			{leaderBoard.map((citizen) => (
				<CitizensList key={citizen._id}>
					<Citizen>{citizen.username}</Citizen>
					<Citizen>{citizen.ranking}/100</Citizen>
					<CitizenDays>{moment(citizen.createdAt).toNow(true)}</CitizenDays>
					<Citizen>{citizen.badges}</Citizen>
					<Citizen>{citizen.coins}</Citizen>
				</CitizensList>
			 ))}
		</TableContainer>
	);
};

const TableContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 20px;
	background-color: ${props => props.theme.backgroundColor};
	color: ${props => props.theme.textColor};
	max-height: 320px;
	overflow: scroll;
	&::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border: 2px solid ${props => props.theme.secondary};
  }
`;

const TableHead = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 2px solid ${props => props.theme.secondary};
`;

const TableTitle = styled.div`
	width: 25%;
	padding: 0 0 5px 5px;
	margin: 0;
	font-weight: bold;
	text-transform: uppercase;
	color: ${props => props.theme.textColor};
	font-size: 14px;
`;

const TableTitleLinks = styled(TableTitle)`
	cursor: pointer;
	:hover, :focus {
		text-decoration: underline;
	}
`;

const CitizenDaysLink = styled(TableTitleLinks)`
  display: none;
	@media (min-width: 768px) {
		display: flex;
}
`;

const Citizen = styled.p`
	width: 25%;
	padding: 6px 0 4px 4px;
	margin: 0;
	font-size: 12px;
	@media (min-width: 768px) {
		font-size: 14px;
		padding: 10px 0 7px 5px;
	}
`;

const CitizenDays = styled(Citizen)`
  display: none;
	@media (min-width: 768px) {
		display: flex;
}
`;

const CitizensList = styled.div`
	display: flex;
	border-bottom: 2px solid ${(props) => props.theme.secondary};
`;