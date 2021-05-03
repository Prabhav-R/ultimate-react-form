import React from "react";
import Button from "@material-ui/core/Button";
import { useFormStyles } from "../styles/formStyles";
import { Form, Formik } from "formik";
import Input from "./Input";
import * as yup from "yup";
import { useDataStore } from "../store";

const Form1 = ({
  setStepNumber,
}: {
  setStepNumber: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const classes = useFormStyles();

  const validationSchema = yup.object().shape({
    firstName: yup
      .string()
      .required("First Name field required")
      .matches(/^([^0-9]*)$/, "First name should not contain numbers"),
    lastName: yup
      .string()
      .required("Last Name field required")
      .matches(/^([^0-9]*)$/, "Last name should not contain numbers"),
  });

  const [data, setData] = useDataStore((state) => [state.data, state.setData]);

  const { firstName, lastName } = data;

  return (
    <Formik
      initialValues={{
        firstName: firstName,
        lastName: lastName,
      }}
      onSubmit={(data) => {
        setStepNumber((prev) => prev + 1);
        setData(data);
      }}
      validationSchema={validationSchema}
    >
      {() => (
        <Form className={classes.form}>
          <Input label="First Name" name="firstName" />
          <Input label="Last Name" name="lastName" />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.formField}
          >
            Next
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Form1;
