import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateAvatar } from '../../../reducers/profile'

import { 
  ButtonContainer, 
  Container,
  ChangeTitle,
  Label, 
  Radio,
  Avatar,
  AvatarContainer,
  ConfirmText,
  UpdateButton  } from './Styling';

export const SettingsAvatars = () => {
  const [avatar, setAvatar] = useState('');
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();

  const avatars = ['woman', 'man2', 'hacker', 'woman3', 'woman2', 'man'];

  const handleAvatarUpdate = (e) => {
    e.preventDefault();
    dispatch(updateAvatar(avatar));
    setSuccess(true);
  };


  return (
    <Container>
      <ChangeTitle>Change your avatar: </ChangeTitle>
      <AvatarContainer>
      {avatars.map((avatar) => (
        <ButtonContainer>
          <Label  htmlFor={avatar} aria-label={avatar}>
            <Radio 
              type="radio" 
              name="avatar"
              id={avatar} 
              value={avatar} 
              onChange={(e) => setAvatar(e.target.value)}
              required />
            <Avatar src={require(`../../../assets/${avatar}.png`)}/>
          </Label>
        </ButtonContainer>
      ))}
      </AvatarContainer>
      <ConfirmText success={success}>{success ? 'Avatar successfully changed!' : ''}</ConfirmText>
      <UpdateButton onClick={handleAvatarUpdate}>Change avatar</UpdateButton>
    </Container>
  )
};

