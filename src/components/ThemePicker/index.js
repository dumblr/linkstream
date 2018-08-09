import React from 'react';
import { Container, Label, Input } from './styles';

const ThemePicker = ({ theme, themeChangeFn }) => (
  <Container>
    <Label>
      <Input
        type="radio"
        value="defaultTheme"
        name="defaultTheme"
        onChange={() => themeChangeFn('defaultTheme')}
        checked={theme === 'defaultTheme'}
      />
      Default Theme
    </Label>
    <Label>
      <Input
        type="radio"
        value="plainTheme"
        name="plainTheme"
        onChange={() => themeChangeFn('plainTheme')}
        checked={theme === 'plainTheme'}
      />
      Plain Theme
    </Label>
  </Container>
);

export default ThemePicker;
