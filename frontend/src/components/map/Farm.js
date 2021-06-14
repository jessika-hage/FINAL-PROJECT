import React from 'react';
import { Tooltip } from '@material-ui/core';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import { RoomFarm, Icons } from './Styling';

export const Farm = () => {
	return (
		<Tooltip title='PROTIN FARM'>
			<RoomFarm to='/farm'>
				<Icons>
					<InvertColorsIcon fontSize='large' />
				</Icons>
			</RoomFarm>
		</Tooltip>
	);
};
