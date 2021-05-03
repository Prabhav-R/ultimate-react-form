import React from "react";
import { TextField } from "@material-ui/core";
import IMask from "imask";

import { useFormStyles } from "../styles/formStyles";
import { FieldAttributes, useField } from "formik";

const PhoneInput: React.FC<FieldAttributes<{}>> = ({ ...props }) => {
  const classes = useFormStyles();
  const [field, meta] = useField<{}>(props);
  const { error, touched } = meta;

  const errorText = touched && error ? error : "";
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    field.onChange(e);
    var maskOptions = {
      mask: "0000000000",
    };

    e.target.value = IMask(e.target, maskOptions).value;
  };
  return (
    <TextField
      {...field}
      onChange={onChange}
      placeholder="Phone Number"
      label="Phone Number"
      type="tel"
      variant="outlined"
      margin="normal"
      className={classes.formField}
      error={!!errorText}
      helperText={errorText}
    />
  );
};

export default PhoneInput;
