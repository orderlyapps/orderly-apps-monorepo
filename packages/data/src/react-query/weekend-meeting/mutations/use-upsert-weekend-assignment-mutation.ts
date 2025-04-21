import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../../../supabase/client.js";
import { useStore } from "../../../zustand/stores/use-store.js";

export const useUpsertWeekendAssignmentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (week_id: string) => {
      const { assignment, participant_id } = useStore.getState().weekendMeeting;
      const congregation_id = useStore.getState().congregation.id;

      const { data, error } = await supabase
        .from("weekend_assignments")
        .upsert({
          congregation_id,
          week_id,
          assignment,
          participant_id,
        } as any)
        .select();

      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
    onSuccess: (_data, variables, _context) => {
      queryClient.invalidateQueries({
        queryKey: ["weekend-meeting", variables],
      });
    },
  });
};
