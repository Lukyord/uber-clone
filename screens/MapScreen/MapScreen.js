import { View, Text } from "react-native";
import React from "react";
import Map from "./components/Map";
import NavigateCard from "./components/NavigateCard";
import RideOptionsCard from "./components/RideOptionsCard";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function MapScreen() {
  const Stack = createNativeStackNavigator();

  return (
    <View>
      <View className="h-1/2">
        <Map />
      </View>
      <View className="h-1/2">
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
}
