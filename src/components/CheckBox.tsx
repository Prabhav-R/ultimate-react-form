import { Checkbox, FormControlLabel } from "@material-ui/core";
import React from "react";
import { useFormStyles } from "../styles/formStyles";
import { FieldAttributes, useField } from "formik";

type IProps = {
  label: string;
  labelPlacement?: "bottom" | "top" | "end" | "start" | undefined;
} & FieldAttributes<{}>;

const CheckBox: React.FC<IProps> = ({
  label,
  labelPlacement = "end",
  ...props
}) => {
  const classes = useFormStyles();
  const [field] = useField<{}>(props);

  return (
    <FormControlLabel
      {...field}
      label={label}
      labelPlacement={labelPlacement}
      className={classes.formField}
      control={<Checkbox checked={!!field.value} color="primary" />}
    />
  );
};

export default CheckBox;
