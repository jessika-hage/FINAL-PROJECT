import styled from 'styled-components';

// MessageForm
export const Form = styled.form`
`;

export const MessageInput = styled.textarea`
  font-size: 14px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.textColor};
  padding: 10px 10px 20px 10px;
  outline: none;
  border: 2px solid ${props => props.theme.secondary};
  ::placeholder {
    color: ${props => props.theme.textColor};
  }
  :focus {
    background-color: ${props => props.theme.secondary};
  }
`;

export const SubmitButton = styled.button`
  outline: none;
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 10px;
  text-transform: uppercase;
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.hover};
  border-radius: 5px;
  font-family: "Trispace", serif;
  font-size: 18px;
  :hover {
      opacity: 0.7;
  }
`;

//MessageBoard
export const MessageContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.backgroundColor};
  border-left: 3px solid ${props => props.theme.primary};
  color: ${props => props.theme.textColor};
  padding: 20px;
  min-height: 100vh;
  position: relative;
`;

export const CloseIcon = styled.button`
  outline: none;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  font-size: 20px;
  color: ${props => props.theme.textColor};
  :hover, :focus {
    color: ${props => props.theme.hover};
  }
`;

export const MessageTitle = styled.h3`
  text-transform: uppercase;
  text-align: center;
  font-size: 20px;
  border-bottom: 2px solid ${props => props.theme.hover};
  padding-bottom: 5px;
`;

export const MessageList = styled.div`
  max-width: 320px;
  overflow: scroll;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border: 2px solid ${props => props.theme.secondary};
  }
`;

export const MessageBox = styled.div`
  font-size: 14px;
  border-bottom: 3px solid ${props => props.theme.primary};
  :last-of-type {
    margin-bottom: 100px;
  }
`;

export const MessageText = styled.p`
  font-size: 14px;
  margin-bottom: 0;
`;

export const MessageCreated = styled.p`
  font-size: 11px;
  margin-top: 3px;
`;

export const CitizenAvatar = styled.img`
	height: 18px;
	width: 18px;
	padding: 2px;
	margin-right: 5px;
	background-color: ${props => props.theme.secondary};
	border-radius: 50%;
	@media (min-width: 768px) {
		height: 28px;
		width: 28px;
		padding: 2px;
	}
`;

export const Username = styled.p`
  font-size: 12px;
`;