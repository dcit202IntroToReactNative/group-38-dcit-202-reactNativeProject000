import React from "react";
import { View, Text, Linking } from "react-native";
import { Card, Button, Icon } from "react-native-elements";

const AboutScreen = ({ navigation }) => {
  // This function returns a React component that is the root of the About screen.
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        top: 50,
      }}
    >
      <Card containerStyle={{ borderRadius: 6 }}>
        <Card.Title>Welcome to Epicminders Tracker App</Card.Title>
        <Card.Divider />

        <Text style={{ marginBottom: 10, width: 280, alignSelf: "center" }}>
          EpicMinder, an Expense tracking application would help you to keep track of 
          your expenses 
        </Text>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 4,
            marginTop: 8,
            width: 220,
            alignSelf: "center",
            backgroundColor: "#2083F8",
          }}
          style={{ paddingRight: 25 }}
          title="Thank You"
          onPress={() => {
            
          }}
        />
      </Card>
    </View>
  );
};
// This export keyword makes the AboutScreen component available to other components.
export default AboutScreen;
