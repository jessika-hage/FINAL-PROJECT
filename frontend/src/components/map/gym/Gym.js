import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';

import { updateBadges, updateRanking } from '../../../reducers/profile';
import { Dialogs } from './Dialogs';
import { RoomGym, GymIcon } from '../Styling';
import {   
	DialogContainer, 
	InfoTitle, 
	InfoText, 
	DialogButton,
	CloseIcon } from './Styling';

export const Gym = () => {
	const [openGym, setOpenGym] = useState(false);
	const [openConfirm, setOpenConfirm] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [success, setSuccess] = useState(false);
  const badges = useSelector((store) => store.profile.badges);
  const delay = 1000 * 60 * 30;

  const dispatch = useDispatch();

	const onToggleGymDialog = () => {
		setOpenGym(!openGym);
	};

	const onClickWorkout = () => {
    if (badges >= 20) {
      dispatch(updateBadges(-20));
      dispatch(updateRanking(0.2));
      setOpenConfirm(true);
      setSuccess(true);
      setDisabled(true);
      setTimeout(() => {
        setOpenConfirm(false);
        setOpenGym(false);
      });
      setTimeout(() => {
        setDisabled(false);
      }, delay)
    } else {
        setOpenConfirm(true);
        setSuccess(false);
        setTimeout(() => {
          setOpenConfirm(false);
          setOpenGym(false);
        }, 2000)
    }
  };

	return (
		<RoomGym onClick={onToggleGymDialog}>
			<GymIcon />
			<Dialog open={openGym} onClick={onToggleGymDialog}>
				<DialogContainer>
					<InfoTitle>
						Get some workout!
						<CloseIcon onClick={onToggleGymDialog} />
					</InfoTitle>
					<InfoText>
						As a citizen on this ship, it is very important that you exercise
						regularly. Week citizens won't last for long! The price for entering the
						gym is 20 badges but it will increase your ranking with 0.2 since you will
						become a stronger citizen. After workout the gym will be locked for a while, other citizens wants to workout too.
					</InfoText>
					<DialogButton onClick={onClickWorkout} disabled={disabled}>Workout!</DialogButton>
				</DialogContainer>
			</Dialog>
			<Dialogs 
				openConfirm={openConfirm} 
				confirmText={success ? 'Great workout!' : 'You do not have enough badges to enter the gym!'} />
		</RoomGym>
	);
};
