import React from 'react';
import styled from 'styled-components';

const Positioner = styled.div`
    display: flex;
    justify-content: center;
`;

const InputGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const InputSet = ({children}) => {
    return (
        <Positioner>
            <InputGroup>
                {children}
            </InputGroup>
        </Positioner>
    );
}

export default InputSet;