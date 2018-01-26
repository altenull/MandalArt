import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { media } from 'lib/styleUtils';

const Positioner = styled.div`
    width: 380px;
    height: 380px;
    margin: 0 auto 1rem auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    ${media.tablet`
        width: 80%;
        height: auto
    `}

    ${media.phone`
        width: 90%;
    `}
`;

const Cell = styled.div`
    width: 120px;
    height: 120px;
    background: ${oc.lime[5]};
    color: ${oc.gray[7]};
    font-size: 0.9rem;
    font-weight: 600;
    text-align: center;
    word-break: break-all;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    box-sizing: border-box;

    ${media.tablet`
        width: calc(50vw / 3);
        height: calc(50vw / 3);
        margin-bottom: 0.5rem;
    `}

    ${media.phone`
        font-size: 0.7rem;
    `}
`;

const CenterCell = styled.div`
    width: 120px;
    height: 120px;
    background: ${oc.lime[8]};
    color: ${oc.gray[2]};
    font-size: 0.9rem;
    font-weight: 600;
    text-align: center;
    word-break: break-all;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    box-sizing: border-box;

    ${media.tablet`
        width: calc(50vw / 3);
        height: calc(50vw / 3);
        margin-bottom: 0.5rem;
    `}

    ${media.phone`
        font-size: 0.7rem;
    `}
`;

const MandalContents = ({goal, plans}) => {
    return (
        <Positioner>
            <Cell>{plans.plan1}</Cell>
            <Cell>{plans.plan2}</Cell>
            <Cell>{plans.plan3}</Cell>
            <Cell>{plans.plan4}</Cell>
            <CenterCell>{goal}</CenterCell>
            <Cell>{plans.plan5}</Cell>
            <Cell>{plans.plan6}</Cell>
            <Cell>{plans.plan7}</Cell>
            <Cell>{plans.plan8}</Cell>
        </Positioner>
    );
}

export default MandalContents;