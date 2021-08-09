import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export const DialogContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
  position: relative;
	padding: 7px;
	font-size: 14px;
	max-width: 300px;
	background-color: ${props => props.theme.backgroundColor};
	border: 2px solid ${(props) => props.theme.secondary};
	color: ${props => props.theme.textColor};
`;

export const DialogHeader = styled.div`
  position: absolute;
  border-bottom: 1px solid ${props => props.theme.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 4px 6px;
  @media (min-width: 768px) {
    padding: 5px 7px;
  }
`;

export const HeaderText = styled.p`
  font-size: 14px;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  color: ${props => props.theme.textColor};
  margin: 27px 1px 4px 1px;
  padding: 0;
  @media (min-width: 768px) {
    font-size: 14px;
    margin: 30px 2px 7px 2px;
  }
`;

export const CloseIcon = styled(FaTimes)`
	font-size: 15px;
	cursor: pointer;
  @media (min-width: 768px) {
    font-size: 16px;
  }
	:hover, :focus {
		color: ${props => props.theme.secondary};
	}
`;

export const ButtonBox = styled.div`
	display: flex;
	margin-top: 5px;
`;

export const SellButton = styled.button`
	background-color: ${props => props.theme.primary};
	border: 2px solid ${(props) => props.theme.secondary};
	color: ${props => props.theme.textColor};
	font-size: 14px;
	margin: 7px 7px 0 0;
	padding: 5px;
	width: fit-content;
	:hover, :focus {
		background-color: ${props => props.theme.secondary};
	}
`;

export const ConfirmedButton = styled.button`
	background-color: ${(props) => props.theme.primary};
	border: 2px solid ${(props) => props.theme.secondary};
	font-size: 14px;
	padding: 8px;
  margin: 7px;
	text-transform: uppercase;
	color: ${(props) => props.theme.textColor};
	:hover,
	:focus {
		background-color: ${(props) => props.theme.secondary};
	}
`;

export const GameButton = styled(ConfirmedButton)`
	margin: 20px 0 0 0;
	border: 2px solid ${(props) => props.theme.hover};
	@media (hover:hover) {
		&:hover {
			background-color: ${(props) => props.theme.hover};
		}
	}
`;