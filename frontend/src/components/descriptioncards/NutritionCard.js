import React from 'react';
import styled from 'styled-components';
// import { WEATHER_API }from "../reusable/Urls"
import { FaUtensils } from 'react-icons/fa';
import { Card } from '../Card';

export const NutritionCard = () => {
	return (
		<ThinnerCard
			title='Nutrition served'
			secundaryText='Pasta'
			icon={<FaUtensils />}
		/>
	);
};

const ThinnerCard = styled(Card)`
	width: 100%;
	height: 120px;
  margin: 0;
	@media (min-width: 768px) {
		width: 25%;
    border-right: 2px solid ${props => props.theme.primary};
	}
`;
