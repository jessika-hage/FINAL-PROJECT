import React from 'react';
import Dialog from '@material-ui/core/Dialog';

import { 
  DialogContainer, 
  DialogTitleText,
  MovieContainer, 
  MovieImage, 
  MovieTextContainer,
  TitleContainer,
  MovieTitle,
  Basic,
  MovieRating,
  MovieDescription,
  UpgradeButton,
  MovieContainerPremium,
  Premium } from './Styling';

export const EntertainmentDialog = ({ 
  open, 
  onClose, 
  basicImg, 
  basicTitle, 
  basicRating, 
  basicOverview, 
  onClick,
  premium, 
  premiumImg,
  premiumTitle,
  premiumRating,
  premiumOverview }) => {

  return (
    <Dialog open={open} onClose={onClose}>
    <DialogContainer>
      <DialogTitleText>It will cost you 5 badges to upgrade your movie, but your ranking will increase with 1.</DialogTitleText>
      <MovieContainer>
        <MovieImage src={basicImg} />
        <MovieTextContainer>
          <TitleContainer>
            <MovieTitle>{basicTitle}</MovieTitle>
            <Basic>Basic</Basic>
          </TitleContainer>
            <MovieRating>{basicRating}/10</MovieRating>
          <MovieDescription>{basicOverview}</MovieDescription>
          <UpgradeButton onClick={onClick}>
            Upgrade to premium
          </UpgradeButton>
        </MovieTextContainer>
      </MovieContainer>
      <MovieContainerPremium premium={premium}>
        <MovieImage
          src={premiumImg}
        />
        <MovieTextContainer>
          <TitleContainer>
            <MovieTitle>{premiumTitle}</MovieTitle>
            <Premium>Premium</Premium>
          </TitleContainer>
            <MovieRating>{premiumRating}/10</MovieRating>
          <MovieDescription>{premiumOverview}</MovieDescription>
        </MovieTextContainer>
      </MovieContainerPremium>
    </DialogContainer>
  </Dialog>
  )
};