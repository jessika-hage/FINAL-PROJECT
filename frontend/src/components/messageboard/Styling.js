import styled from 'styled-components/macro';

// MessageForm
export const Form = styled.form`
`;

export const MessageInput = styled.textarea`
  font-size: 12px;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 317px;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.textColor};
  padding: 10px 10px 20px 10px;
  outline: none;
  border-top: 2px solid ${props => props.theme.secondary};
  border-left: none;
  border-bottom: none;
  border-right: none;
  ::placeholder {
    color: ${props => props.theme.textColor};
  }
  :focus {
    background-color: ${props => props.theme.secondary};
  }
  @media (max-width: 320px) {
    width: 277px;
  }
  @media (min-width: 768px) {
    width: 360px;
    font-size: 14px;
  }
`;

export const SubmitButton = styled.button`
  position: fixed;
  bottom: 10px;
  right: 10px;
  padding: 5px;
  text-transform: uppercase;
  color: ${props => props.theme.textColor};
  border: 2px solid ${props => props.theme.secondary};
  background-color: ${props => props.theme.primary};
  border-radius: 4px;
  font-family: 'Trispace', serif;
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
  padding: 7px;
  min-height: 100vh;
  position: relative;
  width: 320px;
  @media (max-width: 320px) {
    width: 280px;
  }
  @media (min-width: 768px) {
    padding: 10px;
    width: 363px;
  }
`;

export const CloseIcon = styled.button`
  position: fixed;
  top: 8px;
  right: 5px;
  background-color: transparent;
  font-size: 20px;
  color: ${props => props.theme.textColor};
  :hover, :focus {
    color: ${props => props.theme.hover};
  }
  @media (max-width: 320px) {
    font-size: 16px;
  }
  @media (min-width: 768px) {
    top: 10px;
    right: 10px;
  }
`;

export const MessageTitle = styled.h3`
  text-transform: uppercase;
  text-align: center;
  font-size: 18px;
  border-bottom: 2px solid ${props => props.theme.hover};
  padding-bottom: 5px;
  @media (max-width: 320px) {
    font-size: 16px;
  }
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const MessageList = styled.div`
  width: 100%;
  overflow: scroll;
  height: 100vh;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
    border: 2px solid ${props => props.theme.secondary};
  }
  ::-webkit-scrollbar-thumb {
		background-color: ${props => props.theme.secondary};
		:hover {
			background-color: ${props => props.theme.primary};
		}
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
  padding: 10px;
  align-items: flex-start;
  justify-content: space-between;;
  width: 100%;
`;

export const MessageText = styled.p`
  font-size: 12px;
  margin: 0 0 5px 0;
  @media (max-width: 320px) {
    font-size: 11px;
  }
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const MessageCreated = styled.p`
  font-size: 9px;
  width: 100%;
  margin: 0 15px 0 0;
  text-align: right;
  opacity: 0.7;
  @media (max-width: 320px) {
    font-size: 8px;
  }
  @media (min-width: 768px) {
    font-size: 11px;
  }
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
  font-size: 11px;
  margin: 0;
  @media (max-width: 320px) {
    font-size: 10px;
  }
  @media (min-width: 768px) {
    font-size: 12px;
  }
`;