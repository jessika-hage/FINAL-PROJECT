import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';

import { updateAvatar } from '../../../reducers/profile'

import { 
  ButtonContainer, 
  Container,
  ChangeTitle,
  Label, 
  Radio,
  Avatar,
  AvatarContainer,
  UpdateButton,
  DialogContainer,
  DialogText } from './Styling';

export const SettingsAvatars = () => {
  const [avatar, setAvatar] = useState('');
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const avatars = ['woman', 'man2', 'hacker', 'woman3', 'woman2', 'man'];

  const handleAvatarUpdate = (e) => {
    e.preventDefault();
    dispatch(updateAvatar(avatar));
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 2000)
  };

  const onToggleDialog = () => {
    setOpen(!open);
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
    <UpdateButton onClick={handleAvatarUpdate}>Change avatar</UpdateButton>
    <Dialog open={open} onClose={onToggleDialog}>
      <DialogContainer>
        <DialogText>Avatar successfully updated!</DialogText>
      </DialogContainer>
    </Dialog>
    </Container>
  )
};

