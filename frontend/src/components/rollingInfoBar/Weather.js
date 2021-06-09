import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog';

import { WEATHER_API } from '../../reusable/Urls';
import { FORECAST_API } from '../../reusable/Urls';
import {   
    Text, 
    Button, 
    DialogContainer, 
    ForecastTitle, 
    WeatherContainer, 
    DayText } from './Styling';

export const Weather = () => {
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
      <Text>WEATHER AT DESTINATION: {weather} °C <Button onClick={onToggleDialog}>See forecast</Button></Text>
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