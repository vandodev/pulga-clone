import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

const App: React.FC = () => {
  return (
    <View style={{ backgroundColor: "red", flex: 1 }}>
      <StatusBar style="light" />
    </View>
  );
};

export default App;
