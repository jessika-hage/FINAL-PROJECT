import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';

import { 
  PasswordForm, 
  ChangeTitle,
  Input, 
  ConfirmInput, 
  UpdateButton, 
  ConfirmText } from './Styling';

export const UpdatePassword = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [noMatch, setNoMatch] = useState(false);
  const userId = useSelector(store => store.profile.userId);
  const accessToken = useSelector(store => store.profile.accessToken);

  // const dispatch = useDispatch();

const onUpdatePassword = (e) => {
  e.preventDefault();

  if (newPassword === confirmedPassword) {

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      },
      body: JSON.stringify({ password, newPassword }),
    }
    fetch(
      `https://citizen-ship.herokuapp.com/citizen/${userId}/password`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setOpen(true);
          setSuccess(true);
          setNoMatch(false);
          setFail(false);
          setPassword('');
          setNewPassword('');
          setConfirmedPassword('');
          setTimeout(() => {
            setOpen(false);
          }, 2000)
        } else {
          setFail(true);
          setNoMatch(false);
        } 
      })
    } else {
      setNoMatch(true);
      setFail(false);
    }
      
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
        placeholder='confirm password'
        value={confirmedPassword}
        onChange={(e) => setConfirmedPassword(e.target.value)} />
      </ConfirmInput>
      <ConfirmText success={success}>{noMatch ? 'Passwords do not match' : ''}</ConfirmText>
      <ConfirmText success={success}>{fail ? 'Could not update password right now' : ''}</ConfirmText>
      <ConfirmText success={success}>{success ? 'Password successfully updated!' : ''}</ConfirmText>
      <UpdateButton type='submit'>Update password</UpdateButton>
    </PasswordForm>
  )
};
