import React, { useState, useMemo, Component } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

// Dentro dos nossos componentes de classes não temos useState,
// para criarmos estados temos 2 formas de criar os estados:
/*
  1° - Criar state no construtor (é a mais simples)
  O método construtor das classes é o método que será executado assim que as
  classes forem instanciadas!
  O método construtor das nossas classes no React recebem as props como argumento,
  tendo todas as props disponíveis num objeto.
  Uma boa prática que o React pede, é que enviemos as props recebidos pela nossa classe
  para o construtor (super) do React.Component também.
  Enfim, para criar o state, basta criar uma propriedade chamada `state` dentro da
  instância, ou seja, this.state = {}, recebendo um objeto, dentro desse objeto
  passaremos todos os estados que queremos que o componete possua.
  Ex:
  constructor(props) {
    super(props);

    this.state = {
      theme: "dark",
      posts: [],
    };
  }
  Para alterar um state nos componentes de classes não temos uma função para cada
  state que queremos trocar, dentro dos funcionais temos os setters que vêm do useState,
  mas em classes não temos isso.
  Nos componentes de classes temos um método dentro da instância chamado de,
  `setState()` acessando assim `this.setState()`.
  O `setState()` vai receber um objeto e vai fazer um merge do objeto recebido
  com o objeto atual (ou anterior) do state em questão. O `setState` não
  sobrescreve o state inteiro, ele faz o merge apenas das propriedades passadas,
  as que não forem mencionadas continuarão com seus valores intactos.
  Exemplo de atualizar um estado:
  this.setState(prevState => {
    return {
      theme: prevState.theme === 'dark' ? 'light' : 'dark';
    }
  });
*/
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: 'dark',
      oiTudoBem: true
    };
  }

  render() {
    const { theme } = this.state;

    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyle />
        <Layout
          onToggleTheme={() => {
            this.setState(prevState => ({
              theme: prevState.theme === 'dark' ? 'light' : 'dark'
            }));
          }}
          selectedTheme={theme}
        />
      </ThemeProvider>
    );
  }
}

export default App;
