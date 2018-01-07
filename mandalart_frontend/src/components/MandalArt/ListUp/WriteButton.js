import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from 'lib/styleUtils';
import { Link } from 'react-router-dom';

const InvertedButton = styled(Link)`
    font-size: 1.2rem;
    font-weight: 700;
    text-align: center;
    color: white;
    border-radius: 3px;
    cursor: pointer;
    border-radius: 2px;
    padding: 0.8rem 1rem;
    text-decoration: none;
    transition: all .3s;
    background: ${oc.yellow[5]};

    &:hover {
        background: ${oc.yellow[4]};
        ${shadow(1)}
    }
`;

const WriteButton = () => {
    return(
        <div>
            <InvertedButton to="mandalart/write">작성</InvertedButton>
        </div>
    );
}

export default WriteButton;