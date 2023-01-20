import React from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default function Layout(props) {
  return (
    <>
      <Header onToggleTheme={props.onToggleTheme} theme={props.selectedTheme} />
      <PostsList />
      <Footer onToggleTheme={props.onToggleTheme} theme={props.selectedTheme} />
    </>
  );
}
