import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { updateBadges } from '../reducers/profile';
import { MemoryBoard } from '../components/memory/MemoryBoard';
import { FinishDialog } from '../components/memory/FinishDialog';
import { Header } from '../components/header/Header';
import { Camera } from '../components/header/Camera';
import { BadgesAnimation } from '../components/animations/BadgesAnimation';
import { GAME_STATUS } from '../components/memory/constants';
import { MainContainer } from '../components/memory/Styling';

export const MemoryGame = () => {
	const [openWin, setOpenWin] = useState(false);
	const [gameStatus, setGameStatus] = useState(GAME_STATUS.CREATING);
	const [gameResults, setGameResults] = useState({});
	const [animation, setAnimation] = useState(false);
	const accessToken = useSelector((store) => store.profile.accessToken);

	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		if (!accessToken) {
			history.push('/signin');
		}
	}, [accessToken, history]);

	// Checking for game updates
	// If status is finished, set win dialog
	const handleStatusUpdate = (newStatus, results) => {
		setGameStatus(newStatus);
		if (newStatus === GAME_STATUS.FINISHED) {
			setGameResults(results);
			setOpenWin(true);
		}
	};

	// Collect badges when finished game
	const handleCollectBadges = () => {
		setOpenWin(false);
		setAnimation(true);
		dispatch(updateBadges(10));
		setTimeout(() => {
			history.push('/');
		}, 2000);
	};

	return (
		<>
			<Header />
			<Camera />
			<MainContainer>
				<MemoryBoard
					gameStatus={gameStatus}
					onGameUpdate={handleStatusUpdate}
					onReset={handleStatusUpdate}
				/>
				{gameStatus === GAME_STATUS.FINISHED && (
					<FinishDialog
						openWin={openWin}
						results={gameResults}
						handleCollect={handleCollectBadges}
					/>
				)}
			{animation && <BadgesAnimation text='10' />}
		</MainContainer>
		</>
	)
};
