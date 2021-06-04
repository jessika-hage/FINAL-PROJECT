import React from 'react';

import { MemoryLogin } from './MemoryLogin';
import { MemoryGame } from './MemoryGame';
import { MemoryEndGame } from './MemoryEndGame';
import { MemoryNavBar } from './MemoryNavBar';

class MemoryMain extends React.Component {
	state = {
		showLogin: true,
		showEndGame: false,
		name: '',
		score: 0,
	};

	handleLogin = (name, boolean) => {
		this.setState({ name: name, showLogin: boolean });
	};

	handleEndGame = (boolean) => {
		if (boolean) {
			this.setState({ showEndGame: boolean, score: this.state.score + 1 });
		} else {
			this.setState({ showeEndGame: boolean });
		}
	};
	render() {
		const { showLogin, name, score, showEndGame } = this.state;
		return (
			<div>
				{showLogin ? <MemoryLogin name={this.handleLogin} /> : null}
				{showEndGame ? <MemoryEndGame newGame={this.handleEndGame} /> : null}
				<MemoryNavBar name={name} score={score} />
				<MemoryGame endGame={this.handleEndGame} />
			</div>
		);
	}
}
