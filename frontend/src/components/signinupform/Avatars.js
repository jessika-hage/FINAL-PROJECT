import React from 'react';
import styled from 'styled-components';


export const Avatars = ({ avatar, onChange, image }) => {

  return (
    <ButtonContainer>
      <Label htmlFor={avatar} aria-label={avatar}>
        <Radio 
          type="radio" 
          name="avatar"
          id={avatar} 
          value={avatar} 
          onChange={onChange} 
          required />
        <Avatar src={image} />
      </Label>
    </ButtonContainer>
  )
};

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0 0 0;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.primary};
  background-color: ${props => props.theme.secondary};
  width: 100%;
  height: 100%;
  position: relative;
  margin-right: 10px;
  z-index: 1; 
  :hover {
    border: 2px solid ${props => props.theme.hover};
}
`

const Radio = styled.input`
opacity: 0;
width: 100%;
height: 100%;
cursor: pointer;
top: 0;
left: 0;
position: absolute;
padding: 0;
margin: 0;
outline: none;
&:checked ~ ${Label} {
  ::before {
    background-color: #771144;
    border: 3px solid #fdf0f6;
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    top: -3px;
    left: -3px;
    z-index: -1; 
  }
  &focus ~ ${Label} {
    ::before {
      background-color: #771144;
      border: 3px solid #fdf0f6;
      content: '';
      height: 100%;
      width: 100%;
      position: absolute;
      top: -3px;
      left: -3px;
      z-index: -1; 
    }
}
`

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  padding: 2px;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  border: 0px solid ${props => props.theme.primary};
  // background-color: ${props => props.theme.secondary};
  // margin-left: 6px;
  :hover {
    opacity: 0.7;
  }
  :focus {
    border: 1px solid ${props => props.theme.hover};
  }
  @media (min-width: 768px) {
    width: 64px;
    height: 64px;
    padding: 4px;
  }
`;