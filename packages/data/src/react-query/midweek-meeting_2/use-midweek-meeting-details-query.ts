import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../supabase/client.js";
import { useStore } from "../../zustand/stores/use-store.js";

export const useMidweekMeetingDetailsQuery = ({
  week_id,
  endDate,
  startDate,
}: {
  week_id?: string;
  endDate?: string;
  startDate?: string;
}) =>
  useQuery({
    queryKey: ["midweek-meeting-details", week_id, endDate],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("_view_midweek_meeting_details")
        .select("*")
        .eq("congregation_id", useStore.getState().congregation.id)
        .gte("week_id", startDate || week_id)
        .lte("week_id", endDate || week_id)
        .order("week_id", { ascending: true });

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
  });
