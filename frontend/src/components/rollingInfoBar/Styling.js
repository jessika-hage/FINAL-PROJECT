import styled, { keyframes } from 'styled-components';

export const MainBar = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.secondary};
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 5px;
  color: ${props => props.theme.textColor};
  opacity: 0.8;
  width: 100%;
`;

const Roller = keyframes`
5% { opacity: 0; transform: translateX(500px) }
20% { opacity: 1 }
95% { opacity: 1 }
100% { opacity: 0.6; transform: translateX(-800px) }`;

export const RollingText = styled.p`
  font-size: 14px;
  animation: ${Roller} 20s linear infinite;
  opacity: 0;
`;

// Weather
export const Text = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  padding: 0;
  text-transform: uppercase;
  background-color: transparent;
  outline: none;
  border: none;
  font-weight: bold;
  margin-left: 10px;
  color: ${props => props.theme.textColor};
  text-decoration: underline;
`;

export const DialogContainer = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  border: 2px solid ${props => props.theme.primary};
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: ${props => props.theme.textColor};
`;

export const ForecastTitle = styled.h2`
  font-size: 24px;
  text-transform: uppercase;
`;

export const WeatherContainer = styled.div`
  border-bottom: 2px solid ${props => props.theme.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DayText = styled.p`
  font-size: 16px;
  text-transform: uppercase;
`;