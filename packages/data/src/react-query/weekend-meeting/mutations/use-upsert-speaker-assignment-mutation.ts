import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../../../supabase/client.js";
import { TablesInsert } from "../../../supabase/supabase-types.js";

export const useUpsertSpeakerAssignmentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (assignmentData: TablesInsert<"speaker_assignments">) => {
      console.log("🚀 ~ mutationFn: ~ assignmentData:", assignmentData)
      const { data, error } = await supabase
        .from("speaker_assignments")
        .upsert(assignmentData)
        .select();

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    onSuccess: (_data, variables, _context) => {
      queryClient.invalidateQueries({
        queryKey: ["public-talks"],
      });
      queryClient.invalidateQueries({
        queryKey: ["weekend-meeting", variables.week_id],
      });
    },
  });
};
