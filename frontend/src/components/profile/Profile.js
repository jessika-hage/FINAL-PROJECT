import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Countdown from 'react-countdown';
import moment from 'moment';

import { profile } from '../../reducers/profile';
import { ItemsProfile } from './ItemsProfile';
import { ProfileStats } from './ProfileStats';
import { Buttons } from './Buttons';
import { 
	ProfileContainer, 
	TopContainer, 
	DaysContainer, 
	DaysText, 
	BottomContainer, 
	LeftContainer, 
	RightContainer,
	ContainerTitle } from './Styling';

export const Profile = () => {
	const username = useSelector((store) => store.profile.username);
	const created = useSelector((store) => store.profile.created);
	const badges = useSelector((store) => store.profile.badges);
	const ranking = useSelector((store) => store.profile.ranking);
	const coins = useSelector((store) => store.profile.coins);
	const items = useSelector((store) => store.profile.items);
	const itemss = Object.keys(items)
	console.log(items[0])

	const dispatch = useDispatch();

	return (
		<ProfileContainer>
			<TopContainer>
				<ProfileStats username={username} badges={badges} ranking={ranking} coins={coins} />
				<DaysContainer>
					<DaysText>Days on ship: {moment(created).toNow(true)}</DaysText>
					<DaysText>
						Days to destination: <Countdown date={moment().add(3500, 'day')} />
					</DaysText>
				</DaysContainer>
			</TopContainer>
			<BottomContainer>
				<LeftContainer>
					<ContainerTitle>Tasks for today</ContainerTitle>
				</LeftContainer>
				<RightContainer>
					<ContainerTitle>My items</ContainerTitle>
					{itemss.map((key) => <ItemsProfile item={items[key]} />)}
				</RightContainer>
			</BottomContainer>
				<Buttons onClick={() => dispatch(profile.actions.setLogOut())} />
		</ProfileContainer>
	);
};

