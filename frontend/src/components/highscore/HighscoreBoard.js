import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';

import { CITIZEN_URL } from '../../reusables/urls';
import { 
	TableContainer, 
	TableHead, 
	TableTitle, 
  BubbleTitle,
	FishTitle,
	MathTitle,
	CitizensList, 
  PositionContainer,
  Position,
	CitizenAvatar, 
	Citizen,
	ScoreBubble,
	ScoreFish,
	ScoreMath,
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
			.catch((err) => alert(`Error: ${err}`));
	}, [sort]);


	return (
		<>
			<TableHead>
				<TableTitle>Citizen</TableTitle>
				<BubbleTitle onClick={() => setSort('highscoreSpaceball')}><BubbleChartIcon fontSize='large' /></BubbleTitle>
				<FishTitle onClick={() => setSort('highscoreFish')}><FishIcon /></FishTitle>
        <MathTitle onClick={() => setSort('highscoreMath')}><MathIcon /></MathTitle>
			</TableHead>
			<TableContainer>
				{highscoreBoard.map((citizen, index) => (
					<CitizensList key={citizen._id}>
						<PositionContainer>
							<Position>{index +1}. </Position>
							<CitizenAvatar src={require(`../../assets/${citizen.avatar}.png`)} />
							<Citizen me={user === citizen.username}>
								{citizen.username}
							</Citizen>
						</PositionContainer>
						<ScoreBubble>{citizen.highscoreSpaceball}p</ScoreBubble>
						<ScoreFish>{citizen.highscoreFish}p</ScoreFish>
						<ScoreMath>{citizen.highscoreMath}p</ScoreMath>
					</CitizensList>
				))}
			</TableContainer>
		</>
	)
};