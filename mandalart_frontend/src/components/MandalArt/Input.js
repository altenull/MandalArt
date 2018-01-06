import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const HoveredInput = styled.input`
    min-width: 180px;
    min-height: 180px;
    max-width: 180px;
    min-height: 180px;
    padding: 0.3rem;
    margin: 0.3rem;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    color: ${oc.gray[9]};
    background: ${oc.orange[3]};
    border: none;
    border-radius: 3px;
    box-sizing: border-box;

    ::placeholder {
        color: ${oc.gray[6]};
    }

    &:hover,
    &:focus {
        background: ${oc.orange[4]};
    }
`;

const Input = ({...rest}) => {
    return (
        <HoveredInput
            {...rest}
            maxLength="15"/>
    );
}

export default Input;