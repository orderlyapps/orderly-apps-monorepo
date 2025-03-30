import { Tables } from "@amodeo/data/supabase/supabase-types";
import { Text } from "@react-pdf/renderer";

type TitleProps = {
  midweek_meeting_data?: Tables<"midweek_meeting_data">[];
};

export const Title = ({ midweek_meeting_data }: TitleProps) => {
  if (!midweek_meeting_data || midweek_meeting_data.length === 0) {
    return <Text>Midweek Meeting</Text>;
  }

  // Get the first and last week dates
  const firstWeekDate = midweek_meeting_data[0]?.mwb_week_date || "";
  const lastWeekDate =
    midweek_meeting_data[midweek_meeting_data.length - 1]?.mwb_week_date || "";

  const firstWeekDateObj = new Date(firstWeekDate);
  const lastWeekDateObj = new Date(lastWeekDate);
  const firstWeekMonth = firstWeekDateObj.toLocaleString("default", {
    month: "long",
  });
  const lastWeekMonth = lastWeekDateObj.toLocaleString("default", {
    month: "long",
  });
  return (
    <Text
      style={{
        fontSize: 20,
        padding: 0,
        marginBottom: -10,
        fontFamily: "Helvetica-Bold",
      }}
    >{`Midweek Meeting Schedule for ${firstWeekMonth} - ${lastWeekMonth}`}</Text>
  );
};
