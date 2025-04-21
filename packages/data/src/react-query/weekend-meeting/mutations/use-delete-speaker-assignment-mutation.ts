import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../../../supabase/client.js";
import { useStore } from "../../../zustand/stores/use-store.js";

export const useDeleteSpeakerAssignmentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (week_id: string) => {
      const { error } = await supabase
        .from("speaker_assignments")
        .delete()
        .eq("week_id", week_id)
        .eq("congregation_id", useStore.getState().congregation.id);

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
