import { View, ViewProps } from "@react-pdf/renderer";
import { ReactNode } from "react";

export function Section({
  children,
  style,
}: {
  children: ReactNode;
  style?: ViewProps["style"];
}) {
  return <View style={{ paddingBottom: 25,...style }}>{children}</View>;
}
