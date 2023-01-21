import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

import Routes from '../../Routes';

import { Nav } from './styles';

/*
  <Link /> são como âncoras do HTML com href, porém com elas podemos trocar de
  página sem fazermos nenhum "refresh" da página no navegador, de forma natural.
  Na DOM, os <Link /> serão transpilados para âncoras do HTML, <a />
*/
export default function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
      </Nav>
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}
