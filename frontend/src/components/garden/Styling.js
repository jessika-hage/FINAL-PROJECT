import styled, { keyframes } from 'styled-components';

export const Main = styled.div`
	position: relative;
	align-items: center;
	background-color: ${(props) => props.theme.backgroundColor};
	display: flex;
	justify-content: center;
	margin: 0;
	width: 100%;
	min-height: 100vh;
	padding: 0;
	width: 100vw;
`;

const X = keyframes`
  0% {
            transform: translate(-300px, 0);
  }
  100% {
            transform: translate(300px, 0)
  }
`;

const Y = keyframes`
  25% {
    transform: translate(0, -150px);
  }
  0%, 50%, 100% {
    transform: translate(0, 0);
  }
  75% {
    transform: translate(0, 150px);
  }
`;
export const Red = styled.div`
	position: absolute;
	right: 75%;
	left: 25%;
	width: 100px;
	height: 100px;
	border-radius: 100%;
	background: red;
`;
export const Blue = styled.div`
	position: absolute;

	right: 30%;
	left: 70%;
	width: 100px;
	height: 100px;
	border-radius: 100%;
	background: green;
`;
export const Wrapper1 = styled.div`
	position: absolute;
	animation: ${X} 1s ease-in-out alternate infinite 0s both;
`;
export const Wrapper2 = styled.div`
	position: absolute;
	animation: ${X} 1.1s ease-in-out alternate infinite 0s both;
`;
export const Wrapper3 = styled.div`
	position: absolute;
	animation: ${X} 1.2s ease-in-out alternate infinite 0s both;
`;
export const Wrapper4 = styled.div`
	position: absolute;
	animation: ${X} 1.3s ease-in-out alternate infinite 0s both;
`;
export const Wrapper5 = styled.div`
	position: absolute;
	animation: ${X} 1.4s ease-in-out alternate infinite 0s both;
`;
export const Wrapper6 = styled.div`
	position: absolute;
	animation: ${X} 1.5s ease-in-out alternate infinite 0s both;
`;
export const Wrapper7 = styled.div`
	position: absolute;
	animation: ${X} 1.6s ease-in-out alternate infinite 0s both;
`;
export const Wrapper8 = styled.div`
	position: absolute;
	animation: ${X} 1.7s ease-in-out alternate infinite 0s both;
`;
export const Wrapper9 = styled.div`
	position: absolute;
	animation: ${X} 1.8s ease-in-out alternate infinite 0s both;
`;
export const Wrapper10 = styled.div`
	position: absolute;
	animation: ${X} 1.9s ease-in-out alternate infinite 0s both;
`;
export const Wrapper11 = styled.div`
	position: absolute;
	animation: ${X} 2s ease-in-out alternate infinite 0s both;
`;

export const Div1 = styled.div`
	background: #fff;
	border-radius: 100%;
	height: 80px;
	margin: 40px;
	width: 80px;
	opacity: 1;
	animation: ${Y} 1s linear infinite 0s;
`;

export const Div2 = styled.div`
	background: #fff;
	border-radius: 100%;
	height: 70px;
	width: 70px;
	opacity: 0.8;
	animation: ${Y} 1.1s linear infinite 0s;
`;

export const Div3 = styled.div`
	background: #fff};
	border-radius: 100%;
	height: 60px;
	width: 60px;
	opacity: 0.6;
	animation: ${Y} 1.2s linear infinite 0s;
`;

export const Div4 = styled.div`
	background: #fff;
	border-radius: 100%;
	height: 50px;
	width: 50px;
	opacity: 0.4;
	animation: ${Y} 1.3s linear infinite 0s;
`;

export const Div5 = styled.div`
	background: #fff;
	border-radius: 100%;
	height: 40px;
	width: 40px;
	opacity: 0.3;
	animation: ${Y} 1.4s linear infinite 0s;
`;
export const Div6 = styled.div`
	background: #fff};
	border-radius: 100%;
	height: 30px;
	width: 30px;
	opacity: 0.3;
	animation: ${Y} 1.5s linear infinite 0s;
`;
export const Div7 = styled.div`
	background: #fff;
	border-radius: 100%;
	height: 20px;
	width: 20px;
	opacity: 0.2;
	animation: ${Y} 1.6s linear infinite 0s;
`;
export const Div8 = styled.div`
	background: #fff;
	border-radius: 100%;
	height: 10px;
	width: 10px;
	opacity: 0.2;
	animation: ${Y} 1.7s linear infinite 0s;
`;
export const Div9 = styled.div`
	background: #fff;
	border-radius: 100%;
	height: 10px;
	width: 10px;
	opacity: 0.2;
	animation: ${Y} 1.8s linear infinite 0s;
`;
export const Div10 = styled.div`
	background: #fff;
	border-radius: 100%;
	height: 10px;
	width: 10px;
	opacity: 0.1;
	animation: ${Y} 1.9s linear infinite 0s;
`;
export const Div11 = styled.div`
	background: #fff;
	border-radius: 100%;
	height: 10px;
	width: 10px;
	opacity: 0.1;
	animation: ${Y} 2s linear infinite 0s;
`;
