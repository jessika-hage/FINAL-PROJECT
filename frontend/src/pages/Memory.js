import React, { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './stylesMemory.css';
import styled from 'styled-components';
const url = 'https://pokeres.bastionbot.org/images/pokemon';

export const Memory = () => {
	const [openedCard, setOpenedCard] = useState([]);
	const [matched, setMatched] = useState([]);
	const [flipped, setFlipped] = useState(true);
	const [finished, setFinished] = useState(false);

	const pokemons = [
		{ id: 1, name: 'balbasaur' },
		{ id: 8, name: 'wartotle' },
		{ id: 9, name: 'blastoise' },
		{ id: 6, name: 'charizard' },
	];
	//currently there are 4 pokemons but we need the pair
	const pairOfPokemons = [...pokemons, ...pokemons];

	function flipCard(index) {
		setOpenedCard((opened) => [...opened, index]);
		setFlipped(true);
	}

	useEffect(() => {
		if (openedCard < 2) return;

		const firstMatched = pairOfPokemons[openedCard[0]];
		const secondMatched = pairOfPokemons[openedCard[1]];

		if (secondMatched && firstMatched.id === secondMatched.id) {
			setMatched([...matched, firstMatched.id, secondMatched.id]);
		}

		if (openedCard.length === 2) setTimeout(() => setOpenedCard([]), 600);
	}, [openedCard]);

	useEffect(() => {
		if (matched.lenght > 0 && matched.length === pokemons.length) {
			setFinished(true);
			console.log(setFinished);
		}
	}, [matched]);

	return (
		<Main>
			<Cards>
				{pairOfPokemons.map((pokemon, index) => {
					let isFlipped = false;

					if (openedCard.includes(index)) isFlipped = true;
					if (matched.includes(pokemon.id)) isFlipped = true;
					return (
						<ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
							<PokemonCard
								flippCard={isFlipped}
								key={index}
								onClick={() => flipCard(index)}
							>
								{' '}
							</PokemonCard>
							<img
								src={`${url}/${pokemon.id}.png`}
								alt='pokemon-name'
								onClick={() => flipCard(index)}
								width='100'
							/>
						</ReactCardFlip>
					);
				})}
			</Cards>
			{finished && <FinishedText>You win</FinishedText>}
		</Main>
	);
};

const FinishedText = styled.p`
	font-size: 20px;
	color: #fff;
`;

const PokemonCard = styled.div`
	height: 150px;
	width: 150px;
	position: relative;
	&::after {
		content: '';
		background: ${(props) => props.theme.secondary};
		width: 100%;
		height: 100%;
		position: absolute;
		border-radius: 8px;
		top: 0;
		left: 0;
		transform: rotateY(0) perspective(100px);
		transition: 0.4s;
		backface-visibility: hidden;
	}
`;

const Main = styled.div`
	background-color: ${(props) => props.theme.backgroundColor};
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 50px;
	line-height: 1;
`;

const Cards = styled.div`
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	gap: 10px;
`;
