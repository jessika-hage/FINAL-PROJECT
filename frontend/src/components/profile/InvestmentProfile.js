import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';

import audio from '../../assets/CoinDrop 6103_48_4.wav';
import { 
	updateCoins, 
	updateInvestments, 
	updateRanking } from '../../reducers/profile';
import {
	InvestmentContainer,
	InvestmentText,
	SellButton,
	InvestmentChange,
	ValueChange,
	IconUp,
	IconDown,
	ChangeBox,
	ConfirmDialog,
	ButtonBox
} from './Styling';

export const InvestmentProfile = () => {
	const [currency, setCurrency] = useState([]);
	const [openConfirm, setOpenConfirm] = useState(false);
	const investments = useSelector((store) => store.profile.investments);
	const investmentQuantity = useSelector(
		(store) => store.profile.investmentQuantity
	);
	
	const dispatch = useDispatch();

	useEffect(() => {
		fetchCoin();
	}, []);

	// Fetch one currency
	const fetchCoin = () => {
		fetch('https://api.coinlore.net/api/ticker/?id=32360')
			.then((res) => res.json())
			.then((json) => {
				setCurrency(json[0]);
			});
	};

	const onToggleConfirm = () => {
		setOpenConfirm(!openConfirm);
	};

	// Variables to get get different values of investment
  const totalMarketValue = investmentQuantity * currency.price_usd;
  const difference = totalMarketValue - investments;
  const percentDifference = difference/investments * 100;

	const onSellInvestment = () => {
		new Audio(audio).play();
		dispatch(updateInvestments(-investmentQuantity, -investments));
		dispatch(updateCoins(totalMarketValue));
		if (percentDifference > 10) {
			dispatch(updateRanking(0.5));
		}
	};

	return (
		<InvestmentContainer>
			{investments > 0 ? (
				<>
					<InvestmentText>Quantity: {investmentQuantity}st</InvestmentText>
					<InvestmentText>
						Initial investment: {investments.toFixed(2)}$
					</InvestmentText>
					<InvestmentText>
						Current value: {totalMarketValue.toFixed(2)}$
					</InvestmentText>
					<InvestmentChange>
						Since purchase:
						<ChangeBox>
							<ValueChange percent={difference < 0}>
								{investments > totalMarketValue ? <IconDown /> : <IconUp />}
								{difference.toFixed(2)} $
							</ValueChange>
							<ValueChange percent={difference < 0}>
								{investments > totalMarketValue ? <IconDown /> : <IconUp />}
								{percentDifference.toFixed(2)} %
							</ValueChange>
						</ChangeBox>
					</InvestmentChange>
					<SellButton onClick={onToggleConfirm}>Sell investment</SellButton>
					<Dialog open={openConfirm} onClose={onToggleConfirm}>
						<ConfirmDialog>
							Are you sure you want to sell your investment?
							You have {difference > 0 ? 'made' : 'lost'} {difference.toFixed(2)} $
							{percentDifference >= 10 ? 'You have increased your investment with more than 10% so you will also gain 0.5 i ranking!' : ''}
							<ButtonBox>
								<SellButton onClick={onSellInvestment}>Yes, sell!</SellButton>
								<SellButton onClick={onToggleConfirm}>No, cancel!</SellButton>
							</ButtonBox>
						</ConfirmDialog>
					</Dialog>
				</>
			) : (
				<InvestmentText>You have no investments.</InvestmentText>
			)}
		</InvestmentContainer>
	)
};
