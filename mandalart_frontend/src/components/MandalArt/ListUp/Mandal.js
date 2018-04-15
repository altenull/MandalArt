import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow, media } from 'lib/styleUtils';
import TimeAgo from 'react-timeago';
import MandalContents from './MandalContents';

const Positioner = styled.div`
  width: 580px;
  margin: 0 auto;
  & + & {
    margin-top: 2rem;
  }
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 2rem;
  ${media.phone`
    padding: 1.4rem 2rem;
  `}
`;

const HeaderInfo = styled.div`
  display: flex;
  ${media.tablet`
    flex-direction: column;
  `}
`;

const Writer = styled.a`
  color: ${oc.gray[8]};
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;
  ${media.tablet`
    font-size: 1.1rem;
  `}
  ${media.phone`
    font-size: 1rem;
  `}
`;

const WroteLog = styled.div`
  color: ${oc.gray[5]};
  font-size: 1.1rem;
  font-weight: 400;
  padding-left: .5rem;
  padding-right: 1rem;
  ${media.tablet`
    font-size: 1rem;
    padding: 0;
  `}
  ${media.phone`
    font-size: .9rem;
  `}
`;

const ControlButton = styled.i`
  color: #9e9e9e;
  cursor: pointer;
  font-size: 24px;
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
  padding: .5rem 1.6rem;
`;

const StarButton = styled.i`
  color : ${props => props.givedStar ? '#fec000' : '#9e9e9e'};
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
  margin-left: .4rem;
`;

const Mandal = ({
  data,
  ownership,
  onRemove,
  index,
  deleteID,
  onStar,
  givedStar
}) => {
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
          <StarButton
            className="material-icons"
            onClick={() => onStar(data._id, index)}
            givedStar={givedStar}
          >
            star
          </StarButton>
          <StarCount>{data.starred.length}</StarCount>
        </Footer>
      </ShadowedBox>
    </Positioner>
  );
}

export default Mandal;