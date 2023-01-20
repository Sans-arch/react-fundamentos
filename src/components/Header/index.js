import React from 'react';

import { Container } from './styles';

export default function Header(props) {
  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button
        type="button"
        onClick={props.onToggleTheme}
      >
        {props.selectedTheme === 'dark' ? '🌞' : '🌕'}
      </button>
    </Container>
  );
}
