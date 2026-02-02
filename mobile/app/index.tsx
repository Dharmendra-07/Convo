import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-black-500 text-4xl bg-orange-600">Hello World</Text>
    </View>
  );
}
