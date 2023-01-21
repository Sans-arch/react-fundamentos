import React, { createContext, useState, useMemo, useEffect } from "react";
import { ThemeProvider } from 'styled-components';

import themes from '../styles/themes';

export const ThemeContext = createContext();

export function CustomThemeProvider(props) {
  const [theme, setTheme] = useState('dark');

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  }

  // Effect Function vai ser executada durante algum momento do life cycle
  /*
  Casos de uso do useEffect:
    1° - Executar a cada novo render
    Se passarmos somente a effect function, essa função será executada
    toda vez que o componente renderizar (na 1° renderização, toda vez que
    o state alterar, toda vez que uma prop alterar) qualquer que seja o motivo
    do componente renderizar, essa função será chamada.
    Quando você quiser que uma função seja executada toda vez que um
    componente seja re-renderizado, use dessa forma.
    Forma:
    useEffect(() => {...});

    2° - Executar apenas uma vez depois do mount
    Mount é montar, montar um componente é renderizar em tela, ou seja,
    quando estamos visualizando um componente no browser isso quer dizer
    que esse componente foi montado! Então quando dizemos que um componente
    foi montado, estamos dizendo que o componente está em tela e o usuário
    já está vendo no navegador.
    Com o useEffect, podemos mandar executar uma função apenas uma única vez
    após o componente ter sido montado em tela, ou seja, assim que o
    componente for exibido em tela, logo depois quero executar uma função.
    Exemplo real: (fazer requisição pra API)
    Forma:
    useEffect(() => {...}, []);

    3° - Executar sempre que um state ou prop mudar
    Podemos monitorar o valor de um state ou de alguma prop, e toda vez que
    algum desses valores for alterado, podemos executar uma função de efeito.
    Forma:
    useEffect(() => {...}, [deps]);
  */
  useEffect(() => {
    console.debug('useEffect executou');
  }, []);

  return (
    <ThemeContext.Provider value={{
      theme,
      handleToggleTheme,
    }}
    >
      <ThemeProvider theme={currentTheme}>
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
