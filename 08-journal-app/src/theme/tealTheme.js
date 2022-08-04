import { createTheme } from '@mui/material';
import { teal, red } from '@mui/material/colors';

export const tealTheme = createTheme({
  palette: {
    primary: {
      main: teal[800],
    },
    secondary: {
      main: teal[400],
    },
    error: {
      main: red[400],
    },
  },
});
