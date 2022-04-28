import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "../ApiFilmes/src/routes/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Home />
    </NavigationContainer>
  );
}
