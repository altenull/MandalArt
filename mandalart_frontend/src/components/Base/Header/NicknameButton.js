import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from 'lib/styleUtils';

const BorderedButton = styled.div`
    font-weight: 700;
    color: white;
    border: 1px solid white;
    padding: 0.5rem;
    padding-bottom: 0.4rem;
    cursor: pointer;
    border-radius: 2px;
    text-decoration: none;
    transition: all .3s;

    &:hover {
        background: white;
        color: ${oc.yellow[7]};
        ${shadow(1)}
    }

    &:active {
        transform: translateY(3px);
    }
`;

const NicknameButton = ({children, onClick}) => {
    return (
        <BorderedButton
            onClick={onClick}>
            {children}
        </BorderedButton>
    );
};

export default NicknameButton;