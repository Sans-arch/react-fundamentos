import React from 'react';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import Button from './components/TempButton';

import { CustomThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <Button />
      <Layout />
    </CustomThemeProvider>
  );
}
export default App;
