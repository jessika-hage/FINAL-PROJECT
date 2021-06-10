import React, { useState, useEffect  } from 'react';
import { useDispatch } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';

import { updateBadges, updateCoins } from '../../reducers/profile';
import {   
    CurrencyText, 
    Button, 
    DialogContainer, 
    CurrencyTitle, 
    TextContainer,
    Text,
    ChangeText,
    CoinChange,
    ExchangeButton, 
    ConfirmationDialog,
    ConfirmedButton} from './Styling';

export const Currency = () => {
  const [currency, setCurrency] = useState([]);
  const [open, setOpen] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchCoin();
  }, []);

  // Fetch one random currency
  // So the space currency looks very volatile
  const fetchCoin = () => {
    fetch('https://api.coinlore.net/api/tickers/?start=0&limit=30')
    .then(res => res.json())
    .then((json) => {
      const getCurrency = json.data[Math.floor(Math.random() * json.data.length)];
      setCurrency(getCurrency);
    });
  };

  const onToggleDialog = () => {
    setOpen(!open);
  };

  // Exchange function
  const onExchange = () => {
    dispatch(updateBadges(- 1));
		dispatch(updateCoins(10));
    setConfirmation(true);
    setOpen(false);
  };

  // Function in confirmed dialog after exchanging
  const onConfirmed = () => {
    setConfirmation(false);
  };

	return (
		<>
      <CurrencyText>CURRENCY AT DESTINATION: {currency.price_usd} $
      <ChangeText>Last hour: </ChangeText>
      <CoinChange percent={currency.percent_change_1h < 0}>  {currency.percent_change_1h} %</CoinChange>
        <Button onClick={onToggleDialog}>See more</Button>
      </CurrencyText>
      <Dialog open={open} onClose={onToggleDialog}>
        <DialogContainer>
          <CurrencyTitle>SPACE $</CurrencyTitle>
            <TextContainer>
              <Text>Price: {currency.price_usd} $</Text>
            </TextContainer>
            <TextContainer>
              <Text>Change in last hour: 
                <CoinChange percent={currency.percent_change_1h < 0}> {currency.percent_change_1h} %</CoinChange>
                </Text>
                </TextContainer>
                <TextContainer>
              <Text>Change in last 24 hours: 
                <CoinChange percent={currency.percent_change_124h < 0}> {currency.percent_change_24h} %</CoinChange>
              </Text>
              </TextContainer>
              <TextContainer>
              <Text>Change in the last week: 
                <CoinChange percent={currency.percent_change_7d < 0}> {currency.percent_change_7d} %</CoinChange>
              </Text>
              </TextContainer>
              <TextContainer>
              <Text>Exchange: 1 badge = 10 SPACE $
              </Text>
              </TextContainer>
              <ExchangeButton onClick={onExchange}>Exchange</ExchangeButton>
        </DialogContainer>
      </Dialog>
      <Dialog open={confirmation} onClose={onToggleDialog}>
        <ConfirmationDialog>
          <Text>You have have received some coins which you can see on your profile!</Text>
          <ConfirmedButton onClick={onConfirmed}>Thanks!</ConfirmedButton>
        </ConfirmationDialog>
      </Dialog>
		</>
	);
};
