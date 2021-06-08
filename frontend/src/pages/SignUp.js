import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch, batch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import { ThemeButtons } from '../components/ThemeButtons';
import { CITIZEN_URL } from '../reusable/Urls';
import { profile } from '../reducers/profile';

export const SignUp = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [mode, setMode] = useState(null);
	const accessToken = useSelector((store) => store.profile.accessToken);

	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
	  if (accessToken) {
	    history.push("/");
	  }
	}, [accessToken, history]);

	const handleFormSubmit = (e) => {
		e.preventDefault();

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, email, password }),
		};
		fetch(CITIZEN_URL(mode), options)
			.then((res) => res.json())
			.then((data) => {
				if (data.success) {
					batch(() => {
						dispatch(profile.actions.setUsername(data.username));
						dispatch(profile.actions.setEmail(data.email));
						dispatch(profile.actions.setAccessToken(data.accessToken));
						dispatch(profile.actions.setBadges(data.badges));
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
			<Title>Citizen Ship</Title>
			<Form onSubmit={handleFormSubmit}>
				<NameInput
					type='text'
					placeholder='username'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				></NameInput>
				<NameInput
					type='password'
					placeholder='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				></NameInput>
				<NameInput
					type='email'
					placeholder='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				></NameInput>
				<ChooseText>Choose your avatar:</ChooseText>
				<ThemeButtons />
				<ChooseText>Color your spaceship:</ChooseText>
				<ThemeButtons />
				<Button type='submit' onClick={() => setMode('signup')}>
					become a citizen
				</Button>
				<SignIn>
					Already a citizen? <Link to='/signin'>Board ship here!</Link>
				</SignIn>
			</Form>
		</MainContainer>
	);
};

const Form = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const MainContainer = styled.main`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1`
	font-family: 'Trispace';
	text-transform: uppercase;
	color: ${(props) => props.theme.textColor};
	font-size: 40px;
	display: flex;
	margin-bottom: 40px;
`;

const NameInput = styled.input`
	padding: 10px;
	outline: none;
	border-bottom: 3px solid ${(props) => props.theme.primary};
	border-left: none;
	border-top: none;
	border-right: none;
	background-color: transparent;
	font-size: 16px;
	color: ${(props) => props.theme.textColor};
	margin-bottom: 20px;
	width: 300px;
	font-family: 'Trispace';
	:focus {
		background-color: ${(props) => props.theme.primary};
	}
	::placeholder {
		text-transform: uppercase;
	}
`;

const ChooseText = styled.p`
	color: ${(props) => props.theme.textColor};
	text-transform: uppercase;
	font-family: 'Trispace';
	font-size: 14px;
	margin-top: 30px;
`;

const Button = styled.button`
	padding: 15px 25px;
	outline: none;
	border: none;
	background-color: ${(props) => props.theme.secondary};
	color: ${(props) => props.theme.textColor};
	text-transform: uppercase;
	font-family: 'Trispace';
	margin-top: 35px;
	cursor: pointer;
	:hover {
		opacity: 0.7;
	}
`;

const SignIn = styled.p`
	color: ${(props) => props.theme.textColor};
	text-transform: uppercase;
	font-family: 'Trispace';
	font-size: 14px;
`;
