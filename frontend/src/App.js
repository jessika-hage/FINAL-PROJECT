import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { themes } from 'reducers/themes';
import { Theme } from './components/Theme';
import { Main } from './pages/Main';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { MathGame } from './pages/MathGame';
import { Memory } from './pages/Memory';
import { Hidden } from './pages/Hidden';
import { MemoryGame } from './pages/secondmemory/MemoryGame';
import { profile } from 'reducers/profile';

const reducer = combineReducers({
	themes: themes.reducer,
	profile: profile.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
	return (
		<Provider store={store}>
			<Theme>
				<BrowserRouter>
					<Switch>
						<Route exact path='/' component={Main} />
						<Route path='/signin' component={SignIn} />
						<Route path='/signup' component={SignUp} />
						<Route path='/memory' component={Memory} />
						<Route path='/hidden' component={Hidden} />
						<Route path='/classroom' component={MathGame} />
						<Route path='/memorygame' component={MemoryGame} />
					</Switch>
				</BrowserRouter>
			</Theme>
		</Provider>
	);
};
