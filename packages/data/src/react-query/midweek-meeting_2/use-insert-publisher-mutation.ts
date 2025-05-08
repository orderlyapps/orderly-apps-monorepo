import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../../supabase/client.js";
import { useStore } from "../../zustand/stores/use-store.js";

export const useInsertPublisherMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      first_name,
      last_name,
    }: {
      first_name: string;
      last_name: string;
    }) => {
      const congregation_id = useStore.getState().congregation.id;

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
        queryKey: ["midweek_participants"],
      });
    },
  });
};
