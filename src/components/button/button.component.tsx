import React from "react";

import {
  baseClasses,
  variantClasses,
  outlinedClasses,
  shadowClasses,
  hoverClasses,
  outlinedHoverClasses,
} from "./button.classes";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  outlined?: boolean;
  shadow?: boolean;
  hover?: boolean;
  label: string;
  custom?: string;
}

export const Button = ({
  variant = "primary",
  outlined,
  shadow,
  hover,
  label,
  custom,
  ...props
}: ButtonProps) => {
  const isOutlinedHover = outlined && hover;

  // Remove text-white if outlined is true
  const editBaseClasses = outlined
    ? baseClasses.replace("text-white", "")
    : baseClasses;

  const classes = [
    editBaseClasses,
    variantClasses[variant],
    outlined && outlinedClasses[variant],
    shadow && shadowClasses,
    hover && hoverClasses[variant],
    isOutlinedHover && outlinedHoverClasses[variant],
  ].join(" ").replace("false", "");

  const customClasses = [
    classes,
    custom,
  ].join(" ")

  return (
    <button type="button" className={custom ? customClasses : classes} {...props}>
      {label}
    </button>
  );
};
