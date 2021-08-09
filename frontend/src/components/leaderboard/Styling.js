import styled from 'styled-components/macro';
import { FaStar } from 'react-icons/fa';

export const TableContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 10px 20px 20px 20px;
	background-color: ${props => props.theme.backgroundColor};
	color: ${props => props.theme.textColor};
	max-height: 220px;
	overflow: scroll;
	overflow-x: hidden;
	&::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 12px;
    border: 2px solid ${props => props.theme.secondary};
  }
	::-webkit-scrollbar-thumb {
		background-color: ${props => props.theme.secondary};
		:hover {
			background-color: ${props => props.theme.primary};
		}
	}
	@media (min-width: 768px) {
    max-height: 340px;
  }
  @media (min-width: 1024px) {
    max-height: 406px;
  }
`;

export const TableHead = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 12px 20px 8px 20px;
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
	width: 24%;
	@media (min-width: 768px) {
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
	margin-right: 8px;
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
	cursor: pointer;
	:hover {
		text-decoration: underline;
	}
	@media (min-width: 768px) {
		font-size: 14px;
	}
	${props => props.me 
		? `font-weight: 600` 
		: `font-weight: 400`}
`;

export const CitizenRank = styled.p`
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
	@media (min-width: 768px) {
		display: flex;
	}
`;

export const Badges = styled(Citizen)`
	margin-right: -20px;
	margin-left: 10px;
	@media (min-width: 768px) {
		margin-right: -15px;
		margin-left: 25px;
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

// Citizen Profile
export const ProfileContainer = styled.section`
	display: flex;
	flex-direction: column;
	background-color: ${props => props.theme.backgroundColor};
	color: ${props => props.theme.textColor};
	border: 2px solid ${props => props.theme.secondary};
	font-size: 20px;
  padding: 10px 5px;
	min-width: 300px;
	max-width: 450px;
  overflow: scroll;
	overflow-x: hidden;
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
	@media (min-width: 768px) {
		padding: 10px 10px;
		min-width: 400px;
		max-width: 450px;
	}
`;

export const InvestItemsContainer = styled.div`
	display: flex;
	width: 100%;
`;

export const Items = styled.div`
  padding: 3px 0px 7px 5px;
	width: 50%;
	margin-left: 4px;
	display: flex;
	flex-direction: column;
	@media (min-width: 768px) {
		padding: 3px 0px 7px 10px;
		margin-left: 5px;
	}
`;

export const ContainerTitle = styled.p`
	font-size: 13px;
	font-weight: bold;
	margin: 7px 0 5px 3px;
	color: ${(props) => props.theme.textColor};
	text-transform: uppercase;
	word-wrap: break-word;
	@media (min-width: 768px) {
		font-size: 16px;
	}
`;

