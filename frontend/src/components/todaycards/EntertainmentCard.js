import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog';

import { updateBadges } from '../../reducers/profile';
import { updateRanking } from '../../reducers/profile';
import { MOVIE_API } from '../../reusables/urls';
import { Card } from '../Card';

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
		dispatch(updateBadges(- 2));
		dispatch(updateRanking(1));
	};

	return (
		<>
			<ThinnerCard
				title='In Cinema tonight'
				secondaryText={movie.title}
				thumbnailTwo={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
				button='See more'
				onClick={onToggleDialog}
			/>
			<Dialog open={open} onClose={onToggleDialog}>
				<DialogContainer>
					<MovieContainer>
						<MovieImage src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} />
						<MovieTextContainer>
							<TitleCircleBox>
								<MovieTitle>{movie.title}</MovieTitle>
								<Basic>Basic</Basic>
							</TitleCircleBox>
								<MovieRating>{movie.vote_average}/10</MovieRating>
							<MovieDescription>{movie.overview}</MovieDescription>
							<UpgradeButton onClick={buyMovie}>
								Upgrade to premium
							</UpgradeButton>
						</MovieTextContainer>
					</MovieContainer>
					<MovieContainerPremium premium={!premium}>
						<MovieImage
							src={`https://image.tmdb.org/t/p/w342${movieTwo.poster_path}`}
						/>
						<MovieTextContainer>
							<TitleCircleBox>
								<MovieTitle>{movieTwo.title}</MovieTitle>
								<Premium>Premium</Premium>
							</TitleCircleBox>
								<MovieRating>{movieTwo.vote_average}/10</MovieRating>
							<MovieDescription>{movieTwo.overview}</MovieDescription>
						</MovieTextContainer>
					</MovieContainerPremium>
				</DialogContainer>
			</Dialog>
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

const DialogContainer = styled.div`
	background-color: ${(props) => props.theme.backgroundColor};
	border: 2px solid ${(props) => props.theme.primary};
	display: flex;
	flex-direction: column;
	padding: 20px;
	color: ${(props) => props.theme.textColor};
`;

const MovieContainer = styled.div`
	display: flex;
	border-bottom: 2px solid ${(props) => props.theme.primary};
	padding: 20px 0;
`;

const UpgradeButton = styled.button`
	padding: 10px;
	font-size: 12px;
	border: 2px solid ${(props) => props.theme.secondary};
	font-family: 'Trispace', sans-serif;
	text-transform: uppercase;
	width: fit-content;
	background-color: ${(props) => props.theme.primary};
	color: ${(props) => props.theme.textColor};
	:hover,
	:focus {
		transform: scale(1.05);
		border: 2px solid ${(props) => props.theme.hover};
	}
`;

const MovieContainerPremium = styled(MovieContainer)`
	${(props) => (props.premium ? `opacity: 0.1;` : `opacity: 1;`)}
`;

const MovieImage = styled.img`
	width: 150px;
	height: 180px;
`;

const MovieTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 20px;
`;

const TitleCircleBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const MovieTitle = styled.h2`
	font-size: 16px;
	text-transform: uppercase;
	margin: 5px 0 10px 0;
`;

const Basic = styled.div`
	border: 2px solid ${(props) => props.theme.secondary};
	font-size: 12px;
	padding: 10px;
	text-transform: uppercase;
`;

const Premium = styled(Basic)`
	border: 2px solid ${(props) => props.theme.hover};
`;

const MovieRating = styled.p`
	font-size: 12px;
	margin-top: 4px;
`;

const MovieDescription = styled.p`
	font-size: 12px;
	margin-top: 20px;
`;
