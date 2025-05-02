import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../../supabase/client.js";
import { useStore } from "../../zustand/stores/use-store.js";
import { MidweekAssignments } from "../../supabase/supabase-types.js";

export const useUpsertMidweekAssignmentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      week_id,
      assignment,
      participant_id,
    }: {
      week_id: string;
      assignment: MidweekAssignments;
      participant_id: string;
    }) => {
      const congregation_id = useStore.getState().congregation.id;

      const { data, error } = await supabase
        .from("midweek_assignments")
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
        queryKey: ["midweek-meeting", variables],
      });
    },
  });
};
