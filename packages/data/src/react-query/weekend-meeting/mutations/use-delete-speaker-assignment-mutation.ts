import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../../../supabase/client.js";
import { TablesUpdate } from "../../../supabase/supabase-types.js";

export const useDeleteSpeakerAssignmentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (weekId: string) => {
      const { error } = await supabase
        .from("speaker_assignments")
        .delete()
        .eq("week_id", weekId)
        .eq("congregation_id", "a42cc43a-562f-4ed4-ac74-73dfdb42aaa5");

      if (error) {
        throw new Error(error.message);
      }
    },
    onSuccess: (_data, variables, _context) => {
      queryClient.invalidateQueries({
        queryKey: ["schedule"],
      });
    },
  });
};
