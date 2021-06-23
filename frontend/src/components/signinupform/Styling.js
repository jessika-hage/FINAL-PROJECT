import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// For Sign in and up pages
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
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
  margin: 15px 0 5px 0;
  @media (min-width: 768px) {
    margin: 20px 0 5px 0;
  }
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
  margin-top: 25px;
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

// Error message and show password button
export const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
  font-size: 12px;
  position: absolute;
  bottom: 40%;
`;

export const EyeButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => props.theme.secondary};
  font-size: 16px;
  position: absolute;
  animation: ${input} 3.5s linear;
  right: 1%;
  bottom: 62%;
  :hover {
    color: ${props => props.theme.primary};
  }
  :focus {
    color: ${props => props.theme.hover};
  }
`;

export const ErrorMessageSignUp = styled.p`
  color: red;
  padding-top: 10px;
  font-size: 12px;
  margin: 0;
  position: absolute;
  bottom: 53%;
  @media (min-width: 768px) {
    bottom: 57%;
  }
`;

export const EyeButtonSignUp = styled(EyeButton)`
  bottom: 60%;
  right: 5%;
  animation: none;
  @media (min-width: 768px) {
    bottom: 63%;
    right: 18%;
  }
`;

// ChangeLogin for Sign Up
export const ChangeText = styled.p`
  color: ${props => props.theme.textColor};
  text-transform: uppercase;
  font-size: 14px;
  margin-bottom: 25px;
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

export const AvatarContainer = styled(ButtonContainer)`
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  border-radius: 50%;
  background-color: ${props => props.theme.secondary};
  border: 2px solid transparent;
  width: 100%;
  height: 100%;
  position: relative;
  margin-right: 10px;
  z-index: 1; 
  :hover {
    border: 2px solid ${props => props.theme.hover};
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  padding: 2px;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  border: 2px solid ${props => props.theme.secondary};
  @media (min-width: 768px) {
    width: 64px;
    height: 64px;
    padding: 4px;
  }
`;

export const Radio = styled.input`
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  top: 0;
  left: 0;
  position: absolute;
  padding: 0;
  margin: 0;
  outline: none;
  &:checked ~ ${Avatar} {
    border: 2px solid ${props => props.theme.hover};
  }
`;