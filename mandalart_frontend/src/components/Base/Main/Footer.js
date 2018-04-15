import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { media } from 'lib/styleUtils';
import { FaGithub } from 'react-icons/lib/fa';

const Positioner = styled.div`
  width: 100%;
  height: 100%;
`;

const Background = styled.div`
  background: ${oc.gray[7]};
  display: flex;
  justify-content: center;
`;

const MainContents = styled.div`
  width: 1000px;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  ${media.wide`
    width: 992px;
  `}
  ${media.tablet`
    width: 100%;
  `}
`;

const ContentL = styled.div`
`;

const ContentR = styled.a`
  color: ${oc.gray[1]};
  font-size: 2.5rem;
  margin: 0;
  padding: 0;
  &:hover {
    color: ${oc.gray[5]};
    cursor: pointer;
  }
  ${media.phone`
    font-size: 2rem;
  `}
`;

const CopyRight = styled.p`
  color: ${oc.gray[1]};
  font-size: .8rem;

  ${media.tablet`
    font-size: .75rem;
  `}

  ${media.phone`
    font-size: 0.6rem;
  `}
`;


const Footer = () => {
  return (
    <Positioner>
      <Background>
        <MainContents>
          <ContentL>
            <CopyRight>2018. CODE & DESIGN BY Heonyoung Kim. ALL RIGHTS RESERVED.</CopyRight>
          </ContentL>
          <ContentR href="https://github.com/altenull/MandalArt" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </ContentR>
        </MainContents>
      </Background>
    </Positioner>
  );
};

export default Footer;