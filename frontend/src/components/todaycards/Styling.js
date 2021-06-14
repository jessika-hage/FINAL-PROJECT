import styled from 'styled-components';

// Entertainment Dialog
export const DialogContainer = styled.div`
	background-color: ${props => props.theme.backgroundColor};
	border: 2px solid ${props => props.theme.primary};
	display: flex;
	flex-direction: column;
	padding: 10px;
	color: ${props => props.theme.textColor};
	@media (min-width: 768px) {
		padding: 20px;
	}
`;

export const DialogTitleText = styled.p`
	font-size: 14px;
	text-align: center;
`;

export const MovieContainer = styled.div`
	display: flex;
	border-bottom: 2px solid ${props => props.theme.primary};
	padding: 20px 0;
`;

export const MovieImage = styled.img`
	width: 150px;
	height: 180px;
`;

export const MovieTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 10px;
	@media (min-width: 768px) {
		padding-left: 20px;
	}
`;

export const TitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	@media (min-width: 768px) {
		align-items: center;
	}
`;

export const MovieTitle = styled.h2`
	font-size: 14px;
	text-transform: uppercase;
	margin: 5px 0 10px 0;
	@media (min-width: 768px) {
		font-size: 16px;
	}
`;

export const Basic = styled.div`
	border: 2px solid ${(props) => props.theme.secondary};
	font-size: 12px;
	padding: 5px;
	height: fit-content;
	text-transform: uppercase;
	@media (min-width: 768px) {
		padding: 10px;
	}
`;

export const Premium = styled(Basic)`
	border: 2px solid ${(props) => props.theme.hover};
`;

export const MovieRating = styled.p`
	font-size: 12px;
	margin-top: 4px;
`;

export const MovieDescription = styled.p`
	font-size: 12px;
	margin-top: 20px;
`;

export const UpgradeButton = styled.button`
	padding: 10px;
	font-size: 12px;
	border: 2px solid ${(props) => props.theme.secondary};
	font-family: 'Trispace', sans-serif;
	text-transform: uppercase;
	width: fit-content;
	background-color: ${(props) => props.theme.primary};
	color: ${(props) => props.theme.textColor};
	:hover,
	:focus {
		transform: scale(1.05);
		border: 2px solid ${(props) => props.theme.hover};
	}
`;

export const MovieContainerPremium = styled(MovieContainer)`
	${(props) => (props.premium ? `opacity: 0.1;` : `opacity: 1;`)}
`;
