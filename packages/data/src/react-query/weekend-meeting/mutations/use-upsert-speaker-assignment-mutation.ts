import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../../../supabase/client.js";
import { useStore } from "../../../zustand/stores/use-store.js";

export const useUpsertSpeakerAssignmentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (week_id: string) => {
      const { speaker_id, outline_id } = useStore.getState().weekendMeeting;
      const { id: congregation_id } = useStore.getState().congregation;

      const { data, error } = await supabase
        .from("speaker_assignments")
        .upsert({
          week_id,
          speaker_id,
          outline_id,
          congregation_id,
        })
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
        queryKey: ["weekend-meeting", variables],
      });
    },
  });
};
