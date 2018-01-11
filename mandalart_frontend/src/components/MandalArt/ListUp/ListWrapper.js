import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import WriteButton from './WriteButton';

const Positioner = styled.div`
    width: 740px;
    margin: 5rem auto 0 auto;
`;

const FlexibleBox = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 2.2rem;
    font-weight: 700;
    color: ${oc.gray[9]};
    padding: 4rem 2rem 2rem 2rem;
`;

const ListWrapper = ({isLogged, children}) => {
    return (
        <Positioner>
            <FlexibleBox>
                <Header>
                    MandalArt 리스트
                    {isLogged && <WriteButton/>}
                </Header>
                {children}
            </FlexibleBox>
        </Positioner>
    );
}

export default ListWrapper;