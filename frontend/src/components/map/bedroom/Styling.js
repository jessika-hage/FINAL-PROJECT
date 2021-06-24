import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

// Dialogs
export const DialogContainer = styled.div`
	background-color: ${(props) => props.theme.backgroundColor};
	border: 2px solid ${(props) => props.theme.primary};
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 20px;
	color: ${(props) => props.theme.textColor};
`;

export const DialogButton = styled.button`
	padding: 5px;
	margin-top: 10px;
	font-size: 14px;
	width: fit-content;
	text-transform: uppercase;
	background-color: ${(props) => props.theme.primary};
	color: ${(props) => props.theme.textColor};
	border: 2px solid ${(props) => props.theme.secondary};
	:hover,
	:focus {
		background-color: ${(props) => props.theme.secondary};
	}
	&:disabled {
		opacity: 0.3;
		:hover {
			background-color: ${props => props.theme.primary}
		}
	}
	@media (min-width: 768px) {
		font-size: 18px;
	}
`;

export const InfoTitle = styled.h2`
	font-size: 24px;
	text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;
	margin: 0 0 5px 0;
	padding: 0 0 5px 5px;
	border-bottom: 2px solid ${(props) => props.theme.primary};
`;

export const InfoText = styled.p`
	font-size: 12px;
	margin: 5px;
	@media (min-width: 768px) {
		font-size: 16px;
	}
`;

export const CloseIcon = styled(FaTimes)`
font-size: 16px;
cursor: pointer;
position: absolute;
top: 10px;
right: 10px;
outline: none;
:hover {
	transform: scale(1.2);
}
:focus {
	color: ${props => props.theme.primary}
}
@media (min-width: 768px) {
	font-size: 20px;
	top: 12px;
	right: 12px;
}
`;
