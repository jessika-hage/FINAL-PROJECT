import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { CITIZEN_URL } from '../reusables/urls';
import { profile } from '../reducers/profile';
import { TextInputSignIn } from '../components/signinupform/TextInput';
import { SubmitButtonSignIn } from '../components/signinupform/SubmitButton';
import { ChangeSignUp } from '../components/signinupform/ChangeLogIn';
import { TitleAnimation } from '../components/signinupform/TitleAnimation';
import { MainContainer, Form } from '../components/signinupform/Styling';

export const SignIn = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [mode, setMode] = useState(null);
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
					});
				} else {
					console.log(data);
				}
			})
			.catch();
	};

	return (
		<MainContainer>
			<TitleAnimation />
			<Form onSubmit={handleFormSubmit}>
				<TextInputSignIn
					type='text'
					placeholder='username'
					value={username}
					onChange={(e) => setUsername(e.target.value)} />
				<TextInputSignIn
					type='password'
					placeholder='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)} />
				<SubmitButtonSignIn
					type='submit' 
					onClick={() => setMode('signin')} 
					text='Board ship' />
				<ChangeSignUp
					text='Not a citizen yet?' 
					link='/signup' 
					linkText='Become one here!' />
			</Form>
		</MainContainer>
	);
};



