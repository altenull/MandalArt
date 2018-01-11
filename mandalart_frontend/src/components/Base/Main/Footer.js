import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { media } from 'lib/styleUtils';

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
    height: 200px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    
    ${media.wide`
        width: 100%;
    `}

    ${media.tablet`
        width: 100%;
    `}
`;

const ContentL = styled.div`
    display: flex;
    flex-direction: column;
`;

const Text1 = styled.h2`
    color: ${oc.gray[2]};
`;

const Text2 = styled.p`
    color: ${oc.gray[1]};
`;

const ContentR = styled.div`
    width: 220px;
    height: 220px;
    display: flex;
    flex-wrap: wrap;
`;

const Footer = () => {
    return (
        <Positioner>
            <Background>
                <MainContents>
                    <ContentL>
                        <Text1>Footer</Text1>
                        <Text2>altenull@gmail.com</Text2>
                    </ContentL>
                    <ContentR>
                    </ContentR>
                </MainContents>
            </Background>
        </Positioner>
    );
};

export default Footer;