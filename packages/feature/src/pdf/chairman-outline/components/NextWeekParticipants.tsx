import { Tables } from "@amodeo/data/supabase/supabase-types";
import { View, Text, StyleSheet, ViewProps } from "@react-pdf/renderer";
import { SchoolParts } from "../school-parts/SchoolParts.js";

export function NextWeekParticipants({
  nextWeekDetails: details,
  style,
}: {
  nextWeekDetails: Tables<"_view_midweek_meeting_schedule">;
  style?: ViewProps["style"];
}) {
  return (
    <View style={{ paddingBottom: 40, ...style }}>
      <Text style={{ fontFamily: "Helvetica-Bold", paddingLeft: 13 }}>
        Next Weeks Assignments
      </Text>
      <SchoolParts details={details} />
    </View>
  );
}
