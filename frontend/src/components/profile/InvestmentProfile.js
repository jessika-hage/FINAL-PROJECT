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
  const difference = investments - totalMarketValue;

  const onSellInvestment = () => {
    dispatch(updateInvestments(-investmentQuantity, -investments));
    dispatch(updateCoins(totalMarketValue));
  };

  return (
    <InvestmentContainer>
      {investments > 0 ? 
      <>
      <InvestmentText>Quantity: {investmentQuantity}st</InvestmentText>
      <InvestmentText>Initial investment: {investments.toFixed(2)}$</InvestmentText>
      <InvestmentText>Current value: {totalMarketValue.toFixed(2)}$</InvestmentText>
      <InvestmentChange>You are: 
        <ValueChange percent={difference > 0}>
          {investments > totalMarketValue ? <IconDown /> : <IconUp />}
          {difference.toFixed(2)} $
        </ValueChange>
      </InvestmentChange>
      <SellButton onClick={onSellInvestment}>Sell investment</SellButton>
      </>
      : <InvestmentText>You have no investments yet.</InvestmentText>
      }
    </InvestmentContainer>
  )
};
