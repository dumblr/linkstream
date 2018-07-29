import React from 'react';
import { Wrapper, Title, List, ListItem } from './styles';

const DatPopup = () => (
  <Wrapper>
    <Title>
      This site is intended to be viewed and experience with Beaker Browser.
    </Title>
    <List>
      <ListItem>Fork this site to create your own linkstream.</ListItem>
      <ListItem>
        Your title and description will replace the title and description at the
        top of the site.
      </ListItem>
      <ListItem>
        You'll be able to see a form to create and edit links.
      </ListItem>
      <ListItem>Questions? Issues? </ListItem>
    </List>
  </Wrapper>
);

export default DatPopup;
