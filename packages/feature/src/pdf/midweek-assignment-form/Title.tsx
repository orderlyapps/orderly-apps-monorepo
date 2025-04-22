import { View, Text } from "@react-pdf/renderer";

export const Title = () => {
  return (
    <View
      style={{
        textAlign: "center",
        fontFamily: "Helvetica-Bold",
        fontSize: 17,
        color: "grey",
        paddingBottom: 10,
      }}
    >
      <Text>Our Christian Life and Ministry Meeting Assignment</Text>
    </View>
  );
};
