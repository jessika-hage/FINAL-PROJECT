import styled from 'styled-components';
import { FaSquareRootAlt, FaFish } from 'react-icons/fa';

export const TableContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 10px 20px 20px 20px;
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
	position: relative;
  align-items: center;
	padding: 15px 20px 10px 20px;
	border-bottom: 2px solid ${props => props.theme.secondary};
`;

export const TableTitle = styled.p`
	width: 35%;
	padding: 0 0 5px 5px;
	margin: 0;
	font-weight: bold;
	text-transform: uppercase;
	color: ${props => props.theme.textColor};
	font-size: 14px;
	@media (min-width: 1300px) {
		width: 40%;
	}
`;

export const BubbleTitle = styled(TableTitle)`
	cursor: pointer;
	position: absolute;
	left: 40%;
	:hover, :focus {
		opacity: 0.7;
	}
`;

export const FishTitle = styled(BubbleTitle)`
	cursor: pointer;
	left: 60%;
	:hover, :focus {
		opacity: 0.7;
	}
`;

export const MathTitle = styled(BubbleTitle)`
	cursor: pointer;
	left: 80%;
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
    font-size: 16px;
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
	${props => props.me 
		? `font-weight: 600` 
		: `font-weight: 400`}
`;

export const ScoreBubble = styled(Citizen)`
  position: absolute;
	left: 42%;
`;

export const ScoreFish = styled(ScoreBubble)`
  left: 64%;
`;

export const ScoreMath = styled(ScoreBubble)`
  left: 87%;
`;

export const CitizensList = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	padding: 6px 4px 4px 4px;
  width: 100%;
	border-bottom: 2px solid ${(props) => props.theme.secondary};
	@media (min-width: 768px) {
		padding: 6px 0 4px 0;
	}
`;

export const MathIcon = styled(FaSquareRootAlt)`
	font-size: 20px;
	@media (min-width: 414px) {
		font-size: 24px;
	}
`;

export const FishIcon = styled(FaFish)`
	font-size: 20px;
	@media (min-width: 414px) {
		font-size: 28px;
	}
`;