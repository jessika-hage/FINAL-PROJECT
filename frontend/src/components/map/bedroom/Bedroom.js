import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';

import { updateBadges, updateRanking } from '../../../reducers/profile';
import { Dialogs } from './Dialogs';
import { RoomBedroom, BedIcon } from '../Styling';
import {   
  DialogContainer, 
  InfoTitle, 
  InfoText, 
  DialogButton,
  CloseIcon} from './Styling';

export const Bedroom = () => {
  const [openBedroom, setOpenBedroom] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [success, setSuccess] = useState(false);
  const badges = useSelector((store) => store.profile.badges);
  const delay = 1000 * 60 * 30;

  const dispatch = useDispatch();

  const onToggleBedroomDialog = () => {
		setOpenBedroom(!openBedroom);
	};

  // Check if more than 20 badges
  // Different return messages
  // Disable button for 30 min after sleep
  const onClickSleep = () => {
    if (badges >= 20) {
      dispatch(updateBadges(-20));
      dispatch(updateRanking(0.2));
      setOpenConfirm(true);
      setSuccess(true);
      setDisabled(true);
      setTimeout(() => {
        setOpenConfirm(false);
        setOpenBedroom(false);
      });
      setTimeout(() => {
        setDisabled(false);
      }, delay)
    } else {
        setOpenConfirm(true);
        setSuccess(false);
        setTimeout(() => {
          setOpenConfirm(false);
          setOpenBedroom(false);
        }, 2000)
    }
  };


  return (
    <RoomBedroom 
      tabIndex='0' 
      aria-label='Bedroom' 
      onClick={onToggleBedroomDialog}>
      <BedIcon />
      <Dialog open={openBedroom} onClick={onToggleBedroomDialog}>
        <DialogContainer>
          <InfoTitle>
            Get some rest!
						<CloseIcon tabIndex='0' onClick={onToggleBedroomDialog} />
          </InfoTitle>
          <InfoText>
            As a citizen on this ship, we like it when you work hard. That's why it
            is important that you also sleep a little bit sometimes. You will lose 20
            badges but will gain 0.2 ranking! But you can not sleep to often so we lock the room afterwards.
          </InfoText>
          <DialogButton onClick={onClickSleep} disabled={disabled}>Sleep!</DialogButton>
        </DialogContainer>
      </Dialog>
      <Dialogs 
        openConfirm={openConfirm} 
        confirmText={success ? 'Good morning! Hope you are rested!' : 'You do not have enough badges to deserve some rest!'} />
    </RoomBedroom>
  )
};