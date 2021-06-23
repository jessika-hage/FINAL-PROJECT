import styled from 'styled-components';

export const Wrapper = styled.div`
	background-color: ${(props) => props.theme.backgroundColor};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

export const Main = styled.main`
	background-color: ${(props) => props.theme.backgroundColor};
	padding-top: 45px;
`;
