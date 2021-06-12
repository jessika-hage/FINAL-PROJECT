import React from 'react';
import Dialog from '@material-ui/core/Dialog';

import { 
  DialogContainer, 
  MovieContainer, 
  MovieImage, 
  MovieTextContainer,
  TitleCircleBox,
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
      <MovieContainer>
        <MovieImage src={basicImg} />
        <MovieTextContainer>
          <TitleCircleBox>
            <MovieTitle>{basicTitle}</MovieTitle>
            <Basic>Basic</Basic>
          </TitleCircleBox>
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
          <TitleCircleBox>
            <MovieTitle>{premiumTitle}</MovieTitle>
            <Premium>Premium</Premium>
          </TitleCircleBox>
            <MovieRating>{premiumRating}/10</MovieRating>
          <MovieDescription>{premiumOverview}</MovieDescription>
        </MovieTextContainer>
      </MovieContainerPremium>
    </DialogContainer>
  </Dialog>
  )
};