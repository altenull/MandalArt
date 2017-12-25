import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from 'lib/styleUtils';

const Positioner = styled.div`
    width: 740px;
    margin: -15rem auto 5rem auto;
    z-index: 100;
`;

const ShadowedBox = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: white;
    ${shadow(2)}
`;

const Header = styled.div`
    font-size: 2.2rem;
    font-weight: 700;
    color: ${oc.gray[9]};
    padding: 4rem 2rem 2rem 2rem;
`;

const InputWrapper = ({children}) => {
    return (
        <Positioner>
            <ShadowedBox>
                <Header>나의 Mandal-Art 만들기</Header>
                {children}
            </ShadowedBox>
        </Positioner>
    );
}

export default InputWrapper;