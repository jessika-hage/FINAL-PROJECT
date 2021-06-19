// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch, batch } from 'react-redux';
// import { useHistory } from 'react-router-dom';

// import { CITIZEN_URL } from '../reusables/urls';
// import { profile } from '../reducers/profile';
// import { TextInputSignIn } from '../components/signinupform/TextInput';
// import { SubmitButtonSignIn } from '../components/signinupform/SubmitButton';
// import { ChangeSignUp } from '../components/signinupform/ChangeLogIn';
// import {
// 	MainContainer,
// 	Form,
// 	ErrorMessage,
// 	EyeButton,
// } from '../components/signinupform/Styling';

// export const ResetPass = () => {
// 	const [newPassword, setNewPassword] = useState('');
// 	const [mode, setMode] = useState(null);
// 	const [errorMessage, setErrorMessage] = useState('');
// 	const [showNewPassword, setShowNewPassword] = useState(true);
// 	const accessToken = useSelector((store) => store.profile.accessToken);
// 	const dispatch = useDispatch();
// 	const history = useHistory();

// 	// useEffect(() => {
// 	// 	if (accessToken) {
// 	// 		history.push('/');
// 	// 	}
// 	// }, [accessToken, history]);

// 	const handleFormSubmit = (e) => {
// 		e.preventDefault();

//     		const options = {
// 			method: 'PATCH',
// 			headers: {
// 				'Content-Type': 'application/json',
// 				const options = {
// 			method: 'PATCH',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify({ password }),
// 		};
// 		fetch(
// 			`http://localhost:8080/citizen/${getState().profile.userId}/resetpassword`,
// 			options
// 		)
// 			.then((res) => res.json())
// 			.then((data) => {
// 				console.log(data);
// 				dispatch(profile.actions.setNewPassword(data.password));
// 			})
// 			.catch((err) => console.error(err));
//     };

// 	// 	const options = {
// 	// 		method: 'POST',
// 	// 		headers: {
// 	// 			'Content-Type': 'application/json',
// 	// 		},
// 	// 		body: JSON.stringify({ newPassword }),
// 	// 	};
// 	// 	fetch(CITIZEN_URL(mode), options)
// 	// 		.then((res) => res.json())
// 	// 		.then((data) => {
// 	// 			if (data.success) {
// 	// 				batch(() => {
// 	// 					dispatch(profile.actions.setUsername(data.username));
// 	// 					dispatch(profile.actions.setAccessToken(data.accessToken));
// 	// 					dispatch(profile.actions.setUserId(data.userId));
// 	// 				});
// 	// 			} else {
// 	// 				setErrorMessage(data.message);
// 	// 			}
// 	// 		})
// 	// 		.catch();
// 	// };

// 	const toggleNewPassword = () => {
// 		if (!showNewPassword) setShowNewPassword(true);
// 		else setShowNewPassword(false);
// 	};

// 	return (
// 		<MainContainer>
// 			<Form onSubmit={handleFormSubmit}>
// 				<TextInput
// 					type={showNewPassword ? 'password' : 'text'}
// 					placeholder='New password'
// 					value={password}
// 					onChange={(e) => setNewPassword(e.target.value)}
// 					minLength='5'
// 				/>
// 				<EyeButton type='button' onClick={toggleNewPassword}>
// 					{showNewPassword ? (
// 						<i className='fas fa-eye'></i>
// 					) : (
// 						<i className='fas fa-eye-slash'></i>
// 					)}
// 				</EyeButton>
// 				<ErrorMessage>{errorMessage}</ErrorMessage>
// 				<SubmitButtonSignIn
// 					type='submit'
// 					onClick={() => setMode('signin')}
// 					text='Board ship'
// 				/>
// 				<ChangeSignUp
// 					text='Not a citizen yet?'
// 					link='/signup'
// 					linkText='Become one here!'
// 				/>
// 			</Form>
// 		</MainContainer>
// 	);
// };
