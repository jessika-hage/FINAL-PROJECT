import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: auto;
  margin: 0;  
  padding-bottom: 100px;
  @media (min-width: 768px) {
    padding-bottom: 0;
  }
`;

// Memory Card
export const Card = styled.div`
	height: 120px;
	width: 90px;
	background-color: ${(props) => props.theme.secondary};
  margin: 5px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  @media (min-width: 768px) {
    margin: 10px;
    height: 180px;
    width: 140px;
  }
`;

export const ImageCard = styled.img`
  margin: 5px;
  height: 120px;
	width: 90px;
  @media (min-width: 768px) {
    margin: 10px;
    height: 180px;
    width: 140px;
  }
`;

// Memory Board
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  @media (min-width: 768px) {
    padding: 20px;
  }
`;

export const MemoryTitle = styled.h1`
  font-size: 30px;
  color: ${props => props.theme.textColor};
  text-transform: uppercase;
`;

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${props => props.theme.primary};
  border: 4px solid ${props => props.theme.hover};
  color: ${props => props.theme.textColor};
  padding: 20px 10px;
  @media (min-width: 1024px) {
    max-width: 85%;
    padding: 30px;
  }
  @media (min-width: 1400px) {
    max-width: 70%;
  }
`; 

export const FlipText = styled.p`
  font-size: 16px;
  position: absolute;
  left: 20px;
  top: 0;
`;

export const GameGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

// Finish Dialog
export const DialogContainer = styled.div`
  padding: 20px;
  display: flex;
  width: 100%;
  height: 100%;
  flex-directioN: column;
  align-items: center;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.textColor};
  text-transform: uppercase;
  border: 4px solid ${props => props.theme.hover};
`;

export const Button = styled.button`
  padding: 10px 15px;
  margin-top: 20px;
  background-color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.hover};
  color: ${props => props.theme.textColor};
  font-size: 16px;
  text-transform: uppercase;
  font-family: "Trispace";
  :hover {
    background-color: ${props => props.theme.hover};
  }
`;