import { Text, View } from "@react-pdf/renderer";

type AssignmentProps = {
  color: string;
  firstText?: string;
  secondText?: string;
  thirdText?: string;
  reader?: boolean;
  assistants?: boolean;
  counselor?: boolean;
  secondSchool?: boolean;
  schoolLabel?: boolean;
  time?: string;
};

const COLUMN_WIDTH = 150;

export const Assignment = ({
  color,
  firstText = "",
  secondText = "",
  thirdText = "TBC",
  reader,
  assistants,
  counselor,
  secondSchool,
  schoolLabel,
  time,
}: AssignmentProps): any => {
  if (!firstText) {
    return null;
  }
  return (
    <View
      style={{
        flexDirection: "row",
        paddingLeft: secondSchool ? 10 : 0,
      }}
    >
      {/* First element - colored text */}
      <Text
        style={{
          color,
          flex: 1,
          fontFamily: schoolLabel ? "Helvetica-Bold" : undefined,
          fontSize: schoolLabel ? 10 : undefined,
          paddingTop: schoolLabel ? 2.6 : undefined,
          textOverflow: "ellipsis",
        }}
      >
        {firstText}
        {time && ` (${time} min)`}
      </Text>

      {/* Second element - light grey text, right aligned */}
      <View
        style={{
          color: "grey",
          flexDirection: "row-reverse",
          width: secondText || assistants ? COLUMN_WIDTH : 50,
        }}
      >
        {assistants && (
          <Text
            style={{
              fontFamily: "Helvetica-Bold",
              fontSize: 10,
              paddingTop: 2.6,
            }}
          >
            Assistants
          </Text>
        )}
        <Text>{secondText}</Text>
        {reader && (
          <Text
            style={{
              fontFamily: "Helvetica-Bold",
              fontSize: 10,
              paddingTop: 1.6,
            }}
          >
            Reader:{" "}
          </Text>
        )}
      </View>

      {/* Third element - colored text, right aligned */}
      <View style={{ color, textAlign: "right", width: COLUMN_WIDTH }}>
        <View style={{ flexDirection: "row-reverse" }}>
          <Text> {thirdText || ""}</Text>
          {counselor && (
            <Text
              style={{
                fontFamily: "Helvetica-Bold",
                fontSize: 10,
                color: "grey",
                paddingTop: 1.6,
              }}
            >
              Counselor:{" "}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};
