import React, { useState, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';

import {
	DialogContainer,
	CurrencyTitle,
	TextContainer,
	Text,
	ButtonContainer,
	ExchangeButton,
	InvestmentButton,
	PercentChange,
  CloseIcon } from './Styling';

export const PriceChange = ({ open, onClose, toggleExchangeDialog, toggleInvestDialog }) => {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
		fetchCoin();
	}, []);

	// Fetch one  currency
	const fetchCoin = () => {
		fetch('https://api.coinlore.net/api/ticker/?id=32360')
			.then((res) => res.json())
			.then((json) => {
				setCurrency(json[0]);
			});
	};

  return (
    <Dialog open={open} onClose={onClose}>
    <DialogContainer>
      <CurrencyTitle>
        SPACE $
        <CloseIcon onClick={onClose} />
      </CurrencyTitle>
      <TextContainer>
        <Text>Price: {currency.price_usd} $</Text>
      </TextContainer>
      <TextContainer>
        <Text>
          Change in last hour:
          <PercentChange percent={currency.percent_change_1h < 0}>
            {currency.percent_change_1h} %
          </PercentChange>
        </Text>
      </TextContainer>
      <TextContainer>
        <Text>
          Change in last 24 hours:
          <PercentChange percent={currency.percent_change_24h < 0}>
            {currency.percent_change_24h} %
          </PercentChange>
        </Text>
      </TextContainer>
      <TextContainer>
        <Text>
          Change in the last week:
          <PercentChange percent={currency.percent_change_7d < 0}>
            {currency.percent_change_7d} %
          </PercentChange>
        </Text>
      </TextContainer>
      <TextContainer>
        <Text>Exchange rate: 2 badge = {currency.price_usd} $</Text>
      </TextContainer>
      <ButtonContainer>
        <ExchangeButton 
          onClick={toggleExchangeDialog}>
          Exchange</ExchangeButton>
        <InvestmentButton 
          onClick={toggleInvestDialog}>
          Invest in SPACE$
        </InvestmentButton>
      </ButtonContainer>
    </DialogContainer>
  </Dialog>
  )
}