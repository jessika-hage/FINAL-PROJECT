import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';

import {
	updateBadges,
	updateCoins,
	updateInvestments } from '../../reducers/profile';
import { InvestCard } from './InvestCard'
import { InvestDialog } from './InvestDialog';
import {
	DialogContainer,
	CurrencyTitle,
	TextContainer,
	Text,
	ButtonContainer,
	ExchangeButton,
	InvestmentButton,
	ConfirmationDialog,
	ConfirmedButton,
	PercentChange } from './Styling';

export const Currency = () => {
	const [currency, setCurrency] = useState([]);
	const [open, setOpen] = useState(false);
	const [exchangeSuccess, setExchangesSuccess] = useState(true);
	const [openInvest, setOpenInvest] = useState(false);
	const [investValue, setInvestValue] = useState('');
	const [confirmation, setConfirmation] = useState(false);
	const [openSuccess, setOpenSuccess] = useState(false);
	const [openFail, setOpenFail] = useState(false);
	const coins = useSelector((store) => store.profile.coins);
	const badges = useSelector((store) => store.profile.badges);

	const dispatch = useDispatch();

	useEffect(() => {
		fetchCoin();
	}, []);

	// Fetch one random currency
	const fetchCoin = () => {
		fetch('https://api.coinlore.net/api/ticker/?id=32360')
			.then((res) => res.json())
			.then((json) => {
				setCurrency(json[0]);
			});
	};

	const onToggleDialog = () => {
		setOpen(!open);
	};

	// Exchange function
	const onExchange = () => {
		if (badges >= 1) {
			dispatch(updateBadges(-2));
			dispatch(updateCoins(currency.price_usd));
			setConfirmation(true);
			setOpen(false);
		} else {
			setExchangesSuccess(false);
			setConfirmation(true);
		}
	};

	// Function in confirmed dialog after exchanging
	const onConfirmed = () => {
		setConfirmation(false);
	};

	// Investment Dialog
	const onToggleInvestDialog = () => {
		setOpenInvest(!openInvest);
		setOpen(!open);
	};

	const totalInvest = investValue * currency.price_usd;

	const onInvest = () => {
		if (totalInvest <= coins) {
			dispatch(updateInvestments(investValue, totalInvest));
			dispatch(updateCoins(-totalInvest));
			setOpenSuccess(true);
		} else {
			setOpenFail(true);
			setTimeout(() => {
				setOpenFail(false);
			}, 1200);
		}
	};

	const onCloseSuccess = () => {
		setOpenSuccess(false);
		setOpenInvest(false);
	};

	const onCloseFail = () => {
		setOpenInvest(false);
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
								{' '}
								{currency.percent_change_1h} %
							</PercentChange>
						</Text>
					</TextContainer>
					<TextContainer>
						<Text>
							Change in last 24 hours:
							<PercentChange percent={currency.percent_change_24h < 0}>
								{' '}
								{currency.percent_change_24h} %
							</PercentChange>
						</Text>
					</TextContainer>
					<TextContainer>
						<Text>
							Change in the last week:
							<PercentChange percent={currency.percent_change_7d < 0}>
								{' '}
								{currency.percent_change_7d} %
							</PercentChange>
						</Text>
					</TextContainer>
					<TextContainer>
						<Text>Exchange rate: 2 badge = {currency.price_usd} SPACE $</Text>
					</TextContainer>
					<ButtonContainer>
						<ExchangeButton onClick={onExchange}>Exchange</ExchangeButton>
						<InvestmentButton onClick={onToggleInvestDialog}>
							Invest in SPACE$
						</InvestmentButton>
					</ButtonContainer>
				</DialogContainer>
			</Dialog>
			<Dialog open={confirmation} onClose={onToggleDialog}>
				<ConfirmationDialog>
					<Text>
						{exchangeSuccess
							? 'You have have received some coins which you can see on your profile!'
							: 'You do not have enough badges'}
					</Text>
					<ConfirmedButton onClick={onConfirmed}>Thanks!</ConfirmedButton>
				</ConfirmationDialog>
			</Dialog>
			<InvestDialog
				open={openInvest}
				onClose={onToggleInvestDialog}
				value={investValue}
				onChange={(e) => setInvestValue(e.target.value)}
				spaceValue={totalInvest.toFixed(2)}
				onClick={onInvest}
				openSuccess={openSuccess}
				onCloseSuccess={onCloseSuccess}
				openFail={openFail}
				onCloseFail={onCloseFail}
			/>
		</>
	);
};