import React from 'react';

const ThemePicker = ({ theme, themeChangeFn }) => (
  <div>
    <label>
      <input
        type="radio"
        value="defaultTheme"
        name="defaultTheme"
        onChange={() => themeChangeFn('defaultTheme')}
        checked={theme === 'defaultTheme'}
      />
      Default Theme
    </label>
    <label>
      <input
        type="radio"
        value="plainTheme"
        name="plainTheme"
        onChange={() => themeChangeFn('plainTheme')}
        checked={theme === 'plainTheme'}
      />
      Plain Theme
    </label>
  </div>
);

export default ThemePicker;
