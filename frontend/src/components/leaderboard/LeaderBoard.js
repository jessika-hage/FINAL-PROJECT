import React, { useEffect, useState, useCallback } from 'react';
import moment from 'moment';

import { CITIZEN_URL } from '../../reusables/urls';
import { 
	TableContainer, 
	TableHead, 
	TableTitle, 
	TableTitleLinks, 
	CitizenDaysLink, 
	CitizensList, 
	CitizenAvatar, 
	Citizen,
	CitizenDays } from './Styling';

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
					<CitizenAvatar src={require(`../../assets/${citizen.avatar}.png`)} />
					<Citizen>{citizen.username}</Citizen>
					<Citizen>{citizen.ranking}/100</Citizen>
					<CitizenDays>{moment(citizen.createdAt).toNow(true)}</CitizenDays>
					<Citizen>{citizen.badges}</Citizen>
					<Citizen>{citizen.coins.toFixed(2)}</Citizen>
				</CitizensList>
			 ))}
		</TableContainer>
	);
};