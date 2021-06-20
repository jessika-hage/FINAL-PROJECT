import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';

import { 
  PasswordForm, 
  ChangeTitle,
  Input, 
  ConfirmInput, 
  UpdateButton, 
  DialogContainer, 
  DialogText } from './Styling';

export const UpdatePassword = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [open, setOpen] = useState(false);
  const userId = useSelector(store => store.profile.userId);
  const accessToken = useSelector(store => store.profile.accessToken);

  // const dispatch = useDispatch();

const onUpdatePassword = (e) => {
  e.preventDefault();
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': accessToken,
      },
      body: JSON.stringify({ newPassword }),
    }
    fetch(
      `https://citizen-ship.herokuapp.com/citizen/${userId}/password`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setOpen(true);
          setTimeout(() => {
            setOpen(false);
          }, 2000)
        } else {
          console.log('sorry')
        }
        console.log(data.message)
      })
      .catch();
};

  return (
    <PasswordForm onSubmit={onUpdatePassword}>
      <ChangeTitle>Change your password:</ChangeTitle>
      <Input 
        type='password'
        placeholder='current password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
      <ConfirmInput>
      <Input
        type='password'
        placeholder='new password'
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)} />
      <Input
        type='password'
        placeholder='confirm new password'
        value={confirmedPassword}
        onChange={(e) => setConfirmedPassword(e.target.value)} />
      </ConfirmInput>
      <UpdateButton type='submit'>Update password</UpdateButton>
      <Dialog open={open}>
        <DialogContainer>
          <DialogText>Password successfully updated!</DialogText>
        </DialogContainer>
      </Dialog>
    </PasswordForm>
  )
};
