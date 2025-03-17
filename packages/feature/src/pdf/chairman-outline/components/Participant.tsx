import { Text, TextProps } from "@react-pdf/renderer";

export const Participant = ({
  children,
  style,
}: {
  children: string;
  style?: TextProps["style"];
}) => <Text style={{ flexGrow: 1, ...style }}>{children}</Text>;
