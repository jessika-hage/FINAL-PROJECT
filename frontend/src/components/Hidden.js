import React from 'react';
import styled from 'styled-components';

export const Hidden = () => {
  return (
	<Wrapper>
	  <iframe
		src='https://gfycat.com/ifr/FrailSelfreliantCopepod'
		frameborder='0'
		scrolling='no'
		width='100%'
		height='100%'
	  ></iframe>
	  {/* <iframe
		src='https://giphy.com/embed/A06UFEx8jxEwU'
		width='100%'
		height='100%'
		frameBorder='0'
	  ></iframe> */}
	</Wrapper>
  );
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${(props) => props.theme.backgroundColor};
	width: 100%;
	height: 100vh;
	position: relative;
	overflow: auto;
	opacity: 0.3;
	z-index: 3;
`;
