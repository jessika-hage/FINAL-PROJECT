import styled from 'styled-components';

export const TableContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 20px;
	background-color: ${props => props.theme.backgroundColor};
	color: ${props => props.theme.textColor};
	max-height: 220px;
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
  align-items: center;
	border-bottom: 2px solid ${props => props.theme.secondary};
`;

export const TableTitle = styled.div`
	width: 30%;
	padding: 0 0 5px 5px;
	margin: 0;
	font-weight: bold;
	text-transform: uppercase;
	color: ${props => props.theme.textColor};
	font-size: 14px;
`;

export const TableTitleLinks = styled(TableTitle)`
	cursor: pointer;
	width: 20%;
	:hover, :focus {
		opacity: 0.7;
	}
`;

export const PositionContainer = styled.div`
  display: flex;
  align-items: center;
  width: 35%;
`;

export const Position = styled.p`
  padding-left: 5px;
  margin: 0;
  font-size: 14px;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const CitizenAvatar = styled.img`
	height: 15px;
	width: 15px;
	padding: 2px;
	margin:  0 5px;
	border-radius: 50%;
  background-color: ${(props) => props.theme.secondary};
	@media (min-width: 768px) {
		height: 22px;
		width: 22px;
		padding: 2px;
	}
`;

export const Citizen = styled.p`
  padding: 0 5px;
	margin: 0;
	font-size: 12px;
  width: 20%;
	text-align: left;
	@media (min-width: 768px) {
		font-size: 14px;
	}
`;

export const Score = styled(Citizen)`
  margin-left: 5px;
`;

export const CitizensList = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 6px 4px 4px 4px;
  width: 100%;
	border-bottom: 2px solid ${(props) => props.theme.secondary};
	@media (min-width: 768px) {
		padding: 6px 0 4px 0;
	}
`;