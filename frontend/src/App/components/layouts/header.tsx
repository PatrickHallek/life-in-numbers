import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    bar: {
      backgroundColor: "white",
      position: "fixed",
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
    },
    link: {
      marginRight: "10px",
      color: "primary",
      textDecoration: "none"
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
          <Box flexGrow="1" ml={1}>
            <Typography
              color="primary"
              className={classes.logoText}
              variant="h4">
              Life In <br /> Numbers
          </Typography>
          </Box>
          <Box mr={5}>
            <Button color="primary" className={classes.link} to={`/calories`} component={Link}>Calories</Button>
            <Button color="primary" className={classes.link} to={`/smoking`} component={Link}>Smoking</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
