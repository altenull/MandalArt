import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow, media } from 'lib/styleUtils';
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
    background: ${oc.teal[6]};

    &:hover {
        background: ${oc.teal[5]};
        ${shadow(1)}
    }

    ${media.tablet`
        font-size: 1rem;
        padding: 0.7rem 0.9rem;
    `}

    ${media.phone`
        font-size: 0.8rem;
        padding: 0.6rem 0.8rem;
    `}
`;

const WriteButton = () => {
    return(
        <div>
            <InvertedButton to="mandalart/write">작성</InvertedButton>
        </div>
    );
}

export default WriteButton;