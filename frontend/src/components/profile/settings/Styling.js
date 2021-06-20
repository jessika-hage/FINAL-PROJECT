import styled from 'styled-components';

// Avatars
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
`;

export const AvatarContainer = styled(ButtonContainer)`
`;

export const ChangeTitle = styled.h3`
  font-size: 14px;
  margin: 10px 0 5px 0;
  font-weight: 400;
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
  width: 30px;
  height: 30px;
  padding: 2px;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  border: 2px solid ${props => props.theme.secondary};
  @media (min-width: 400px) {
    width: 36px;
    height: 36px;
  }
  @media (min-width: 768px) {
    width: 46px;
    height: 46px;
    padding: 3px;
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

  export const UpdateButton = styled.button`
  text-transform: uppercase;
  background-color: ${props => props.theme.primary};
	border: 2px solid ${(props) => props.theme.secondary};
	color: ${props => props.theme.textColor};
	font-size: 14px;
	margin-top: 10px;
	padding: 5px;
	width: fit-content;
	:hover, :focus {
		background-color: ${props => props.theme.secondary};
	}
`;

// Dialogs
export const DialogContainer = styled.div`
  background-color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.secondary};
  padding 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DialogText = styled.p`
  color: ${props => props.theme.textColor};
  font-size: 16px;
`;

// Password
export const PasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Input = styled.input`
  padding: 6px;
  outline: none;
  border-bottom: 3px solid ${props => props.theme.primary};
  border-left: none;
  border-top: none;
  border-right: none;
  background-color: transparent;
  font-size: 14px;
  color: ${props => props.theme.textColor};
  margin: 5px 5px 5px 0;
  width: 160px;
  font-family: 'Trispace';
  :focus {
	background-color: ${props => props.theme.primary};
  }
  ::placeholder {
	text-transform: uppercase;
  }
  // :last-of-type {
  //   margin: 5px 0 5px 0;
  // }
`;

export const ConfirmInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ConfirmText = styled.p`
  font-size: 12px;
  margin: 2px 0 0 0;
  ${props =>
    props.success 
    ?
    ` color: #6DD704; `
    :  
    ` color: #e83715; `
  };
`;