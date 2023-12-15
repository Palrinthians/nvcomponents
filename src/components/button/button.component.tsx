import React from "react";
import { handleClassString } from "../../utils/handleClassString.util";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  hasOutline?: boolean;
  hasShadow?: boolean;
  label: string;
  custom?: string;
}

export const Button = ({
  variant = "primary",
  hasOutline = false,
  hasShadow = false,
  label,
  custom = '',
  ...props
}: ButtonProps) => {

  const shadow = handleClassString(hasShadow, 'btn-shadow')

  const variantType = {
    primary: 'btn-primary',
    secondary: 'btn-secondary'
  }

  const outline = {
    primary: handleClassString(hasOutline, `btn-primary__outline`),
    secondary: handleClassString(hasOutline, `btn-secondary__outline`)
  }

  

  const classes = `btn ${variantType[variant]} ${shadow} ${outline[variant]}`


  return (
    <button type="button" className={classes} {...props}>
      {label}
    </button>
  );
};
