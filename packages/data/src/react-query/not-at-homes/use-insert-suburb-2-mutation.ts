import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TablesInsert } from "../../supabase/supabase-types.js";
import { supabase } from "../../supabase/client.js";

export const useInsertSuburb_2Mutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newData: TablesInsert<"suburbs_2">) => {
      const { data, error } = await supabase
        .from("suburbs_2")
        .insert({
          ...newData,
          congregation_id: "a42cc43a-562f-4ed4-ac74-73dfdb42aaa5",
        })
        .select()
        .single();

      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
    onSuccess: (_data, _variables, _context) => {
      queryClient.invalidateQueries({
        queryKey: ["suburbs_2"],
      });
    },
  });
};
