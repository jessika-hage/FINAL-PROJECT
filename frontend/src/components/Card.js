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
        <div>
            {title && <Title>{title}</Title>}
            <div>
              {secundaryText && <SecundaryText>{secundaryText}</SecundaryText>}
            </div>
            <TextIconContainer>
              {thirdText && <ThirdText>{thirdText}</ThirdText>}
              {icon && <Icon>{icon}</Icon>}
            </TextIconContainer>
            <div> 
              {fourthText && <FourthText>{fourthText}</FourthText>}
            </div>         
        </div>
    </TitleBar>
    {children && <ChildrenContent>{children}</ChildrenContent>}
    </Content>     
  </Container>
]

const Container = styled.div`
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  margin: 10px;
  border-radius: 6px;
  background: ${props => props.theme.backgroundColor};
  :last-of-type {
    margin-bottom: 100px;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 20px;
  text-transform: uppercase;
  color: ${props => props.theme.textColor};
`;

const SecundaryText = styled.p`
  margin: 0;
  color: #6b6b6b;
`;

const TextIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`;

const ThirdText = styled(SecundaryText)`
`;

const Icon = styled.p`
  margin: 0;
  font-size: 22px;
  color: ${props => props.theme.textColor};
`;

const FourthText = styled(SecundaryText)`
`;

const Thumbnail = styled.div`
  width: 70px;
  height: 70px;
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
  padding: 20px;
`;