import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../../supabase/client.js";

export const useMidweekMeetingDataQuery = (
  schedule: {
    startDate: string;
    endDate: string;
  },
  options?: { enabled: boolean }
) =>
  useQuery({
    queryKey: ["midweek_meeting_data", schedule.startDate, schedule.endDate],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("midweek_meeting_data")
        .select("*")
        .gte("mwb_week_date", schedule.startDate)
        .lte("mwb_week_date", schedule.endDate)
        .order("mwb_week_date", { ascending: true });

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    enabled: !!schedule.startDate && !!schedule.endDate && options?.enabled,
  });
