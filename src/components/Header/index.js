import React, { Component } from 'react';

import { Container } from './styles';

// Props ficam na instância do componente de classe `this`
// React.Component é quem injeta as props dentro da instância
export default class Header extends Component {
  render() {
    const { selectedTheme, onToggleTheme } = this.props;

    return (
      <Container>
        <h1>JStack's Blog</h1>
        <button
          type="button"
          onClick={onToggleTheme}
        >
          {selectedTheme === 'dark' ? '🌞' : '🌕'}
        </button>
      </Container>
    );
  }
}
