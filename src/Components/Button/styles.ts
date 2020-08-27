import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  border-radius: 25px;
  width: 245px;
  height: 50px;

  align-items: center;
  justify-content: center;
`;
export const Label = styled.Text`
  font-size: 15px;
  font-family: SFRegular;
`;
