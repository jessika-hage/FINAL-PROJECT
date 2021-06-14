import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { updateBadges } from '../../reducers/profile';
import { updateRanking } from '../../reducers/profile';
import { MOVIE_API } from '../../reusables/urls';
import { Card } from './Card';
import { EntertainmentDialog } from './EntertainmentDialog';

export const EntertainmentCard = () => {
	const [movie, setMovie] = useState([]);
	const [movieTwo, setMovieTwo] = useState([]);
	const [open, setOpen] = useState(false);
	const [premium, setPremium] = useState(false);

	const dispatch = useDispatch();

	const fetchMovie = useCallback(() => {
		fetch(MOVIE_API)
			.then((res) => res.json())
			.then((json) => {
				const getMovie =
					json.results[Math.floor(Math.random() * json.results.length)];
				const getMovieTwo =
					json.results[Math.floor(Math.random() * json.results.length)];
				setMovie(getMovie);
				setMovieTwo(getMovieTwo);
			});
	}, []);

	useEffect(() => {
		fetchMovie();
	}, [fetchMovie]);

	const onToggleDialog = () => {
		setOpen(!open);
	};

	// Upgrade to premium movie
	// Decrease badges and increase ranking
	const buyMovie = () => {
		setPremium(true);
		dispatch(updateBadges(- 5));
		dispatch(updateRanking(1));
	};

	return (
		<>
		{!premium && (
			<ThinnerCard
			title='Entertainment'
			secondaryText={movie.title}
			thirdText={movie.vote_average}
			fourthText='/ 10'
			thumbnailTwo={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
			button='Upgrade'
			onClick={onToggleDialog}
			/>
		)}
		{premium && (
			<ThinnerCard
			title='Entertainment'
			secondaryText={movieTwo.title}
			thirdText={movieTwo.vote_average}
			fourthText='/ 10'
			thumbnailTwo={`https://image.tmdb.org/t/p/w342${movieTwo.poster_path}`}
			button='See more'
			onClick={onToggleDialog}
		/>
		)}
		<EntertainmentDialog 
			open={open} 
			onClose={onToggleDialog}
			basicImg={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
			basicTitle={movie.title}
			basicAverage={movie.vote_average}
			basicOverview={movie.overview}
			onClick={buyMovie}
			premium={!premium}
			premiumImg={`https://image.tmdb.org/t/p/w342${movieTwo.poster_path}`}
			premiumTitle={movieTwo.title}
			premiumRating={movieTwo.vote_average}
			premiumOverview={movieTwo.overview} />
		</>
	);
};

const ThinnerCard = styled(Card)`
	width: 100%;
	height: 120px;
	margin: 0;
	padding: 0;
	border-bottom: 3px solid ${(props) => props.theme.primary};
	@media (min-width: 768px) {
		border-bottom: none;
		height: 160px;
	}
	@media (min-width: 1200px) {
	}
`;

