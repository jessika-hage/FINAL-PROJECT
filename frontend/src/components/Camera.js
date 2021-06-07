import React from 'react'
import styled, { keyframes } from 'styled-components'

export const Camera = () => {
  return(
    <Main>
      <Circle>
        <InnerCircle></InnerCircle>
      </Circle>
    </Main>
  )
}

const Main = styled.div`
  width:100%;
  height: 35px;
  border-bottom: 36px solid ${props => props.theme.secondary};
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0 auto 30px auto;
  @media (min-width: 768px) {
      border-bottom: 6px solid ${props => props.theme.secondary};
      height: 85px;
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

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #4F504E;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 20px;
  z-index: 2;
  border: 4px solid ${props => props.theme.backgroundColor};
  @media (min-width: 768px) {
    top: 65px;
    width: 38px;
    height: 38px;
}
`;

const InnerCircle = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 4px solid #44b700;
  background-color: #B4F76D;
  z-index: 1;
  animation: ${recording} 1s linear infinite alternate-reverse;
  @media (min-width: 768px) {
    top: 80px;
    width: 16px;
    height: 16px;
    border: 6px solid #5FB602;
}
`;
