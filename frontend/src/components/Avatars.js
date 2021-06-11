import React from 'react';
import styled from 'styled-components';

export const Avatars = () => {

  return (
    <ButtonContainer>
      <Avatar src={require(`../assets/woman.png`)} />
      <Avatar src={require(`../assets/man2.png`)} />
      <Avatar src={require(`../assets/hacker.png`)} />
      <Avatar src={require(`../assets/woman3.png`)} />
      <Avatar src={require(`../assets/woman2.png`)} />
      <Avatar src={require(`../assets/business-man.png`)} />
    </ButtonContainer>
  )
}

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0 0 0;
`;

const Avatar = styled.img`
width: 40px;
height: 40px;
padding: 2px;
border-radius: 50%;
cursor: pointer;
outline: none;
border: 1px solid ${props => props.theme.primary};
background-color: ${props => props.theme.secondary};
margin-left: 6px;
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