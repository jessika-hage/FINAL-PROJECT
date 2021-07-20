import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// Header
export const Main = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
	background-color: ${(props) => props.theme.primary};
	position: fixed;
	margin: 0;
	width: 100%;
	bottom: 0;
	z-index: 2;
	@media (min-width: 768px) {
		top: 0;
		height: 80px;
		border-bottom: 4px solid ${(props) => props.theme.secondary};
	}
`;

export const TitleDate = styled.div`
	display: flex;
	flex-direction: column;
`;

export const NavLink = styled(Link)`
	margin: 0;
	padding: 0 0 2px 14px;
	color: ${(props) => props.theme.textColor};
	font-family: 'Trispace';
	text-transform: uppercase;
	font-size: 24px;
	z-index: 3;
	@media (min-width: 768px) {
		padding: 0 0 2px 20px;
	}
`;

export const Date = styled.p`
	padding 0 14px;
	margin: 0;
	font-size: 12px;
	color: ${(props) => props.theme.textColor};
	@media (min-width: 768px) {
		font-size: 14px;
		padding 0 20px;
	}
`;

export const IconsContainer = styled.div`
	display: flex;
	align-items: center;
	z-index: 5;
	color: ${(props) => props.theme.textColor};
`;

export const MessageIcon = styled.button`
	font-size: 26px;
	border-radius: 50%;
	padding: 8px;
	background-color: ${(props) => props.theme.secondary};
	color: ${(props) => props.theme.textColor};
	margin-right: 7px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 2px;
	:hover, :focus {
		background-color: ${(props) => props.theme.hover};
		transform: scale(1.05);
	}
	@media (min-width: 768px) {
		font-size: 32px;
		padding: 10px;
		margin-left: 5px;
	}
`;

export const ProfilImg = styled(MessageIcon)`
	margin-right: 14px;
	padding: 7px;
	@media (min-width: 768px) {
		padding: 8px;
		margin-right: 20px;
	}
`;

export const Avatar = styled.img`
	width: 28px;
	@media (min-width: 768px) {
		width: 36px;
	}
`;

export const DrawerContainer = styled.section`
	height: 100vh;
	background-color: ${(props) => props.theme.primary};
`;

// Camera
export const CameraContainer = styled.div`
	width: 100%;
	height: 35px;
	background-color: ${(props) => props.theme.secondary};
	display: flex;
	justify-content: center;
	position: fixed;
	top: 0;
	z-index: 3;
	margin: 0 auto 35px auto;
	@media (min-width: 768px) {
		background-color: transparent;
		margin: 0 auto 30px auto;
		position: relative;
		top: 60px;
	}
`;

const recording = keyframes`
  from {
    transform: scale(1);
    opacity: 0.7;
  }
  to {
    transform: scale(1.2);
    opacity: 1;
  },
`;

export const Circle = styled.div`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background-color: #4f504e;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 20px;
	cursor: pointer;
	border: 4px solid ${(props) => props.theme.backgroundColor};
	@media (min-width: 768px) {
		top: 65px;
		width: 38px;
		height: 38px;
	}
`;

export const InnerCircle = styled.span`
	width: 12px;
	height: 12px;
	border-radius: 50%;
	border: 4px solid #44b700;
	background-color: #b4f76d;
	z-index: 1;
	animation: ${recording} 1s linear infinite alternate-reverse;
	@media (min-width: 768px) {
		top: 80px;
		width: 16px;
		height: 16px;
		border: 6px solid #5fb602;
	}
`;

// Hidden Background
export const Wrapper = styled.div`
	background-color: ${(props) => props.theme.backgroundColor};
	width: 100%;
	height: 100vh;
	position: relative;
	overflow: auto;
	opacity: 0.3;
	z-index: 3;
`;

export const Background = styled.iframe`
	width: 100%;
	height: 100vh;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	padding: 0;
	margin: 0;
	border: 0;
`;
