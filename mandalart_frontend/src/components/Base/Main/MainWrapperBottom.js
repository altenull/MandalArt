import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { media, shadow } from 'lib/styleUtils';

const Positioner = styled.div`
  width: 100%;
`;

const Background = styled.div`
  display: flex;
  justify-content: center;
`;

const MainContents = styled.div`
  width: 1000px;
  height: calc(100vh - 110px);
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  ${media.wide`
    width: 792px;
  `}

  ${media.tablet`
    width: 80%;
    justify-content: center;
    flex-direction: column;
  `}
`;

const ContentL = styled.div`
`;

const ContentR = styled.div`
`;

const Card = styled.div`
  width: 25rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: white;
  border-radius: 3px;
  ${shadow(2)}
  padding: 1rem;
  ${media.wide`
    width: 22rem;
    height: 22rem;
  `}
  ${media.tablet`
    width: 18rem;
    height: 18rem;
  `}
  ${media.phone`
    width: 12.5rem;
    height: 12.5rem;
  `}
`;

const CardHeader = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${oc.gray[9]};
  text-align: center;
  padding: 0;
  margin: 0;
  ${media.wide`
    font-size: 1.6rem;
  `}
  ${media.tablet`
    font-size: 1.4rem;
  `}
  ${media.phone`
    font-size: 1rem;
  `}
`;

const CardText = styled.p`
  color: ${oc.gray[6]};
  font-weight: 600;
  font-size: 1.1rem;
  text-align: center;
  ${media.wide`
    font-size: .9rem;
  `}
  ${media.tablet`
    font-size: .75rem;
  `}

  ${media.phone`
    font-size: .6rem;
  `}
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-around;
`;

const MandalImg = styled.img`
  width: 25rem;
  height: 25rem;
  transition: .2s ease-in;
  ${shadow(2)}
  &:hover {
    cursor: pointer;
    ${shadow(3)}
  }
  ${media.wide`
    width: 22rem;
    height: 22rem;
  `}
  ${media.tablet`
    width: 18rem;
    height: 18rem;
    margin-bottom: 2rem;
  `}
  ${media.phone`
    width: 12.5rem;
    height: 12.5rem;
  `}
`;

const OtaniImg = styled.img`
  width: 4rem;
  height: 4rem;
  ${shadow(2)}
  border-radius: 50%;

  ${media.tablet`
    width: 3.2rem;
    height: 3.2rem;
  `}

  ${media.phone`
    widht: 2.2rem;
    height: 2.2rem;
    max-width : 2.2rem;
    max-height: 2.2rem;
  `}
`;

const NameText = styled.p`
  color: ${oc.gray[7]};
  font-size: 1rem;
  display: flex;
  align-items: center;
  ${media.wide`
    font-size: .95rem;
  `}
  ${media.tablet`
    font-size: .8rem;
  `}
  ${media.phone`
    font-size: 0.65rem;
  `}
`;


const MainWrapperBottom = () => {
  const mandalImgUrl = require('static/images/mandal.jpg');
  const otaniImgUrl = require('static/images/ohtani.jpg');

  return (
    <Positioner>
      <Background>
        <MainContents>
          <ContentL>
            <MandalImg src={mandalImgUrl} onClick={() => window.open(mandalImgUrl)}/>
          </ContentL>
          <ContentR>
            <Card>
              <CardHeader>Mandalart(만다라트)</CardHeader>
              <div>
                <CardText>일본의 괴물 투수 오타니가 고등학생 때 활용해 화제</CardText>
                <CardText>'작은 것 모여야 큰 걸 이룬다'</CardText>
                <CardText>'현실적인 목표를 잡아라'</CardText>
                <CardText>...</CardText>
              </div>
              <CardFooter>
                <OtaniImg src={otaniImgUrl}/>
                <NameText>오나티 쇼헤이(Ohtani Shohei)</NameText>
              </CardFooter>
            </Card>
          </ContentR>
        </MainContents>
      </Background>
    </Positioner>
  );
}

export default MainWrapperBottom;