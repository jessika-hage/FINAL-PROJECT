import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { themes } from 'reducers/themes';
import { Theme } from './components/theme/Theme';
import { Store } from './pages/Store';
import { LeaderBoard } from './components/LeaderBoard';
import { Main } from './pages/Main';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { MathGame } from './pages/MathGame';
import { MemoryGame } from './pages/MemoryGame';
import { ProtinFarm } from './pages/ProtinFarm';
import { profile } from './reducers/profile';
import { cart } from './reducers/cart';
import { products } from './reducers/products';
import { GameBall } from './components/spaceball/GameBall';

const reducer = combineReducers({
	themes: themes.reducer,
	profile: profile.reducer,
	cart: cart.reducer,
	products: products.reducer,
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
						<Route path='/leaderboard' component={LeaderBoard} />
						<Route path='/signup' component={SignUp} />
						<Route path='/classroom' component={MathGame} />
						<Route path='/memorygame' component={MemoryGame} />
						<Route path='/store' component={Store} />
						<Route path='/farm' component={ProtinFarm} />
						<Route path='/spaceball' component={GameBall} />
					</Switch>
				</BrowserRouter>
			</Theme>
		</Provider>
	);
};
