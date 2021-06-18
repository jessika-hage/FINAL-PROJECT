import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

export const TableContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 20px;
	background-color: ${props => props.theme.backgroundColor};
	color: ${props => props.theme.textColor};
	max-height: 320px;
	overflow: scroll;
	&::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border: 2px solid ${props => props.theme.secondary};
  }
`;

export const TableHead = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 2px solid ${props => props.theme.secondary};
`;

export const TableTitle = styled.div`
	width: 25%;
	padding: 0 0 5px 5px;
	margin: 0;
	font-weight: bold;
	text-transform: uppercase;
	color: ${props => props.theme.textColor};
	font-size: 14px;
`;

export const TableTitleLinks = styled(TableTitle)`
	cursor: pointer;
	width: 22%;
	:hover, :focus {
		text-decoration: underline;
	}
`;

export const CitizenDaysLink = styled(TableTitleLinks)`
  display: none;
	@media (min-width: 950px) {
		display: flex;
	}
`;

export const Icon = styled(FaStar)`
  color: yellow;
  font-size: 8px;
  margin: 0 5px 0 -13px;
  @media (min-width: 768px) {
    font-size: 10px;
  }
`;

export const CitizenAvatar = styled.img`
	height: 18px;
	width: 18px;
	padding: 2px;
	margin-right: 5px;
	background-color: ${props => props.theme.secondary};
  border: 1.5px solid ${props => props.theme.secondary};
	border-radius: 50%;
	@media (min-width: 768px) {
		height: 28px;
		width: 28px;
		padding: 2px;
	}
`;

export const Citizen = styled.p`
	width: 25%;
	margin: 0;
	font-size: 12px;
	text-align: left;
	@media (min-width: 768px) {
		font-size: 14px;
	}
`;

export const CitizenDays = styled(Citizen)`
  display: none;
	@media (min-width: 950px) {
		display: flex;
	}
`;

export const CitizensList = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	padding: 6px 0 4px 0;
	border-bottom: 2px solid ${(props) => props.theme.secondary};
	@media (min-width: 768px) {
		padding: 6px 0 4px 0;
	}
`;