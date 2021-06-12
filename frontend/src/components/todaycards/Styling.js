import styled from 'styled-components';

// Entertainment Dialog
export const DialogContainer = styled.div`
	background-color: ${props => props.theme.backgroundColor};
	border: 2px solid ${props => props.theme.primary};
	display: flex;
	flex-direction: column;
	padding: 20px;
	color: ${props => props.theme.textColor};
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
	padding-left: 20px;
`;

export const TitleCircleBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const MovieTitle = styled.h2`
	font-size: 16px;
	text-transform: uppercase;
	margin: 5px 0 10px 0;
`;

export const Basic = styled.div`
	border: 2px solid ${(props) => props.theme.secondary};
	font-size: 12px;
	padding: 10px;
	text-transform: uppercase;
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
