import styled from "styled-components/native";
import Animated from "react-native-reanimated";

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const Slider = styled(Animated.ScrollView)<{ height: number }>`
  height: ${({ height }) => 0.4 * height}px;
  border-bottom-right-radius: 75px;
`;

export const Footer = styled.View`
  flex: 1;
`;
export const Background = styled(Animated.ScrollView)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const Foot = styled(Animated.View)`
  flex: 1;
  flex-direction: row;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: white;
`;
