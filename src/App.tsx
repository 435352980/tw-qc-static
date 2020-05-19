import React from 'react';
import { render } from 'react-dom';
import { StoreProvider } from 'easy-peasy';
import { HashRouter } from 'react-router-dom';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';

import store from '@/store';
import Main from '@/views/Main';

const theme = createMuiTheme({
  typography: {
    button: { textTransform: 'capitalize' },
    fontFamily: `'Chinese Quote', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC',
    'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
  },
  palette: { primary: blue },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StoreProvider store={store}>
        <HashRouter>
          <Main />
        </HashRouter>
      </StoreProvider>
    </ThemeProvider>
  );
};

render(<App />, document.querySelector('#root'));
