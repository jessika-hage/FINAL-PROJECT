import styled from 'styled-components';

//MathGame - Main page
export const MainContainer = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${(props) => props.theme.backgroundColor};
	width: 100%;
	height: 100vh;
	overflow: auto;
	margin: 0 0 200px 0;
	position: relative;
`;

export const MathTitle = styled.h1`
	font-size: 30px;
	color: ${(props) => props.theme.textColor};
	text-transform: uppercase;
`;

export const MathContainer = styled.div`
	margin: 10px 20px;
	background-color: ${(props) => props.theme.primary};
	color: ${(props) => props.theme.textColor};
	background-color: ${(props) => props.theme.primary};
	border: 4px solid ${(props) => props.theme.hover};
	padding: 20px;
	position: relative;
	@media (min-width: 768px) {
		max-width: 85%;
		padding: 30px;
		margin-top: 30px;
	}
	@media (min-width: 1400px) {
		max-width: 70%;
	}
	${(props) => (props.blurred ? `filter: blur(4px);` : `filter: none;`)}
`;

export const TimerContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 15px;
`;

export const MathProblem = styled.h2`
	color: ${(props) => props.theme.textColor};
	text-align: center;
	font-size: 32px;
	${(props) => (props.wrongAnswer ? `color: red; transform: scale(1.2)` : ``)}
`;

export const StatusText = styled.p`
	color: ${(props) => props.theme.textColor};
	text-align: center;
	font-size: 14px;
`;

// FinishGame
export const DialogContainer = styled.div`
	padding: 20px;
	display: flex;
	width: 100%;
	height: 100%;
	flex-direction: column;
	align-items: center;
	background-color: ${(props) => props.theme.primary};
	color: ${(props) => props.theme.textColor};
	text-transform: uppercase;
	font-family: 'Trispace';
	border: 2px solid ${(props) => props.theme.hover};
`;

// MathForm
export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin: 50px 0;
`;

export const NumberInput = styled.input`
  padding: 7px;
  background-color: ${props => props.theme.primary};
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid ${props => props.theme.secondary};
  color: ${props => props.theme.textColor};
  outline: none;
  font-size: 14px;
  font-family: "Trispace";
  :focus {
    background-color: ${props => props.theme.secondary};
  }
  `;

// MathStart
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

export const Text = styled.h2`
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

// Buttons
export const Button = styled.button`
  padding: 10px 15px;
  margin-top: 20px;
  margin: 0 5px;
  background-color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.hover};
  color: ${props => props.theme.textColor};
  font-size: 16px;
  text-transform: uppercase;
  font-family: "Trispace";
  :hover {
    background-color: ${props => props.theme.hover};
  }
`;

export const SendButton = styled(Button)`
  padding: 10px 10px;
  background-color: ${props => props.theme.hover};
  font-size: 14px;
  :hover {
    background-color: ${props => props.theme.primary};
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

// ProgressBar
export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  margin: 0 0 10px 0;
`; 

export const ProgressBox = styled.div`
  height: 20px;
  width: 100%;
  border: 1px solid ${props => props.theme.secondary};
`;

export const ProgressFiller = styled.div`
  background: ${props => props.theme.hover};
  width: 100%;
  height: 100%;
  transition: width 0.5s linear;
`;
