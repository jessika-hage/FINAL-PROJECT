import styled from 'styled-components';

// MessageForm
export const Form = styled.form``;

export const CloseIcon = styled.button`
	outline: none;
	border: none;
	position: absolute;
	top: 10px;
	right: 10px;
	background-color: transparent;
	font-size: 20px;
	color: ${(props) => props.theme.textColor};
	:hover,
	:focus {
		color: ${(props) => props.theme.hover};
	}
`;
