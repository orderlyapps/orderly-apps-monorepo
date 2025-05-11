import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../../supabase/client.js";
import { MidweekAssignments } from "../../supabase/supabase-types.js";

export const useInsertParticipantMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      assignment,
      participant_id,
    }: {
      assignment: MidweekAssignments;
      participant_id: string;
    }) => {
      const { data, error } = await supabase
        .from("midweek_participants")
        .insert({
          assignment,
          participant_id,
        })
        .select();

      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
    onSuccess: (_data, _variables, _context) => {
      queryClient.invalidateQueries({
        queryKey: ["midweek_participants"],
      });
    },
  });
};
