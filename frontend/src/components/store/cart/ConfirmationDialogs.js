import React from 'react';
import Dialog from '@material-ui/core/Dialog';

import { ConfirmationDialog, Text, ConfirmedButton } from './Styling';

export const ConfirmationDialogs = ({ 
  openConfirmation, 
  onClose, 
  onConfirmed, 
  openFail, 
  onFail }) => {

  return (
    <>
      <Dialog open={openConfirmation}>
        <ConfirmationDialog>
          <Text>
            Purchase successful! You can now see your items on your profile.
          </Text>
          <ConfirmedButton onClick={onConfirmed}>Thanks!</ConfirmedButton>
        </ConfirmationDialog>
      </Dialog>
      <Dialog open={openFail}>
        <ConfirmationDialog>
          <Text>Your purchase was denied due to insufficient funds.</Text>
          <ConfirmedButton onClick={onFail}>Keep on making money!</ConfirmedButton>
        </ConfirmationDialog>
      </Dialog>
    </>
    )
};