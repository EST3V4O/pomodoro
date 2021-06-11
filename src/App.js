import React from 'react'

import GlobalStyles from './styles/global'
import Routes from './routes'

import CounterProvider from './contexts/CounterContext';

function App() {
  return (
    <CounterProvider>
      <Routes />
      <GlobalStyles />
    </CounterProvider>
  );
}

export default App;
