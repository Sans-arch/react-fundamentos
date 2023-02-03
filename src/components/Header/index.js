import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { ThemeContext } from '../../contexts/ThemeContext';
import { Container } from './styles';

export default function Header() {
  const { theme, handleToggleTheme } = useContext(ThemeContext);
  const history = useHistory();
  console.log(history)

  function handleNavigate() {
    history.push('/');
  }

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button
        type="button"
        onClick={handleToggleTheme}
      >
        {theme === 'dark' ? '🌞' : '🌕'}
      </button>
      <button onClick={handleNavigate} style={{ color: "#fff" }}>
        Voltar para a Home
      </button>
    </Container>
  );
}
