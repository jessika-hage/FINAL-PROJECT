import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ThemeButtons } from '../components/theme/ThemeButtons';
import { Avatars } from '../components/signinupform/Avatars';
import { CITIZEN_URL } from '../reusables/urls';
import { profile } from '../reducers/profile';
import { TextInput } from '../components/signinupform/TextInput';
import { SubmitButton } from '../components/signinupform/SubmitButton';
import { ChangeLogIn } from '../components/signinupform/ChangeLogIn';
import { 
  MainContainer, 
  Title, 
  Form, 
  ChooseText,
  AvatarContainer } from '../components/signinupform/Styling';

export const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');
  const [mode, setMode] = useState(null);
  const accessToken = useSelector((store) => store.profile.accessToken);
  const dispatch = useDispatch();
  const history = useHistory();

  const avatars= ['woman', 'man2', 'hacker', 'woman3', 'woman2', 'man'];

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
	  body: JSON.stringify({ username, email, password, avatar }),
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
	  <Title>Citizen Ship</Title>
	  <Form onSubmit={handleFormSubmit}>
      <TextInput 
        type='text' 
        placeholder='username' 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} />
      <TextInput
        type='password'
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)} />
      <TextInput
        type='email'
        placeholder='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)} />
      <ChooseText>Choose your avatar:</ChooseText>
      <AvatarContainer>
      {avatars.map((avatar) => (
        <Avatars avatar={avatar}
          image={require(`../assets/${avatar}.png`)}
          onChange={(e) => setAvatar(e.target.value)} />
      ))}
      </AvatarContainer>
      <ChooseText>Color your spaceship:</ChooseText>
      <ThemeButtons />
      <SubmitButton 
        type='submit' 
        onClick={() => setMode('signup')} 
        text='Become a citizen' />
      <ChangeLogIn 
        text='Already a citizen?' 
        link='/signin' 
        linkText='Board ship here!' />
	  </Form>
	</MainContainer>
  );
};
