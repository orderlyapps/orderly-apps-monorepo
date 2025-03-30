import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../../supabase/client.js";
import { useStore } from "../../../zustand/stores/use-store.js";

export const useMidweekMeetingScheduleDetailsQuery_xxx = (week_id: string) =>
  useQuery({
    queryKey: ["_view_midweek_meeting_schedule", week_id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("_view_midweek_meeting_schedule")
        .select("*")
        .eq("congregation_id", useStore.getState().congregation_id)
        .eq("week_id", week_id)
        .single();

        if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    enabled: !!week_id,
  });



  