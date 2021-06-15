import React from 'react';
// import { useDispatch } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
// import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

import { DialogContainer, InvestTitle, InvestInfo, InvestButton, InputContainer, InputAmount, SpaceText } from './Styling';

export const Invest = ({ open, onClose, onChange, spaceValue, onClick, value }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContainer>
        <InvestTitle>Invest</InvestTitle>
        <InvestInfo>You have an opportunity as a citizen to invest your money in SPACE$. This means that when you invest the money you lock the money
          in on the current price of the SPACE$. Since it is very volatile (price moves up and down) you can both make money but also lose money! So it
          is important to be careful and never invest more than you are ready to lose! So let's say if you invest 100$ when the price is 8$ and then 
          it goes up to 10$, your money will be worth 120$! If you see that the price has decrease a lot the last week it could be a good opportunity to invest.
        </InvestInfo>
        <InputContainer>
          <InputAmount type='text' placeholder='Amount' onChange={onChange} value={value}></InputAmount>
          <SpaceText>{spaceValue}</SpaceText>
        </InputContainer>
        <InvestButton onClick={onClick}>Invest</InvestButton>
      </DialogContainer>
    </Dialog>
  )
};