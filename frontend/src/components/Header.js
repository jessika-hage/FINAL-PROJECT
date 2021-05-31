import React, { useState } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import Drawer from "@material-ui/core/Drawer";

export const Header = () => {
  const [openForm, setOpenForm] = useState(false);
  const today = moment().format("DD/MM YYYY");

  return(
    <Main>
      <TitleDate>
        <Title>Citizen Ship</Title>
        <Date>{today}</Date>
      </TitleDate>
      <ProfilImg onClick={() => setOpenForm(true)}></ProfilImg>
      <Drawer 
        anchor="bottom"
        open={openForm}         
        onClose={() => setOpenForm(false)}>
        <DrawerContainer>
          hej
        </DrawerContainer>
      </Drawer>
    </Main>
  )
}

const Main = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    background-color: ${props => props.theme.primary};
    position: fixed;
    margin: 0;
    width: 100%;
    bottom: 0;
    z-index: 1;
    clear: both;
    @media (min-width: 768px) {
        top: 0;
    }`;

const TitleDate = styled.div`
    display: flex;
    flex-direction: column;
`;
const Title = styled.h1`
    margin: 0;
    padding: 0 0 5px 10px;
`

const Date = styled.p`
    padding 0 10px;
    margin: 0;
    font-size: 16px;
`;

const ProfilImg = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-image: url("https://www.fillmurray.com/100/100");
    background-size: cover;
    margin-right: 10px;
    cursor: pointer;
`

const DrawerContainer = styled.section`
    height: 500px;
    background-color: ${props => props.theme.primary};
`