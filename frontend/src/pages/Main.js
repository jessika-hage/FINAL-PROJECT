import React from 'react'
import styled from 'styled-components/macro'

import { Header } from '../components/Header';
import { Camera } from '../components/Camera';
import { Card } from '../components/Card';
import { Map } from '../components/Map';
import { WeatherCard } from '../components/descriptioncards/WeatherCard';
import { EntertainmentCard } from '../components/descriptioncards/EntertainmentCard';
import { NutritionCard } from '../components/descriptioncards/NutritionCard';
import { CurrencyCard } from '../components/descriptioncards/CurrencyCard';




export const Main = () => {
  return(
    <MainContainer>
      <Header />
      <Camera />
      <Container>
        <MapContainer>
          <Map />
        </MapContainer>
        <RightContainer>
          <ThinnerCard
            thumbnailUrl="https://www.fillmurray.com/100/100"
            title="Memory" 
            secundaryText="This is secundaryText" />
          <ThinnerCard
            thumbnailUrl="https://www.fillmurray.com/100/100"
            title="Garden" 
            secundaryText="This is secundaryText" />
          <ThinnerCard
            thumbnailUrl="https://www.fillmurray.com/100/100"
            title="Classroom" 
            secundaryText="This is secundaryText" />
        </RightContainer>
      </Container>
      <BottomContainer>
        <WeatherCard />
        <NutritionCard />
        <EntertainmentCard />
        <CurrencyCard />
      </BottomContainer>
    </MainContainer>
  )
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: auto;
`;

const Container = styled.section`
  display: flex;
  width: 100%;
  padding: 0 20px;
  @media (min-width: 768px) {
    margin-top: 20px;
    padding: 0 40px;
  }
`;

const MapContainer = styled.div`
  width: 70%;
  display: none;
  @media (min-width: 768px) {
    width: 70%;
    display: flex;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px;
  background-color: ${props => props.theme.backgroundColor};
  border: 2px solid ${props => props.theme.primary};
  box-shadow: rgba(149, 157, 165, 0.1) 0px 2px 8px;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0;
    width: fit-content;
    height: 120px;
    margin: 40px;
  }
`;

const RightContainer = styled.div`
  width: 100%;
  margin: 0;
  background-color: ${props => props.theme.backgroundColor};
  border: 2px solid ${props => props.theme.primary};
  box-shadow: rgba(149, 157, 165, 0.1) 0px 2px 8px;
  @media (min-width: 768px) {
    width: 35%;
  }
`;

const ThinnerCard = styled(Card)`
  width: 100%;
  margin: 0;
`;