import React from "react";
import styled from "styled-components";

import { ResetButton } from "./ResetButton";

export const FinishGame = ({ overlayVisible, endText, resetButton, onClick }) => {
    return (
        <FinishOverlay overlayVisible={overlayVisible}>
          <InnerOverLay>
            <EndMessage>
              {endText}
            </EndMessage>
            <ResetButton resetButton={resetButton} onClick={onClick} />
          </InnerOverLay>
        </FinishOverlay>
    )
};

const FinishOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: all .33s ease-out;
  transform: scale(1.2);
  ${props =>
    props.overlayVisible ? 
    ` opacity: 1;
      visibility: visible;
      transform: scale(1);`
    : ` opacity: 0;
      visibility: hidden;
      transition: all .33s ease-out;
      transform: scale(1.2);`
  }
  `;

const InnerOverLay = styled.div`
  text-align: center;
  max-width: 700px;
`;

const EndMessage = styled.p`
  font-size: 16px;
  margin-top: 0;
  color: ${props => props.theme.textColor};
`;