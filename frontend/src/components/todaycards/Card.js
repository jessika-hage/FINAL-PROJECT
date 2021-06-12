import React from 'react'
import styled from 'styled-components/macro'

export const Card = ({ 
    title, 
    secondaryText,
    icon,
    thumbnailUrl, 
    thumbnailTwo,
    coverImage, 
    className, 
    button,
    onClick }) =>[
  <Container className={className}>
    {coverImage && <CoverImage src={coverImage} />}
    <ContentIcon>
    {thumbnailTwo && <ThumbnailTwo src={thumbnailTwo} />}
    <Content>
      <TitleBar>
        {thumbnailUrl && <Thumbnail url={thumbnailUrl} />}
        <TextBox>
          <TitleIconBox>
            {title && <Title>{title}</Title>}
            {icon && <Icon>{icon}</Icon>}
          </TitleIconBox>
          <SmallTextContainer>
            {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
          </SmallTextContainer>
        </TextBox>         
    </TitleBar>
    {button && <Button onClick={onClick}>{button}</Button>}
    </Content>     
    </ContentIcon>
  </Container>
]

const Container = styled.div`
  margin: 10px;
  background: ${props => props.theme.backgroundColor};
  position: relative;
`;

const ContentIcon = styled.div`
  display: flex;
`;

const SmallTextContainer = styled.div`
display: flex;
`;

const TitleIconBox = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.secondary};
  margin-bottom: 5px;
  padding-bottom: 5px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin: 0 0 5px 0;
  font-size: 18px;
  text-transform: uppercase;
  color: ${props => props.theme.textColor};
`;

const SecondaryText = styled.p`
  margin: 0 5px 0 0;
  color: #6b6b6b;
  font-size: 14px;
`;


const Icon = styled.p`
  margin: 0;
  font-size: 20px;
  color: ${props => props.theme.textColor};
`;

const Thumbnail = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: url(${(props) => props.url});
  background-size: cover;
  margin-right: 10px
`;

const ThumbnailTwo = styled.img`
  width: 78px;
  height: 100%;
  object-fit: cover;
  margin: 0;
  padding: 0;
  @media (min-width: 768px) {
      width: 105px;
  }
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
`;

const CoverImage = styled.img`
  width: 100%;
  border-radius: 6px 6px 0 0;
`;

const Content = styled.div`
  padding: 20px;
`;

const Button = styled.button`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.textColor};
  padding: 10px;
  outline: none;
  border: ${props => props.theme.secondary};
  cursor: pointer;
  position: absolute;
  right: 0;
  bottom: 0;
  text-transform: uppercase;
  font-size: 12px;
  font-family: "Trispace", serif;
  :hover {
    background-color: ${props => props.theme.secondary};
  }
`;