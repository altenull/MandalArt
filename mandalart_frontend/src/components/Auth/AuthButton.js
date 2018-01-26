import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from 'lib/styleUtils';

const Wrapper = styled.div`
    margin-top: 1rem;
    padding-top: 0.6rem;
    padding-bottom: 0.5rem;

    background: ${oc.teal[8]};
    color: white;

    text-align: center;
    font-size: 1.35rem;
    font-weight: 500;

    cursor: pointer;
    user-select: none;
    transition: all .2s;

    &:hover {
        background: ${oc.teal[6]};
        ${shadow(0)}
    }

    &:active {
        background: ${oc.teal[8]}
    }
`;

const AuthButton = ({children, onClick}) => {
    return (
        <Wrapper onClick={onClick}>
            {children}
        </Wrapper>
    );
}

export default AuthButton;