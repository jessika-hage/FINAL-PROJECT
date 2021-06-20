import React from 'react';
import Dialog from '@material-ui/core/Dialog';

import { 
  DialogContainer, 
  InvestTitle, 
  InvestInfo, 
  PriceInfo,
  QuestionText,
  InvestButton, 
  InputContainer, 
  InputAmount, 
  TotalValueText } from './Styling';

export const ExchangeDialog = ({ 
  openExchange, 
  onCloseExchange, 
  rate,
  onChange, 
  totalExchange,
  onClick, 
  value }) => {

  return (
    <>
      <Dialog open={openExchange} onClose={onCloseExchange}>
        <DialogContainer>
          <InvestTitle>Space Exchange</InvestTitle>
          <InvestInfo>Here you can exchange badges for coins! It's important to have some money since you need it to invest, buy things in the store etc.
          </InvestInfo>
          <PriceInfo>Exchange rate: 2 badges = {rate} $</PriceInfo>
          <QuestionText>How many badges do you want to exchange?</QuestionText>
          <InputContainer>
            <InputAmount 
              type='text' 
              placeholder='Enter quantity' 
              onChange={onChange} 
              value={value}></InputAmount>
            <TotalValueText> = {totalExchange} $</TotalValueText>
          </InputContainer>
          <InvestButton onClick={onClick}>Make Exchange</InvestButton>
        </DialogContainer>
      </Dialog>
    </>
  )
};