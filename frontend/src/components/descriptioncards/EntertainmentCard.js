import React from "react";
import styled from 'styled-components';
// import { WEATHER_API }from "../reusable/Urls"
import { FaFilm } from "react-icons/fa";
import { Card } from "../Card"


export const EntertainmentCard = () => {
  return (
    <ThinnerCard
      title="Weather at Destination"
      secundaryText="Jupiter"
      thirdText="273 C"
      icon={<FaFilm />} />
  )
};

const ThinnerCard = styled(Card)`
  width: 100%;
  height: fit-content;
  @media (min-width: 768px) {
    width: 25%;
  }
`;