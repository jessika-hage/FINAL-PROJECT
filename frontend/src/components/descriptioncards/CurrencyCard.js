import React from "react";
import styled from 'styled-components';
// import { WEATHER_API }from "../reusable/Urls"
import { FaMoneyBill } from "react-icons/fa";
import { Card } from "../Card"


export const CurrencyCard = () => {
  return (
    <ThinnerCard
      title="Currency Currency"
      secundaryText="Current exchange rate"
      thirdText="273 C"
      icon={<FaMoneyBill />} />
  )
};

const ThinnerCard = styled(Card)`
  width: 100%;
  height: fit-content;
  @media (min-width: 768px) {
    width: 25%;
  }
`;