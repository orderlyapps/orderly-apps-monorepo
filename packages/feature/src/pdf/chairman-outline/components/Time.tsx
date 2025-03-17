import { Text, TextProps } from "@react-pdf/renderer";
import { ReactNode } from "react";

export const Time = ({
  children,
  style,
}: {
  children: string | string[] | ReactNode;
  style?: TextProps["style"];
}) => (
  <Text style={{ width: 50, textAlign: "right", ...style }}>{children}</Text>
);
