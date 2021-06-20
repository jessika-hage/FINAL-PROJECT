import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';

import {
	updateBadges,
	updateCoins,
	updateInvestments } from '../../reducers/profile';
import { InvestCard } from './InvestCard'
import { InvestDialog } from './InvestDialog';
import { ExchangeDialog } from './ExchangeDialog';
import {
	DialogContainer,
	CurrencyTitle,
	TextContainer,
	Text,
	ButtonContainer,
	ExchangeButton,
	InvestmentButton,
	ConfirmationDialog,
	ConfirmationText,
	ConfirmedButton,
	PercentChange } from './Styling';

export const Currency = () => {
	const [currency, setCurrency] = useState([]);
	const [openExchange, setOpenExchange] = useState(false);
	const [open, setOpen] = useState(false);
	const [exchangeSuccess, setExchangeSuccess] = useState(true);
	const [openInvest, setOpenInvest] = useState(false);
	const [exchangeValue, setExchangeValue] = useState('');
	const [investValue, setInvestValue] = useState('');
	const [openConfirmExchange, setOpenConfirmExchange] = useState(false);
	const [openConfirmInvest, setOpenConfirmInvest] = useState(false);
	const [investSuccess, setInvestSuccess] = useState(false);
	const coins = useSelector((store) => store.profile.coins);
	const badges = useSelector((store) => store.profile.badges);

	const dispatch = useDispatch();

	useEffect(() => {
		fetchCoin();
	}, []);

	// Fetch one  currency
	const fetchCoin = () => {
		fetch('https://api.coinlore.net/api/ticker/?id=32360')
			.then((res) => res.json())
			.then((json) => {
				setCurrency(json[0]);
			});
	};

	// Main dialog with price and changes
	const onToggleDialog = () => {
		setOpen(!open);
	};

	// Toggle Exchange Dialog
	const onToggleExchangeDialog = () => {
		setOpenExchange(!openExchange);
	};

	const totalExchange = exchangeValue * currency.price_usd / 2;

	// Exchange function
	const onExchange = () => {
		if (badges >= exchangeValue) {
			dispatch(updateBadges(- exchangeValue));
			dispatch(updateCoins(totalExchange));
			setOpenConfirmExchange(true);
			setExchangeSuccess(true);
			setExchangeValue('');
		} else {
			setExchangeSuccess(false);
			setOpenConfirmExchange(true);
		}
	};

	// Toggle exchange confirmed dialog
	const onToggleConfirmedExchange = () => {
		setOpenConfirmExchange(!openConfirmExchange);
	};

	// Toggle Investment Dialog
	const onToggleInvestDialog = () => {
		setOpenInvest(!openInvest);
		setOpen(!open);
	};


	const totalInvest = investValue * currency.price_usd;

	const onInvest = () => {
		if (totalInvest <= coins) {
			dispatch(updateInvestments(investValue, totalInvest));
			dispatch(updateCoins(-totalInvest));
			setOpenConfirmInvest(true);
			setInvestSuccess(true)
			setInvestValue('');
		} else {
			setOpenConfirmInvest(true);
			setInvestSuccess(false)
		}
	};

	const onToggleInvestConfirm = () => {
		setOpenConfirmInvest(!openConfirmInvest)
	};

	return (
		<>
			<InvestCard onClick={onToggleDialog} />
			<Dialog open={open} onClose={onToggleDialog}>
				<DialogContainer>
					<CurrencyTitle>SPACE $</CurrencyTitle>
					<TextContainer>
						<Text>Price: {currency.price_usd} $</Text>
					</TextContainer>
					<TextContainer>
						<Text>
							Change in last hour:
							<PercentChange percent={currency.percent_change_1h < 0}>
								{currency.percent_change_1h} %
							</PercentChange>
						</Text>
					</TextContainer>
					<TextContainer>
						<Text>
							Change in last 24 hours:
							<PercentChange percent={currency.percent_change_24h < 0}>
								{currency.percent_change_24h} %
							</PercentChange>
						</Text>
					</TextContainer>
					<TextContainer>
						<Text>
							Change in the last week:
							<PercentChange percent={currency.percent_change_7d < 0}>
								{currency.percent_change_7d} %
							</PercentChange>
						</Text>
					</TextContainer>
					<TextContainer>
						<Text>Exchange rate: 2 badge = {currency.price_usd} $</Text>
					</TextContainer>
					<ButtonContainer>
						<ExchangeButton onClick={onToggleExchangeDialog}>Exchange</ExchangeButton>
						<InvestmentButton onClick={onToggleInvestDialog}>
							Invest in SPACE$
						</InvestmentButton>
					</ButtonContainer>
				</DialogContainer>
			</Dialog>
			<ExchangeDialog 
				openExchange={openExchange} 
				onCloseExchange={onToggleExchangeDialog} 
				rate={currency.price_usd} 
				onChange={(e) => setExchangeValue(e.target.value)}
				value={exchangeValue}
				totalExchange={totalExchange.toFixed(2)}
				onClick={onExchange} />
			<Dialog open={openConfirmExchange} onClose={onToggleConfirmedExchange}>
				<ConfirmationDialog>
					<ConfirmationText>
						{exchangeSuccess
							? 'You have now received some coins which you can see on your profile!'
							: 'You do not have enough badges!'}
					</ConfirmationText>
					<ConfirmedButton onClick={onToggleConfirmedExchange}>{exchangeSuccess ? 'Thanks!' : 'Okay!'}</ConfirmedButton>
				</ConfirmationDialog>
			</Dialog>
			<InvestDialog
				open={openInvest}
				onClose={onToggleInvestDialog}
				rate={currency.price_usd}
				value={investValue}
				onChange={(e) => setInvestValue(e.target.value)}
				spaceValue={totalInvest.toFixed(2)}
				onClick={onInvest}
				openConfirm={openConfirmInvest}
				onCloseConfirm={onToggleInvestConfirm}
				confirmText={investSuccess 
					? 'You have now successfully invested in Space $ and can shortly see it on your profile'
					: 'You do not have enough coins for this investment'}
				buttonText={investSuccess ? 'Thanks!' : 'Okay'}
			/>
		</>
	);
};