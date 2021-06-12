import React from 'react';
import styled, { keyframes } from 'styled-components';

export const ProtinFarm = () => {
	return (
		<MainContainer>
			<WormWrapper>
				<Worm1></Worm1>
			</WormWrapper>
		</MainContainer>
	);
};

const Roller = keyframes`
  5% { transform: translateX(500px) }
  10% { transform: translatey(20px) }
  20% { transform: translateX(50px) }
  35% { transform: translatey(50px) }
  45% { transform: translatex(40px) }
  50% { transform: translatey(50px) }
  70% { transform: translatex(50px) }
  100% { opacity: 1; transform: translateX(-100px) }`;

const Worm1 = styled.div`
	animation: ${Roller} 10s linear infinite;
	background-color: #8a6e1a;
	border: solid 4px #000;
	height: 20px;
	width: 50px;
	border-radius: 10px;
`;

export const WormWrapper = styled.div`
	width: 100%;
`;

const MainContainer = styled.div`
display: flex;
align-items: center:
justify-content: center;
	background-color: #d1fff4;
	width: 100%;
	height: 100vh;
`;
