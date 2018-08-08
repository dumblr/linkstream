import React from 'react';
import { Wrapper, Title, List, ListItem } from './styles';

const DatPopup = ({ themeState }) => (
  <Wrapper themeState={themeState}>
    <Title>
      This site is intended to be viewed and experienced with{' '}
      <a href="https://beakerbrowser.com/">Beaker Browser</a>.
    </Title>
    <List>
      <ListItem>
        <a href="https://beakerbrowser.com/docs/using-beaker/#forking-a-website">
          Fork
        </a>{' '}
        this site to create your own linkstream.
      </ListItem>
      <ListItem>
        Your title and description will replace the title and description at the
        top of the site.
      </ListItem>
      <ListItem>
        You'll be able to see a form to create and edit links.
      </ListItem>
    </List>
  </Wrapper>
);

export default DatPopup;
