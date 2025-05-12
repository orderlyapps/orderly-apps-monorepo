import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../../../supabase/client.js";

export const useInsertVisitingSpeakerMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      first_name,
      last_name,
      congregation_id,
    }: {
      first_name: string;
      last_name: string;
      congregation_id: string;
    }) => {
      const { data, error } = await supabase
        .from("publishers")
        .insert({
          congregation_id,
          first_name,
          last_name,
        })
        .select();

      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
    onSuccess: (_data, _variables, _context) => {
      queryClient.invalidateQueries({
        queryKey: ["visiting-speakers"],
      });
    },
  });
};
