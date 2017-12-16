import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow, media } from 'lib/styleUtils';

// 상단 고정
const Positioner = styled.div`
    width: 100%;
    height: 60%;
`;

// gradient 배경
const GradientBackground = styled.div`
    background: linear-gradient(180deg, ${oc.orange[0]}, ${oc.orange[7]});
`;

// 해더의 내용
const MainContents = styled.div`
    height: 1200px;
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-right: 1rem;
    padding-left: 1rem;
    ${media.wide`
        width: 100%;
    `}

    ${media.tablet`
        width: 100%;
    `}
`;

const MainWrapper = () => {
    return (
        <Positioner>
            <GradientBackground>
                <MainContents>
                </MainContents>
            </GradientBackground>
        </Positioner>
    );
};

export default MainWrapper;