import styled, { keyframes } from 'styled-components';

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.backgroundColor};
`;

export const DialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${props => props.theme.backgroundColor};
  border: 2px solid ${props => props.theme.secondary};
  color: ${props => props.theme.textColor};
`;

export const DialogText = styled.p`
  font-size: 16px;
`;

export const StartButton = styled.button`
  padding: 10px 15px;
  margin-top: 20px;
  background-color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.hover};
  color: ${props => props.theme.textColor};
  font-size: 16px;
  width: fit-content;
  text-transform: uppercase;
  font-family: "Trispace";
  cursor: pointer;
  :hover {
    background-color: ${props => props.theme.hover};
  }
`;

export const GameTitle = styled.h1`
  position: absolute;
  top: 10px;
  left: 20px;
  text-transform: uppercase;
`;

export const ScoreText = styled(GameTitle)`
  font-size: 20px;
  top: 60px;
  left: 25px;
`;

export const CounterText = styled(ScoreText)`
  top: 80px;
  left: 25px;
`;

const animationOne = keyframes`
  10% { transform: scale(1.2); transform: translateY(500px)}
  20% { transform: scale(1.3); transform: translateY(-600px)}
  30% { transform: scale(1.4); transform: translateX(400px)}
  40% { transform: scale(1.6); transform: translateY(500px)}
  50% { transform: scale(0.8); transform: translateY(-300px)}
  60% { transform: scale(0.6); transform: translateX(-400px)}
  70% { transform: scale(1.5); transform: translateY(500px)}
  80% { transform: scale(3); transform: translateY(-300px)}
  90% { transform: scale(3); transform: translateX(400px)}
  100% { transform: scale(3); transform: translateY(500px)}
  `
export const ButtonOne = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${props => props.theme.hover};
  animation: ${animationOne} 18s linear infinite alternate-reverse;
  cursor: pointer;
`;

const animationTwo = keyframes`
  10% { transform: scale(1.2); transform: translateX(500px)}
  20% { transform: scale(1.3); transform: translateX(-200px)}
  30% { transform: scale(1.4); transform: translateY(300px)}
  40% { transform: scale(1.6); transform: translateX(500px)}
  50% { transform: scale(0.8); transform: translateY(-300px)}
  60% { transform: scale(0.6); transform: translateX(-400px)}
  70% { transform: scale(1.5); transform: translateY(500px)}
  80% { transform: scale(1.3); transform: translateY(-300px)}
  90% { transform: scale(1.4); transform: translateX(400px)}
  100% { transform: scale(1); transform: translateY(500px)}
  `

export const ButtonTwo = styled.button`
  background-color: ${props => props.theme.secondary};
  width: 150px;
  height: 150px;
  border-radius: 50%;
  animation: ${animationTwo} 19s linear infinite alternate-reverse;
  cursor: pointer;
`;

export const animationThree = keyframes`
  10% { transform: scale(1.2); transform: translateX(100px)}
  20% { transform: scale(1.3); transform: translateX(200px)}
  30% { transform: scale(1.4); transform: translateX(400px)}
  40% { transform: scale(1.6); transform: translateY(600px)}
  50% { transform: scale(1.8); transform: translateX(-500px)}
  60% { transform: scale(1.9); transform: translateX(-200px)}
  70% { transform: scale(1.5); transform: translateY(500px)}
  80% { transform: scale(1.3); transform: translateY(-300px)}
  90% { transform: scale(1.4); transform: translateX(400px)}
  100% { transform: scale(1); transform: translateY(500px)}
`;

export const ButtonThree = styled.button`
  background-color: ${props => props.theme.primary};
  border: 10px solid ${props => props.theme.hover};
  width: 200px;
  height: 200px;
  border-radius: 50%;
  animation: ${animationThree} 16s linear infinite alternate-reverse;
  cursor: pointer;
`;