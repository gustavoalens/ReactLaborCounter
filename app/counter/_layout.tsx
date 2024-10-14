import { RoundedButton } from "@/components/buttons/RoundedButton";
import { Text, View } from "react-native";

export default function Counter() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Counter Screen</Text>
      <RoundedButton
      path="../../assets/images/react-logo.png"
      size={50}
      onPress={ () => console.log("Pressed")}
      />
    </View>
  );
}