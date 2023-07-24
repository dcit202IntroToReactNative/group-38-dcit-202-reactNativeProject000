import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Platform, SafeAreaView } from "react-native";
import { NavigationBar } from "./src";
import { GlobalProvider } from "./src/context/GlobalState";
// SafeAreaView is used aparent view that wraps around other views. it is used to to apply a flexbox layout style to the view.
const App = () => {
// Returns a React component that is the root of the application.
  return (
// A container that ensures the content is displayed within specified safe boundaries on the device.
    <SafeAreaView style={styles.container}>
      <GlobalProvider>
// Renders the navigation bar.
        <NavigationBar />
      </GlobalProvider>
// Renders the status bar.
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});

export default App;
