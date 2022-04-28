import styled from "styled-components";
import { View, Text, TouchableOpacity } from "react-native";

export const Container = styled(View)`
  justify-content: center;
  align-items: center;
  background-color: black;
`;

export const NomeView = styled(View)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const NomeText = styled(Text)`
  font-size: 20px;
  color: white;
  text-shadow: 2px 2px 1px red;
`;

export const Foto = styled(View)`
  height: 200px;
  width: 200px;
`;

export const BtnView = styled(View)`
  margin-top: 10px;
  flex-direction: row;
`;

export const Btn = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 30px;
  border-width: 1px;
  border-radius: 8px;
  background-color: red;
  border-color: white;
`;
