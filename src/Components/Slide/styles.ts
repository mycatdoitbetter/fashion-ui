import styled from "styled-components/native";

export const Container = styled.View<{ width: number }>`
  width: ${(props) => props.width}px;
`;

export const TextContainer = styled.View`
  height: 100px;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: 75px;
  line-height: 80px;
  font-family: SFBold;
  color: white;
  text-align: center;
`;
