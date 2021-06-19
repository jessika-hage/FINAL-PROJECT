import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import Icon from '@material-ui/core/Icon';

import { CITIZEN_URL } from '../../reusables/urls';
import { 
	TableContainer, 
	TableHead, 
	TableTitle, 
  TableTitleLinks,
	CitizensList, 
  PositionContainer,
  Position,
	CitizenAvatar, 
	Citizen } from './Styling';

export const HighscoreBoard = () => {
	const [highscoreBoard, setHighscoreBoard] = useState([]);
  const [sort, setSort] = useState('highscoreSpaceball');
  const user = useSelector((store) => store.profile.username);

	useEffect(() => {
    fetch(CITIZEN_URL(`citizens?sort=${sort}`))
    .then((res) => res.json())
    .then((data) => setHighscoreBoard(data.allCitizens))
    .catch((err) => console.error(err));
	}, [sort]);


	return (
		<TableContainer>
			<TableHead>
				<TableTitle>Citizen</TableTitle>
				<TableTitleLinks onClick={() => setSort('highscoreSpaceball')}><BubbleChartIcon fontSize='large' /></TableTitleLinks>
				<TableTitleLinks onClick={() => setSort('highscoreFish')}><InvertColorsIcon fontSize='large' /></TableTitleLinks>
        <TableTitleLinks onClick={() => setSort('highscoreMath')}><Icon className='fa fa-calculator' /></TableTitleLinks>
			</TableHead>
			{highscoreBoard.map((citizen, index) => (
				<CitizensList key={citizen._id}>
          <PositionContainer>
          <Position>{index +1}. </Position>
           <CitizenAvatar src={require(`../../assets/${citizen.avatar}.png`)} />
           <Citizen>
					 {user === citizen.username ? 'Me' : citizen.username}
          </Citizen>
          </PositionContainer>
					<Citizen>{citizen.highscoreSpaceball}p</Citizen>
          <Citizen>{citizen.highscoreFish}p</Citizen>
          <Citizen>{citizen.highscoreMath}p</Citizen>
				</CitizensList>
			 ))}
		</TableContainer>
	);
};