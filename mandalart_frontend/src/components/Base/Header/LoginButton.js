import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';
import { shadow } from 'lib/styleUtils';

const BorderedButton = styled(Link)`
    font-weight: 700;
    color: ${oc.yellow[6]};
    border: 1px solid ${oc.yellow[6]};
    padding: 0.5rem;
    padding-bottom: 0.4rem;
    cursor: pointer;
    border-radius: 2px;
    text-decoration: none;
    transition: all .2s;

    &:hover {
        background: ${oc.yellow[6]};
        color: white;
        ${shadow(1)}
    }

    &:active {
        transform: translateY(3px);
    }
`;

const LoginButton = () => {
    return (
        <BorderedButton to="/auth/login">
            로그인 / 가입
        </BorderedButton>
    )
};

export default LoginButton;