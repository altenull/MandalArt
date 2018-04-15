import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';
import { shadow, media } from 'lib/styleUtils';

const BorderedButton = styled(Link)`
  font-weight: 700;
  color: white;
  border: 1px solid white;
  padding: .5rem;
  padding-bottom: .4rem;
  cursor: pointer;
  border-radius: 2px;
  text-decoration: none;
  transition: all .3s;
  &:hover {
    background: white;
    color: ${oc.teal[7]};
    ${shadow(1)}
  }
  &:active {
    transform: translateY(3px);
  }
  ${media.phone`
    font-size: .8rem;
  `}
`;

const LoginButton = () => {
  return (
    <BorderedButton to="/auth/login">
      로그인 / 가입
    </BorderedButton>
  );
};

export default LoginButton;