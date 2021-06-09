import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { CITIZEN_URL } from '../reusable/Urls';

export const LeaderBoard = () => {
	const [leaderBoard, setLeaderBoard] = useState([]);

	const fetchCitizens = () => {
		fetch(CITIZEN_URL('citizens'))
			.then((res) => res.json())
			.then((data) => setLeaderBoard(data.allCitizens))
			.catch((err) => console.error(err));
	};

	useEffect(() => {
		fetchCitizens();
	}, []);

	return (
		<TableContainer>
			<TableHead>
				<TableCell>Citizen</TableCell>
				<TableCell>Status</TableCell>
				<TableCell>Days on Ship</TableCell>
				<TableCell>Badges</TableCell>
			</TableHead>
			{leaderBoard.map((citizen) => (
				<CitizensList key={citizen._id}>
					<Citizen>{citizen.username}</Citizen>
					<Citizen></Citizen>
					<Citizen>{moment(citizen.createdAt).toNow(true)}</Citizen>
					<Citizen>{citizen.badges}</Citizen>
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
	background-color: ${(props) => props.theme.backgroundColor};
	color: ${(props) => props.theme.textColor};
`;

const TableHead = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 2px solid ${(props) => props.theme.secondary};
`;

const TableCell = styled.h5`
	width: 25%;
	padding: 5px;
	margin: 0;
	text-transform: uppercase;
`;

const Citizen = styled.p`
	width: 25%;
	padding: 10px 0 10px 5px;
	margin: 0;
	font-size: 14px;
`;

const CitizensList = styled.div`
	display: flex;
	border-bottom: 2px solid ${(props) => props.theme.secondary};
`;
