import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../../supabase/client.js";

export const useMidweekMeetingScheduleDetailsQuery = (week_id: string) =>
  useQuery({
    queryKey: ["_view_midweek_meeting_schedule"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("_view_midweek_meeting_schedule")
        .select("*")
        .eq("congregation_id", "a42cc43a-562f-4ed4-ac74-73dfdb42aaa5")
        .eq("week_id", week_id)
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    enabled: !!week_id,
  });
