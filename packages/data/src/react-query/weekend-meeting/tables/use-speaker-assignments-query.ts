import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../../supabase/client.js";
import { useStore } from "../../../zustand/stores/use-store.js";

export const useSpeakerAssignmentsQuery = (
  schedule: {
    startDate: string;
    endDate: string;
  },
  options?: { enabled: boolean }
) => {
  return useQuery({
    queryKey: ["speaker-assignments", schedule.startDate, schedule.endDate],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("speaker_assignments")
        .select("*")
        .eq("congregation_id", useStore.getState().congregation_id)
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
