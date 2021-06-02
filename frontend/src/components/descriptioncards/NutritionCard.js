import React from "react";
import styled from 'styled-components';
// import { WEATHER_API }from "../reusable/Urls"
import { FaUtensils } from "react-icons/fa";
import { Card } from "../Card"


export const NutritionCard = () => {
  return (
    <ThinnerCard
      title="Nutrition served"
      secundaryText="Pasta"
      thirdText="300 kcal"
      icon={<FaUtensils />} />
  )
};

const ThinnerCard = styled(Card)`
  width: 100%;
  height: fit-content;
  @media (min-width: 768px) {
    width: 25%;
  }
`;