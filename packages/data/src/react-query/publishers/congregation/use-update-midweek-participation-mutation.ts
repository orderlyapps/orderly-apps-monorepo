import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../../../supabase/client.js";
import { useStore } from "../../../zustand/stores/use-store.js";
import { MidweekAssignmentID } from "../../../supabase/supabase-types.js";

export const useUpdateMidweekParticipationMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      p_assignments,
      p_participant_id,
    }: {
      p_assignments: MidweekAssignmentID[];
      p_participant_id: string;
    }) => {
      let { data, error } = await supabase.rpc("update_midweek_participants", {
        p_assignments,
        p_participant_id,
      });

      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
    onSuccess: (_data, _variables, _context) => {
      queryClient.invalidateQueries({
        queryKey: ["publishers"],
      });
    },
  });
};
