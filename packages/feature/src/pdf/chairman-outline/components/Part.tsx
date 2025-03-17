import { Text, TextProps } from "@react-pdf/renderer";
import { ReactNode } from "react";

export const Part = ({
  children,
  style,
}: {
  children: string | string[] | ReactNode;
  style?: TextProps["style"];
}) => <Text style={{ width: 400, paddingRight: 15, ...style }}>{children}</Text>;
