import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { selectOrigin } from "../../../redux/slices/navSlice";

export default function Map() {
  const origin = useSelector(selectOrigin);

  return (
    <MapView
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      className="flex-1"
      mapType="mutedStandard"
    >
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Your Starting Point"
          description={origin.description}
          identifier="origin"
        />
      )}
    </MapView>
  );
}