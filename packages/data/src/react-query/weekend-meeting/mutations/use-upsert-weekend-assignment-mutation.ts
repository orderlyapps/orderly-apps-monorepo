import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../../../supabase/client.js";
import { TablesUpdate } from "../../../supabase/supabase-types.js";

export const useUpsertWeekendAssignmentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newData: TablesUpdate<"weekend_assignments">) => {
      const { data, error } = await supabase
        .from("weekend_assignments")
        .upsert({
          ...newData,
          congregation_id: "a42cc43a-562f-4ed4-ac74-73dfdb42aaa5",
        } as any)
        .select();

      console.log("🚀 ~ mutationFn: ~ data:", data);
      console.log("🚀 ~ mutationFn: ~ error:", error);
      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
    onSuccess: (_data, variables, _context) => {
      console.log(
        "🚀 ~ useUpsertWeekendAssignmentMutation ~ variables:",
        variables
      );

      queryClient.invalidateQueries({
        queryKey: ["weekend-meeting-details"],
      });
    },
  });
};
