import React from 'react';
import { AppBar, Box, Button, CssBaseline, ThemeProvider, Toolbar } from '@material-ui/core';
import Routes from './routes';
import { defaultTheme } from './assets/theme/default';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
