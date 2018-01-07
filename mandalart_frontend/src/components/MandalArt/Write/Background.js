import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const OrangeBackground = styled.div`
    display: flex;
    justify-content: center;
    background: ${oc.orange[6]};
    min-height: 25rem;
    z-index: 10;
`;

const Background = () => {
    return (
        <OrangeBackground/>
    );
}

export default Background;