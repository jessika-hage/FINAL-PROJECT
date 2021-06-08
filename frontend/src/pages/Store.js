import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const Camera = () => {
	return (
		<Main>
			<Link to='/hidden'>
				<Circle>
					<InnerCircle></InnerCircle>
				</Circle>
			</Link>
		</Main>
	);
};
