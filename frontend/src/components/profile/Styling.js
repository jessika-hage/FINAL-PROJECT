import styled from 'styled-components';

// Profile Stats
export const ImageNameContainer = styled.div`
	display: flex;
	align-items: center;
  justify-content: center;
  flex-direction: column;
	width: 100%;
  padding: 5px 0 0 0;
  margin: 0 10px;
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

export const StatusContainer = styled.div`
	display: flex;
  justify-content: center;
  align-items: center;
	width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.primary};
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

export const BadgeIcon = styled.img`
	margin: 0 5px 0 0;
`;

export const CoinsIcon = styled.img`
	margin: 0 0 0 7px
`;

// Profile 
export const ProfileContainer = styled.section`
	display: flex;
	flex-direction: column;
  justify-content: space-between;
  align-items: center;
	max-height: 100vh;
  padding: 10px 5px;
  margin: 10px;
  max-width: 350px;
	min-width: 300px;
`;

// export const TopContainer = styled.div`
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// 	border-bottom: 2px solid ${(props) => props.theme.secondary};
// 	padding-bottom: 0px;
// 	width: 100%;
// 	margin: 0;
// `;

export const DaysContainer = styled(StatusContainer)`
  display: flex;
  flex-direction: column;
	justify-content: center;
  align-items: flex-start;
	margin: 0;
  padding: 5px 0;
	border-bottom: 2px solid ${(props) => props.theme.secondary};
`;

export const DaysText = styled.div`
	font-weight: bold;
  margin: 0;
  padding: 5px 0;
	display: flex;
	align-items: center;
	font-size: 12px;
	color: ${(props) => props.theme.textColor};
	@media (min-width: 768px) {
		font-size: 14px;
	}
`;

export const BottomContainer = styled.div`
	display: flex;
  flex-direction: column;
	justify-content: center;
  margin: 0 10px;
  width: 100%;
`;

export const LeftContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 0 5px 6px;
  width: 100%;
`;

export const RightContainer = styled(LeftContainer)`
  padding: 10px 0 10px 0;
  border-bottom: none;
`;

export const ContainerTitle = styled(Username)`
	font-size: 15px;
`;

// Buttons
export const ButtonContainer = styled.div`
	display: flex;
  flex-direction: column;
	flex-wrap: wrap;
  padding: 0 0 0 5px;
	position: absolute;
	bottom: 50px;
	left: 10px;
	right: 10px;
	border-top: 2px solid ${(props) => props.theme.secondary};
`;

export const ButtonSignOut = styled.button`
	margin-top: 10px;
	background-color: transparent;
	font-size: 30px;
  position: absolute;
  bottom: -40px;
  right: 5px;
	color: ${props => props.theme.textColor};
	:hover {
		color: ${props => props.theme.hover};
	}
`;

// Items Profile
export const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
	justify-content: space-between;
  padding: 5px 0;
  margin: 0;
  width: fit-content;
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