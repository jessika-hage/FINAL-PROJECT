import React from 'react';
import styled from 'styled-components';
// import { WEATHER_API }from "../reusable/Urls"
import { FaUtensils } from 'react-icons/fa';
import { Card } from '../Card';

export const NutritionCard = () => {
	return (
		<ThinnerCard
			title='Nutrition served'
			secondaryText='Pasta'
			icon={<FaUtensils />}
			button='See more'
		/>
	);
};

const ThinnerCard = styled(Card)`
	width: 100%;
	height: 120px;
	margin: 0;
	border-bottom: 2px solid ${(props) => props.theme.primary};
	@media (min-width: 768px) {
		border-right: 2px solid ${(props) => props.theme.primary};
		height: 160px;
	}
	@media (min-width: 1200px) {
		border-bottom: none;
	}
`;
