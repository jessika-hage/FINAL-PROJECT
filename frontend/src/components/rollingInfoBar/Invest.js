import React from 'react';
import Dialog from '@material-ui/core/Dialog';

import { 
  DialogContainer, 
  InvestTitle, 
  InvestInfo, 
  InvestButton, 
  InputContainer, 
  InputAmount, 
  SpaceText, 
  Text, 
  ConfirmationDialog, 
  ConfirmedButton } from './Styling';

export const Invest = ({ 
  open, 
  onClose, 
  onChange, 
  spaceValue, 
  onClick, 
  value, 
  openSuccess,
  onCloseSuccess, 
  openFail, 
  onCloseFail }) => {

  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogContainer>
          <InvestTitle>Space Invest</InvestTitle>
          <InvestInfo>You have an opportunity as a citizen to invest your money in SPACE$. This means that when you invest the money you lock the money
            in on the current price of the SPACE$. Since it is very volatile (price moves up and down) you can both make money but also lose money! So it
            is important to be careful and never invest more than you are ready to lose! So let's say if you invest 100$ when the price is 8$ and then 
            it goes up to 10$, your money will be worth 125$! If you see that the price has decreased a lot the last week it could be a good opportunity to invest.
          </InvestInfo>
          <InputContainer>
            <InputAmount type='text' placeholder='Quantity' onChange={onChange} value={value}></InputAmount>
            <SpaceText>{spaceValue} $</SpaceText>
          </InputContainer>
          <InvestButton onClick={onClick}>Make Investment</InvestButton>
        </DialogContainer>
      </Dialog>
      <Dialog 
        open={openSuccess} 
        onClose={onCloseSuccess}>
        <ConfirmationDialog>
          <Text>You have now successfully invested in SPACE$! You can see it on your profile shortly and keep track on the current value of your investment.</Text>
          <ConfirmedButton onClick={onCloseSuccess}>Thanks!</ConfirmedButton>
        </ConfirmationDialog>
      </Dialog>
      <Dialog open={openFail} 
        onClose={onCloseFail}>
        <ConfirmationDialog>
          <Text>You do not have enough coins for this investment!</Text>
          <ConfirmedButton onClick={onCloseFail}>Make some more money!</ConfirmedButton>
        </ConfirmationDialog>
      </Dialog>
    </>
  )
};