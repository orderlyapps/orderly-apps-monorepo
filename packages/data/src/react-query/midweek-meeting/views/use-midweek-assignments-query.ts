import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../../supabase/client.js";

export const useMidweekAssignmentsQuery = (
  schedule: {
    startDate: string;
    endDate: string;
  },
  options?: { enabled: boolean }
) =>
  useQuery({
    queryKey: ["midweek_assignments", schedule.startDate, schedule.endDate],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("_view_midweek_assignments")
        .select("*")
        .gte("week_id", schedule.startDate)
        .lte("week_id", schedule.endDate)
        .order("week_id", { ascending: true });
      console.log("🚀 ~ queryFn: ~ data:", data)

      if (error) {
        console.log("🚀 ~ queryFn: ~ error:", error)
        throw new Error(error.message);
      }

      return data;
    },
    enabled: !!schedule.startDate && !!schedule.endDate && options?.enabled,
  });
