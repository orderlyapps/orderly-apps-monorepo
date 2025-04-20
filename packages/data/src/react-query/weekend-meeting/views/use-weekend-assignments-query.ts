import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../../supabase/client.js";
import { useStore } from "../../../zustand/stores/use-store.js";

export const useWeekendAssignmentsQuery = (
  schedule: {
    startDate: string;
    endDate: string;
  },
  options?: { enabled: boolean }
) => {
  return useQuery({
    queryKey: ["weekend-assignments", schedule.startDate, schedule.endDate],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("_view_weekend_assignments")
        .select("*")
        .eq("congregation_id", useStore.getState().congregation.id)
        .gte("week_id", schedule.startDate)
        .lte("week_id", schedule.endDate)
        .order("week_id", { ascending: true });

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    enabled: !!schedule.startDate && !!schedule.endDate && options?.enabled,
  });
};
