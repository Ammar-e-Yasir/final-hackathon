import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RouteNavigation from "./src/config/navigation";
import ContextProvider from "./src/context/context";

export default function App() {
  return (
    <ContextProvider>
      <RouteNavigation />
    </ContextProvider>
  );
}

const styles = StyleSheet.create({});
