import React from 'react';

import { Classroom } from './Classroom';
import { Bedroom } from './Bedroom';
import { Restaurant } from './Restaurant';
import { Garden } from './Garden';
import { Store } from './Store';
import { Info } from './Info';
import { Gym } from './Gym';
import { Memory } from './Memory';
import { Farm } from './Farm';
import { Doctor } from './Doctor';
import { GridContainer } from './Styling';

export const Map = () => {
	return (
		<GridContainer>
			<Classroom />
			<Bedroom />
			<Restaurant />
			<Garden />
			<Store />
			<Info />
			<Gym />
			<Memory />
			<Farm />
			<Doctor />
		</GridContainer>
	);
};
