import React from 'react'
import styled from 'styled-components/macro'



export const Card = ({ 
    title, 
    secundaryText,
    icon,
    thirdText, 
    fourthText,
    thumbnailUrl, 
    coverImage, 
    className, 
    children }) =>[
  <Container className={className}>
    {coverImage && <CoverImage src={coverImage} />}
    <Content>
      <TitleBar>
        {thumbnailUrl && <Thumbnail url={thumbnailUrl} />}
        <TextBox>
          <TitleIconBox>
            {title && <Title>{title}</Title>}
            {icon && <Icon>{icon}</Icon>}
          </TitleIconBox>
          {secundaryText && <SecundaryText>{secundaryText}</SecundaryText>}
          {thirdText && <ThirdText>{thirdText}</ThirdText>}
          {fourthText && <FourthText>{fourthText}</FourthText>}
        </TextBox>     
      
    </TitleBar>
    {children && <ChildrenContent>{children}</ChildrenContent>}
    </Content>     
  </Container>
]

const Container = styled.div`
//   box-shadow: rgba(149, 157, 165, 0.1) 0px 2px 8px;
  margin: 10px;
//   border-radius: 6px;
  border-bottom: 2px solid ${props => props.theme.primary};
  background: ${props => props.theme.backgroundColor};
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

const SecundaryText = styled.p`
  margin: 0;
  color: #6b6b6b;
  font-size: 14px;
`;

const ThirdText = styled(SecundaryText)`
`;

const Icon = styled.p`
  margin: 0;
  font-size: 20px;
  color: ${props => props.theme.textColor};
`;

const FourthText = styled(SecundaryText)`
`;

const Thumbnail = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: url(${(props) => props.url});
  background-size: cover;
  margin-right: 10px;
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

const ChildrenContent = styled.div`
  background: #f1f1f1;
  padding: 10px;
`;