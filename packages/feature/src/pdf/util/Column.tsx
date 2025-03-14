import { View } from "@react-pdf/renderer";
import { ComponentProps } from "react";

export const Column = ({
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
    {children}
  </View>
);
