import React from 'react';
import styled from 'styled-components';
import { WEATHER_API } from '../../reusable/Urls';
import { FaMeteor } from 'react-icons/fa';
import { Card } from '../Card';

export const WeatherCard = () => {

	// const getWeatherData = (data) => {
	//     const cityName = data.name;
	//     const temp = Math.floor(data.main.temp);
	//     const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
	//     city.innerText = `${cityName}`;
	//     bigIcon.innerHTML = `<img src="${icon}"/>`;
	//     shortDescription.innerText = `${condition}`;
	//     temperature.innerHTML = `${temp} <span class="celsius">°C</span>`;
	//     sunrise.innerHTML = `<i class="fas fa-sun"></i> ${sunriseText}`;
	//     sunset.innerHTML = `<i class="fas fa-moon"></i> ${sunsetText}`;
	// }

	return (
		<>
				<ThinnerCard
					// key={weather.}
					title='Weather at Destination'
					secundaryText='Jupiter'
					icon={<FaMeteor />}
				/>
		</>
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
