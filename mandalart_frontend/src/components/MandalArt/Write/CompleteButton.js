import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow, media } from 'lib/styleUtils';

const Positioner = styled.div`
    display: flex;
    justify-content: center;
    margin: 1.2rem 0;
`;

const InvertedButton = styled.div`
    width: 130px;
    font-size: 1.2rem;
    font-weight: 700;
    text-align: center;
    color: white;
    border-radius: 3px;
    line-height: 2.2rem;
    padding: 0.4rem;
    padding-bottom: 0.4rem;
    cursor: pointer;
    border-radius: 2px;
    text-decoration: none;
    transition: .3s all;
    background: ${oc.teal[6]};

    &:hover {
        background: ${oc.teal[5]};
        ${shadow(1)}
    }

    ${media.tablet`
        width: calc(65vw / 3);
    `}

    ${media.phone`
        font-size: 0.8rem;
        line-height: 1.6rem;
        padding: 0.2rem;
    `}
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