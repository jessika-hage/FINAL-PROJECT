import styled, { keyframes } from 'styled-components';

export const Main = styled.div`
	align-items: center;
	background: #1e254a;
	display: flex;
	justify-content: center;
	margin: 0;
	min-height: 100vh;
	padding: 0;
	width: 100vw;
`;

const X = keyframes`
  0% {
            transform: translate(-100px, 0);
  }
  100% {
            transform: translate(100px, 0)
  }
`;

const Y = keyframes`
  25% {
    transform: translate(0, -50px);
  }
  0%, 50%, 100% {
    transform: translate(0, 0);
  }
  75% {
    transform: translate(0, 50px);
  }

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

export const Div1 = styled.div`
	background: #fff;
	border-radius: 100%;
	height: 50px;
	margin: 40px;
	width: 50px;
	opacity: 1;
	animation: ${Y} 1s linear infinite 0s;
`;

export const Div2 = styled.div`
	background: #fff;
	border-radius: 100%;
	height: 40px;
	width: 40px;
	opacity: 0.8;
	animation: ${Y} 1.1s linear infinite 0s;
`;

export const Div3 = styled.div`
	background: #fff;
	border-radius: 100%;
	height: 30px;
	width: 30px;
	opacity: 0.6;
	animation: ${Y} 1.2s linear infinite 0s;
`;

export const Div4 = styled.div`
	background: #fff;
	border-radius: 100%;
	height: 20px;
	width: 20px;
	opacity: 0.4;
	animation: ${Y} 1.3s linear infinite 0s;
`;

export const Div5 = styled.div`
	background: #fff;
	border-radius: 100%;
	height: 10px;
	width: 10px;
	opacity: 0.2;
	animation: ${Y} 1.4s linear infinite 0s;
`;

//   div{
//     :nth-of-type(5)
//       height: 10px;
//       width: 10px;
//       opacity: 0.2;
//       animation-delay: ${X} 0.4s;
//   }
// `;

// div>div {
//   background: #fff;
//   border-radius: 100%;
//   height: 50px;
//   margin: 40px;
//   width: 50px;
// }

// .wrapper {
//   position: absolute;
// }

// .wrapper:nth-of-type(2)>div {
//     height: 40px;
//     width: 40px;
//     opacity: 0.8;
//   }

//   .wrapper:nth-of-type(3)>div {
//     height: 30px;
//     width: 30px;
//     opacity: 0.6;
//   }

//   .wrapper:nth-of-type(4)>div {
//     height: 20px;
//     width: 20px;
//     opacity: 0.4;
//   }

//   .wrapper:nth-of-type(5)>div {
//     height: 10px;
//     width: 10px;
//     opacity: 0.2;
//   }

// .wrapper {
//   animation: x 1s ease-in-out alternate infinite 0s both;
// }

// .wrapper > div {
//   animation: y 1s linear infinite 0s both;
// }

// .wrapper:nth-of-type(2),
// .wrapper:nth-of-type(2) > div {
//   animation-delay: 0.1s;
// }
// .wrapper:nth-of-type(3),
// .wrapper:nth-of-type(3) > div {
//   animation-delay: 0.2s;
// }
// .wrapper:nth-of-type(4),
// .wrapper:nth-of-type(4) > div {
//   animation-delay: 0.3s;
// }
// .wrapper:nth-of-type(5),
// .wrapper:nth-of-type(5) > div {
//   animation-delay: 0.4s;
// }
