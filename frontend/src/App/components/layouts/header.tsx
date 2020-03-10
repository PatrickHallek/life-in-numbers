import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { IContent } from "../../models/contentInterface";
import { useSelector, shallowEqual } from "react-redux";

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
  })
);

const Header = () => {
  const classes = useStyles();
  const content: IContent = useSelector((state: any) => state.content, shallowEqual)
  const { primary } = content.colorTheme

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar}>
        <Toolbar>
          <Box ml={5} color={primary}>
            <Typography className={classes.logo} variant="h4">
              LN
          </Typography>
          </Box>
          <Box flexGrow="1" ml={1} color={primary}>
            <Typography
              className={classes.logoText}
              variant="h4">
              Life In <br /> Numbers
          </Typography>
          </Box>
          <Box mr={5}>
            <Button to={`/calories`} component={Link}>
              <Box color={primary}>Calories</Box>
            </Button>
            <Button to={`/smoking`} component={Link}>
              <Box color={primary}>Smoking</Box>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
