import React from "react";
import styled from "styled-components";

export const ProgressBar = ({ score }) => {
    return (
        <Progress>
        <BoxContainer>
            <ProgressBox></ProgressBox>
            <ProgressBox></ProgressBox>
            <ProgressBox></ProgressBox>
            <ProgressBox></ProgressBox>
            <ProgressBox></ProgressBox>
            <ProgressBox></ProgressBox>
            <ProgressBox></ProgressBox>
            <ProgressBox></ProgressBox>
            <ProgressBox></ProgressBox>
            <ProgressBox></ProgressBox>
        </BoxContainer>
        <InnerProgress
            style={{ transform: `scaleX(${score / 10})` }}>
            </InnerProgress>
</Progress>
    )
}

    const Progress = styled.div`
      border: 1px solid ${props => props.theme.textColor};
      border-right: none;
      position: relative;
      margin-top: 30px;
    `;
    
    const BoxContainer = styled.div`
      display: flex;
      width: 100%;
    `;

    const ProgressBox = styled.div`
      height: 40px;
      border-right: 1px solid ${props => props.theme.textColor};
      flex: 1;
    `;

    const InnerProgress = styled.div`
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      background-color: ${props => props.theme.hover};
      opacity: 0.57;
      transform: scaleX(0);
      transform-origin: center left;
      transition: transform .4s ease-out;
    `;
