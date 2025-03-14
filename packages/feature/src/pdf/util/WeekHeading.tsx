import { View, Text } from "@react-pdf/renderer";
import { JW_BLUE } from "@workspace/constants/colors";
import { formatWeekDate } from "@workspace/utilities/formatWeekDate";
import { ComponentProps } from "react";

export const WeekHeading = ({
  children,
  style,
}: {
  children: string;
  style?: ComponentProps<typeof View>["style"];
}) => {
  const weekString = formatWeekDate(children);
  return (
    <View
      style={{
        flexDirection: "column",
        color: JW_BLUE,
        fontFamily: "Helvetica-Bold",
        ...style,
      }}
    >
      <Text>{weekString}</Text>
    </View>
  );
};
