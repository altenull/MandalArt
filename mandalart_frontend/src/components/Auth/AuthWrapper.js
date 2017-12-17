import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from 'lib/styleUtils';
import { Link } from 'react-router-dom';

const Positioner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const ShadowedBox = styled.div`
    width: 400px;
    ${shadow(2)}
`;

const LogoWrapper = styled.div`
    background: ${oc.orange[6]};
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Logo = styled(Link)`
    color: white;
    font-family: 'Rajdhani';
    font-size: 2.4rem;
    letter-spacing: 2px;
    text-decoration: none;
`;

const Contents = styled.div`
    background: white;
    padding: 2rem;
    height: auto;
`;

const AuthWrapper = ({children}) => {
    return (
        <Positioner>
            <ShadowedBox  className="animated zoomIn">
                <LogoWrapper>
                    <Logo to="/">Mandal-Art</Logo>
                </LogoWrapper>
                <Contents>
                    {children}
                </Contents>
            </ShadowedBox>
        </Positioner>
    );
};

export default AuthWrapper;