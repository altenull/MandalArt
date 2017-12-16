import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { media } from 'lib/styleUtils';

const Positioner = styled.div`
    width: 100%;
    height: 100%;
`;

const Background = styled.div`
    background: white;
    display: flex;
    justify-content: center;
`;

const MainContents = styled.div`
    width: 1000px;
    height: 600px;
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

const Text1 = styled.h1`
    color: ${oc.gray[8]};
    font-size: 2.6rem;
`;

const Text2 = styled.p`
    color: ${oc.gray[6]};
    font-size: 1.6rem;
`;

const ContentR = styled.div`
    width: 220px;
    height: 220px;
    display: flex;
    flex-wrap: wrap;
`;

const MainWrapperBottom = () => {
    return (
        <Positioner>
            <Background>
                <MainContents>
                    <ContentL>
                        <Text1>오타니 쇼헤이</Text1>
                        <Text2>일본의 야구선수로...</Text2>
                    </ContentL>
                    <ContentR>
                    </ContentR>
                </MainContents>
            </Background>
        </Positioner>
    );
};

export default MainWrapperBottom;