import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import { Container } from './styles';

export default function Header() {
  const { currentTheme, handleToggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button
        type="button"
        onClick={handleToggleTheme}
      >
        {currentTheme === 'dark' ? '🌞' : '🌕'}
      </button>
    </Container>
  );
}
