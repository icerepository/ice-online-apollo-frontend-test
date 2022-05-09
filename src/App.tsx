import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import Page from './app/pages/Page';

const App: React.FC = function () {
  return (
    <Container>
      <CssBaseline />
      <Page />
    </Container>
  );
};

export default App;
