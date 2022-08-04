import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { tealTheme } from './tealTheme';

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={tealTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
