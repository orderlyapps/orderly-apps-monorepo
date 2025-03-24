import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../../../supabase/client.js";

export const useDeleteSpeakerAssignmentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      week_id,
      congregation_id,
    }: {
      week_id: string;
      congregation_id: string;
    }) => {
      const { error } = await supabase
        .from("speaker_assignments")
        .delete()
        .eq("week_id", week_id)
        .eq("congregation_id", congregation_id);

      if (error) {
        throw new Error(error.message);
      }
    },
    onSuccess: (_data, variables, _context) => {
      queryClient.invalidateQueries({
        queryKey: ["public-talks"],
      });
    },
  });
};
