import React from "react";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    marginTop: "3rem",
    marginBottom: "3rem",
  },
});

const Title = ({ stepNumber }: { stepNumber: number }) => {
  const classes = useStyles();
  return (
    <Typography
      component="h4"
      align="center"
      className={classes.title}
      variant="h4"
    >
      🦄 Step {stepNumber}
    </Typography>
  );
};

export default Title;
