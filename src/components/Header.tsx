import React from "react";

import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    margin: theme.spacing(3, 0, 2),
    fontFamily: "Permanent Marker",
    fontSize: "40px",
    color: "deeppink",
    textShadow: "1px 1px darkmagenta",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Typography
      variant="h3"
      className={classes.header}
      align="center"
      gutterBottom
    >
      ULTIMATE FORM CHALLENGE
    </Typography>
  );
};

export default Header;
