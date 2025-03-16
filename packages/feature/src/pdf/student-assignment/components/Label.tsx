import { View, Text } from "@react-pdf/renderer";
import { ComponentProps } from "react";

export const Label = ({
  children,
  style,
  break: breakPage,
  wrap,
}: {
  children: React.ReactNode;
  style?: ComponentProps<typeof View>["style"];
  break?: boolean;
  wrap?: boolean;
}) => (
  <View
    style={{ flexDirection: "column", ...style }}
    break={breakPage}
    wrap={wrap}
  >
    <Text
      style={{
        fontFamily: "Helvetica-Bold",
        width: 75,
        textAlign: "right",
        paddingRight: 5,
      }}
    >
      {children}
    </Text>
  </View>
);
