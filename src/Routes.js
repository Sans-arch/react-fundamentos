import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Posts from './pages/Posts';
import NotFound from './pages/NotFound';
import Post from './pages/Post';

// Rotas são componentes
/*
  Route é um componente, e utilizamos ele para definir as nossas rotas.
  Os <Route /> não irão funcionar sem estarem dentro de um componente <Router /> ou afins
  <BrowserRouter /> utiliza a History API do próprio navegador para manipular as rotas, é isso que nos permite
  mexer nas flechinhas de ir e voltar (<- e ->) e poder digitar um endereço pela barra (ex: /posts) e poder acessar a
  página.
  Por padrão, o dev-server do Webpack ele cria um servidor Node e trata as rotas como requisições HTTP, no nosso caso
  queremos que ele pegue as rotas com erro de 404 e que ele redirecione para o arquivo index.html, onde o JavaScript irá
  controlar a navegação do usuário pela History API.

  Com o <Switch /> só será renderizada 1 ÚNICA rota por vez, se nenhuma rota bater com a path fornecido, ele renderiza
  a ultima rota (geralmente a 404 - Not Found).
*/
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/posts" component={Posts} />
      <Route path="/posts/:id" component={Post} />
      <Route component={NotFound} />
    </Switch>
  );
}
