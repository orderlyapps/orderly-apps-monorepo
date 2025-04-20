import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../../supabase/client.js";
import { useStore } from "../../../zustand/stores/use-store.js";

export const useWeekendAssignmentDetailsQuery = (
  week_id: string,
  options?: { enabled: boolean }
) => {
  return useQuery({
    queryKey: ["weekend-assignments", week_id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("_view_weekend_assignments")
        .select("*")
        .eq("congregation_id", useStore.getState().congregation.id)
        .eq("week_id", week_id)
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    enabled: !!week_id && options?.enabled,
  });
};
