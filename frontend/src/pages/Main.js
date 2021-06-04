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
  margin: 0 0 200px 0;  
`;

const Container = styled.section`
  display: flex;
  width: 100%;
  padding: 0 20px;
  @media (min-width: 768px) {
    padding: 0 40px;
    // height: 75%;
    margin-top: 30px;
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
  margin-top: 20px;
  width: 100%;
  padding: 0 20px;
  @media (min-width: 768px) {
      flex-direction: row;
      margin-top: 40px;
      padding: 0 40px;
      height: 25%;
  }
`

const RightContainer = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 30%;
  }
`;

const ThinnerCard = styled(Card)`
  width: 100%;
`;