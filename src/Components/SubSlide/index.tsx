import React from "react";

import Button from "../Button";

import { Container, Title, SubTitle } from "./styles";

interface ISubSlide {
  title: string;
  subtitle: string;
  last?: boolean;
  onPress: () => void;
}

const SubSlide = ({ title, subtitle, last, onPress }: ISubSlide) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <Button
        label={last ? "Let's get started" : "Next"}
        variant={last ? "primary" : "default"}
        {...{ onPress }}
      />
    </Container>
  );
};

export default SubSlide;
