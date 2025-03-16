import { View } from "@react-pdf/renderer";
import { ComponentProps } from "react";

export const Container = ({
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
    style={{ flexDirection: "row", padding: 2,...style }}
    break={breakPage}
    wrap={wrap}
  >
    {children}
  </View>
);
