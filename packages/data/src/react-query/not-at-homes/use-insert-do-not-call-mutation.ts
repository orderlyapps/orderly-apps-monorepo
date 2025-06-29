import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../../supabase/client.js";
import { TablesInsert } from "../../supabase/supabase-types.js";

export const useInsertDoNotCallMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newData: TablesInsert<"do_not_call">) => {
      const { data, error } = await supabase

        .from("do_not_call")
        .insert({
          ...newData,
          location:
            `POINT(${newData.location[0]} ${newData.location[1]})` as unknown as TablesInsert<"do_not_call">["location"],
        })
        .select();

      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
    onSuccess: (_data, _variables, _context) => {
      queryClient.invalidateQueries({
        queryKey: ["do_not_call"],
      });
    },
  });
};
