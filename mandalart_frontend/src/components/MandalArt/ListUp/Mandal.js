import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from 'lib/styleUtils';
import TimeAgo from 'react-timeago';
import MandalContents from './MandalContents';

const Positioner = styled.div`
    width: 550px;
    height: 550px;
    margin: 0 auto;
    
    & + & {
        margin-top: 2rem;
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
    justify-content: space-between;
    align-items: flex-end;
    padding: 1.6rem 2rem;
`;

const HeaderInfo = styled.div`
    display: flex;
`;

const Writer = styled.a`
    color: ${oc.gray[8]};
    font-size: 1.2rem;
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

const Mandal = ({data, ownership, onRemove, index, deleteID, onStar}) => {
    return(
        <Positioner className={deleteID ? 'animated mandal-leave' : 'animated mandal-enter'}>
            <ShadowedBox>
                <Header>
                    <HeaderInfo>
                        <Writer href="#">{data.writer}</Writer>
                        <WroteLog>wrote a log · <TimeAgo date={data.date.created}/></WroteLog>
                    </HeaderInfo>
                    { ownership && 
                        <div>
                            <ControlButton className="material-icons" onClick={() => onRemove(data._id, index)}>clear</ControlButton>
                        </div>
                    }
                </Header>
                <Content>
                    <MandalContents goal={data.goal} plans={data.plans}/>
                </Content>
                <Footer>
                    <StarButton className="material-icons" onClick={() => onStar(data._id, index)}>star</StarButton>
                    <StarCount>{data.starred.length}</StarCount>
                </Footer>
            </ShadowedBox>
        </Positioner>
    );
}

export default Mandal;