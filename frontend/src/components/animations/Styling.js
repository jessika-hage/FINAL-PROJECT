import styled, { keyframes } from 'styled-components';


export const MainContainer = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
`;

const badgeanimation = keyframes`
  10% { opacity: 0; transform: scale(0.1)}
  70% { opacity: 1; transform: scale(1.5)}
  to { opacity: 1; transform: scale(1) }
`
export const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  animation: ${badgeanimation} 1.5s linear;
  opacity: 0;
  margin-left: 15px;
`;

export const BadgeText = styled.h1`
  font-size: 60px;
`;

export const BadgeIcon = styled.h1`
  text-align: center;
  font-size: 60px;  
`