import React from "react";
import { useFormStyles } from "../styles/formStyles";
import Dropzone from "react-dropzone";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CloudUpload, InsertDriveFile } from "@material-ui/icons";
import { Form, Formik } from "formik";
import { useDataStore } from "../store";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#eee",
    textAlign: "center",
    cursor: "pointer",
    color: "#333",
    padding: "10px",
    marginTop: "20px",
  },
  icon: {
    marginTop: "16px",
    color: "#888888",
    fontSize: "42px",
  },
});

const Form3 = ({
  setStepNumber,
}: {
  setStepNumber: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const classes = useFormStyles();
  const styles = useStyles();

  const [data, setData] = useDataStore((state) => [state.data, state.setData]);

  const { files } = data;

  return (
    <Formik
      initialValues={{
        files,
      }}
      onSubmit={(data) => {
        setData(data);
        setStepNumber((prev) => prev + 1);
      }}
    >
      {({ setFieldValue, values }) => (
        <Form className={classes.form}>
          <Dropzone
            onDrop={(acceptedFiles) => setFieldValue("files", acceptedFiles)}
          >
            {({ getRootProps, getInputProps }) => (
              <Paper
                variant="outlined"
                className={styles.root}
                {...getRootProps()}
              >
                <CloudUpload className={styles.icon} />
                <input {...getInputProps()} />
                <p>Drag 'n' drop files here, or click to select files</p>
              </Paper>
            )}
          </Dropzone>
          <List>
            {values.files.map((f: File, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <InsertDriveFile />
                </ListItemIcon>
                <ListItemText primary={f.name} secondary={f.size} />
              </ListItem>
            ))}
          </List>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.formField}
          >
            Next
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Form3;
