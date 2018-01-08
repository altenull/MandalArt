import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Positioner = styled.div`
    width: 380px;
    height: 380px;
    margin: 0 auto 1rem auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;

const Cell = styled.div`
    width: 120px;
    height: 120px;
    color: ${oc.gray[9]};
    background: ${oc.orange[4]};
    font-size: 0.9rem;
    font-weight: 600;
    text-align: center;
    word-break: break-all;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    box-sizing: border-box;
`;

const MandalContents = ({goal, plans}) => {
    return (
        <Positioner>
            <Cell>{plans.plan1}</Cell>
            <Cell>{plans.plan2}</Cell>
            <Cell>{plans.plan3}</Cell>
            <Cell>{plans.plan4}</Cell>
            <Cell>{goal}</Cell>
            <Cell>{plans.plan5}</Cell>
            <Cell>{plans.plan6}</Cell>
            <Cell>{plans.plan7}</Cell>
            <Cell>{plans.plan8}</Cell>
        </Positioner>
    );
}

export default MandalContents;