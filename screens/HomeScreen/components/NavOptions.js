import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

export default function NavOptions() {
  const navigation = useNavigation();

  const data = [
    {
      id: "123",
      title: "Get a ride",
      image: "https://links.papareact.com/3pn",
      screen: "MapScreen",
    },
    {
      id: "456",
      title: "Order food",
      image: "https://links.papareact.com/28w",
      screen: "EatScreen",
    },
  ];

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          className="pr-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40"
        >
          <View>
            <Image
              source={{
                uri: item.image,
              }}
              style={{
                width: 120,
                height: 120,
                resizeMode: "contain",
              }}
            />
            <Text className="mt-2 text-lg font-semibold">{item.title}</Text>
            <View className="p-2 bg-black w-10 rounded-full mt-4">
              <Icon type="antdesign" name="arrowright" color="white" />
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
