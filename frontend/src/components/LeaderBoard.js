import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const LeaderBoard = () => {
	return (
		<TableContainer>
			<TableHead>
				<TableCell>Citizen</TableCell>
				<TableCell>Status</TableCell>
				<TableCell>Days on Ship</TableCell>
				<TableCell>Carbs&nbsp;(g)</TableCell>
				<TableCell>Protein&nbsp;(g)</TableCell>
			</TableHead>
			{/* {rows.map((row) => ( */}
			<CitizensList>
				<Citizen></Citizen>
				<Citizen>hej</Citizen>
				<Citizen>hej</Citizen>
				<Citizen>hej</Citizen>
				<Citizen>hej</Citizen>
			</CitizensList>
			{/* ))} */}
		</TableContainer>
	);
};

const TableContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 20px;
	background-color: ${(props) => props.theme.primary};
	border: 2px solid ${(props) => props.theme.secondary};
`;

const TableHead = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 2px solid ${(props) => props.theme.secondary};
`;

const TableCell = styled.h5``;

const Citizen = styled.p``;

const CitizensList = styled.div`
	display: flex;
	border-bottom: 2px solid ${(props) => props.theme.secondary};
`;
