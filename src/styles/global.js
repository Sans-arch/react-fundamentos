import React, { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';

import { ThemeContext } from '../contexts/ThemeContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
    font-family: sans-serif;
  }
  `;

// Criando um Wrapper pois não é possível usar React Hooks dentro dos styled components
export default function GlobalStyleWrapper() {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <GlobalStyle theme={currentTheme} />
  );
}
