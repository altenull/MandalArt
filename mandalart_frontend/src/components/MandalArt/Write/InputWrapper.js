import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow, media } from 'lib/styleUtils';

const Positioner = styled.div`
    width: 580px;
    margin: -18rem auto 1rem auto;
    z-index: 100;

    ${media.tablet`
        width: 90%;
    `}
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
    padding: 2.5rem 1.5rem 1.5rem 1.5rem;

    ${media.tablet`
        font-size: 1.7rem;
    `}

    ${media.phone` 
        font-size: 1.5rem;
    `}
`;

const InputWrapper = ({children}) => {
    return (
        <Positioner className='animated bounceInDown'>
            <ShadowedBox>
                <Header>나의 Mandal-Art 만들기</Header>
                {children}
            </ShadowedBox>
        </Positioner>
    );
}

export default InputWrapper;