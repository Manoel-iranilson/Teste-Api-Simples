import { View, Text } from "react-native";
import styled from "styled-components";

export const TitleView = styled(View)`
  height: 75px;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

export const TitleText = styled(Text)`
  font-size: 50px;
  color: white;
  font-style: italic;
  text-shadow: 4px 4px 1px black;
`;
