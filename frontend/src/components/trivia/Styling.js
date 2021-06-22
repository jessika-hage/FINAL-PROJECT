import styled from 'styled-components';

// Trivia
export const MainContainer = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	position: fixed;
	padding-top: 10px;
	color: ${(props) => props.theme.textColor};
	background-color: ${(props) => props.theme.backgroundColor};
`;

export const GameTitle = styled.h1`
	position: absolute;
	top: 30px;
	left: 20px;
	text-transform: uppercase;
  @media ( min-width: 768px) {
    top: 10px;
  }
`;

export const ScoreText = styled(GameTitle)`
	font-size: 20px;
	top: 75px;
	left: 22px;
  @media ( min-width: 768px) {
    top: 60px;
  }
`;

export const CounterText = styled(ScoreText)`
	top: 100px;
	left: 22px;
  @media ( min-width: 768px) {
    top: 85px;
  }
`;

export const TriviaContainer = styled.div`
	margin: 160px 20px;
	background-color: ${(props) => props.theme.primary};
	color: ${(props) => props.theme.textColor};
	background-color: ${(props) => props.theme.primary};
	border: 4px solid ${(props) => props.theme.hover};
	padding: 20px;
	display: flex;
  height: fit-content;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 85%;
	@media (min-width: 768px) {
		max-width: 65%;
		padding: 30px;
	}
	@media (min-width: 1400px) {
		max-width: 45%;
	}
`;

export const Question = styled.h3`
  font-size: 18px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const AnswerButton = styled.button`
  padding: 10px;
  font-size: 20px;
  margin: 0 10px;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.textColor};
  :hover {
    background-color: ${props => props.theme.hover};
  }
`;

// FinishGame
export const DialogContainer = styled.div`
  padding: 20px;
  display: flex;
  width: 100%;
  height: 100%;
  flex-directioN: column;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  border: 2px solid ${props => props.theme.secondary};
`;

export const DialogText = styled.p`
	font-size: 16px;
  margin: 0;
  text-align: center;
`;

export const Button = styled.button`
	padding: 10px 15px;
	margin-top: 20px;
	background-color: ${(props) => props.theme.primary};
	border: 2px solid ${(props) => props.theme.hover};
	color: ${(props) => props.theme.textColor};
	font-size: 16px;
	width: fit-content;
	text-transform: uppercase;
	font-family: 'Trispace';
	cursor: pointer;
	:hover {
		background-color: ${(props) => props.theme.hover};
	}
`;
