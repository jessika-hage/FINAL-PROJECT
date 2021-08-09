import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Dialog from '@material-ui/core/Dialog';

import { CitizenStats } from './citizenprofile/CitizenStats';
import { CitizenInvestments } from './citizenprofile/CitizenInvestments';
import { CitizenItems } from './citizenprofile/CitizenItems';
import { CITIZEN_URL } from '../../reusables/urls';
import { 
	TableContainer, 
	TableHead, 
	TableTitle, 
	TableTitleLinks, 
	CitizenDaysLink, 
	CitizensList, 
	CitizenAvatar, 
	Citizen,
	CitizenRank,
	CitizenDays,
	Badges,
	Icon,
	ProfileContainer,
	Items,
	ContainerTitle,
	InvestItemsContainer } from './Styling';

export const LeaderBoard = () => {
	const [leaderBoard, setLeaderBoard] = useState([]);
	const [sort, setSort] = useState('highestRanking');
	const [query, setQuery] = useState('Jessie');
	const [prof, setProf] = useState();
	const [currency, setCurrency] = useState([]);
	const [open, setOpen] = useState(false);
	const user = useSelector((store) => store.profile.username);

	//Fetch all citizens
	const fetchCitizens = useCallback(() => {
		fetch(CITIZEN_URL(`citizens?sort=${sort}`))
			.then((res) => res.json())
			.then((data) => setLeaderBoard(data.allCitizens))
			.catch((err) => alert(`Error: ${err}`));
	}, [sort])

	useEffect(() => {
		fetchCitizens();
	}, [fetchCitizens]);

	// Fetch for profile on citizen
	useEffect(() => {
		fetch(CITIZEN_URL(`citizen/${query}`))
		.then((res) => res.json())
		.then((data) => setProf(data))
		.catch((err) => alert(`Error: ${err}`));
	}, [query]);

	// Fetch one currency
	useEffect(() => {
		fetchCoin();
	}, []);

	const fetchCoin = () => {
		fetch('https://api.coinlore.net/api/ticker/?id=32360')
			.then((res) => res.json())
			.then((json) => {
				setCurrency(json[0]);
			});
	};

	// Toggle Profile Dialog
	const onToggle = () => {
		setOpen(!open);
	};

	return (
		<>
			<TableHead>
				<TableTitle>Citizen</TableTitle>
				<TableTitleLinks onClick={() => setSort('highestRanking')}>Ranking</TableTitleLinks>
				<CitizenDaysLink onClick={() => setSort('senior')}>Days On Ship</CitizenDaysLink>
				<TableTitleLinks onClick={() => setSort('mostBadges')}>Badges</TableTitleLinks>
				<TableTitleLinks onClick={() => setSort('richest')}>Coins</TableTitleLinks>
			</TableHead>
			<TableContainer>
				{leaderBoard.map((citizen) => (
					<CitizensList key={citizen._id}>
						{user === citizen.username ? <Icon /> : ""}
						<CitizenAvatar src={require(`../../assets/${citizen.avatar}.png`)} />
						<Citizen onClick={() => { setQuery(`${citizen.username}`); setOpen(true)}} me={user === citizen.username}>{citizen.username}</Citizen>
						<CitizenRank>{citizen.ranking.toFixed(1)}/100</CitizenRank>
						<CitizenDays>{moment(citizen.createdAt).toNow(true)}</CitizenDays>
						<Badges>{citizen.badges}</Badges>
						<Badges>{citizen.coins.toFixed(2)}</Badges>
					</CitizensList>
				))}
			</TableContainer>
			{prof && ( 
				<Dialog open={open} onClose={onToggle}>
					<ProfileContainer>
						<CitizenStats
							username={prof.username}
							ranking={prof.ranking === null ? prof.ranking : prof.ranking.toFixed(1)}
							avatar={require(`../../assets/${prof.avatar}.png`)}
							badges={prof.badges}
							coins={prof.coins === null ? prof.coins : prof.coins.toFixed(2)}
							created={moment(prof.createdAt).toNow(true)} />
						<InvestItemsContainer>
							<CitizenInvestments
								username={prof.username}
								investments={prof.investments.toFixed(2)}
								investmentQuantity={prof.investmentQuantity}
								totalMarketValue={(prof.investmentQuantity * currency.price_usd).toFixed(2)}
								percent={(prof.investmentQuantity * currency.price_usd) - prof.investments < 0}
								percentDifference={(((prof.investmentQuantity * currency.price_usd) - prof.investments) / prof.investments * 100).toFixed(2)}
								difference={((prof.investmentQuantity * currency.price_usd) - prof.investments).toFixed(2)} />
							<Items>
								<ContainerTitle>{prof.username} items</ContainerTitle>
								{Object.keys(prof.items).map((key) => <CitizenItems key={key} item={prof.items[key]} />)}
							</Items>
						</InvestItemsContainer>
					</ProfileContainer>
				</Dialog>
			)}
		</>
	)
};