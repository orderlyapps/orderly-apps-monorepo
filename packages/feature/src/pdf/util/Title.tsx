import { View, Text } from "@react-pdf/renderer";
import { JW_BLUE } from "@workspace/constants/colors";
import { ComponentProps } from "react";

export const Title = ({
  children,
  style,
}: {
  children: string | string[];
  style?: ComponentProps<typeof View>["style"];
}) => (
  <View
    style={{
      flexDirection: "column",
      color: JW_BLUE,
      fontFamily: "Helvetica-Bold",
      fontSize: 18,
      ...style,
    }}
  >
    <Text>{children}</Text>
  </View>
);
