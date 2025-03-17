import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../../supabase/client.js";

export const useDeleteNotAtHomeMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const { data, error } = await supabase
        .from("not_at_homes")
        .delete()
        .eq("id", id)
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
