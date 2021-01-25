import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, PageContainer, theme } from './styles';
import { ErrorBoundary } from './components';
import Scene from './scenes/scene/Scene';

const App: FunctionComponent = () => {
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
};

export default App;
