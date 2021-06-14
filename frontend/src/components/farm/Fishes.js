import React, { useEffect, useState } from 'react';

import {
	Icon1,
	Icon2,
	Icon3,
	Icon4,
	Icon5,
	Icon6,
	Icon7,
	Icon8,
	Icon9,
} from './Styling';

export const Fishes = () => {
	const [score, setScore] = useState(0);

	const onClickEasy = () => {
		setScore(score + 2);
	};

	return (
		<>
			<Icon1 src={require('./assets/fish.png')} onClick={onClickEasy} />
			<Icon2 src={require('./assets/fish.png')} onClick={onClickEasy} />
			<Icon3 src={require('./assets/fish.png')} onClick={onClickEasy} />
			<Icon4 src={require('./assets/fish.png')} onClick={onClickEasy} />
			<Icon5 src={require('./assets/fish.png')} onClick={onClickEasy} />
			<Icon6 src={require('./assets/fish.png')} onClick={onClickEasy} />
			<Icon7 src={require('./assets/fish.png')} onClick={onClickEasy} />
			<Icon8 src={require('./assets/fish.png')} onClick={onClickEasy} />
			<Icon9 src={require('./assets/fish.png')} onClick={onClickEasy} />
		</>
	);
};
