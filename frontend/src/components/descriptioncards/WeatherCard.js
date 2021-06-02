import React from "react";
import styled from 'styled-components';
// import { WEATHER_API }from "../reusable/Urls"
import { FaMeteor } from "react-icons/fa";
import { Card } from "../Card"


export const WeatherCard = () => {
    // const [weather, setWeather] = useState([]);

    // useEffect(() => {
    //     fetch(`${WEATHER_API}`)
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((data) => {
    //         setWeather(data);
    //     });
    // }, [weather])

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
      {/* // {weather &&
        />
      // } */}
      <ThinnerCard
        title="Weather at Destination"
        secundaryText="Jupiter"
        thirdText="273 C"
        icon={<FaMeteor />} />
    </>
  )
};

const ThinnerCard = styled(Card)`
  width: 100%;
  height: fit-content;
  @media (min-width: 768px) {
    width: 25%;
  }
`;