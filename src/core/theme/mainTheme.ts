import { createTheme, Theme, ThemeOptions } from '@mui/material';

const mainThemeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#01ed34',
    },
    success: {
      main: '#24C38E',
    },
    warning: {
      main: '#F38B01',
    },
    error: {
      main: '#FF4443',
    },
    info: {
      main: 'rgba(253, 253, 253, 0.1)',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  shadows: [] as unknown as Theme['shadows'],
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#8b8b8b !important',
        },
      },
    },
  },
};

export const mainTheme = createTheme(mainThemeOptions);
