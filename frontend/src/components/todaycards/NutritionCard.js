import React from 'react';
import styled from 'styled-components';
// import { WEATHER_API }from "../reusable/Urls"
import { FaUtensils } from 'react-icons/fa';
import { Card } from './Card';

export const NutritionCard = () => {
	return (
		<ThinnerCard
			title='Nutrition'
			secondaryText='Pasta'
			button='See more'
		/>
	);
};

const ThinnerCard = styled(Card)`
	width: 100%;
	height: 120px;
	margin: 0;
	border-bottom: 2px solid ${props => props.theme.primary};
	@media (min-width: 768px) {
		height: 160px;
	}
`;
