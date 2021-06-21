import React from 'react';
import Dialog from '@material-ui/core/Dialog';

import { DialogContainer, InfoText } from './Styling';

export const Dialogs = ({ openConfirm, confirmText }) => {
  return (
    <Dialog open={openConfirm}>
      <DialogContainer>
        <InfoText>{confirmText}</InfoText>
      </DialogContainer>
    </Dialog>
  )
};