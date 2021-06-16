import styled from 'styled-components';

export const DialogContainer = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  border: 2px solid ${props => props.theme.primary};
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: ${props => props.theme.textColor};
`;

export const InvestTitle = styled(CurrencyTitle)`
  border-bottom: 2px solid ${props => props.theme.hover};
  padding-bottom: 5px;
`;

export const InvestInfo = styled.p`
  font-size: 14px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const InputAmount = styled.input`
  padding: 5px;
  border: 2px solid ${props => props.theme.secondary};
  color: ${props => props.theme.textColor};
  font-size: 16px;
  outline: none;
  background-color: ${props => props.theme.primary};
  margin-right: 15px;
  max-width: 50%;
  font-family: 'Trispace', serif;
  :focus {
    background-color: ${props => props.theme.secondary};
  }
`;

export const SpaceText = styled.p`
  font-size: 16px;
  margin-right: 20px;
`;

export const InvestButton = styled(ExchangeButton)`
  margin: 0;
`;

export const Image = styled.img`
  position: absolute;
  left: 10%;
  top: 3%;
transform: rotate(40deg);
  @media (min-width: 768px) {
    left: 26%;
  }
`;