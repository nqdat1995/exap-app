import * as React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import Pets from "./components/Pets";
import Detail from "./components/Detail";
import Info from "./components/Info";
import { Icon } from "react-native-elements";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen
          name="Pets"
          component={Pets}
          options={{
            headerRight: () => (
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => alert("Searching...")}
              >
                {/* <Text style={{color: 'white', textAlign: 'center'}}>X</Text> */}
                {/* <Image
                  source={{
                    uri: "data:image/png;base64,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",
                  }}
                  style={{ height: 40, width: 40 }}
                /> */}
                <Icon
                  name="search"
                  type="evilicon"
                  size={40}
                  style={{marginLeft: 50}}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();
