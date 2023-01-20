import React from 'react';

import { Container } from './styles';

export default function Footer(props) {
  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button
        type="button"
        onClick={props.onToggleTheme}
      >
        {props.selectedTheme === 'dark' ? '🌞' : '🌕'}
      </button>
    </Container>
  );
}
