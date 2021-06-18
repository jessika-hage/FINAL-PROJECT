import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { CITIZEN_URL } from '../reusables/urls';
import { profile } from '../reducers/profile';
import { TextInputSignIn } from '../components/signinupform/TextInput';
import { SubmitButtonSignIn } from '../components/signinupform/SubmitButton';
import { ChangeSignUp } from '../components/signinupform/ChangeLogIn';
import { TitleAnimation } from '../components/signinupform/TitleAnimation';
import {
	MainContainer,
	Form,
	ErrorMessage,
	EyeButton,
} from '../components/signinupform/Styling';

export const ResetPass = () => {
	const [username, setUsername] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [mode, setMode] = useState(null);
	const [errorMessage, setErrorMessage] = useState('');
	const [showNewPassword, setNewShowPassword] = useState(true);
	const accessToken = useSelector((store) => store.profile.accessToken);
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		if (accessToken) {
			history.push('/');
		}
	}, [accessToken, history]);

	const handleFormSubmit = (e) => {
		e.preventDefault();

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, password }),
		};
		fetch(CITIZEN_URL(mode), options)
			.then((res) => res.json())
			.then((data) => {
				if (data.success) {
					batch(() => {
						dispatch(profile.actions.setUsername(data.username));
						dispatch(profile.actions.setAccessToken(data.accessToken));
						dispatch(profile.actions.setBadges(data.badges));
						dispatch(profile.actions.setRanking(data.ranking));
						dispatch(profile.actions.setCoins(data.coins));
						dispatch(profile.actions.setItems(data.items));
						dispatch(profile.actions.setAvatar(data.avatar));
						dispatch(profile.actions.setCreatedAt(data.createdAt));
						dispatch(profile.actions.setUserId(data.userId));
						dispatch(profile.actions.setInvestments(data.investments));
						dispatch(profile.actions.setInvestmentQuantity(data.investmentQuantity));
						dispatch(profile.actions.setEnergy(data.energy));
						dispatch(profile.actions.setHighscoreSpaceball(data.highscoreSpaceball));
						dispatch(profile.actions.setHighscoreFish(data.highscoreFish));
						dispatch(profile.actions.setHighscoreMath(data.highscoreMath));
					});
				} else {
					setErrorMessage(data.message);
				}
			})
			.catch();
	};

	const togglePassword = () => {
		if (!showNewPassword) setShowNewPassword(true);
		else setShowNewPassword(false);
	};

	return (
		<MainContainer>
			<TitleAnimation />
			<Form onSubmit={handleFormSubmit}>
				<TextInputSignIn
					type='text'
					placeholder='username'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<TextInputSignIn
					type={showPassword ? 'password' : 'text'}
					placeholder='New Password'
					value={newPassword}
					onChange={(e) => setNewPassword(e.target.value)}
				/>
				<EyeButton type='button' onClick={togglePassword}>
					{showNewPassword ? (
						<i className='fas fa-eye'></i>
					) : (
						<i className='fas fa-eye-slash'></i>
					)}
				</EyeButton>
				<ErrorMessage>{errorMessage}</ErrorMessage>
				<SubmitButtonSignIn
					type='submit'
					onClick={() => setMode('signin')}
					text='Board ship'
				/>
				<ChangeSignUp
					text='Not a citizen yet?'
					link='/signup'
					linkText='Become one here!'
				/>
			</Form>
		</MainContainer>
	);
};
