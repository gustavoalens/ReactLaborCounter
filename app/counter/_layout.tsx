import { RoundedButton } from "@/components/buttons/RoundedButton";
import CardBase from "@/components/cards/CardBase";
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
      {/* <CardBase onPress={ () => console.log("card press") }> */}
      <CardBase contentStyle={ { flexDirection: 'row', justifyContent: 'flex-start', gap: 10 } }>
        <Text>Teste Mudança</Text>
        <Text>Teste Mudança</Text>
        <Text>Teste Mudança</Text>
      </CardBase>
      <RoundedButton
      image={require("../../assets/images/react-logo.png")}
      size={50}
      onPress={ () => console.log("Pressed")}
      />
    </View>
  );
}