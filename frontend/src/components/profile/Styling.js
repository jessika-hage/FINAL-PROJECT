import styled from 'styled-components';

// Profile Stats
export const ImageNameContainer = styled.div`
	display: flex;
	align-items: center;
	width: 40%;
	height: 100%;
`;

export const ProfileAvatar = styled.img`
	width: 40px;
	height: 40px;
	padding: 2px;
	border-radius: 50%;
	border: 1px solid ${(props) => props.theme.primary};
	background-color: ${(props) => props.theme.secondary};
	margin: 0 0 0 6px;
	:hover {
		opacity: 0.7;
	}
	@media (min-width: 768px) {
		width: 64px;
		height: 64px;
		padding: 4px;
	}
`;

export const StatusContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px 0 20px 10px;
	width: 50%;
`;

export const Username = styled.h3`
	font-size: 14px;
	font-weight: bold;
	margin: 3px 0 3px 3px;
	color: ${(props) => props.theme.textColor};
	text-transform: uppercase;
	@media (min-width: 768px) {
		font-size: 16px;
	}
`;

export const PointsText = styled.p`
	display: flex;
	align-items: center;
	font-size: 12px;
	margin: 2px 0 2px 3px;
	color: ${(props) => props.theme.textColor};
	@media (min-width: 768px) {
		font-size: 14px;
	}
`;

export const IconImage = styled.img`
	margin: 0 5px 5px 5px;
`;

// Profile 
export const ProfileContainer = styled.section`
	display: flex;
	flex-direction: column;
	padding: 20px;
	height: 100%;
`;

export const TopContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 2px solid ${(props) => props.theme.secondary};
	padding-bottom: 0px;
	width: 100%;
	margin: 0;
`;

export const DaysContainer = styled(StatusContainer)`
	padding-left: 20px;
	margin: 0;
	height: 100%;
	border-left: 2px solid ${(props) => props.theme.secondary};
`;

export const DaysText = styled(PointsText)`
	font-weight: bold;
`;

export const BottomContainer = styled.div`
	display: flex;
	height: 100%;
	margin: 0;
	border-bottom: 2px solid ${(props) => props.theme.secondary};
`;

export const LeftContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	padding: 10px;
`;

export const RightContainer = styled(LeftContainer)`
	display: flex;
	padding-left: 20px;
	border-left: 2px solid ${(props) => props.theme.secondary};
`;

export const ContainerTitle = styled(Username)`
	font-size: 15px;
`;

// Buttons
export const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
`;

export const ButtonSignOut = styled.button`
	margin-top: 10px;
	background-color: transparent;
	font-size: 30px;
	color: ${props => props.theme.textColor};
	:hover {
		color: ${props => props.theme.hover};
	}
`;

// Items Profile
export const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
  margin: 0;
  width: fit-content;
  border-bottom: 1px solid ${props => props.theme.secondary};
`;

export const ItemsTitle = styled.p`
  font-size: 14px;
  color: ${props => props.theme.textColor};
  margin: 0 0 0 3px;
  padding: 0;
`;

export const ItemsQuantity = styled(ItemsTitle)`
  margin: 0 0 0 5px;
`;