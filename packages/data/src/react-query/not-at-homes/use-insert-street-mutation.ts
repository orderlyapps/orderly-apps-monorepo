import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Database } from "../../supabase/supabase-types.js";
import { supabase } from "../../supabase/client.js";

export const useInsertStreetMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (
      newData: Database["public"]["Functions"]["insert_street_and_return"]["Args"]
    ) => {
      const { data, error } = await supabase
        .rpc("insert_street_and_return", newData)
        .single();

      if (error) {

        console.log("🚀  file: use-insert-street-mutation.ts:18  error:", error)

        throw new Error(error.message);
      }
      return data;
    },
    onSuccess: (_data, _variables, _context) => {
      queryClient.invalidateQueries({
        queryKey: ["streets"],
      });
    },
  });
};
