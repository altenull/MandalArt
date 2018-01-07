import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from 'lib/styleUtils';

const Positioner = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
`;

const InvertedButton = styled.div`
    width: 180px;
    font-size: 1.6rem;
    font-weight: 700;
    text-align: center;
    color: white;
    border-radius: 3px;
    line-height: 3rem;
    padding: 0.5rem;
    padding-bottom: 0.4rem;
    cursor: pointer;
    border-radius: 2px;
    text-decoration: none;
    transition: all .3s;
    background: ${oc.yellow[5]};

    &:hover {
        background: ${oc.yellow[4]};
        ${shadow(1)}
    }
`;

const CompleteButton = ({onClick}) => {
    return (
        <Positioner>
            <InvertedButton onClick={onClick}>
                완료
            </InvertedButton>
        </Positioner>
    );
};

export default CompleteButton;