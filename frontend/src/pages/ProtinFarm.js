import React from 'react';
import styled, { keyframes } from 'styled-components';
import Wave from 'react-wavify';

export const ProtinFarm = () => {
	return (
		<MainContainer>
			<WaterContainer>
				{/* <Fish1></Fish1> */}
				<Icon1 src={require('../components/store/assets/fish.png')} />
				<Icon2 src={require('../components/store/assets/fish.png')} />
				<Icon3 src={require('../components/store/assets/fish.png')} />
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

const Roller = keyframes`
	0% {
		transform: translate(0, 0);
		transform: rotate(90deg);
	}
  10% {
            transform: translate(-100px, 0);
  }
	25% {
    transform: translate(100px, -200px);
  }
  50% {
    transform: translate(0, 0);
		transform: rotate(180deg);
  }
  75% {
    transform: translate(0, 50px);
  }
	100% {
		transform: translate(0, 0)
	}
	;`;

const Roller2 = keyframes`
	0% {
		transform: translate(0, 0);
		transform: rotate(-90deg);
	}
  10% {
            transform: translate(-70px, 0);
  }
	25% {
    transform: translate(150px, -170px);
  }
  50% {
    transform: translate(0, 0);
		transform: rotate(-180deg);
  }
  75% {
    transform: translate(0, 50px);
  }
	100% {
		transform: translate(0, 0)
	}
	;`;

const Icon1 = styled.img`
	animation: ${Roller} 4s linear infinite;
	top: 70%;
	right: 20%;
	left: 50%;
	position: absolute;
`;
const Icon2 = styled.img`
	animation: ${Roller2} 2s linear infinite;
	top: 50%;
	right: 50%;
	left: 50%;
	position: absolute;
`;
const Icon3 = styled.img`
	animation: ${Roller} 7s linear infinite;
	top: 50%;
	right: 50%;
	left: 50%;
	position: absolute;
`;

export const WaterContainer = styled.div`
	position: relative;
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
