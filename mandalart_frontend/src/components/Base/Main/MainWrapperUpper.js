import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow, media } from 'lib/styleUtils';
import { Link } from 'react-router-dom';

const Positioner = styled.div`
  width: 100%;
  z-index: 100;
`;

const GradientBackground = styled.div`
  display: flex;
  justify-content: center;
  background: linear-gradient(to Right, ${oc.teal[8]}, ${oc.teal[3]});
  ${media.phone`
    background: linear-gradient(to bottom, ${oc.teal[8]}, ${oc.teal[3]});
  `}
`;

const MainContents = styled.div`
  width: 1000px;
  height: calc(100vh - 55px);
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
  display: flex;
  flex-direction: column;
  ${media.tablet`
    margin-bottom: 4rem;
  `}
  ${media.phone`
    margin-bottom: 3rem;
  `}
`;

const Text1 = styled.h1`
  color: ${oc.gray[1]};
  font-size: 2.6rem;
  text-shadow: 1.3px 1.3px 0 ${oc.gray[7]};
  ${media.wide`
    font-size: 2.4rem;
  `}
  ${media.phone`
    font-size: 1.6rem;
  `}
`;

const Text2 = styled.p`
  color: ${oc.gray[2]};
  font-size: 1.6rem;
  text-shadow: 1.1px 1.1px 0 ${oc.gray[7]};
  ${media.wide`
    font-size: 1.4rem;
  `}
  ${media.phone`
    font-size: .8rem;
  `}
`;

const ContentR = styled.div`
  width: 230px;
  height: 230px;
  display: flex;
  flex-wrap: wrap;
  ${media.phone`
    width: 200px;
    height: 200px;
    justify-conetent: center;
  `}
`;

const Cell = styled.div`
  min-width: 70px;
  min-height: 70px;
  font-family: 'Rajdhani';
  font-size: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  box-sizing: border-box;
  background: ${oc.lime[5]};
  color: ${oc.gray[7]};
  ${shadow(1)}
  margin: 3px;
  ${media.phone`
    min-width: 60px;
    max-width: 60px;
    min-height: 60px;
    max-height: 60px;
    font-size: 2rem;
  `}
`;

const CenterCell = styled.div`
  min-width: 70px;
  min-height: 70px;
  font-family: 'Rajdhani';
  font-size: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  box-sizing: border-box;
  background: ${oc.lime[8]};
  color: ${oc.gray[2]};
  ${shadow(1)}
  margin: 3px;
  ${media.phone`
    min-width: 60px;
    max-width: 60px;
    min-height: 60px;
    max-height: 60px;
    font-size: 2rem;
  `}
`;

const BorderedButton = styled(Link)`
  width: 10rem;
  height: 4rem;
  font-weight: 700;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${oc.gray[2]};
  color: ${oc.gray[1]};
  padding: .5rem;
  cursor: pointer;
  border-radius: 2px;
  text-decoration: none;
  transition: all .3s;
  &:hover {
    background: ${oc.teal[9]};
    transform: translateY(-1px);
    ${shadow(1)}
  }
  &:active {
    background: ${oc.teal[6]};
  }
  ${media.wide`
    width: 9rem;
    height: 3.5rem;
    font-size: 1.6rem;
  `}
  ${media.phone`
    width: 6.8rem;
    height: 2.5rem;
    font-size: 1.2rem;
    margin-top: 1rem;
  `}
`;

const MainWrapperUpper = () => {
  return (
    <Positioner>
      <GradientBackground>
        <MainContents>
          <ContentL>
            <Text1>새로운 시작!</Text1>
            <Text2>미니 Mandal-Art로 나만의 멋진 목표를 세워보세요!</Text2>
            <BorderedButton to="/mandalart">시작하기</BorderedButton>
          </ContentL>
          <ContentR>
            <Cell className="animated hinge fadeInLeftDown">M</Cell>
            <Cell className="animated hinge fadeInDown">A</Cell>
            <Cell className="animated hinge fadeInRightDown">N</Cell>
            <Cell className="animated hinge fadeInLeft">D</Cell>
            <CenterCell>A</CenterCell>
            <Cell className="animated hinge fadeInRight">L</Cell>
            <Cell className="animated hinge fadeInLeftUp">A</Cell>
            <Cell className="animated hinge fadeInUp">R</Cell>
            <Cell className="animated hinge fadeInRightUp">T</Cell>
          </ContentR>
        </MainContents>
      </GradientBackground>
    </Positioner>
  );
}

export default MainWrapperUpper;