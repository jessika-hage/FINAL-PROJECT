import React from 'react'
import styled from 'styled-components/macro'

import { Header } from '../components/Header'
import { Camera } from '../components/Camera'
import { Card } from '../components/Card'
import { Map } from '../components/Map';




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
          <ThinnerCard
            
            title="Weather at Destination" 
            secundaryText="This is secundaryText" />
            <ThinnerCard
            
            title="Nutrition Served" 
            secundaryText="This is secundaryText" />
            <ThinnerCard
            
            title="Entertainment" 
            secundaryText="This is secundaryText" />
            <ThinnerCard
            
            title="Currency" 
            secundaryText="This is secundaryText" />
       
        </BottomContainer>
      
    </MainContainer>
  )
}

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