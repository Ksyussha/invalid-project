import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./components/Main";
import Museums from "./components/MuseumList";
import Feedback from "./components/Feedback";

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="MuseumScreen" component={Museums} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: "Hello! my name is Museum Guide" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
// import User from "./components/user";
