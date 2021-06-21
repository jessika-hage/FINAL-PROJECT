import React from 'react';

import { Header } from '../components/header/Header';
import { Camera } from '../components/header/Camera';
import { FarmPhone } from '../components/farm/FarmPhone';
import { FarmDesktop } from '../components/farm/FarmDesktop';

import { DesktopContainer, PhoneContainer } from '../components/farm/Styling';

export const ProtinFarm = () => {
	return (
		<>
			<Header />
			<Camera />
			<PhoneContainer>
				<FarmPhone />
			</PhoneContainer>
			<DesktopContainer>
				<FarmDesktop />
			</DesktopContainer>
		</>
	);
};
