import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { updatePassword } from '../../reducers/profile';

export const UpdatePassword = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
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
        'Authorization': accessToken,
      },
      body: JSON.stringify({ password, newPassword }),
    };
    fetch(
      `https://citizen-ship.herokuapp.com/citizen/${userId}/password`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log(data.message);
        }
      })
      .catch((err) => console.error(err));
  }
}
  return (
    <PasswordForm onSubmit={onUpdatePassword}>
      <Input 
        type='password'
        placeholder='current password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
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
        <PasswordButton type='submit'>update password</PasswordButton>
    </PasswordForm>
  )
};

const PasswordForm = styled.form`
`;

export const Input = styled.input`
  padding: 10px;
  outline: none;
  border-bottom: 3px solid ${props => props.theme.primary};
  border-left: none;
  border-top: none;
  border-right: none;
  background-color: transparent;
  font-size: 16px;
  color: ${props => props.theme.textColor};
  margin-bottom: 20px;
  width: 300px;
  font-family: 'Trispace';
  :focus {
	background-color: ${props => props.theme.primary};
  }
  ::placeholder {
	text-transform: uppercase;
  }
`;

const PasswordButton = styled.button`
  `;