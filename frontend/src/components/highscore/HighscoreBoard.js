import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';

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
	Citizen,
	Score,
	MathIcon,
	FishIcon } from './Styling';

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
		<>
					<TableHead>
				<TableTitle>Citizen</TableTitle>
				<TableTitleLinks onClick={() => setSort('highscoreSpaceball')}><BubbleChartIcon fontSize='large' /></TableTitleLinks>
				<TableTitleLinks onClick={() => setSort('highscoreFish')}><FishIcon /></TableTitleLinks>
        <TableTitleLinks onClick={() => setSort('highscoreMath')}><MathIcon /></TableTitleLinks>
			</TableHead>
		<TableContainer>
			{highscoreBoard.map((citizen, index) => (
				<CitizensList key={citizen._id}>
          <PositionContainer>
          <Position>{index +1}. </Position>
           <CitizenAvatar src={require(`../../assets/${citizen.avatar}.png`)} />
           <Citizen>
					 {user === citizen.username ? 'Me' : citizen.username}
          </Citizen>
          </PositionContainer>
					<Score>{citizen.highscoreSpaceball}p</Score>
          <Score>{citizen.highscoreFish}p</Score>
          <Score>{citizen.highscoreMath}p</Score>
				</CitizensList>
			 ))}
		</TableContainer>
		</>
	);
};