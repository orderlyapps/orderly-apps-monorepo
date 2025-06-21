import { Tables } from "@amodeo/data/supabase/supabase-types";
import { View, Text, ViewProps } from "@react-pdf/renderer";
import { SchoolParts } from "./school-parts/SchoolParts.js";
import { Row } from "../../../util/Row.js";
import { Column } from "../../../util/Column.js";

export function NextWeekParticipants({
  nextWeekDetails: details,
  style,
}: {
  nextWeekDetails: Tables<"_view_midweek_meeting_details">;
  style?: ViewProps["style"];
}) {
  return (
    <View style={{ paddingBottom: 40, ...style }}>
      <Row style={{ gap: 5 }}>
        <Text
          style={{
            fontFamily: "Helvetica-Bold",
            paddingLeft: 13,
            width: 135,
            paddingBottom: 3,
          }}
        >
          Next Weeks Assignments
        </Text>

        {details.participants.counselor_2 as any && (
          <View style={{ paddingTop: 3 }}>
            <Row>
              <Text
                style={{
                  paddingLeft: 13,
                  color: "grey",
                  width: 142,
                  fontSize: 8,
                  fontFamily: "Helvetica-Bold",
                }}
              >
                Main Hall
              </Text>
              <Text
                style={{
                  paddingLeft: 13,
                  color: "grey",
                  fontSize: 8,
                  fontFamily: "Helvetica-Bold",
                }}
              >
                Second School
              </Text>
            </Row>
          </View>
        )}
      </Row>
      <Row>
        <Column>
          <SchoolParts details={details} school={1} />
        </Column>
        <Column>
          <SchoolParts details={details} school={2} />
        </Column>
      </Row>
    </View>
  );
}
