import React, { useState } from "react";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { InsertDriveFile } from "@material-ui/icons";
import { useDataStore } from "../store";
import { useFormStyles } from "../styles/formStyles";
import Confetti from "react-confetti";
import SubmitDialog from "./SubmitDialog";

const useStyles = makeStyles({
  root: {
    marginBottom: "30px",
  },
  table: {
    marginBottom: "30px",
  },
  btn: {
    marginTop: "1rem",
    width: "20rem",
  },
});

const Result = ({
  setStepNumber,
}: {
  setStepNumber: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const styles = useStyles();
  const classes = useFormStyles();

  const [data, resetData] = useDataStore((state) => [
    state.data,
    state.resetData,
  ]);
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const entries = Object.entries(data).filter((entry) => entry[0] !== "files");
  const { files } = data;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpen(true);
    setSubmitted(true);
  };

  const reset = () => {
    resetData();
    setStepNumber(1);
  };

  return (
    <>
      {submitted && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}

      <SubmitDialog open={open} reset={reset} handleClose={handleClose} />
      <form onSubmit={onSubmit} className={classes.form}>
        <TableContainer className={styles.root} component={Paper}>
          <Table className={styles.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Field</TableCell>
                <TableCell align="right">Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {entries.map((entry) => (
                <TableRow key={entry[0]}>
                  <TableCell component="th" scope="row">
                    {entry[0]}
                  </TableCell>
                  <TableCell align="right">{entry[1].toString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {files && files.length > 0 && (
          <>
            <Typography component="h2" variant="h5">
              📦 Files
            </Typography>
            <List>
              {files.map((f: File, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <InsertDriveFile />
                  </ListItemIcon>
                  <ListItemText primary={f.name} secondary={f.size} />
                </ListItem>
              ))}
            </List>
          </>
        )}
        <Button
          onClick={(e) => setStepNumber(1)}
          className={styles.btn}
          variant="outlined"
          color="primary"
        >
          Go To Step 1
        </Button>
        <Button
          onClick={(e) => {
            resetData();
            setStepNumber(1);
          }}
          className={styles.btn}
          variant="outlined"
          color="primary"
        >
          RESET
        </Button>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={styles.btn}
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default Result;
