import React from "react";
import TextField from "@material-ui/core/TextField";
import { useFormStyles } from "../styles/formStyles";
import { FieldAttributes, useField } from "formik";

type IProps = {
  placeholder?: string;
  label: string;
  variant?: "outlined" | "filled" | "standard" | undefined;
  type?: string;
} & FieldAttributes<{}>;

const Input: React.FC<IProps> = ({
  placeholder,
  label,
  variant = "outlined",
  type = "text",
  ...props
}) => {
  const classes = useFormStyles();
  const [field, meta] = useField<{}>(props);

  const { error, touched } = meta;

  const errorText = touched && error ? error : "";

  return (
    <TextField
      {...field}
      placeholder={placeholder || label}
      label={label}
      variant={variant}
      margin="normal"
      type={type}
      className={classes.formField}
      error={!!errorText}
      helperText={errorText}
    />
  );
};

export default Input;
