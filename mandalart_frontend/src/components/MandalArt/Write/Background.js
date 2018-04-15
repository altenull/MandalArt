import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const TealBackground = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${oc.teal[8]};
  min-height: 25rem;
  z-index: 10;
`;

const Background = () => {
  return (
    <TealBackground />
  );
}

export default Background;