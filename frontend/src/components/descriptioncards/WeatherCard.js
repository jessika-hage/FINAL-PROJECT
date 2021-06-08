import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog';

import { WEATHER_API } from '../../reusable/Urls';
import { FORECAST_API } from '../../reusable/Urls';
import { Card } from '../Card';

export const WeatherCard = () => {
  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [open, setOpen] = useState(false);

  const getDate = date => new Date(date.replace(' ', 'T')).toLocaleDateString('en-US', {weekday: 'long'});

  const fetchWeather = useCallback(() => {
    fetch(WEATHER_API)
    .then(res => res.json())
    .then((json) => {
      setWeather(json.main.temp)
    }) 
  }, []);

  const fetchForecast = useCallback(() => {
    fetch(FORECAST_API)
    .then(res => res.json())
    .then((json) => {
      const filteredForecast = json.list.filter(item => item.dt_txt.includes('12:00'));
      setForecast(filteredForecast)
    }) 
  }, [])

  useEffect(() => {
    fetchWeather();
    fetchForecast();
    console.log(fetchWeather())
  }, [fetchWeather, fetchForecast]);

  const onToggleDialog = () => {
    setOpen(!open);
  };
	return (
		<>
      <ThinnerCard
        title='Weather at Destination'
        secondaryText={weather}
        secondaryTextTwo='°C'
        thumbnailTwo={`https://images.unsplash.com/photo-1532767153582-b1a0e5145009?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BhY2UlMjB3ZWF0aGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`}
        button='See more'
        onClick={onToggleDialog}
      />
      <Dialog open={open} onClose={onToggleDialog}>
        <DialogContainer>
          <ForecastTitle>Forecast at destination</ForecastTitle>
          {forecast.map((item, index) => (
            <WeatherContainer key={index}>
              <DayText>{getDate(item.dt_txt)}</DayText>
              <DayText>{item.main.temp} °C</DayText>
            </WeatherContainer>

          ))}
        </DialogContainer>
      </Dialog>
		</>
	);
};

const ThinnerCard = styled(Card)`
	width: 100%;
	height: 120px;
  margin: 0;
  border-bottom: 2px solid ${props => props.theme.primary};
	@media (min-width: 768px) {
		width: 50%;
    border-right: 2px solid ${props => props.theme.primary};
    height: 160px;
	}
  @media (min-width: 1200px) {
    width: 25%;
    border-bottom: none;
  }
`;

const DialogContainer = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  border: 2px solid ${props => props.theme.primary};
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: ${props => props.theme.textColor};
`;

const ForecastTitle = styled.h2`
  font-size: 24px;
  text-transform: uppercase;
`;

const WeatherContainer = styled.div`
  border-bottom: 2px solid ${props => props.theme.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DayText = styled.p`
  font-size: 16px;
  text-transform: uppercase;
`;
