import React from "react";
import styled from 'styled-components';
// import { WEATHER_API }from "../reusable/Urls"
import { FaFilm } from "react-icons/fa";
import { Card } from "../Card"


export const EntertainmentCard = () => {
	return (
		<ThinnerCard
			title='In the cinema tonight'
			secundaryText='Movie'
			icon={<FaFilm />}
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