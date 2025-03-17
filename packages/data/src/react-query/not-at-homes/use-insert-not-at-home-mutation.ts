import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../../supabase/client.js";
import { TablesInsert } from "../../supabase/supabase-types.js";

export const useInsertNotAtHomeMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newData: TablesInsert<"not_at_homes">) => {
      const { data, error } = await supabase

        .from("not_at_homes")
        .insert({
          ...newData,
          location:
            `POINT(${newData.location[0]} ${newData.location[1]})` as unknown as TablesInsert<"not_at_homes">["location"],
        })
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
