import React from 'react';
import { render } from 'react-dom';
import { StoreProvider } from 'easy-peasy';
import { HashRouter } from 'react-router-dom';
import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import blue from '@material-ui/core/colors/blue';

import store from '@/store';
import PageFrame from '@/pages/PageFrame';
import { fontFamily } from '@/theme';

import 'react-virtualized/styles.css';
import 'react-table/react-table.css';

const theme = createMuiTheme({ typography: { fontFamily }, palette: { primary: blue } });

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StoreProvider store={store}>
        <HashRouter>
          <PageFrame />
        </HashRouter>
      </StoreProvider>
    </ThemeProvider>
  );
};

render(<App />, document.querySelector('#root'));
