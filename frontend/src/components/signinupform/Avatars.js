import React from 'react';
import styled from 'styled-components';


export const Avatars = ({ avatar, onChange, image }) => {

  return (
    <ButtonContainer>
      <Label htmlFor={avatar} aria-label={avatar}>
        <Radio 
          type="radio" 
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
border: 1px solid ${props => props.theme.primary};
background-color: ${props => props.theme.secondary};
width: 100%;
height: 100%;
position: relative;
margin-right: 10px;
z-index: 1; 
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
  background-color: red;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    margin: 6px;
    background: #eeeeee;
    border-radius: 20px solid white;
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