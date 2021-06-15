import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateCoins, updateInvestments } from '../../reducers/profile';
import { InvestmentContainer, InvestmentText, SellButton, InvestmentChange, ValueChange, IconUp, IconDown } from './Styling';

export const InvestmentProfile = () => {
  const investments = useSelector((store) => store.profile.investments);
  const investmentQuantity = useSelector((store) => store.profile.investmentQuantity);
  const [currency, setCurrency] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchCoin();
  }, []);

  // Fetch one random currency
  const fetchCoin = () => {
    fetch('https://api.coinlore.net/api/ticker/?id=32360')
    .then(res => res.json())
    .then((json) => {
      setCurrency(json[0]);
    });
  };

  const totalMarketValue = investmentQuantity * currency.price_usd;

  const onSellInvestment = () => {
    dispatch(updateInvestments(-investmentQuantity, -investments));
    dispatch(updateCoins(totalMarketValue));
  };

  return (
    <InvestmentContainer>
      {investments > 0 ? 
      <>
      <InvestmentText>Quantity: {investmentQuantity}st $</InvestmentText>
      <InvestmentText>Initial investment: {investments}$</InvestmentText>
      <InvestmentText>Current value: {totalMarketValue}$</InvestmentText>
      <InvestmentChange>You are: 
        <ValueChange percent={investments - totalMarketValue < 0}>
          {investments - totalMarketValue}
          {investments > totalMarketValue ? <IconDown /> : <IconUp />}
        </ValueChange>
      </InvestmentChange>
      </>
      : <InvestmentText>You have no investments.</InvestmentText>
      }
      <SellButton onClick={onSellInvestment}>Sell investment</SellButton>
    </InvestmentContainer>
  )
};
