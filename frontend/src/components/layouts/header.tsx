import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    bar: {
      backgroundColor: "white",
      position: "absolute",
      top: 0,
      left: 0
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    logo: {
      fontFamily: "Satisfy, cursive"
    },
    logoText: {
      fontSize: "16px"
    }
  })
);

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar}>
        <Toolbar>
          <Box ml={5}>
            <Typography color="primary" className={classes.logo} variant="h4">
              LN
            </Typography>
          </Box>
          <Box ml={1}>
            <Typography
              color="primary"
              className={classes.logoText}
              variant="h4"
            >
              Life In <br /> Numbers
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
