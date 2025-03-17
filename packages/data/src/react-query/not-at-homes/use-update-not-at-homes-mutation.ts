import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TablesUpdate } from "../../supabase/supabase-types.js";
import { supabase } from "../../supabase/client.js";

export const useUpdateNotAtHomesMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (
      newData: TablesUpdate<"not_at_homes"> & { id: string }
    ) => {
      const { data, error } = await supabase
        .from("not_at_homes")
        .update(newData)
        .eq("id", newData.id)
        .select();

      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
    onSuccess: (_data, _variables, _context) => {
      queryClient.invalidateQueries({
        queryKey: ["not_at_homes"],
      });
    },
  });
};
