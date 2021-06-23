import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px 0 0 0;
`;

export const ThemeTitle = styled.p`
  font-size: 12px;
  margin-right: 5px;
  color: ${props => props.theme.textColor};
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Button = styled.button`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  border: 1px solid #fff;
  margin-right: 6px;
  :hover, :focus {
    opacity: 0.7;
  }
  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const LightButton = styled(Button)`
  background-color: #68825f;
`;

export const BlueButton = styled(Button)`
  background-color: #14274e;
`;

export const RedButton = styled(Button)`
  background-color: #bb2205;
`;

export const GrayButton = styled(Button)`
  background-color: #424242;
`;

export const BrownButton = styled(Button)`
  background-color: #7d5a50;
`;