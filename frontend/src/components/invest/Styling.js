import styled from 'styled-components';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

// Card 
export const Container = styled.div`
  padding: 10px 20px;
  background: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  position: relative;
  display: flex;
  height: 115px;
  margin-top: 10px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin: 0 0 4px 0;
  font-size: 15px;
  padding: 0;
  text-transform: uppercase;
  color: ${props => props.theme.textColor};	
  @media (min-width: 768px) {
		font-size: 18px;
	}
`;

export const ChangeContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const ChangeText = styled.p`
  padding: 0;
  margin: 4px 0;
`;

export const CoinChange = styled.span`
  display: flex;
  align-items: center;
  ${props =>
  props.percent ?
  `
  color: #e83715;
  `:  `
  color: #6DD704;
  `};
`;

export const IconUp = styled(FaArrowUp)`
  margin: 2px 5px 0 8px;
  padding: 0;
`;

export const IconDown = styled(FaArrowDown)`
  margin: 2px 5px 0 8px;
  padding: 0;
`;

export const SeeMoreButton = styled.button`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.textColor};
  padding: 10px;
  border: ${props => props.theme.secondary};
  position: absolute;
  right: 0;
  bottom: 0;
  text-transform: uppercase;
  font-size: 12px;
  font-family: "Trispace", serif;
  :hover {
    background-color: ${props => props.theme.secondary};
  }
`; 

// Invest & Exchange Dialogs
export const DialogContainer = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  border: 2px solid ${props => props.theme.primary};
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: ${props => props.theme.textColor};
`;

export const InvestTitle = styled.h3`
  border-bottom: 2px solid ${props => props.theme.hover};
  padding-bottom: 10px;
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const InvestInfo = styled.p`
  font-size: 14px;
`;

export const PriceInfo = styled(InvestInfo)`
  margin: 0 0 5px 0;
`;

export const QuestionText = styled.p`
  font-size: 14px;
  margin: 5px 0;
  @media (min-width: 768px) {
    font-size: 16px;
  }
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
  max-width: fit-content;
  font-family: 'Trispace', serif;
  :focus {
    background-color: ${props => props.theme.secondary};
  }
  @media (min-width: 768px) {
    width: 153px;
  }
`;

export const TotalValueText = styled.p`
  font-size: 16px;
  margin-right: 20px;
`;

export const Text = styled.p`
  text-transform: none;
  display: flex;
  text-align: center;
  font-size: 13px;
  text-align: left;
  margin: 8px 0;
  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

// Confirmation dialogs
// Exchange & Invest, fail and success
export const ConfirmationDialog = styled.div`
  displaY: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  max-width: 300px;
  background-color: ${props => props.theme.backgroundColor};
  border: 3px solid ${props => props.theme.secondary};
  color: ${props => props.theme.textColor};
`;

export const ConfirmationText = styled(Text)`
  text-align: center;
`;

export const ConfirmedButton = styled.button`
  outline: none;
  border: none;
  background-color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.secondary};
  font-size: 14px;
  padding: 8px;
  font-family: 'Trispace', serif;
  color: ${props => props.theme.textColor};
  :hover, :focus {
    background-color: ${props => props.theme.secondary};
  }
`;


// Currency
export const CurrencyTitle = styled(InvestTitle)`
  text-align: center;
  padding-bottom: 10px;
  font-size: 20px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const CurrencyText = styled.p`
  margin-left: 10px;
  border-right: none;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ExchangeButton = styled.button`
  padding: 8px;
  margin-top: 7px;
  width: fit-content;
  text-transform: uppercase;
  font-family: "Trispace", serif;
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.secondary};
  :hover, :focus {
    background-color: ${props => props.theme.secondary};
  }
`;

export const InvestmentButton = styled(ExchangeButton)`
`;

export const PercentChange = styled(CoinChange)`
  margin-left: 8px;
`;

// Invest
export const InvestButton = styled(ExchangeButton)`
  margin: 0;
`;
