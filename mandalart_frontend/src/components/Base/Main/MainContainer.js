import React from 'react';
import styled from 'styled-components';
import MainWrapperUpper from './MainWrapperUpper';
import MainWrapperBottom from './MainWrapperBottom';
import Footer from './Footer';

const Positioner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const MainContainer = () => {
    return (
        <Positioner>
            <MainWrapperUpper></MainWrapperUpper>
            <MainWrapperBottom></MainWrapperBottom>
            <Footer></Footer>
        </Positioner>
    );
};

export default MainContainer;