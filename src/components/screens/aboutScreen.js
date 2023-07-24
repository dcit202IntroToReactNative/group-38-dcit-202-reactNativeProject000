import React from "react";
import { View, Text, Linking } from "react-native";
import { Card, Button, Icon } from "react-native-elements";

const AboutScreen = ({ navigation }) => {
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
          This is an ExpicMinder Expense tracker app that help you to keep track of 
          your epenses 
        </Text>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 10,
            marginTop: 8,
            width: 220,
            alignSelf: "center",
            backgroundColor: "#2073F8",
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

export default AboutScreen;
