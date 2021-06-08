import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import styled, { keyframes } from 'styled-components';

import { CITIZEN_URL } from '../reusable/Urls';
import { profile } from '../reducers/profile';

export const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState(null);
  const accessToken = useSelector((store) => store.profile.accessToken);
  const dispatch = useDispatch();
  const history = useHistory();

  // useEffect(() => {
  //   if (accessToken) {
  //     history.push("/");
  //   }
  // }, [accessToken, history]);

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
          });
        } else {
          console.log(data)
        }
      }
    )
    .catch();
  };


  return (
    <MainContainer>
        <Title><L>C</L><L>i</L><L>t</L><L>i</L><L>z</L><L>e</L><L>n</L> <L>s</L><L>h</L><L>i</L><L>p</L></Title>
        <Form onSubmit={handleFormSubmit}>
        <NameInput 
          type="text" 
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}></NameInput>
        <NameInput 
          type="password" 
          placeholder="password"           
          value={password}
          onChange={(e) => setPassword(e.target.value)}></NameInput>
        <Button 
        type='submit'
        onClick={()=> setMode('signin')}>board ship</Button>
        <SignUp>Not a citizen yet? <Link to='/signup'>Become one here!</Link></SignUp>
        </Form>
    </MainContainer>
  )
}

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${props => props.theme.backgroundColor};
`;

const Title = styled.h1`
  font-family: "Trispace";
  text-transform: uppercase;
  color: ${props => props.theme.textColor};
  font-size: 40px;
  display: flex;
`;

const letterTop = keyframes`
  from { transform: translateY(-800px) }
  to { transform: translateY(0px) }
`;

const letterBottom = keyframes`
  from { transform: translateY(800px) }
  to { transform: translateY(0px) }
`;

const letterRight = keyframes`
  from { transform: translateX(800px) }
  to { transform: translateX(0px) }
`;

const letterLeft = keyframes`
  from { transform: translateX(-800px) }
  to { transform: translateX(0px) }
`;

const L = styled.p`
&:nth-of-type(8) {
    margin-left: 15px;
};
&:nth-of-type(1) {
    animation: ${letterTop} 2.1s linear;
};
&:nth-of-type(2) {
    animation: ${letterRight} 2.1s linear;
};
&:nth-of-type(3) {
    animation: ${letterLeft} 2.1s linear;
};
&:nth-of-type(4) {
    animation: ${letterBottom} 2.1s linear;
};
&:nth-of-type(5) {
    animation: ${letterTop} 2.3s linear;
};
&:nth-of-type(6) {
    animation: ${letterRight} 2.3s linear;
};
&:nth-of-type(7) {
    animation: ${letterLeft} 2.5s linear;
};
&:nth-of-type(8) {
    animation: ${letterBottom} 2.5s linear;
};
&:nth-of-type(9) {
    animation: ${letterTop} 2.5s linear;
};
&:nth-of-type(10) {
    animation: ${letterRight} 2.5s linear;
};
&:nth-of-type(11) {
    animation: ${letterBottom} 2.5s linear;
};
`;

const input = keyframes`
  0% { opacity: 0 }
  80%% { opacity: 0 }
  100% { opacity: 0 }
`;

const NameInput = styled.input`
  padding: 10px;
  outline: none;
  border-bottom: 3px solid ${props => props.theme.primary};
  border-left: none;
  border-top: none;
  border-right: none;
  background-color: transparent;
  font-size: 16px;
  color: ${props => props.theme.textColor};
  margin-bottom: 20px;
  animation: ${input} 3.5s linear;
  width: 300px;
  font-family: "Trispace";
  :focus {
    background-color: ${props => props.theme.primary};
  }
  ::placeholder {
    text-transform: uppercase;
  }
`;

const Button = styled.button`
  padding: 15px 25px;
  outline: none;
  border: none;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.textColor};
  animation: ${input} 3.7s linear;
  text-transform: uppercase;
  font-family: "Trispace";
  margin: 20px 0 5px 0;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

const SignUp = styled.p`
  color: ${props => props.theme.textColor};
  animation: ${input} 3.7s linear;
  text-transform: uppercase;
  font-family: "Trispace";
  font-size: 14px;
`;