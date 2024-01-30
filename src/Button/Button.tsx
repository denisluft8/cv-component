import React from "react";

import { StyledButton } from "./Button.style";
interface ButtonProps {
  title: String;
}
export const Button = ({ title }: ButtonProps) => {
  return <StyledButton>{title}</StyledButton>;
};
