import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <View className="flex-1 justify-center">
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </Provider>
  );
}
