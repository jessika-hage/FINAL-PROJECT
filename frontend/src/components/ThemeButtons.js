import React from 'react';
import { useDispatch } from 'react-redux';
import { Tooltip } from "@material-ui/core";
import styled from 'styled-components';

import { themes } from '../reducers/themes';
import { darkTheme, lightTheme, blackTheme } from '../styledcomponents/StyledTheme';

export const ThemeButtons = ({ text }) => {
  const dispatch = useDispatch();

  return (
    <ButtonContainer>
        <ThemeTitle>{text} </ThemeTitle>
      <Tooltip title="Light">
        <LightButton onClick={() => dispatch(themes.actions.changeTheme(lightTheme))}></LightButton>
      </Tooltip>
      <Tooltip title="Black">
        <BlackButton onClick={() => dispatch(themes.actions.changeTheme(blackTheme))}></BlackButton>
      </Tooltip>
      <Tooltip title="Grey">
        <GreyButton onClick={() => dispatch(themes.actions.changeTheme(darkTheme))}></GreyButton>
      </Tooltip>
    </ButtonContainer>
  )
}

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0 0 0;
`;

const ThemeTitle = styled.p`
  font-size: 14px;
  margin-right: 5px;
  color: ${props => props.theme.textColor};
`;

const Button = styled.button`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  border: 2px solid #fff;
  margin-left: 6px;
  :hover {
      opacity: 0.7;
  }
`;

const LightButton = styled(Button)`
  background-color: brown;
`;

const BlackButton = styled(Button)`
  background-color: black;
`;

const GreyButton = styled(Button)`
  background-color: grey;
`;