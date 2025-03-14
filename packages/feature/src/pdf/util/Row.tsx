import { View } from "@react-pdf/renderer";
import { ComponentProps } from "react";

export const Row = ({
  children,
  style,
  ...rest
}: {
  children: React.ReactNode;
  style?: ComponentProps<typeof View>["style"];
}) => (
  <View style={{ flexDirection: "row", ...style }} {...rest}>
    {children}
  </View>
);
