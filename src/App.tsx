import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, PageContainer, theme } from './styles';
import { ErrorBoundary } from './components';
import Scene from './scenes/scene/Scene';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ErrorBoundary>
          <PageContainer>
            <Scene />
          </PageContainer>
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
}

export default App;
