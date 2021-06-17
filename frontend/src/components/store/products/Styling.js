import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

// All Products
export const Title = styled.h1`
	font-size: 30px;
	color: ${(props) => props.theme.textColor};
	text-transform: uppercase;
`;

export const ProductsWrapper = styled.div`
	display: flex;
	aling-items: center;
	justify-content: center;
	flex-wrap: wrap;
	margin: auto 0;
`;

export const Main = styled.main`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	margin: 0;
`;

// Product
export const MainContainer = styled.div`
	display: flex;
	margin: 5px;
	margin-bottom: 10px;
	aline-items: center;
	justify-content: center;
	padding: 5px;
	border: 2px solid ${(props) => props.theme.primary};

	@media (min-width: 768px) {
		width: 320px;
		padding: 5px;
	}
	@media (min-width: 1200px) {
		width: 350px;
	}
`;

export const DialogContainer = styled.div`
	background-color: ${(props) => props.theme.backgroundColor};
	border: 2px solid ${(props) => props.theme.primary};
	display: flex;
	padding: 10px;
	height: 150px;
	color: ${(props) => props.theme.textColor};
`;

export const ImageDialogWrapper = styled.div`
	margin-right: 5px;
`;

export const ImageDialog = styled.img`
	background-color: ${(props) => props.theme.secondary};
	padding: 7px 2px;
	margin-right: 10px;
	height: 120px;
`;

export const ProductContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 10px;
`;

export const AddedText = styled.p`
	font-size: 16px;
	text-transform: uppercase;
	padding: 3px;
	border-bottom: 2px solid ${(props) => props.theme.primary};
`;

export const Text = styled.p`
	color: ${(props) => props.theme.textColor};
	margin: 3px 0;
	padding: 0;
	font-size: 15px;
	text-transform: uppercase;
`;

export const ProductWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-items: center;
	align-items: center;
`;

export const ImageWrapper = styled.div`
	margin: 0;
	display: flex;
	justify-items: center;
	align-items: center;
	background-color: ${(props) => props.theme.secondary};
`;

export const ProductImage = styled.img`
	width: 300px;
	margin: 0;
	@media (min-width: 768px) {
		padding: 5px;
	}
	@media (min-width: 1200px) {
		max-width: 330px;
	}
`;

export const TextWrapper = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: space-evenly;
	padding: 7px 7px 7px 13px;
	margin: 0;
`;


export const TextDescription = styled.p`
	color: ${(props) => props.theme.textColor};
	margin: 2px 0;
	font-size: 14px;
	display: flex;
	align-items: center;
`;


export const AddButton = styled.button`
	padding: 5px;
	margin-top: 10px;
	font-size: 12px;
	width: fit-content;
	text-transform: uppercase;
	font-family: 'Trispace', serif;
	background-color: ${(props) => props.theme.primary};
	color: ${(props) => props.theme.textColor};
	border: 2px solid ${(props) => props.theme.secondary};
	:hover,
	:focus {
		background-color: ${(props) => props.theme.secondary};
	}
`;

export const Icon = styled(FaArrowUp)`
	color: green;
	margin-left: 5px;
`;