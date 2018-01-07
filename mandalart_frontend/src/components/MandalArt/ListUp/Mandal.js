import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from 'lib/styleUtils';

const Positioner = styled.div`
    width: 500px;
    height: 500px;
    margin: 0 auto;
    
    & + & {
        margin-top: 1rem;
    }
`;

const ShadowedBox = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: white;
    ${shadow(2)}
`;

const Header = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 1.6rem 2rem;
`;

const Writer = styled.a`
    color: ${oc.gray[8]};
    font-size: 1.4rem;
    font-weight: 700;
    text-decoration: none;
`;

const WroteLog = styled.div`
    color: ${oc.gray[5]};
    font-size: 1.1rem;
    font-weight: 400;
    padding-left: 0.5rem;
    padding-right: 1rem;
`;

const ControlButton = styled.i`
    color: #9E9E9E;
    font-size: 0.6rem;
    text-align: right;
    cursor: pointer;

    &:hover {
        color: #C5C5C5;
    }
    &:active {
        color: #FF9800;
    }
`;

const Content = styled.div`
    padding: 0 2rem;
`;

const Footer = styled.div`
    display: flex;
    align-items: flex-end;
    border-top: 1px solid ${oc.gray[5]};
    padding: 0.5rem 1.6rem;
`;

const StarButton = styled.i`
    color: #9E9E9E;
    cursor: pointer;

    &:hover {
        color: #C5C5C5;
    }
    &:active {
        color: #FF9800;
    }
`;

const StarCount = styled.span`
    font-size: 1rem;
    font-weight: 700;
    color: #777;
    margin-left: 0.4rem;
`;

const Mandal = () => {
    return(
        <Positioner>
            <ShadowedBox>
                <Header>
                    <Writer href="#">Writer</Writer>
                    <WroteLog>wrote a log · 1 seconds ago</WroteLog>
                    <ControlButton className="material-icons">mode_edit</ControlButton>
                    <ControlButton className="material-icons">clear</ControlButton>
                </Header>
                <Content>
                    Mandalart 자리<br/>
                    Mandalart 자리<br/>
                    Mandalart 자리<br/>
                    Mandalart 자리<br/>
                    Mandalart 자리<br/>
                    Mandalart 자리<br/>
                    Mandalart 자리<br/>
                    Mandalart 자리<br/>
                    Mandalart 자리<br/>
                    Mandalart 자리<br/>
                    Mandalart 자리<br/>
                    Mandalart 자리<br/>
                    Mandalart 자리<br/>
                    Mandalart 자리<br/>
                    Mandalart 자리<br/>
                    Mandalart 자리<br/>
                    Mandalart 자리<br/>
                </Content>
                <Footer>
                    <StarButton className="material-icons">star</StarButton>
                    <StarCount>0</StarCount>
                </Footer>
            </ShadowedBox>
        </Positioner>
    );
}

export default Mandal;