import React from "react";
import styled from 'styled-components';

import { Card } from "../Card"


export const CurrencyCard = () => {
  return (
    <ThinnerCard
      title="Currency"
      secondaryText="Current exchange rate"
      thumbnailTwo={`https://images.unsplash.com/photo-1614533422330-396d7dde96b5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGN1cnJlbmN5fGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`}
      button='See more' />
  )
};

const ThinnerCard = styled(Card)`
  width: 100%;
  height: 120px;
  margin: 0;
	@media (min-width: 768px) {
		width: 50%;
    height: 160px;
	}
  @media (min-width: 1200px) {
    width: 25%;
  }
`;