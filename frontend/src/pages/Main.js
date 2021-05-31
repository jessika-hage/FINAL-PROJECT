import React from 'react'
import styled from 'styled-components/macro'

import { Header } from '../components/Header'
import { Camera } from '../components/Camera'
import { Card } from '../components/Card'




export const Main = () => {

  return(
    <MainContainer>
        <Header />
        <Camera />
    <div>
    <ThinnerCard
    thumbnailUrl="https://www.fillmurray.com/100/100"
    title="Memory" 
    secundaryText="This is secundaryText"
    />
    <ThinnerCard
    thumbnailUrl="https://www.fillmurray.com/100/100"
    title="Garden" 
    secundaryText="This is secundaryText"
    />
    <ThinnerCard
    thumbnailUrl="https://www.fillmurray.com/100/100"
    title="Classroom" 
    secundaryText="This is secundaryText"
    />
    <ThinnerCard
    coverImage="https://www.fillmurray.com/500/300"
    title="This is Title" 
    secundaryText="This is secundaryText"
    children="child"
    />
    <ThinnerCard
    coverImage="https://www.fillmurray.com/500/300"
    thumbnailUrl="https://www.fillmurray.com/100/100"
    title="This is Title" 
    secundaryText="This is secundaryText"
    children="child"
    />

    <Card title="asdhwefh"  secundaryText="This is secun" />
    <Card>
        <h1>er  oerht 3ht4 </h1>
    </Card>
</div>
    </MainContainer>
  )
}

const MainContainer = styled.main`
    background-color: ${props => props.theme.backgroundColor};
    height: 100vh;
    position: relative;
    overflow: auto;
    margin-bottom: 200px;
`;

const ThinnerCard = styled(Card)`
    width: 400px;
`