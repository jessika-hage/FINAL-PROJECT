import React from 'react';

import { 
  ButtonContainer, 
  Label, 
  Radio,
  Avatar } from './Styling';

export const Avatars = ({ avatar, onChange, checked, image }) => {

  return (
    <ButtonContainer>
      <Label  htmlFor={avatar} aria-label={avatar}>
        <Radio 
          type="radio" 
          name="avatar"
          id={avatar} 
          value={avatar} 
          onChange={onChange} 
          checked={checked}
          required />
        <Avatar src={image} />
      </Label>
    </ButtonContainer>
  )
};
