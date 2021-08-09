import styled from 'styled-components';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

// InvestmentProfile
export const InvestmentContainer = styled.div`
	display: flex;
	flex-direction: column;
	font-family: 'Open Sans', serif;
	width: 50%;
	margin-left: 5px;
	border-right: 1px solid ${(props) => props.theme.secondary};
`;

export const InvestmentText = styled.p`
	font-size: 12px;
	color: ${props => props.theme.textColor};
	margin: 0 0 3px 3px;
	padding: 0;
	@media (min-width: 768px) {
		font-size: 14px;
	}
`;

export const InvestmentChange = styled(InvestmentText)`
	display: flex;
	flex-direction: column;
	margin: 2px 0 5px 3px;
`;

export const ValueChange = styled(InvestmentText)`
	margin: 5px 5px 0 0;
	${props =>
		props.percent ?
		`color: #e83715;`
		:  
		`color: #6DD704;`
	};
`;

export const IconUp = styled(FaArrowUp)`
	margin: 0 5px -1px 0;
`;

export const IconDown = styled(FaArrowDown)`
	margin: 0 5px -1px 0;
`;

// Items Profile
export const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
	justify-content: space-between;
  padding: 0;
  margin: 0;
  width: fit-content;
	font-family: 'Open Sans', serif;
`;

export const ItemsTitle = styled.p`
  font-size: 14px;
  color: ${props => props.theme.textColor};
  margin: 0 0 3px 3px;
  padding: 0;
`;

// Profile Stats
export const ImageNameContainer = styled.div`
	display: flex;
	align-items: center;
  justify-content: center;
  flex-direction: column;
	width: 100%;
  padding: 5px;
  margin: 0;
	border-bottom: 1px solid ${(props) => props.theme.secondary};
`;

export const ProfileAvatar = styled.img`
	width: 60px;
	height: 60px;
	padding: 2px;
	border-radius: 50%;
	border: 1px solid ${(props) => props.theme.primary};
	background-color: ${(props) => props.theme.secondary};
	margin: 0 0 0 6px;
	@media (min-width: 768px) {
		width: 120px;
		height: 120px;
		padding: 4px;
	}
`;

export const Username = styled.h3`
	font-size: 14px;
	font-weight: bold;
	margin: 7px 0 0 3px;
	color: ${(props) => props.theme.textColor};
	text-transform: uppercase;
	@media (min-width: 768px) {
		font-size: 16px;
	}
`;

export const StatusContainer = styled.div`
	display: flex;
  justify-content: center;
  align-items: center;
	width: 100%;
`;

export const BadgesText = styled.div`
	display: flex;
	align-items: center;
	font-size: 12px;
  padding: 15px 15px;
	position: absolute;
	top: 0;
	left: 0;
	color: ${(props) => props.theme.textColor};
	@media (min-width: 768px) {
		font-size: 14px;
	}
`;

export const BadgeIcon = styled.img`
	margin: 0 5px 0 0;
`;

export const CoinsText = styled.div`
	display: flex;
	align-items: center;
	font-size: 12px;
	padding: 15px 15px;
	position: absolute;
	top: 0;
	right: 0;
	color: ${(props) => props.theme.textColor};
	@media (min-width: 768px) {
		font-size: 14px;
	}
`;

export const CoinsIcon = styled.img`
	margin: 0 0 0 7px
`;