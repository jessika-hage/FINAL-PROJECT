import React from 'react';
import Dialog from '@material-ui/core/Dialog';

import { DialogContainer, InfoContainer, InfoText } from './Styling';

export const Dialogs = ({ 
  openInfo, 
  onToggleInfo, 
  openConfirmation, 
  openFail,
  failText }) => {

  return (
    <>
      <Dialog open={openInfo} onClose={onToggleInfo}>
        <InfoContainer>
          It is very important that you get the energy that you need. 
          You need to have a daily average intake of 2000 kcal and
          you keep track on your profile and it will alert you when you are running low.
          And you can not buy food when you have 3000 or more, since the energy needs to be
          divided between all the citizens!
        </InfoContainer>
      </Dialog>
      <Dialog open={openConfirmation}>
        <DialogContainer>
          <InfoText>
            Purchase successfull! Your energyintake has now increased!
          </InfoText>
        </DialogContainer>
      </Dialog>
      <Dialog open={openFail}>
        <DialogContainer>
          <InfoText>
            Sorry, purchase was denied. {failText}
          </InfoText>
        </DialogContainer>
      </Dialog>
    </>
  )
};