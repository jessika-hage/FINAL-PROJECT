import React from 'react';
import { useDispatch } from 'react-redux';
import { Tooltip } from "@material-ui/core";
import styled from 'styled-components';

import { themes } from '../../reducers/themes';
import { 
  redTheme, 
  lightTheme, 
  blueTheme, 
  grayTheme, 
  brownTheme } from '../../styledcomponents/StyledTheme';

export const ThemeButtons = ({ text }) => {
  const dispatch = useDispatch();

  return (
    <ButtonContainer>
      <ThemeTitle>{text} </ThemeTitle>
      <Buttons>
        <Tooltip title="Light">
          <LightButton onClick={() => dispatch(themes.actions.changeTheme(lightTheme))}></LightButton>
        </Tooltip>
        <Tooltip title="Blue">
          <BlueButton onClick={() => dispatch(themes.actions.changeTheme(blueTheme))}></BlueButton>
        </Tooltip>
        <Tooltip title="Red">
          <RedButton onClick={() => dispatch(themes.actions.changeTheme(redTheme))}></RedButton>
        </Tooltip>
        <Tooltip title="Gray">
          <GrayButton onClick={() => dispatch(themes.actions.changeTheme(grayTheme))}></GrayButton>
        </Tooltip>
        <Tooltip title="Brown">
          <BrownButton onClick={() => dispatch(themes.actions.changeTheme(brownTheme))}></BrownButton>
        </Tooltip>
      </Buttons>
    </ButtonContainer>
  )
}

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px 0 0 0;
`;

const ThemeTitle = styled.p`
  font-size: 12px;
  margin-right: 5px;
  color: ${props => props.theme.textColor};
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Button = styled.button`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  border: 1px solid #fff;
  margin-right: 6px;
  :hover {
    opacity: 0.7;
  }
  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const LightButton = styled(Button)`
  background-color: #68825f;
`;

const BlueButton = styled(Button)`
  background-color: #14274e;
`;

const RedButton = styled(Button)`
  background-color: #bb2205;
`;

const GrayButton = styled(Button)`
  background-color: #424242;
`;

const BrownButton = styled(Button)`
  background-color: #7d5a50;
`;