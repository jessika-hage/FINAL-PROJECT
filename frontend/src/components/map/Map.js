import React from 'react';

import { Classroom } from './Classroom';
import { Bedroom } from './bedroom/Bedroom';
import { Restaurant } from './restaurant/Restaurant';
import { Garden } from './Garden';
import { Store } from './Store';
import { Info } from './Info';
import { Gym } from './gym/Gym';
import { Memory } from './Memory';
import { Farm } from './Farm';
import { SpaceBall } from './SpaceBall';
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
			<SpaceBall />
		</GridContainer>
	);
};
