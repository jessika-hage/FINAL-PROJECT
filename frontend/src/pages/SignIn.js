import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { CITIZEN_URL } from '../reusables/urls';
import { profile } from '../reducers/profile';
import { ui } from '../reducers/ui';
import { TextInputSignIn } from '../components/signinupform/TextInput';
import { SubmitButtonSignIn } from '../components/signinupform/SubmitButton';
import { ChangeSignUp } from '../components/signinupform/ChangeLogIn';
import { TitleAnimation } from '../components/signinupform/TitleAnimation';
import { Loader } from '../components/loader/Loader';
import {
	MainContainer,
	Form,
	ErrorMessage,
	EyeButton,
} from '../components/signinupform/Styling';

export const SignIn = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [mode, setMode] = useState(null);
	const [errorMessage, setErrorMessage] = useState('');
	const [showPassword, setShowPassword] = useState(true);
	const accessToken = useSelector((store) => store.profile.accessToken);
	const loading = useSelector((store) => store.ui.isLoading);
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		if (accessToken) {
			history.push('/');
		}
	}, [accessToken, history]);

	const handleFormSubmit = (e) => {
		e.preventDefault();

		dispatch(ui.actions.setLoading(true));

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, password }),
		};

		setTimeout(() => {
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

							localStorage.setItem(
								'profile',
								JSON.stringify({
									username: data.username,
									userId: data.userId,
									accessToken: data.accessToken,
									badges: data.badges,
									ranking: data.ranking,
									coins: data.coins,
									items: data.items,
									avatar: data.avatar,
									createdAt: data.createdAt,
									investments: data.investments,
									investmentQuantity: data.investmentQuantity,
									energy: data.energy,
									highscoreSpaceball: data.highscoreSpaceball,
									highscoreFish: data.highscoreFish,
									highscoreMath: data.highscoreMath,
								})
							);
						});
					} else {
						setErrorMessage(data.message);
					}
					dispatch(ui.actions.setLoading(false));
				})
				.catch();
		}, 3000);
	};

	const togglePassword = () => {
		if (!showPassword) setShowPassword(true);
		else setShowPassword(false);
	};

	return (
		<MainContainer>
			{loading && <Loader />}
			{!loading && (
				<>
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
							placeholder='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<EyeButton type='button' onClick={togglePassword}>
							{showPassword ? (
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
				</>
			)}
		</MainContainer>
	);
};
