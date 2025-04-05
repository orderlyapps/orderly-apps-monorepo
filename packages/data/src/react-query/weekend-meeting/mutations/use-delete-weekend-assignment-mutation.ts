import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../../../supabase/client.js";
import { Tables } from "../../../supabase/supabase-types.js";

export const useDeleteWeekendAssignmentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newData: Tables<"weekend_assignments">) => {
      const { data, error } = await supabase
        .from("weekend_assignments")
        .delete()
        .eq("week_id", newData.week_id)
        .eq("congregation_id", "a42cc43a-562f-4ed4-ac74-73dfdb42aaa5")
        .eq("assignment", newData.assignment);

      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
    onSuccess: (_data, variables, _context) => {
      queryClient.invalidateQueries({
        queryKey: ["weekend-meeting", variables.week_id],
      });
    },
  });
};
