import styled from 'styled-components';

// MessageForm
export const Form = styled.form`
`;

export const MessageInput = styled.textarea`
  font-size: 14px;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 360px;
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
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 5px;
  text-transform: uppercase;
  color: ${props => props.theme.textColor};
  border: 2px solid ${props => props.theme.secondary};
  background-color: ${props => props.theme.primary};
  border-radius: 5px;
  font-family: "Trispace", serif;
  font-size: 15px;
  :hover, :focus {
    background-color: ${props => props.theme.secondary};
  }
  @media (min-width: 768px) {
    padding: 7px;
    font-size: 16px;
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
  height: 100vh;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border: 2px solid ${props => props.theme.secondary};
  }
`;

export const MessageBox = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 2px solid ${props => props.theme.primary};
  :last-of-type {
    margin-bottom: 100px;
  }
`;

export const ImageUserBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 5px;
`;

export const TextBox = styled(ImageUserBox)`
  margin-left: 6px;
  align-items: flex-start;
  justify-content: space-between;;
  width: 100%;
`;

export const MessageText = styled.p`
  font-size: 14px;
  margin: 0 0 5px 0;
`;

export const MessageCreated = styled.p`
  font-size: 11px;
  width: 100%;
  margin: 0 15px 0 0;
  text-align: right;
  opacity: 0.7;
`;

export const CitizenAvatar = styled.img`
	height: 30px;
	width: 30px;
	padding: 2px;
	margin: 0 0 3px 0;
	background-color: ${props => props.theme.secondary};
	border-radius: 50%;
	@media (min-width: 768px) {
		height: 36px;
		width: 36px;
	}
`;

export const Username = styled.p`
  font-size: 12px;
  margin: 0;
`;