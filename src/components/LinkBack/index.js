import React from 'react';
import { Title, Wrapper, Button } from './styles';

const LinkBack = ({ clickFn }) => (
  <Wrapper>
    <Title>
      <a href="https://linkstream.hashbase.io">linkstream</a> is a place to save
      links during meetups, working sessions, or talks. Built on{' '}
      <a href="https://datproject.org/">dat</a>.
    </Title>
    <Button onClick={() => clickFn('infoViewable')}>?</Button>
  </Wrapper>
);

export default LinkBack;
