import React from "react";

import { Container, Label } from "./styles";

interface IButton {
  variant: "default" | "primary";
  label: string;
  onPress: () => void;
}

const Button = ({ variant, label, onPress }: IButton) => {
  const backgroundColor =
    variant === "primary" ? "#2cb9b0" : "rgba(12, 13, 52, 0.05)";
  const color = variant === "primary" ? "white" : "#0c0d34";

  return (
    <Container style={{ backgroundColor }} {...{ onPress }}>
      <Label style={{ color }}>{label}</Label>
    </Container>
  );
};

Button.defaultProps = { variant: "default" };

export default Button;
