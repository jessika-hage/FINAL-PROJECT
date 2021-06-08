import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog';

import { MOVIE_API } from '../../reusable/Urls';
import { Card } from '../Card';

export const EntertainmentCard = () => {
	const [movie, setMovie] = useState([]);
	const [movieTwo, setMovieTwo] = useState([]);
	const [open, setOpen] = useState(false);
	const [premium, setPremium] = useState(false);

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
				console.log(json.results);
			});
	}, []);

	useEffect(() => {
		fetchMovie();
		console.log(fetchMovie);
	}, [fetchMovie]);

	const onToggleDialog = () => {
		setOpen(!open);
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
							<RatingImdb>
								<MovieRating>{movie.vote_average}/10</MovieRating>
								<ImdbLink href={`https://www.imdb.com/title/${movie.imdb_id}`}>
									IMDb
								</ImdbLink>
							</RatingImdb>
							<MovieDescription>{movie.overview}</MovieDescription>
							<UpgradeButton onClick={() => setPremium(true)}>
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
							<RatingImdb>
								<MovieRating>{movieTwo.vote_average}/10</MovieRating>
								<ImdbLink href={`https://www.imdb.com/title/${movieTwo.imdb_id}`}>
									IMDb
								</ImdbLink>
							</RatingImdb>
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
		border-right: 2px solid ${(props) => props.theme.primary};
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

const RatingImdb = styled.div`
	display: flex;
`;

const MovieRating = styled.p`
	background-color: ${(props) => props.theme.secondary};
	width: fit-content;
	font-size: 12px;
	padding: 5px;
	margin: 0 7px 0 0;
`;

const ImdbLink = styled.a`
	background-color: #e2b616;
	width: fit-content;
	font-size: 12px;
	padding: 5px;
	margin: 0;
	font-family: 'Trispace', sans-serif;
	font-weight: bold;
	color: #000;
	:hover {
		transform: scale(1.1);
	}
`;

const MovieDescription = styled.p`
	font-size: 12px;
	margin-top: 20px;
`;
