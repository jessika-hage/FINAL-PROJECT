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
  border-bottom: 30px solid #4F504E;
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0 auto 30px auto;
  z-index: 2;
  @media (min-width: 768px) {
      height: 100px;
      border-bottom: 6px solid #4F504E;
  }

`
const recording = keyframes`
  from { transform: scale(1) }
  to { transform: scale(1.2) }
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #4F504E;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20px;
  border: 4px solid ${props => props.theme.backgroundColor};
  @media (min-width: 768px) {
    top: 80px;
    width: 36px;
    height: 36px;
}

`;

const InnerCircle = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  border: 6px solid #5FB602;
  background-color: #B4F76D;
  z-index: 1;
  animation: ${recording} 1s linear infinite alternate-reverse;
  @media (min-width: 768px) {
    top: 80px;
    width: 6px;
    height: 6px;
}
`;
