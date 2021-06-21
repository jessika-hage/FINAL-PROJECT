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
  TotalValueText, 
  ConfirmationText, 
  ConfirmationDialog, 
  ConfirmedButton,
  CloseIcon } from './Styling';

export const InvestDialog = ({ 
  open, 
  onClose, 
  rate,
  onChange, 
  spaceValue, 
  onClick, 
  value, 
  openConfirm,
  onCloseConfirm,
  confirmText,
  buttonText }) => {

  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogContainer>
          <InvestTitle>
            Space Invest
            <CloseIcon onClick={onClose} />
          </InvestTitle>
          <InvestInfo>You have an opportunity as a citizen to invest your money in SPACE$. This means that when you invest the money you lock the money
            in on the current price of the SPACE$. Since it is very volatile (price moves up and down) you can both make money but also lose money! So it
            is important to be careful and never invest more than you are ready to lose! So let's say if you invest 100$ when the price is 8$ and then 
            it goes up to 10$, your money will be worth 125$! If you see that the price has decreased a lot the last week it could be a good opportunity to invest.
          </InvestInfo>
          <PriceInfo>Current price: {rate} $</PriceInfo>
          <QuestionText>How much do you want to invest?</QuestionText>
          <InputContainer>
            <InputAmount 
              type='text' 
              placeholder='Enter quantity' 
              onChange={onChange} 
              value={value}></InputAmount>
            <TotalValueText> = {spaceValue} $</TotalValueText>
          </InputContainer>
          <InvestButton onClick={onClick}>Make Investment</InvestButton>
        </DialogContainer>
      </Dialog>
      <Dialog 
        open={openConfirm} 
        onClose={onCloseConfirm}>
        <ConfirmationDialog>
          <ConfirmationText>{confirmText}</ConfirmationText>
          <ConfirmedButton onClick={onCloseConfirm}>{buttonText}</ConfirmedButton>
        </ConfirmationDialog>
      </Dialog>
    </>
  )
};