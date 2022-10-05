import React, { Component } from "react";
import { Text, Button as CustomButton, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

export default class Main extends Component {
  goToMuseums = () => {
    this.props.navigation.navigate({
      name: "MuseumScreen"
    });
  };

  render() {
    return (
      <View>
        <View>
          <Text> Let's start!</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <CustomButton
            title="CLICK ME"
            containerStyles={{
              backgroundcolor: "#1E1815",
              display: "flex",
              justifyContent: "center",
              width: 100
            }}
            onPress={this.goToMuseums}
          />
        </View>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   textStyle: {
//     color: "#1D1A31",
//     fontSize: 30,
//     textAlign: "center",
//     marginBottom: 20
//   },
//   inputStyle: {
//     textAlign: "center",
//     marginBottom: 5
//   },
//   ImageStyles: {
//     width: 150,
//     height: 150,
//     marginBottom: 20
//   }
// });
