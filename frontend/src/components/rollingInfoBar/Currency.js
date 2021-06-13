import React, { useState, useEffect  } from 'react';
import { useDispatch } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

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
    ArrowIcon,
    ExchangeButton, 
    ConfirmationDialog,
    ConfirmedButton,
    PercentChange } from './Styling';

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
    fetch('https://api.coinlore.net/api/ticker/?id=32360')
    .then(res => res.json())
    .then((json) => {
      // const getCurrency = json.data[Math.floor(Math.random() * json.data.length)];
      setCurrency(json[0]);
    });
  };

  const onToggleDialog = () => {
    setOpen(!open);
  };

  // Exchange function
  const onExchange = () => {
    dispatch(updateBadges(- 1));
		dispatch(updateCoins(currency.price_usd));
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
      <ChangeText>Last hour:</ChangeText>
      <CoinChange percent={currency.percent_change_1h < 0}> 
        <ArrowIcon>
          {currency.percent_change_1h < 0 ? <FaArrowDown /> : <FaArrowUp />}
        </ArrowIcon> 
        {currency.percent_change_1h} %
      </CoinChange>
        <Button onClick={onToggleDialog}>Exchange</Button>
      </CurrencyText>
      <Dialog open={open} onClose={onToggleDialog}>
        <DialogContainer>
          <CurrencyTitle>SPACE $</CurrencyTitle>
            <TextContainer>
              <Text>Price: {currency.price_usd} $</Text>
            </TextContainer>
            <TextContainer>
              <Text>Change in last hour: 
                <PercentChange percent={currency.percent_change_1h < 0}> {currency.percent_change_1h} %</PercentChange>
                </Text>
                </TextContainer>
                <TextContainer>
              <Text>Change in last 24 hours: 
                <PercentChange percent={currency.percent_change_124h < 0}> {currency.percent_change_24h} %</PercentChange>
              </Text>
              </TextContainer>
              <TextContainer>
              <Text>Change in the last week: 
                <PercentChange percent={currency.percent_change_7d < 0}> {currency.percent_change_7d} %</PercentChange>
              </Text>
              </TextContainer>
              <TextContainer>
              <Text>Exchange rate: 1 badge = {currency.price_usd} SPACE $
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
