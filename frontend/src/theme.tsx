import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#257C62"
    },
    secondary: {
      main: "#A5FFD4"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#CCFFE7"
    }
  }
});

export default theme;
