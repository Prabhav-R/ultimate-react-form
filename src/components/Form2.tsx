import React from "react";
import Button from "@material-ui/core/Button";
import { useFormStyles } from "../styles/formStyles";
import PhoneInput from "./PhoneInput";
import { Form, Formik } from "formik";
import Input from "./Input";
import CheckBox from "./CheckBox";
import * as yup from "yup";
import { useDataStore } from "../store";

const Form2 = ({
  setStepNumber,
}: {
  setStepNumber: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const classes = useFormStyles();

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid E-mail")
      .required("E-mail field required"),
    hasPhone: yup.bool(),
    phone: yup.string().when("hasPhone", {
      is: true,
      then: yup
        .string()
        .matches(/^[7-9][0-9]{9}$/, "Please enter a valid Indian phone number")
        .required("Phone number required"),
    }),
  });

  const [data, setData] = useDataStore((state) => [state.data, state.setData]);

  const { email, hasPhone, phone } = data;

  return (
    <Formik
      initialValues={{
        email,
        hasPhone,
        phone,
      }}
      onSubmit={(data) => {
        setStepNumber((prev) => prev + 1);
        const { email, hasPhone, phone } = data;
        if (hasPhone) setData({ email, hasPhone, phone });
        else setData({ email, hasPhone, phone: "" });
      }}
      validationSchema={validationSchema}
    >
      {({ values }) => (
        <Form className={classes.form}>
          <Input type="email" label="E-mail" name="email" />
          <CheckBox name="hasPhone" label="Do you have a phone" />
          {values.hasPhone && <PhoneInput name="phone" />}

          <Button
            variant="contained"
            color="primary"
            className={classes.formField}
            type="submit"
          >
            Next
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Form2;
