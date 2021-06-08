import React from 'react';
import styled from 'styled-components';

import { CITIZEN_URL } from '../reusable/Urls';

export const MessageBoard = () => {
    return (
        <MessageContainer>
            <MessageTitle>Citizens Messageboard</MessageTitle>
        </MessageContainer>
    )
};

const MessageContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.backgroundColor};
  border-left: 3px solid ${props => props.theme.primary};
  color: ${props => props.theme.textColor};
  padding: 20px;
`;

const MessageTitle = styled.h3`
  text-transform: uppercase;
  font-size: 20px;
`;

const MessageBox = styled.div`
  font-size: 14px;
  border-bottom: 3px solid ${props => props.theme.primary};
`;