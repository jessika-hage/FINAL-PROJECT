import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// For Sign in and up pages
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${props => props.theme.backgroundColor};
`;

export const Title = styled.h1`
  text-transform: uppercase;
  color: ${props => props.theme.textColor};
  font-size: 40px;
  display: flex;
  margin-bottom: 40px;
`;

export const ChooseText = styled.p`
  color: ${props => props.theme.textColor};
  text-transform: uppercase;
  font-size: 14px;
  margin-top: 30px;
`;

// TextInput for Sign Up
export const Input = styled.input`
  padding: 10px;
  outline: none;
  border-bottom: 3px solid ${props => props.theme.primary};
  border-left: none;
  border-top: none;
  border-right: none;
  background-color: transparent;
  font-size: 16px;
  color: ${props => props.theme.textColor};
  margin-bottom: 20px;
  width: 300px;
  font-family: 'Trispace';
  :focus {
	background-color: ${props => props.theme.primary};
  }
  ::placeholder {
	text-transform: uppercase;
  }
`;

// TextInput for Sign In
// With animation
const input = keyframes`
  0% { opacity: 0 }
  80% { opacity: 0 }
  100% { opacity: 1 }
`;

export const InputSignIn = styled(Input)`
	animation: ${input} 3.5s linear;
`;

// SubmitButton for Sign Up
export const Button = styled.button`
  padding: 15px 25px;
  border: 2px solid transparent;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.textColor};
  text-transform: uppercase;
  font-family: 'Trispace';
  margin-top: 35px;
  :hover {
	opacity: 0.7;
  }
  :focus {
	border: 2px solid ${props => props.theme.hover};
  }
`;

// SubmitButton for Sign In
export const ButtonSignIn = styled(Button)`
  animation: ${input} 3.7s linear;
`;

// ChangeLogin for Sign Up
export const ChangeText = styled.p`
  color: ${props => props.theme.textColor};
  text-transform: uppercase;
  font-size: 14px;
`;

export const ChangeLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.textColor};
  cursor: pointer;
  margin-left: 7px;
  :hover, :focus {
	text-decoration: underline;
  }
`;

export const ChangeTextSignIn = styled(ChangeText)`
  animation: ${input} 3.7s linear;
`;

// Title Animation
export const AnimationTitle = styled(Title)`
  margin-bottom: 40px;
`;

const letterTop = keyframes`
  from { transform: translateY(-800px) }
  to { transform: translateY(0px) }
`;

const letterBottom = keyframes`
  from { transform: translateY(800px) }
  to { transform: translateY(0px) }
`;

const letterRight = keyframes`
  from { transform: translateX(800px) }
  to { transform: translateX(0px) }
`;

const letterLeft = keyframes`
  from { transform: translateX(-800px) }
  to { transform: translateX(0px) }
`;

export const Letter = styled.p`
	&:nth-of-type(8) {
		margin-left: 15px;
	}
	&:nth-of-type(1) {
		animation: ${letterTop} 2.1s linear;
	}
	&:nth-of-type(2) {
		animation: ${letterRight} 2.1s linear;
	}
	&:nth-of-type(3) {
		animation: ${letterLeft} 2.1s linear;
	}
	&:nth-of-type(4) {
		animation: ${letterBottom} 2.1s linear;
	}
	&:nth-of-type(5) {
		animation: ${letterTop} 2.3s linear;
	}
	&:nth-of-type(6) {
		animation: ${letterRight} 2.3s linear;
	}
	&:nth-of-type(7) {
		animation: ${letterLeft} 2.5s linear;
	}
	&:nth-of-type(8) {
		animation: ${letterBottom} 2.5s linear;
	}
	&:nth-of-type(9) {
		animation: ${letterTop} 2.5s linear;
	}
	&:nth-of-type(10) {
		animation: ${letterRight} 2.5s linear;
	}
	&:nth-of-type(11) {
		animation: ${letterBottom} 2.5s linear;
	}
`;

// Avatars
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0 0 0;
`;

export const Avatar = styled.img`
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