import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';

import { profile } from '../../reducers/profile';
import { ItemsProfile } from './ItemsProfile';
import { ProfileStats } from './ProfileStats';
import { InvestmentProfile } from './InvestmentProfile';
import { EnergyProfile } from './EnergyProfile';
import { Settings } from './Settings';
import { Buttons } from './Buttons';
import { 
	ProfileContainer, 
	DaysContainer, 
	DaysText, 
	BottomContainer, 
	Items,
	Investments,
	ContainerTitle } from './Styling';

export const Profile = () => {
	const [openSettings, setOpenSettings] = useState(false);
	const username = useSelector((store) => store.profile.username);
	const avatar = useSelector((store) => store.profile.avatar);
	const createdAt = useSelector((store) => store.profile.createdAt);
	const badges = useSelector((store) => store.profile.badges);
	const ranking = useSelector((store) => store.profile.ranking);
	const coins = useSelector((store) => store.profile.coins);
	const items = useSelector((store) => store.profile.items);
	const myItems = Object.keys(items);

	const dispatch = useDispatch();
	const history = useHistory();

	const onLogout = () => {
		dispatch(profile.actions.setLogOut())
		history.push('/');
	};

	const toggleSettings = () => {
		setOpenSettings(!openSettings)
	}

	return (
		<ProfileContainer>
			<ProfileStats 
				avatar={require(`../../assets/${avatar}.png`)}
				username={username} 
				badges={badges} 
				ranking={ranking} 
				coins={coins === null ? coins : coins.toFixed(2)} />
			<DaysContainer>
				<DaysText>Time on ship: {moment(createdAt).toNow(true)}</DaysText>
				<DaysText>
					Days to destination: 
				</DaysText>
			</DaysContainer>
			<BottomContainer>
				<Items>
					<ContainerTitle>My energy</ContainerTitle>
					<EnergyProfile />
				</Items>
				<Items>
					<ContainerTitle>My items</ContainerTitle>
					{myItems.map((key) => <ItemsProfile key={key} item={items[key]} />)}
				</Items>
				<Investments>
					<ContainerTitle>My investments</ContainerTitle>
					<InvestmentProfile />
				</Investments>
			</BottomContainer>
			<Buttons onSettings={toggleSettings} onClick={onLogout} />
			<Dialog open={openSettings} onClose={toggleSettings}>
				<Settings />
			</Dialog>
		</ProfileContainer>
	);
};

