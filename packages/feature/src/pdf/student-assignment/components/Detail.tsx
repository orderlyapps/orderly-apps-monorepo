import { View, Text } from "@react-pdf/renderer";
import { ComponentProps } from "react";

export const Detail = ({
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
    style={{ flexDirection: "column", width: 200, ...style }}
    break={breakPage}
    wrap={wrap}
  >
    <Text>{children}</Text>
  </View>
);
