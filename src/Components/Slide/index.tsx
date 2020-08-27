import React from "react";

import { Container, TextContainer, Title } from "./styles";

interface ISlide {
  label: string;
  width: number;
  height: number;
  right?: boolean;
}

const Slide = ({ label, right, width, height }: ISlide) => {
  return (
    <Container width={width}>
      <TextContainer
        style={[
          {
            transform: [
              { translateY: (height * 0.61) / 2 },
              { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
              { rotate: right ? "-90deg" : "90deg" },
            ],
          },
        ]}
      >
        <Title>{label}</Title>
      </TextContainer>
    </Container>
  );
};

export default Slide;
