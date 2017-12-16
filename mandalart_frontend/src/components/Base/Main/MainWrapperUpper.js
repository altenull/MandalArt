import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow, media } from 'lib/styleUtils';

const Positioner = styled.div`
    width: 100%;
    height: 100%;
`;

const GradientBackground = styled.div`
    background: linear-gradient(180deg, ${oc.orange[0]}, ${oc.orange[6]});
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

    ${media.tablet`
        font-size: 2rem;
    `}
`;

const Text2 = styled.p`
    color: ${oc.gray[2]};
    font-size: 1.6rem;

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
    border-radius: 2px;
    box-sizing: border-box;
    background: ${oc.red[5]};
    ${shadow(1)}
    margin: 3px;

    ${media.tablet`
        min-width: 40px;
        min-height: 40px;
    `}
`;

const CenterCell = styled.div`
    min-width: 70px;
    min-height: 70px;
    border-radius: 2px;
    box-sizing: border-box;
    border: 1px solid ${oc.gray[3]};
    background: linear-gradient(135deg, ${oc.orange[2]}, ${oc.red[4]});
    margin: 3px;

    ${media.tablet`
        min-width: 40px;
        min-height: 40px;
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

                    </ContentL>
                    <ContentR>
                        <Cell className="animated hinge fadeInLeftDown"></Cell>
                        <Cell className="animated hinge fadeInDown"></Cell>
                        <Cell className="animated hinge fadeInRightDown"></Cell>
                        <Cell className="animated hinge fadeInLeft"></Cell>
                        <CenterCell></CenterCell>
                        <Cell className="animated hinge fadeInRight"></Cell>
                        <Cell className="animated hinge fadeInLeftUp"></Cell>
                        <Cell className="animated hinge fadeInUp"></Cell>
                        <Cell className="animated hinge fadeInRightUp"></Cell>
                    </ContentR>
                </MainContents>
            </GradientBackground>
        </Positioner>
    );
};

export default MainWrapperUpper;