import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow, media } from 'lib/styleUtils';
import { Link } from 'react-router-dom';

// 상단 고정, 그림자
const Positioner = styled.div`
    width: 100%;
    position: fixed;
    top: 0px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    transition: .2s ease;
    ${props => props.scrolled && shadow(1)};
`;

// 배경, 내용 중간 정렬
const Background = styled.div`
    display: flex;
    justify-content: center;
    height: auto;
    transition: .2s ease;
    background: ${props => props.scrolled && oc.orange[6]};
`;

// 해더의 내용
const HeaderContents = styled.div`
    width: 1200px;
    height: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-right: 1rem;
    padding-left: 1rem;
    ${media.wide`
        width: 992px;
    `}

    ${media.tablet`
        width: 100%;
    `}
`;

// 로고
const Logo = styled(Link)`
    font-size: 1.8rem;
    letter-spacing: 2px;
    color: white;
    font-family: 'Rajdhani';
    text-decoration: none;
`;

// 중간 여백
const Spacer = styled.div`
    flex-grow: 1;
`;

const Header = ({scrolled, children}) => {
    return (
        <Positioner scrolled={scrolled}>
            <Background scrolled={scrolled}>
                <HeaderContents>
                    <Logo to="/">Mandal-Art</Logo>
                    <Spacer/>
                    {children}
                </HeaderContents>
            </Background>
        </Positioner>
    );
};

export default Header;