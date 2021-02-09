import { createMuiTheme } from "@material-ui/core";

export const defaultTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#8AC40D',
      main: '#447104',
      dark: '#355E02',
      contrastText: '#f5f5f5',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#f5f5f5',
    },
    background: {
      default: '#333'
    }
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  },
}); 