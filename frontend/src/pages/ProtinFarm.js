import React from 'react';
import styled, { keyframes } from 'styled-components';
import Wave from 'react-wavify';

export const ProtinFarm = () => {
	return (
		<MainContainer>
			<WaterContainer>
				<Fish1></Fish1>
				<Wave
					fill='#73bed9'
					paused={false}
					options={{
						height: 200,
						amplitude: 50,
						speed: 0.15,
						points: 3,
						opacity: 0.5,
					}}
				/>
			</WaterContainer>
		</MainContainer>
	);
};

// @-webkit-keyframes x {
//   0% {
//             transform: translatex(-100px, 0);
//   }
//   100% {
//             transform: translatex(100px, 0)
//   }
// }

// @keyframes x {
//   0% {
//             transform: translatex(-100px, 0);
//   }
//   100% {
//             transform: translatex(100px, 0)
//   }
// }

// @keyframes y {
//   25% {
//     transform: translatey(0, -50px);
//   }
//   0%, 50%, 100% {
//     transform: translatey(0, 0);
//   }
//   75% {
//     transform: translatey(0, 50px);
//   }

// }
const Roller = keyframes`
  0% {
            transform: translatex(-100px, 0);
  }
  100% {
            transform: translatex(100px, 0)
  }
  25% {
    transform: translatey(0, -50px);
  }
  0%, 50%, 100% {
    transform: translatey(0, 0);
  }
  75% {
    transform: translatey(0, 50px);
  }
	;`;

const Fish1 = styled.div`
	animation: ${Roller} 20s linear infinite;
	background-color: #73bed9;
	height: 20px;
	width: 50px;
	border-radius: 40px;
	opacity: 0.3;
`;

export const WaterContainer = styled.div`
	width: 800px;
	height: 600px;
	display: flex;
	align-items: center:
	justify-content: center;
	border: 10px solid #68ab9e;
	margin: auto 0;
	background-color: #dcfcf7;
	
`;

const MainContainer = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #d1fff4;
	width: 100%;
	height: 100vh;
`;
