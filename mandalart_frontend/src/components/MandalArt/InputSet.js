import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import Input from './Input';

const Positioner = styled.div`
    display: flex;
    justify-content: center;
`;

const InputGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const InputSet = () => {
    return (
        <Positioner>
            <InputGroup>
                <Input placeholder="세부목표1"/>
                <Input placeholder="세부목표2"/>
                <Input placeholder="세부목표3"/>
                <Input placeholder="세부목표4"/>
                <Input placeholder="최종목표"/>
                <Input placeholder="세부목표5"/>
                <Input placeholder="세부목표6"/>
                <Input placeholder="세부목표7"/>
                <Input placeholder="세부목표8"/>
            </InputGroup>
        </Positioner>
    );
}

export default InputSet;