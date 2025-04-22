import { View, Text } from "@react-pdf/renderer";

export type ContentProps = {
  label: string;
  info: string | null;
};

export const Content = ({ label, info }: ContentProps) => {
  return (
    <View style={{ flexDirection: "row", paddingTop: 10 }}>
      <View
        style={{
          width: 90,
          fontFamily: "Helvetica-Bold",
          textAlign: "right",
          paddingRight: 5,
        }}
      >
        <Text>{label}:</Text>
      </View>
      <View style={{ width: 200, paddingRight: 5 }}>
        <Text>{info}</Text>
      </View>
    </View>
  );
};
