import styled from 'styled-components/macro';
import { 
  FaArrowRight, 
  FaArrowLeft,
  FaArrowDown,
  FaArrowUp,
  FaBone } from 'react-icons/fa';

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: clip;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  color: #000;
  background-color: #B9D8CB;
`;

export const PhoneContainer = styled.div`
  position: relative;
  border-radius: 10% 10% 20% 20% / 10% 10% 20% 20%;
  background-color: #403F4E;
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 5px 0 5px;
  @media (min-width: 768px) {
    margin: 0;
  }
`;

export const PhoneName = styled.p`
  font-size: 18px;
  color: #A8A7AC;
  margin: 10px 0;
  @media (min-width: 768px) {
    margin: 18px 0;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px 10px;
  @media (min-width: 768px) {
    width: 90%;
  }
`;

export const StartButton = styled.button`
  background-color: #A8A7AC;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  width: 88%;
  padding: 5px;
  margin-bottom: 5px;
  border-radius: 10% 10% 30% 30% / 10% 10% 30% 30%;
  :hover {
    opacity: 0.7;
  }
`;

export const NumberButton = styled.button`
  padding: 5px 3px;
  width: 28%;
  margin: 5px;
  border-radius: 10px;
  background-color: #A8A7AC;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  :hover {
    opacity: 0.7;
  }
`;

export const NumberText = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #000;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Right = styled(FaArrowRight)`
  font-size: 12px;
  margin-left: 3px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Left = styled(FaArrowLeft)`
  font-size: 12px;
  margin-right: 3px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Up = styled(FaArrowUp)`
  font-size: 12px;
  margin-left: 3px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Down = styled(FaArrowDown)`
  font-size: 12px;
  margin-left: 3px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const SnakeContainer = styled.div`
  position: relative;
  height: 16rem;
  width: 22rem;
  background-color: #59734E;
  border: 5px solid #A8A7AC;
  border-radius: 5px;
  padding: 5px;
  z-index: 2;
`;

export const SnakeItem = styled.div`
  position: absolute;
  width: 1.7rem;
  height: 1.7rem;
  background-color: #1B1F0C;
  z-index: 3;
  top: ${props => props.top};
	left: ${props => props.left};
`;

export const Food = styled(FaBone)`
  position: absolute;
  height: 1.7rem;
  width: 1.7rem;
  border-radius: 50%;
  z-index: 2;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;

export const Button = styled.button`
  padding: 10px 15px;
  margin-top: 20px;
  background-color: #AAC49C;
  border: 2px solid #47553E;
  color: #000;
  font-size: 16px;
  width: fit-content;
  height: fit-content;
  text-transform: uppercase;
  font-family: 'Trispace';
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`;
