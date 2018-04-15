import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { media } from 'lib/styleUtils';

const HoveredInput = styled.input`
  min-width: 130px;
  min-height: 130px;
  max-width: 130px;
  max-height: 130px;
  padding: .5rem;
  margin: .5rem;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  color: ${oc.gray[9]};
  background: ${oc.teal[4]};
  border: none;
  border-radius: 3px;
  box-sizing: border-box;
  ::placeholder {
    color: ${oc.gray[6]};
  }
  &:hover,
  &:focus {
    background: ${oc.teal[5]};
  }
  ${media.tablet`
    min-width: calc(65vw / 3);
    max-width: calc(65vw / 3);
    min-height: calc(65vw / 3);
    max-height: calc(65vw / 3);
  `}
  ${media.phone`
    font-size: .7rem;
  `}
`;

const Input = ({
  ...rest
}) => {
  return (
    <HoveredInput
      {...rest}
      maxLength="15"
    />
  );
}

export default Input;