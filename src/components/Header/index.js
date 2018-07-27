import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 22px;
  line-height: 26px;
  margin: 0 0 6px;
`;

const Description = styled.h2`
  font-size: 16px;
  line-height: 19px;
  margin: 0;
  font-weight: normal;
`;

const Header = ({ listTitle, listDescription }) => (
  <Wrapper>
    <Title>{listTitle || 'linkstream'}</Title>
    {listDescription && <Description>{listDescription}</Description>}
  </Wrapper>
);

export default Header;
