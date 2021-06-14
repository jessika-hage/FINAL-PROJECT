import styled from 'styled-components';

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
