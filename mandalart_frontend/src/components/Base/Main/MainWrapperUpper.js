import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow, media } from 'lib/styleUtils';
import { Link } from 'react-router-dom';

const Positioner = styled.div`
    width: 100%;
    height: 100%;
`;

const GradientBackground = styled.div`
    background: linear-gradient(120deg, ${oc.orange[2]}, ${oc.orange[6]});
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
        width: 792px;
    `}

    ${media.tablet`
        width: 80%;
    `}

    ${media.phone`
        justify-content: center;
        flex-direction: column;
    `}
`;

const ContentL = styled.div`
    display: flex;
    flex-direction: column;

    ${media.phone`
        margin-bottom: 2rem;
    `}
`;

const Text1 = styled.h1`
    color: ${oc.gray[1]};
    font-size: 2.6rem;
    text-shadow: 1.3px 1.3px 0 ${oc.orange[7]};

    ${media.tablet`
        font-size: 2rem;
    `}
`;

const Text2 = styled.p`
    color: ${oc.gray[2]};
    font-size: 1.6rem;
    text-shadow: 1.1px 1.1px 0 ${oc.orange[7]};

    ${media.tablet`
      font-size: 1rem;
    `}
`;

const ContentR = styled.div`
    width: 230px;
    height: 230px;
    display: flex;
    flex-wrap: wrap;

    ${media.tablet`
        width: 140px;
        height: 140px;
    `}

    ${media.phone`
        margin-top: 2rem;
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
    background: ${oc.red[5]};
    color: ${oc.gray[3]};
    ${shadow(1)}
    margin: 3px;

    ${media.tablet`
        min-width: 40px;
        min-height: 40px;
        font-size: 1.4rem;
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
    border: 1px solid ${oc.gray[4]};
    background: ${oc.red[6]};
    color: ${oc.gray[3]};
    margin: 3px;

    ${media.tablet`
        min-width: 40px;
        min-height: 40px;
        font-size: 1.4rem;
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
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 2px;
    text-decoration: none;
    transition: all .3s;

    &:hover {
        background: ${oc.orange[3]};
        transform: translateY(-2px);
        ${shadow(1)}
    }

    &:active {
        background: ${oc.orange[4]};
    }

    ${media.tablet`
        width: 8rem;
        height: 3rem;
        font-size: 1.6rem;
    `}
`;

const MainWrapperUpper = () => {
    return (
        <Positioner>
            <GradientBackground>
                <MainContents>
                    <ContentL>
                        <Text1>Hi Stranger~!</Text1>
                        <Text2>Mandal-Art로 새로운 계획을 세워보세요!</Text2>
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
};

export default MainWrapperUpper;