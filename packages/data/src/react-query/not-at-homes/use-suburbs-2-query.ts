import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../supabase/client.js";

export const useSuburbs_2Query = () =>
  useQuery({
    queryKey: ["suburbs_2"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("suburbs_2")
        .select("*")
        .order("name", { ascending: true });

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
  });
