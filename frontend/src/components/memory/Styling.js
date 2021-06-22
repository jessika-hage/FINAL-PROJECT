import styled from 'styled-components';

export const MainContainer = styled.main`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
position: relative;
padding-top: 10px;
color: ${(props) => props.theme.textColor};
background-color: ${(props) => props.theme.backgroundColor};
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
`;

export const GameTitle = styled.h1`
	position: absolute;
	top: 30px;
	left: 20px;
	text-transform: uppercase;
  @media ( min-width: 768px) {
    top: 10px;
  }
`;

export const FlipText = styled(GameTitle)`
	font-size: 20px;
	top: 75px;
	left: 22px;
  @media ( min-width: 768px) {
    top: 60px;
  }
`;

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${props => props.theme.primary};
  border: 4px solid ${props => props.theme.secondary};
  color: ${props => props.theme.textColor};
  padding: 20px 10px;
  margin-top: 100px;
  @media (max-height: 569px) {
    margin-top: 550px;
  }
  @media (max-height: 667px) {
    margin-top: 160px;
  }
  @media (min-width: 768px) {
    margin-top: -20px;
    max-width: 90%;
  }
  @media (min-width: 1024px) {
    max-width: 85%;
    padding: 30px;
  }
  @media (min-width: 1400px) {
    max-width: 70%;
    margin-top: -100px;
  }
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
  max-width: 320px;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  border: 2px solid ${props => props.theme.secondary};
  @media (min-width: 768px) {
    max-width: 400px;
  }
`;

export const Button = styled.button`
  padding: 10px 15px;
  margin-top: 20px;
  background-color: ${(props) => props.theme.primary};
  border: 2px solid ${(props) => props.theme.hover};
  color: ${(props) => props.theme.textColor};
  font-size: 16px;
  width: fit-content;
  text-transform: uppercase;
  font-family: 'Trispace';
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.hover};
  }
`;

export const DialogText = styled.p`
	font-size: 16px;
  margin: 0;
  text-align: center;
`;

